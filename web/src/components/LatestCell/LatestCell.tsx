import type {
  FindLatestQuery,
  FindLatestQueryVariables,
  Link,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY = gql`
  query FindLatestQuery {
    linksByRecent {
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
      currentUserFavorite
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLatestQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  linksByRecent,
}: CellSuccessProps<FindLatestQuery, FindLatestQueryVariables>) => {
  return (
    <>
      {linksByRecent.map((item: Link) => {
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
            favorited={item.currentUserFavorite}
          />
        )
      })}
    </>
  )
}
