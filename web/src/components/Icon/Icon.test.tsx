import { render, screen } from '@redwoodjs/testing/web'

import Icon from './Icon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Icon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Icon id="arrow" />)
    }).not.toThrow()
  })

  it('can be a specific size', () => {
    render(<Icon id="arrow" size={64} />)
    expect(screen.getByTestId('icon')).toHaveAttribute('width', '64')
  })

  it('displays an arrow icon', () => {
    expect(render(<Icon id="arrow" />)).toMatchSnapshot()
  })
})
