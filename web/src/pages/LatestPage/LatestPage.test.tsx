import { render } from '@redwoodjs/testing/web'

import LatestPage from './LatestPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LatestPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LatestPage />)
    }).not.toThrow()
  })
})
