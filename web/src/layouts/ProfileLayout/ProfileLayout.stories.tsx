import type { Meta, StoryObj } from '@storybook/react'

import ProfileLayout from './ProfileLayout'

const meta: Meta<typeof ProfileLayout> = {
  component: ProfileLayout,
}

export default meta

type Story = StoryObj<typeof ProfileLayout>

export const Primary: Story = {}
