import type { FindLinkQuery, FindLinkQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Comment from 'src/components/Comment/Comment'
import CommentForm from 'src/components/CommentForm/CommentForm'
import SharedLink from 'src/components/SharedLink/SharedLink'

export const QUERY = gql`
  query FindLinkQuery($id: String!) {
    link(id: $id) {
      currentUserFavorite
      updatedAt
      createdAt
      id
      link
      submittedById
      title
      countVotes
      currentUserVote
      submittedBy {
        id
        firstName
        lastName
        nickname
      }
      comments {
        author {
          id
          lastName
          firstName
          nickname
        }
        id
        createdAt
        updatedAt
        body
        childComments {
          author {
            id
            lastName
            firstName
            nickname
          }
          id
          createdAt
          updatedAt
          body
        }
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
  const { isAuthenticated } = useAuth()
  return (
    <div>
      <div className={`${!isAuthenticated && 'border-b-2 border-b-icterine'}`}>
        <SharedLink
          id={link.id}
          numberOfComments={3}
          countVotes={link.countVotes}
          submittedBy={{
            firstName: link.submittedBy.firstName,
            lastName: link.submittedBy.lastName,
            nickname: link.submittedBy.nickname,
          }}
          title={link.title}
          url={link.link}
          lastUpdated={link.updatedAt ? link.updatedAt : link.createdAt}
          currentUserVote={link.currentUserVote}
          favorited={link.currentUserFavorite}
        />
      </div>
      <div className="page-grid">
        <div className="limit-page-width">
          <div
            className={`${isAuthenticated ? 'pb-14' : 'pb-6'} pl-leftGutter`}
          >
            {/* featured comment form */}
            {isAuthenticated && (
              <CommentForm
                size="large"
                isCollapsible={false}
                linkId={link.id}
              />
            )}
          </div>
          {link.comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                commentedBy={{
                  firstName: comment.author.firstName,
                  lastName: comment.author.lastName,
                  nickname: comment.author.nickname,
                }}
                lastUpdated={
                  comment.updatedAt ? comment.updatedAt : comment.createdAt
                }
                body={comment.body}
                id={comment.id}
                linkId={link.id}
              >
                <div>
                  {comment.childComments &&
                    comment.childComments.map((child) => (
                      <Comment
                        isChildComment={true}
                        key={child.id}
                        commentedBy={{
                          firstName: child.author.firstName,
                          lastName: child.author.lastName,
                          nickname: child.author.nickname,
                        }}
                        lastUpdated={
                          child.updatedAt ? child.updatedAt : child.createdAt
                        }
                        body={child.body}
                      />
                    ))}
                </div>
              </Comment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
