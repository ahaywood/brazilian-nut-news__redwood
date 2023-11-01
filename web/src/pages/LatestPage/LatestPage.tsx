import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LatestPage = () => {
  return (
    <>
      <MetaTags title="Latest" description="Latest page" />

      <h1>LatestPage</h1>
      <p>
        Find me in <code>./web/src/pages/LatestPage/LatestPage.tsx</code>
      </p>
      <p>
        My default route is named <code>latest</code>, link to me with `
        <Link to={routes.latest()}>Latest</Link>`
      </p>
    </>
  )
}

export default LatestPage
