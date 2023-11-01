import { render } from '@redwoodjs/testing/web'

import SubmitLinkPage from './SubmitLinkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SubmitLinkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitLinkPage />)
    }).not.toThrow()
  })
})
