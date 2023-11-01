import type { Meta, StoryObj } from '@storybook/react'

import CommentsPage from './CommentsPage'

const meta: Meta<typeof CommentsPage> = {
  component: CommentsPage,
}

export default meta

type Story = StoryObj<typeof CommentsPage>

export const Primary: Story = {}
