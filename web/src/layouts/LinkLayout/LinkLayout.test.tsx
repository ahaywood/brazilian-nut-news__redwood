import { render } from '@redwoodjs/testing/web'

import LinkLayout from './LinkLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LinkLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LinkLayout />)
    }).not.toThrow()
  })
})
