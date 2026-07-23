import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: { control: 'select', options: ['text', 'circular', 'rectangular', 'rounded'] },
    animation: { control: 'select', options: ['pulse', 'wave', 'none'] },
    width: { control: 'text' },
    height: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {},
}

export const Text: Story = {
  args: {
    variant: 'text',
    width: 240,
  },
}

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 48,
    height: 48,
  },
}

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 240,
    height: 160,
  },
}

export const Rounded: Story = {
  args: {
    variant: 'rounded',
    width: 240,
    height: 160,
  },
}

export const WaveAnimation: Story = {
  args: {
    animation: 'wave',
    width: 240,
  },
}

export const NoAnimation: Story = {
  args: {
    animation: 'none',
    width: 240,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: 360 }}>
      <Skeleton variant="text" />
      <Skeleton variant="text" width={200} />
      <Skeleton variant="text" width={160} />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Skeleton variant="circular" width={48} height={48} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height={160} />
      <Skeleton variant="rounded" width="100%" height={120} />
      <div style={{ display: 'flex', gap: '16px' }}>
        <Skeleton variant="circular" width={32} height={32} animation="wave" />
        <Skeleton variant="circular" width={32} height={32} animation="wave" />
        <Skeleton variant="circular" width={32} height={32} animation="wave" />
      </div>
    </div>
  ),
}
