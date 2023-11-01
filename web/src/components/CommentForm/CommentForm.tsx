import { Form, TextAreaField } from '@redwoodjs/forms'

interface CommentFormProps {
  close?: () => void
  isCollapsible?: boolean
  size?: 'small' | 'large'
}

const CommentForm = ({
  close = () => {},
  isCollapsible = true,
  size = 'small',
}: CommentFormProps) => {
  return (
    <div className="pb-14 pt-11">
      <Form>
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
      </Form>
    </div>
  )
}

export default CommentForm
