import type {
  FindEditProfileFormQuery,
  FindEditProfileFormQueryVariables,
} from 'types/graphql'

import { Form, Label, Submit, TextField, useForm } from '@redwoodjs/forms'
import {
  type CellSuccessProps,
  type CellFailureProps,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import { useAuth } from 'src/auth'

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfileMutation(
    $userId: Int!
    $email: String!
    $facebook: String
    $firstName: String!
    $github: String
    $lastName: String!
    $linkedin: String
    $nickname: String!
    $twitter: String
    $youtube: String
  ) {
    updateUser(
      id: $userId
      input: {
        email: $email
        facebook: $facebook
        firstName: $firstName
        github: $github
        lastName: $lastName
        linkedin: $linkedin
        nickname: $nickname
        twitter: $twitter
        youtube: $youtube
      }
    ) {
      id
    }
  }
`

export const QUERY = gql`
  query FindEditProfileFormQuery($nickname: String!) {
    userByNickname(nickname: $nickname) {
      email
      facebook
      firstName
      github
      id
      lastName
      linkedin
      nickname
      twitter
      youtube
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditProfileFormQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userByNickname,
}: CellSuccessProps<
  FindEditProfileFormQuery,
  FindEditProfileFormQueryVariables
>) => {
  const { currentUser } = useAuth()
  const FormMethods = useForm()

  const [updateProfile, updateProfileState] = useMutation(
    UPDATE_PROFILE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Profile updated')
      },
      onError: (error) => {
        toast.error(error.message)
        console.error(error)
      },
    }
  )

  const handleSubmit = (data) => {
    updateProfile({
      variables: {
        userId: currentUser.id,
        email: data.email,
        facebook: data.facebook,
        firstName: data.firstName,
        github: data.github,
        lastName: data.lastName,
        linkedin: data.linkedin,
        nickname: userByNickname.nickname,
        twitter: data.twitter,
        youtube: data.youtube,
      },
    })
  }

  return (
    <Form
      formMethods={FormMethods}
      className="mb-10 mt-12 bg-cinder text-white"
      onSubmit={handleSubmit}
    >
      <fieldset disabled={updateProfileState.loading}>
        <div className="field">
          <Label name="firstName" className="text-icterine">
            First Name
          </Label>
          <TextField
            name="firstName"
            defaultValue={userByNickname.firstName}
            validation={{ required: true }}
          />
        </div>

        <div className="field">
          <Label name="lastName" className="text-icterine">
            Last Name
          </Label>
          <TextField
            name="lastName"
            defaultValue={userByNickname.lastName}
            validation={{ required: true }}
          />
        </div>

        <div className="field">
          <Label name="email" className="text-icterine">
            Email
          </Label>
          <TextField
            name="email"
            defaultValue={userByNickname.email}
            validation={{ required: true }}
          />
        </div>

        <div className="field">
          <Label
            name="twitter"
            className="text-icterine"
            defaultValue={userByNickname.twitter}
          >
            Twitter / X
          </Label>
          <TextField name="twitter" />
        </div>

        <div className="field">
          <Label name="github" className="text-icterine">
            GitHub
          </Label>
          <TextField name="github" defaultValue={userByNickname.github} />
        </div>

        <div className="field">
          <Label name="facebook" className="text-icterine">
            Facebook
          </Label>
          <TextField name="facebook" defaultValue={userByNickname.facebook} />
        </div>

        <div className="field">
          <Label name="youtube" className="text-icterine">
            YouTube
          </Label>
          <TextField name="youtube" defaultValue={userByNickname.youtube} />
        </div>

        <div className="field">
          <Label name="linkedin" className="text-icterine">
            LinkedIn
          </Label>
          <TextField name="linkedin" defaultValue={userByNickname.linkedin} />
        </div>

        <Submit className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue">
          {updateProfileState.loading ? 'Updating' : 'Update'}
        </Submit>
      </fieldset>
    </Form>
  )
}
