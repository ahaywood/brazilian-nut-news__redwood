import type { Meta, StoryObj } from '@storybook/react'

import FeedPage from './FeedPage'

const meta: Meta<typeof FeedPage> = {
  component: FeedPage,
}

export default meta

type Story = StoryObj<typeof FeedPage>

export const Primary: Story = {}
