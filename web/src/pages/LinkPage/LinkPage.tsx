import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LinkPage = () => {
  return (
    <>
      <MetaTags title="Link" description="Link page" />

      <h1>LinkPage</h1>
      <p>
        Find me in <code>./web/src/pages/LinkPage/LinkPage.tsx</code>
      </p>
      <p>
        My default route is named <code>link</code>, link to me with `
        <Link to={routes.link()}>Link</Link>`
      </p>
    </>
  )
}

export default LinkPage
