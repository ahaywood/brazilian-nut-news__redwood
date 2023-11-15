import { MetaTags } from '@redwoodjs/web'

import LinksCell from 'src/components/LinksCell'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />
      <LinksCell />
    </>
  )
}

export default FeedPage
