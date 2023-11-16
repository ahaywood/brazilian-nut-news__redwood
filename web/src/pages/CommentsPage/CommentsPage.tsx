import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import ProfileCommentsCell from 'src/components/ProfileCommentsCell'
import ProfileHeaderCell from 'src/components/ProfileHeaderCell'

const CommentsPage = ({ nickname }) => {
  return (
    <div className="min-w-screen bg-cinder">
      <MetaTags title="Comments" description="Comments page" />

      <ProfileHeaderCell nickname={nickname} />
      <div className="py-10">
        <ProfileCommentsCell nickname={nickname} />
      </div>
      <div className="border-t-2 border-t-icterine py-8 pl-leftGutter text-icterine">
        <Footer />
      </div>
    </div>
  )
}

export default CommentsPage
