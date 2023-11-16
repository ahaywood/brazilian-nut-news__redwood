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

import Comment from './Comment'

const meta: Meta<typeof Comment> = {
  component: Comment,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Comment>

export const Primary: Story = {
  args: {
    body: 'This is a comment',
    commentedBy: {
      firstName: 'Amy',
      lastName: 'Dutton',
      nickname: 'selfteachme',
    },
    lastUpdated: '2023-11-14T22:29:17.845Z',
    linkId: '1',
  },
}

export const NestedComment: Story = {
  render: () => (
    <Comment
      body="This is a comment"
      commentedBy={{
        firstName: 'Amy',
        lastName: 'Dutton',
        nickname: 'selfteachme',
      }}
      lastUpdated="2023-11-14T22:29:17.845Z"
      linkId="1"
    >
      <Comment
        body="This is a comment"
        commentedBy={{
          firstName: 'Amy',
          lastName: 'Dutton',
          nickname: 'selfteachme',
        }}
        lastUpdated="2021-08-01T00:00:00.000Z"
        linkId="1"
      />
    </Comment>
  ),
}
