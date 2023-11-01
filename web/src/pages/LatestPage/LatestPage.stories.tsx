import type { Meta, StoryObj } from '@storybook/react'

import LatestPage from './LatestPage'

const meta: Meta<typeof LatestPage> = {
  component: LatestPage,
}

export default meta

type Story = StoryObj<typeof LatestPage>

export const Primary: Story = {}
