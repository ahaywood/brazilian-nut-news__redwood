import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import ProfileFavoritesCell from 'src/components/ProfileFavoritesCell'
import ProfileHeaderCell from 'src/components/ProfileHeaderCell'

const FavoritesPage = ({ nickname }) => {
  return (
    <div className="min-h-screen bg-cinder">
      <MetaTags title="Favorites" description="Favorites page" />

      <ProfileHeaderCell nickname={nickname} />
      <ProfileFavoritesCell nickname={nickname} />

      <div className="border-t-2 border-t-icterine py-8 pl-leftGutter text-icterine">
        <Footer />
      </div>
    </div>
  )
}

export default FavoritesPage
