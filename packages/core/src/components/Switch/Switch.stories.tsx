import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    color: { control: 'select', options: ['primary', 'danger', 'success'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    defaultChecked: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    label: 'Enable notifications',
  },
}

export const Checked: Story = {
  args: {
    label: 'Wi-Fi',
    defaultChecked: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <Switch
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        label={`Bluetooth: ${checked ? 'On' : 'Off'}`}
      />
    )
  },
}

export const Success: Story = {
  args: {
    label: 'Auto-update',
    color: 'success',
    defaultChecked: true,
  },
}

export const Danger: Story = {
  args: {
    label: 'Delete on exit',
    color: 'danger',
  },
}

export const Small: Story = {
  args: {
    label: 'Compact mode',
    size: 'sm',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      <Switch label="Default" />
      <Switch label="Default on" defaultChecked />
      <Switch label="Success" color="success" defaultChecked />
      <Switch label="Danger" color="danger" />
      <Switch label="Small" size="sm" defaultChecked />
      <Switch label="Disabled" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
}
