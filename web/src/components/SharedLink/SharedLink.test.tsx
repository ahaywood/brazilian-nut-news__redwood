import { render } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SharedLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SharedLink />)
    }).not.toThrow()
  })
})
