import { Form, TextAreaField, useForm } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

import { QUERY as LinkQuery } from '../LinkCell/LinkCell'

const ADD_COMMENT_MUTATION = gql`
  mutation addComment(
    $body: String!
    $linkId: String!
    $authorId: Int!
    $parentCommentId: String
  ) {
    createComment(
      input: {
        body: $body
        linkId: $linkId
        authorId: $authorId
        parentCommentId: $parentCommentId
      }
    ) {
      id
    }
  }
`

interface CommentFormProps {
  parentCommentId?: string
  linkId: string
  close?: () => void
  isCollapsible?: boolean
  size?: 'small' | 'large'
}

const CommentForm = ({
  linkId,
  parentCommentId,
  close = () => {},
  isCollapsible = true,
  size = 'small',
}: CommentFormProps) => {
  const { currentUser } = useAuth()
  const formMethods = useForm()

  const [submitComment, submitCommentState] = useMutation(
    ADD_COMMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Comment submitted!')
        formMethods.reset() // reset the form
        close() // close the comment form
      },
      onError: (error) => {
        toast.error(error.message)
        console.error(error)
      },
      refetchQueries: [LinkQuery],
    }
  )

  const handleSubmit = (data) => {
    // if the comment is empty, don't submit
    if (data.body === '') {
      toast.error('Comment cannot be empty')
      return
    }
    submitComment({
      variables: {
        authorId: currentUser.id,
        linkId: linkId,
        body: data.comment,
        parentCommentId,
      },
    })
  }

  return (
    <Form onSubmit={handleSubmit} formMethods={formMethods}>
      <fieldset disabled={submitCommentState.loading}>
        <TextAreaField name="comment" className="mb-6" />
        <div className="flex items-center gap-10">
          <button className={`button light-mode ${size}`}>Add Comment</button>
          {isCollapsible && (
            <button
              onClick={close}
              className="border-b-2 border-b-transparent hover:border-b-icterine"
            >
              Cancel
            </button>
          )}
        </div>
      </fieldset>
    </Form>
  )
}

export default CommentForm
