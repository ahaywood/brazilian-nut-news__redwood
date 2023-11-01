import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import SharedLink from 'src/components/SharedLink/SharedLink'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />

      <SharedLink
        id="123"
        numberOfComments={3}
        points={10}
        submittedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          username: 'selfteachme',
        }}
        title="You will never believe this"
        url="https://google.com"
      />
      <SharedLink
        id="123"
        numberOfComments={3}
        points={10}
        submittedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          username: 'selfteachme',
        }}
        title="You will never believe this"
        url="https://google.com"
      />
      <SharedLink
        id="123"
        numberOfComments={3}
        points={10}
        submittedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          username: 'selfteachme',
        }}
        title="You will never believe this"
        url="https://google.com"
      />
    </>
  )
}

export default FeedPage
