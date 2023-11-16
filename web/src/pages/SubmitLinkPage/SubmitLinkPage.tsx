import { Form, Label, TextField, UrlField, useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

const ADD_SHARE_LINK_MUTATION = gql`
  mutation AddShareLinkMutation(
    $title: String!
    $link: String!
    $userId: Int!
  ) {
    createLink(input: { title: $title, link: $link, submittedById: $userId }) {
      id
    }
  }
`

const SubmitLinkPage = () => {
  const { currentUser } = useAuth()
  const formMethods = useForm()

  const [addLink, addLinkStatus] = useMutation(ADD_SHARE_LINK_MUTATION, {
    onCompleted: () => {
      formMethods.reset()
      toast.success('Link Submitted!')
    },
    onError: (error) => {
      console.error(error)
      toast.error(error.message)
    },
  })

  const handleSubmit = (data) => {
    addLink({
      variables: {
        title: data.title,
        link: data.link,
        userId: currentUser.id,
      },
    })
  }

  return (
    <div className="min-h-screen bg-icterine">
      <MetaTags title="SubmitLink" description="SubmitLink page" />

      <div className="page-grid">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="text-[375px] leading-[295px] text-cinder">
            SUBMIT <div className="outline">A Link</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          <div className="mt-12 bg-icterine">
            <Form formMethods={formMethods} onSubmit={handleSubmit}>
              <fieldset disabled={addLinkStatus.loading}>
                <div className="field">
                  <Label name="title">Title</Label>
                  <TextField name="title" />
                </div>
                <div className="field">
                  <Label name="link">Link</Label>
                  <UrlField name="link" />
                </div>
                <button className="w-full bg-cinder py-6 text-center text-[38px] font-bold leading-none text-icterine hover:bg-fountainBlue">
                  {addLinkStatus.loading ? 'Submitting...' : 'Submit'}
                </button>
              </fieldset>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitLinkPage
