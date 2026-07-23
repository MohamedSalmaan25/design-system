import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success'],
    },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    label: 'Checkbox',
  },
}

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
}

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
}

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
    defaultChecked: true,
  },
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      <Checkbox label="Primary" color="primary" defaultChecked />
      <Checkbox label="Danger" color="danger" defaultChecked />
      <Checkbox label="Success" color="success" defaultChecked />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', padding: '24px' }}>
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
      <Checkbox label="Default" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Danger" color="danger" defaultChecked />
      <Checkbox label="Success" color="success" defaultChecked />
    </div>
  ),
}
