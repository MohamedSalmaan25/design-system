import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { BottomNav } from './BottomNav'

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  argTypes: {
    showLabels: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof BottomNav>

export const Default: Story = {
  render: () => (
    <BottomNav>
      <BottomNav.Action icon={<span>H</span>} label="Home" />
      <BottomNav.Action icon={<span>F</span>} label="Favorites" />
      <BottomNav.Action icon={<span>N</span>} label="Notifications" />
      <BottomNav.Action icon={<span>P</span>} label="Profile" />
    </BottomNav>
  ),
}
