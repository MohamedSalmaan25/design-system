import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Fab } from './Fab'

const meta: Meta<typeof Fab> = {
  title: 'Components/Fab',
  component: Fab,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'default', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Fab>

export const Default: Story = {
  args: {
    icon: <span style={{ fontSize: '1.2em' }}>&#43;</span>,
    'aria-label': 'Add',
  },
}

export const Primary: Story = {
  args: {
    color: 'primary',
    icon: <span style={{ fontSize: '1.2em' }}>&#9998;</span>,
    'aria-label': 'Edit',
  },
}

export const DefaultColor: Story = {
  args: {
    color: 'default',
    icon: <span style={{ fontSize: '1.2em' }}>&#9776;</span>,
    'aria-label': 'Menu',
  },
}

export const Danger: Story = {
  args: {
    color: 'danger',
    icon: <span style={{ fontSize: '1.2em' }}>&#10005;</span>,
    'aria-label': 'Delete',
  },
}

export const Extended: Story = {
  args: {
    icon: <span style={{ fontSize: '1.2em' }}>&#43;</span>,
    children: 'Create',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Fab size="sm" icon={<span>&#43;</span>} aria-label="Small" />
      <Fab size="md" icon={<span>&#43;</span>} aria-label="Medium" />
      <Fab size="lg" icon={<span>&#43;</span>} aria-label="Large" />
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Fab color="default" icon={<span>&#9776;</span>} aria-label="Default" />
      <Fab color="primary" icon={<span>&#43;</span>} aria-label="Primary" />
      <Fab color="danger" icon={<span>&#10005;</span>} aria-label="Danger" />
    </div>
  ),
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <Fab icon={<span>&#43;</span>} aria-label="Add" />
      <Fab color="default" icon={<span>&#9776;</span>} aria-label="Menu" />
      <Fab color="danger" icon={<span>&#10005;</span>} aria-label="Delete" />
      <Fab size="sm" icon={<span>&#43;</span>} aria-label="Small" />
      <Fab size="lg" icon={<span>&#43;</span>} aria-label="Large" />
      <Fab icon={<span>&#43;</span>}>Extended</Fab>
    </div>
  ),
}
