import { routes } from '@redwoodjs/router'
import { render, screen } from '@redwoodjs/testing/web'

import Nav from './Nav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Nav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Nav />)
    }).not.toThrow()
  })

  it('has a link to the home page', () => {
    render(<Nav />)
    expect(screen.getByText('Home')).toHaveAttribute('href', routes.feed())
  })

  describe('when a user is not logged in', () => {
    it('shows a link to sign up', () => {
      render(<Nav />)
      expect(screen.getByText('Sign Up')).toBeInTheDocument()
    })

    it('shows a link to login', () => {
      render(<Nav />)
      expect(screen.getByText('Login')).toBeInTheDocument()
    })
  })

  describe('when a user is logged in', () => {
    beforeEach(() => {
      mockCurrentUser({ id: 1, nickname: 'amy' })
    })

    it('shows a Submit a Link button', async () => {
      render(<Nav />)
      expect(await screen.findByText('Submit a Link')).toBeInTheDocument()
    })

    it('shows a Logout button', async () => {
      // mockCurrentUser({ id: 1, nickname: 'amy' })
      render(<Nav />)
      expect(await screen.findByText('Logout')).toBeInTheDocument()
    })

    it('shows a My Profile button', async () => {
      // mockCurrentUser({ id: 1, nickname: 'amy' })
      render(<Nav />)
      expect(await screen.findByText('My Profile')).toBeInTheDocument()
    })
  })
})
