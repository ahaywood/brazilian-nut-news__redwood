import { MetaTags } from '@redwoodjs/web'

import Comment from 'src/components/Comment/Comment'
import CommentForm from 'src/components/CommentForm/CommentForm'
import SharedLink from 'src/components/SharedLink/SharedLink'

const LinkPage = () => {
  return (
    <>
      <MetaTags title="Link" description="Link page" />

      <SharedLink
        id="123"
        numberOfComments={3}
        points={10}
        submittedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          username: 'selfteachme',
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
              username: 'selfteachme',
            }}
          >
            <Comment
              commentedBy={{
                firstName: 'Amy',
                lastName: 'Dutton',
                username: 'selfteachme',
              }}
            />
          </Comment>
        </div>
      </div>
    </>
  )
}

export default LinkPage
