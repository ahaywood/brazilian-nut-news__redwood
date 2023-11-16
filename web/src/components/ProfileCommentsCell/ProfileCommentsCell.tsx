import type { ProfileCommentsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Comment from '../Comment/Comment'

export const QUERY = gql`
  query ProfileCommentsQuery($nickname: String!) {
    userByNickname(nickname: $nickname) {
      comments {
        parentCommentId
        linkId
        link {
          title
        }
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userByNickname,
}: CellSuccessProps<ProfileCommentsQuery>) => {
  return (
    <div>
      {userByNickname.comments.map((comment) => {
        if (comment.parentCommentId) return null
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
            linkId={comment.linkId}
            link={comment.link}
            showRelatedLinkInfo={true}
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
                    linkId={comment.linkId}
                  />
                ))}
            </div>
          </Comment>
        )
      })}
    </div>
  )
}
