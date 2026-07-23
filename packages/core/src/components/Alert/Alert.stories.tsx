import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    severity: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'standard'],
    },
    onClose: { action: 'closed' },
    title: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    severity: 'info',
    children: 'This is an informational alert.',
  },
}

export const Success: Story = {
  args: {
    severity: 'success',
    children: 'Operation completed successfully.',
  },
}

export const Warning: Story = {
  args: {
    severity: 'warning',
    children: 'Please review your input before submitting.',
  },
}

export const Error: Story = {
  args: {
    severity: 'error',
    children: 'An unexpected error occurred. Please try again.',
  },
}

export const Filled: Story = {
  args: {
    severity: 'info',
    variant: 'filled',
    children: 'Filled variant with solid background.',
  },
}

export const Outlined: Story = {
  args: {
    severity: 'info',
    variant: 'outlined',
    children: 'Outlined variant with border only.',
  },
}

export const Standard: Story = {
  args: {
    severity: 'info',
    variant: 'standard',
    children: 'Standard variant with subtle background.',
  },
}

export const WithTitle: Story = {
  args: {
    severity: 'warning',
    title: 'Attention Required',
    children: 'Your session will expire in 5 minutes.',
  },
}

export const Dismissible: Story = {
  args: {
    severity: 'error',
    onClose: () => alert('Closed'),
    children: 'Click the close button to dismiss this alert.',
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px' }}>
      <Alert severity="success" title="Success">Data saved successfully.</Alert>
      <Alert severity="info" title="Info">Your profile has been updated.</Alert>
      <Alert severity="warning" title="Warning">Disk space is running low.</Alert>
      <Alert severity="error" title="Error">Failed to connect to server.</Alert>
      <Alert severity="info" variant="filled">Filled info alert.</Alert>
      <Alert severity="info" variant="outlined">Outlined info alert.</Alert>
      <Alert severity="info" variant="standard">Standard info alert.</Alert>
      <Alert severity="success" variant="filled">Filled success alert.</Alert>
      <Alert severity="warning" variant="outlined">Outlined warning alert.</Alert>
      <Alert severity="error" variant="filled" onClose={() => {}}>Dismissible error alert.</Alert>
    </div>
  ),
}
