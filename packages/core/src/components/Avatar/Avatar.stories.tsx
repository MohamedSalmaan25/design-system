import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=avatar1',
    alt: 'John Doe',
  },
}

export const Fallback: Story = {
  args: {
    alt: 'Jane Smith',
  },
}

export const CustomFallback: Story = {
  args: {
    fallback: 'JD',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    alt: 'Alice Brown',
  },
}

export const Medium: Story = {
  args: {
    size: 'md',
    alt: 'Bob Johnson',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    alt: 'Charlie Wilson',
  },
}

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    alt: 'Diana Prince',
  },
}

export const BrokenImage: Story = {
  args: {
    src: 'https://invalid.url/nonexistent.jpg',
    alt: 'User Name',
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', padding: '24px' }}>
      <Avatar src="https://i.pravatar.cc/150?u=user1" alt="User One" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?u=user2" alt="User Two" size="md" />
      <Avatar src="https://i.pravatar.cc/150?u=user3" alt="User Three" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?u=user4" alt="User Four" size="xl" />
      <Avatar alt="Initial Fallback" size="md" />
      <Avatar fallback="AB" size="md" />
      <Avatar src="https://invalid.url/broken.jpg" alt="Broken Image" size="md" />
    </div>
  ),
}
