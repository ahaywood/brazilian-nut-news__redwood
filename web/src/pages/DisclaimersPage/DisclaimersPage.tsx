import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DisclaimersPage = () => {
  return (
    <>
      <MetaTags title="Disclaimers" description="Disclaimers page" />

      <h1>DisclaimersPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DisclaimersPage/DisclaimersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>disclaimers</code>, link to me with `
        <Link to={routes.disclaimers()}>Disclaimers</Link>`
      </p>
    </>
  )
}

export default DisclaimersPage
