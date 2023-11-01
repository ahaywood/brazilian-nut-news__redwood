import { MetaTags } from '@redwoodjs/web'

const FavoritesPage = ({ username }) => {
  return (
    <>
      <MetaTags title="Favorites" description="Favorites page" />

      <h1>FavoritesPage for {username}</h1>
    </>
  )
}

export default FavoritesPage
