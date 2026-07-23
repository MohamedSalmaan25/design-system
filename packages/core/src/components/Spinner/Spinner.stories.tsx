import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'danger', 'success', 'warning'] },
    value: { control: 'number', min: 0, max: 100 },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Indeterminate: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const Determinate: Story = {
  args: {
    value: 65,
    size: 'md',
    color: 'primary',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '24px' }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '24px' }}>
      <Spinner color="primary" />
      <Spinner color="danger" />
      <Spinner color="success" />
      <Spinner color="warning" />
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <strong>Indeterminate</strong>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <strong>Determinate</strong>
        <Spinner value={25} />
        <Spinner value={50} />
        <Spinner value={75} />
        <Spinner value={100} />
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <strong>Colors</strong>
        <Spinner color="primary" />
        <Spinner color="danger" />
        <Spinner color="success" />
        <Spinner color="warning" />
      </div>
    </div>
  ),
}
