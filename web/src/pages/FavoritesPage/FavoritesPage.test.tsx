import { render } from '@redwoodjs/testing/web'

import FavoritesPage from './FavoritesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FavoritesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FavoritesPage />)
    }).not.toThrow()
  })
})
