import type { FindLinkQuery, FindLinkQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comment from 'src/components/Comment/Comment'
import CommentForm from 'src/components/CommentForm/CommentForm'
import SharedLink from 'src/components/SharedLink/SharedLink'

export const QUERY = gql`
  query FindLinkQuery($id: String!) {
    link(id: $id) {
      createdAt
      id
      link
      submittedById
      title
      submittedBy {
        id
        firstName
        lastName
        nickname
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindLinkQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  link,
}: CellSuccessProps<FindLinkQuery, FindLinkQueryVariables>) => {
  return (
    <div>
      <SharedLink
        id="123"
        numberOfComments={3}
        points={10}
        submittedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          nickname: 'selfteachme',
        }}
        title="You will never believe this"
        url="https://google.com"
      />
      <div className="page-grid">
        <div className="limit-page-width">
          <div className="pl-leftGutter">
            {/* featured comment form */}
            <CommentForm size="large" isCollapsible={false} />
          </div>
          <Comment
            commentedBy={{
              firstName: 'Amy',
              lastName: 'Dutton',
              nickname: 'selfteachme',
            }}
          >
            <Comment
              commentedBy={{
                firstName: 'Amy',
                lastName: 'Dutton',
                nickname: 'selfteachme',
              }}
            />
          </Comment>
        </div>
      </div>
    </div>
  )
}
