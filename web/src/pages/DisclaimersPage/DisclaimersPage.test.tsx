import { render } from '@redwoodjs/testing/web'

import DisclaimersPage from './DisclaimersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DisclaimersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisclaimersPage />)
    }).not.toThrow()
  })
})
