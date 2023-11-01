import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TermsPage = () => {
  return (
    <>
      <MetaTags title="Terms" description="Terms page" />

      <h1>TermsPage</h1>
      <p>
        Find me in <code>./web/src/pages/TermsPage/TermsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>terms</code>, link to me with `
        <Link to={routes.terms()}>Terms</Link>`
      </p>
    </>
  )
}

export default TermsPage
