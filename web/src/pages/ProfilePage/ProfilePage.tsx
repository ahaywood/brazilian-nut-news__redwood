import { MetaTags } from '@redwoodjs/web'

const ProfilePage = ({ username }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <h1>ProfilePage: {username}</h1>
    </>
  )
}

export default ProfilePage
