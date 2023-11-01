import { render } from '@redwoodjs/testing/web'

import CommentsPage from './CommentsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CommentsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentsPage />)
    }).not.toThrow()
  })
})
