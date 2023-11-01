import { render } from '@redwoodjs/testing/web'

import Nav from './Nav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />)
    }).not.toThrow()
  })
})
