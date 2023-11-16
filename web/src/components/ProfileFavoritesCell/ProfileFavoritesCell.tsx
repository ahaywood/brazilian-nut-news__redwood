import type { UserFavoritesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY = gql`
  query UserFavoritesQuery($nickname: String!) {
    userByNickname(nickname: $nickname) {
      favorites {
        link {
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
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userByNickname,
}: CellSuccessProps<UserFavoritesQuery>) => {
  console.log(userByNickname)
  return (
    <ul>
      {userByNickname.favorites.map((item) => {
        return (
          <SharedLink
            key={item.link.id}
            id={item.link.id}
            numberOfComments={item.link.countComments}
            countVotes={item.link.countVotes}
            submittedBy={{
              firstName: item.link.submittedBy.firstName,
              lastName: item.link.submittedBy.lastName,
              nickname: item.link.submittedBy.nickname,
            }}
            title={item.link.title}
            url={item.link.link}
            currentUserVote={item.link.currentUserVote}
            lastUpdated={
              item.link.updatedAt ? item.link.updatedAt : item.link.createdAt
            }
            favorited={item.link.currentUserFavorite}
          />
        )
      })}
    </ul>
  )
}
