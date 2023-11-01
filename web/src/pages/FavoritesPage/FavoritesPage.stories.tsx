import type { Meta, StoryObj } from '@storybook/react'

import FavoritesPage from './FavoritesPage'

const meta: Meta<typeof FavoritesPage> = {
  component: FavoritesPage,
}

export default meta

type Story = StoryObj<typeof FavoritesPage>

export const Primary: Story = {}
