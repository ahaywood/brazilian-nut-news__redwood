import { render } from '@redwoodjs/testing/web'

import LinkPage from './LinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkPage />)
    }).not.toThrow()
  })
})
