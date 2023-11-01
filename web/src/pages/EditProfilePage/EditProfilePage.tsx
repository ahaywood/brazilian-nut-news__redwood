import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EditProfilePage = () => {
  return (
    <>
      <MetaTags title="EditProfile" description="EditProfile page" />

      <h1>EditProfilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/EditProfilePage/EditProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>editProfile</code>, link to me with `
        <Link to={routes.editProfile()}>EditProfile</Link>`
      </p>
    </>
  )
}

export default EditProfilePage
