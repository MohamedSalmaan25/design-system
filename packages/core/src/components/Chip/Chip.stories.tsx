import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'danger', 'success', 'warning'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    children: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    children: 'Chip',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined',
  },
}

export const WithDelete: Story = {
  args: {
    children: 'Dismissable',
    onDelete: () => alert('deleted'),
  },
}

export const WithIcon: Story = {
  args: {
    children: 'Settings',
    icon: <span style={{ fontSize: '1.2em' }}>&#9881;</span>,
  },
}

export const WithAvatar: Story = {
  args: {
    children: 'John Doe',
    avatar: <span style={{ fontWeight: 'bold' }}>J</span>,
  },
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="danger">Danger</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '24px' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </div>
  ),
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <Chip variant="filled">Filled</Chip>
      <Chip variant="outlined">Outlined</Chip>
      <Chip onDelete={() => {}}>Dismissable</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="danger">Danger</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip size="sm">Small</Chip>
      <Chip icon={<span>&#9733;</span>}>Starred</Chip>
    </div>
  ),
}
