import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { LinearProgress } from './LinearProgress'

const meta: Meta<typeof LinearProgress> = {
  title: 'Components/Progress',
  component: LinearProgress,
  argTypes: {
    value: { control: 'number', min: 0, max: 100 },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'danger', 'success', 'warning'] },
  },
}

export default meta
type Story = StoryObj<typeof LinearProgress>

export const Indeterminate: Story = {
  args: {},
}

export const Determinate: Story = {
  args: {
    value: 60,
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <strong>Indeterminate</strong>
      <LinearProgress color="primary" />
      <strong>Determinate</strong>
      <LinearProgress value={45} color="primary" />
      <LinearProgress value={80} color="success" />
      <LinearProgress value={30} color="danger" />
      <LinearProgress value={60} color="warning" />
      <strong>Sizes</strong>
      <LinearProgress size="sm" />
      <LinearProgress size="md" />
      <LinearProgress size="lg" />
    </div>
  ),
}
