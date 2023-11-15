import { MetaTags } from '@redwoodjs/web'

const ProfilePage = ({ nickname }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>ProfilePage: {nickname}</h1>
    </>
  )
}

export default ProfilePage
