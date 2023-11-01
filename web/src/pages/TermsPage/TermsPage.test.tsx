import { render } from '@redwoodjs/testing/web'

import TermsPage from './TermsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TermsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TermsPage />)
    }).not.toThrow()
  })
})
