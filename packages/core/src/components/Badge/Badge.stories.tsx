import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    badgeContent: { control: 'text' },
    variant: { control: 'select', options: ['standard', 'dot'] },
    color: { control: 'select', options: ['default', 'primary', 'danger', 'success', 'warning'] },
    overlap: { control: 'select', options: ['rectangular', 'circular'] },
    invisible: { control: 'boolean' },
    max: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Default: Story = {
  args: {
    badgeContent: 4,
    children: <span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Inbox</span>,
  },
}

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: <span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Notifications</span>,
  },
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      {(['default', 'primary', 'danger', 'success', 'warning'] as const).map((color) => (
        <Badge key={color} badgeContent={3} color={color}>
          <span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>{color}</span>
        </Badge>
      ))}
    </div>
  ),
}

export const MaxOverflow: Story = {
  args: {
    badgeContent: 150,
    max: 99,
    children: <span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Messages</span>,
  },
}

export const CircularOverlap: Story = {
  args: {
    badgeContent: 7,
    overlap: 'circular',
    children: (
      <div
        style={{
      width: 48,
      height: 48,
      borderRadius: '50%',
      background: '#e0e0e0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    }}
  >
    A
  </div>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Badge badgeContent={3} color="primary"><span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Primary</span></Badge>
        <Badge badgeContent={99} color="danger"><span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>99+</span></Badge>
        <Badge variant="dot" color="danger"><span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Dot</span></Badge>
        <Badge badgeContent="!" color="warning"><span style={{ padding: '8px 16px', border: '1px solid #ccc', borderRadius: 4 }}>Custom</span></Badge>
      </div>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Badge badgeContent={5} overlap="circular">
          <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</div>
        </Badge>
        <Badge badgeContent={12} overlap="rectangular">
          <div style={{ width: 48, height: 48, background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}>B</div>
        </Badge>
      </div>
    </div>
  ),
}
