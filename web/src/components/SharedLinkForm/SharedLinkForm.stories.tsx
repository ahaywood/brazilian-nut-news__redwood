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

import SharedLinkForm from './SharedLinkForm'

const meta: Meta<typeof SharedLinkForm> = {
  component: SharedLinkForm,
}

export default meta

type Story = StoryObj<typeof SharedLinkForm>

export const Primary: Story = {}
