import type { Link, LinksQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY = gql`
  query LinksQuery($currentUserId: currentUser.id) {
    linksByVote {
      id
      title
      submittedBy {
        lastName
        nickname
        firstName
      }
      link
      countVotes
      countComments
      currentUserVote
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ linksByVote }: CellSuccessProps<LinksQuery>) => {
  console.log({ linksByVote })
  return (
    <>
      {linksByVote.map((item: Link) => {
        return (
          <SharedLink
            key={item.id}
            id={item.id}
            numberOfComments={item.countComments}
            countVotes={item.countVotes}
            submittedBy={{
              firstName: item.submittedBy.firstName,
              lastName: item.submittedBy.lastName,
              nickname: item.submittedBy.nickname,
            }}
            title={item.title}
            url={item.link}
            currentUserVote={item.currentUserVote}
            lastUpdated={item.updatedAt ? item.updatedAt : item.createdAt}
          />
        )
      })}
    </>
  )
}
