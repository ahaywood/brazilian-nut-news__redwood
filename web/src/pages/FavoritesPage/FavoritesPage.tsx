import { MetaTags } from '@redwoodjs/web'

const FavoritesPage = ({ nickname }) => {
  return (
    <>
      <MetaTags title="Favorites" description="Favorites page" />

      <h1>FavoritesPage for {nickname}</h1>
    </>
  )
}

export default FavoritesPage
