import type { Meta, StoryObj } from '@storybook/react'

import EditProfilePage from './EditProfilePage'

const meta: Meta<typeof EditProfilePage> = {
  component: EditProfilePage,
}

export default meta

type Story = StoryObj<typeof EditProfilePage>

export const Primary: Story = {}
