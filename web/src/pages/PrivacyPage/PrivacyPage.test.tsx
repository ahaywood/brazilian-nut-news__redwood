import { render } from '@redwoodjs/testing/web'

import PrivacyPage from './PrivacyPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PrivacyPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrivacyPage />)
    }).not.toThrow()
  })
})
