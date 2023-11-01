// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Nav from './Nav'

const meta: Meta<typeof Nav> = {
  component: Nav,
}

export default meta

type Story = StoryObj<typeof Nav>

export const Primary: Story = {}
