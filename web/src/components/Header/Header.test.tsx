import { render } from '@redwoodjs/testing/web'

import Header from './Header'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Header', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Header />)
    }).not.toThrow()
  })
})
