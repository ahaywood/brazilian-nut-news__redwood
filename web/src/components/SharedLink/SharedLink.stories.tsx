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
    id: '1',
    numberOfComments: 13,
    submittedBy: {
      firstName: 'Amy',
      lastName: 'Dutton',
      nickname: 'selfteachme',
    },
    title: 'RedwoodJS Docs',
    url: 'https://redwoodjs.com/docs',
    countVotes: 60,
    currentUserVote: 'UP',
    lastUpdated: '2023-11-14T22:29:17.845Z',
    favorited: true,
  },
}
