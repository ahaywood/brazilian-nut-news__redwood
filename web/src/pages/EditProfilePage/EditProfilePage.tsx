import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import EditProfileFormCell from 'src/components/EditProfileFormCell'
import Footer from 'src/components/Footer/Footer'
import ProfileHeaderCell from 'src/components/ProfileHeaderCell'

interface Props {
  nickname: string
}

const EditProfilePage = ({ nickname }: Props) => {
  const { currentUser } = useAuth()
  // the user cannot edit another user's profile
  // if they try to go to the edit page for another user, redirect them to their own edit page
  if (currentUser?.nickname !== nickname) {
    return (
      <Redirect to={routes.editProfile({ nickname: currentUser.nickname })} />
    )
  }
  return (
    <div className="min-h-screen bg-cinder">
      <MetaTags title="Edit Profile" description="EditProfile page" />

      <ProfileHeaderCell nickname={nickname} />

      <div className="page-grid">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
            <div className="text-white">Edit My</div>
            <div className="outline">Profile</div>
            <div className="outline">Profile</div>
            <div className="outline">Profile</div>
            <div className="outline">Profile</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          <EditProfileFormCell nickname={nickname} />
        </div>
      </div>

      <div className="border-t-2 border-t-icterine py-8 pl-leftGutter text-icterine">
        <Footer />
      </div>
    </div>
  )
}

export default EditProfilePage
