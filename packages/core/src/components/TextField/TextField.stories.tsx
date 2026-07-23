import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    label: { control: 'text' },
    helperText: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['outlined', 'filled', 'standard'] },
    disabled: { control: 'boolean' },
    multiline: { control: 'boolean' },
    rows: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: "",
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <TextField
        label="Controlled"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    )
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Password',
    helperText: 'Must be at least 8 characters',
    type: 'password',
  },
}

export const Error: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'Please enter a valid email',
    value: 'invalid',
  },
}

export const Filled: Story = {
  args: {
    label: 'Filled variant',
    variant: 'filled',
  },
}

export const Standard: Story = {
  args: {
    label: 'Standard variant',
    variant: 'standard',
  },
}

export const Multiline: Story = {
  args: {
    label: 'Message',
    multiline: true,
    rows: 4,
  },
}

export const WithAdornments: Story = {
  args: {
    label: 'Price',
    startAdornment: <span>$</span>,
    endAdornment: <span>.00</span>,
  },
}

export const Small: Story = {
  args: {
    label: 'Small input',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    label: 'Large input',
    size: 'lg',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: 'Cannot edit',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Full width',
    fullWidth: true,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: 400 }}>
      <TextField label="Outlined" placeholder="Outlined variant" />
      <TextField label="Filled" variant="filled" placeholder="Filled variant" />
      <TextField label="Standard" variant="standard" placeholder="Standard variant" />
      <TextField label="Error state" error helperText="Something is wrong" />
      <TextField label="Small" size="sm" />
      <TextField label="Large" size="lg" />
      <TextField label="Multiline" multiline rows={3} />
      <TextField label="Disabled" disabled value="Disabled content" />
      <TextField label="With icon" startAdornment={<span style={{ fontWeight: 'bold' }}>@</span>} />
      <TextField label="Full width" fullWidth />
    </div>
  ),
}
