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

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
}

export default meta

type Story = StoryObj<typeof SharedLink>

export const Primary: Story = {
  args: {
    id: '123',
    numberOfComments: 3,
    points: 10,
    submittedBy: {
      firstName: 'Amy',
      lastName: 'Dutton',
      username: 'selfteachme',
    },
    title: 'You will never believe this',
    url: 'https://google.com',
  },
}
