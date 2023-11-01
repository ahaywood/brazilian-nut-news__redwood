import { render } from '@redwoodjs/testing/web'

import LegalLayout from './LegalLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LegalLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LegalLayout />)
    }).not.toThrow()
  })
})
