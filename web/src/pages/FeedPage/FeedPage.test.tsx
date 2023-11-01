import { render } from '@redwoodjs/testing/web'

import FeedPage from './FeedPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FeedPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeedPage />)
    }).not.toThrow()
  })
})
