import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'
import { formatRelativeTime } from 'src/helpers/dateHelpers'

import Icon from '../Icon/Icon'
import { QUERY as LatestQuery } from '../LatestCell/LatestCell'
import { QUERY as LinksQuery } from '../LinksCell/LinksCell'
import { QUERY as UserFavoritesQuery } from '../ProfileFavoritesCell/ProfileFavoritesCell'
import { QUERY as ProfileLinksSharedQuery } from '../ProfileLinksSharedCell/ProfileLinksSharedCell'

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

const FAVORITE_MUTATION = gql`
  mutation FavoriteMutation($userId: Int!, $linkId: String!) {
    createFavoriteLinkUser(input: { userId: $userId, linkId: $linkId }) {
      id
    }
  }
`

const REMOVE_FAVORITE_MUTATION = gql`
  mutation RemoveFavoriteMutation($userId: Int!, $linkId: String!) {
    deleteFavoriteLinkUserByLinkUserId(linkId: $linkId, userId: $userId) {
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
  favorited: boolean
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
  favorited = false,
}: Props) => {
  const { isAuthenticated, currentUser } = useAuth()
  const [hasVoted, setHasVoted] = useState<string>(currentUserVote)

  const [vote, voteState] = useMutation(VOTE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [
      LinksQuery,
      UserFavoritesQuery,
      ProfileLinksSharedQuery,
      LatestQuery,
    ],
  })

  const [deleteVote, deleteVoteState] = useMutation(REMOVE_VOTE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [
      LinksQuery,
      UserFavoritesQuery,
      ProfileLinksSharedQuery,
      LatestQuery,
    ],
  })

  const [favorite, favoriteState] = useMutation(FAVORITE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [
      LinksQuery,
      UserFavoritesQuery,
      ProfileLinksSharedQuery,
      LatestQuery,
    ],
  })

  const [unfavorite, unfavoriteState] = useMutation(REMOVE_FAVORITE_MUTATION, {
    onError: (error) => {
      toast.error(error.message)
      console.error(error)
    },
    refetchQueries: [
      LinksQuery,
      UserFavoritesQuery,
      ProfileLinksSharedQuery,
      LatestQuery,
    ],
  })

  const handleFavorite = () => {
    console.log('favorite')
    favorite({
      variables: {
        linkId: id,
        userId: currentUser.id,
      },
    })
  }

  const handleRemoveFavorite = () => {
    console.log('remove favorite')
    unfavorite({
      variables: {
        linkId: id,
        userId: currentUser.id,
      },
    })
  }

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
        {isAuthenticated && (
          <>
            <button
              className={`up ${currentUserVote === 'UP' ? 'filled' : ''}`}
              onClick={() => handleVote('UP')}
              disabled={voteState.loading || deleteVoteState.loading}
              data-testid="voteUpButton"
            >
              <Icon id="up" />
            </button>
            <button
              className={`down ${currentUserVote === 'DOWN' ? 'filled' : ''}`}
              onClick={() => handleVote('DOWN')}
              disabled={voteState.loading || deleteVoteState.loading}
              data-testid="voteDownButton"
            >
              <Icon id="up" className="rotate-180" />
            </button>
          </>
        )}
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
          </Link>{' '}
          •{' '}
          {favorited && isAuthenticated ? (
            <button
              className="item-center relative top-1 inline-flex gap-1 underline"
              disabled={favoriteState.loading || unfavoriteState.loading}
              onClick={handleRemoveFavorite}
            >
              <Icon id="heart--filled" size={20} /> Favorited
            </button>
          ) : (
            <button
              className="item-center relative top-1 inline-flex gap-1 underline"
              disabled={favoriteState.loading || unfavoriteState.loading}
              onClick={handleFavorite}
            >
              <Icon id="heart--empty" size={20} /> Mark as favorite
            </button>
          )}
        </div>
      </div>

      {/* arrow */}
      <a
        href={url}
        className="text-cinder dark:text-icterine"
        target="_blank"
        rel="noreferrer"
        data-testid="sharedLinkUrl"
      >
        <Icon id="arrow" className="relative top-2 w-14" />
      </a>
    </div>
  )
}

export default SharedLink
