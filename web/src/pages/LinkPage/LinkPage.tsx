import { MetaTags } from '@redwoodjs/web'

import LinkCell from 'src/components/LinkCell'

const LinkPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Link" description="Link page" />

      <LinkCell id={id} />
    </>
  )
}

export default LinkPage
