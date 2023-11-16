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

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Arrow: Story = {
  args: {
    id: 'arrow',
  },
}

export const Facebook: Story = {
  args: {
    id: 'facebook',
  },
}

export const GitHub: Story = {
  args: {
    id: 'github',
  },
}

export const hide: Story = {
  args: {
    id: 'hide',
  },
}

export const Linkedin: Story = {
  args: {
    id: 'linkedin',
  },
}

export const Show: Story = {
  args: {
    id: 'show',
  },
}

export const Twitter: Story = {
  args: {
    id: 'twitter',
  },
}

export const Up: Story = {
  args: {
    id: 'up',
  },
}

export const Youtube: Story = {
  args: {
    id: 'youtube',
  },
}
