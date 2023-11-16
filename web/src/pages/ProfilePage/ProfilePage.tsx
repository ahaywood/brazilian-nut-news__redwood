import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import ProfileHeaderCell from 'src/components/ProfileHeaderCell'
import ProfileLinksSharedCell from 'src/components/ProfileLinksSharedCell'

const ProfilePage = ({ nickname }) => {
  return (
    <>
      <MetaTags title="Profile" description="Profile page" />

      <div className="min-h-screen bg-cinder">
        <ProfileHeaderCell nickname={nickname} />

        <ProfileLinksSharedCell nickname={nickname} />

        <div className="border-t-2 border-t-icterine py-8 pl-leftGutter text-icterine">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default ProfilePage
