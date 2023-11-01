import { render } from '@redwoodjs/testing/web'

import SharedLinkForm from './SharedLinkForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharedLinkForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SharedLinkForm />)
    }).not.toThrow()
  })
})
