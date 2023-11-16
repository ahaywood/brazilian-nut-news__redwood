import { MetaTags } from '@redwoodjs/web'

import LatestCell from 'src/components/LatestCell'

const LatestPage = () => {
  return (
    <>
      <MetaTags title="Latest" description="Latest page" />
      <LatestCell />
    </>
  )
}

export default LatestPage
