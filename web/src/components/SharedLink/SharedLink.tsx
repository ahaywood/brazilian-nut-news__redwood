import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import { formatRelativeTime } from 'src/helpers/dateHelpers'

import Icon from '../Icon/Icon'
import { QUERY as LinksQuery } from '../LinksCell/LinksCell'

const VOTE_MUTATION = gql`
  mutation VoteMutation(
    $linkId: String!
    $userId: Int!
    $direction: VoteDirection!
  ) {
    upsertVoteForLink(linkId: $linkId, userId: $userId, direction: $direction) {
      id
    }
  }
`

const REMOVE_VOTE_MUTATION = gql`
  mutation RemoveVoteMutation($linkId: String!, $userId: Int!) {
    deleteVoteForLink(linkId: $linkId, userId: $userId) {
      id
    }
  }
`

interface Props {
  id: string
  numberOfComments: number
  submittedBy: {
    firstName: string
    lastName: string
    nickname: string
  }
  title: string
  url: string
  countVotes: number
  currentUserVote: string
  lastUpdated: string
}

const SharedLink = ({
  id,
  numberOfComments,
  submittedBy,
  title,
  url,
  countVotes,
  currentUserVote,
  lastUpdated,
}: Props) => {
  const { currentUser } = useAuth()
  const [hasVoted, setHasVoted] = useState<string>(currentUserVote)

  const [vote, voteState] = useMutation(VOTE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [LinksQuery],
  })

  const [deleteVote, deleteVoteState] = useMutation(REMOVE_VOTE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [LinksQuery],
  })

  const handleVote = (newDirection: 'DOWN' | 'UP') => {
    // if the user had already voted and clicks the same vote again, toggle it off
    if (hasVoted === newDirection) {
      deleteVote({
        variables: {
          linkId: id,
          userId: currentUser.id,
        },
      })
      setHasVoted('')
      return
    }

    vote({
      variables: {
        linkId: id,
        userId: currentUser.id,
        direction: newDirection,
      },
    })
    setHasVoted(newDirection)
  }

  return (
    <div className="shared-link flex w-full gap-x-5 pb-6 pl-4 pr-8 pt-8">
      {/* vote */}
      <div className="flex flex-col">
        <button
          className={`up ${currentUserVote === 'UP' ? 'filled' : ''}`}
          onClick={() => handleVote('UP')}
          disabled={voteState.loading || deleteVoteState.loading}
        >
          <Icon id="up" />
        </button>
        <button
          className={`down ${currentUserVote === 'DOWN' ? 'filled' : ''}`}
          onClick={() => handleVote('DOWN')}
          disabled={voteState.loading || deleteVoteState.loading}
        >
          <Icon id="up" className="rotate-180" />
        </button>
      </div>

      {/* content */}
      <div className="flex-1">
        <h2 className="font-condensed text-6xl uppercase leading-[0.8]">
          <Link
            to={routes.link({ id })}
            className="text-cinder dark:text-icterine"
          >
            {title}
          </Link>
        </h2>
        <div className="text-medium font-sans text-sm dark:text-icterine">
          <strong>
            {countVotes} point{countVotes > 1 && 's'}{' '}
          </strong>
          {submittedBy.firstName && submittedBy.lastName && (
            <>
              • submitted by{' '}
              <Link
                to={routes.profile({ nickname: submittedBy.nickname })}
                className="font-bold underline hover:no-underline"
              >
                {submittedBy.firstName} {submittedBy.lastName}
              </Link>{' '}
            </>
          )}
          • {formatRelativeTime(lastUpdated)} •{' '}
          <Link
            to={routes.link({ id })}
            className="font-bold underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            {numberOfComments} comment{numberOfComments > 1 && 's'}
          </Link>
        </div>
      </div>

      {/* arrow */}
      <Link to={url} className="text-cinder dark:text-icterine">
        <Icon id="arrow" className="relative top-2 w-14" />
      </Link>
    </div>
  )
}

export default SharedLink
