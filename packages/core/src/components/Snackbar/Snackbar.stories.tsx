import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Snackbar } from './Snackbar'
import { Button } from '../Button/Button'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    open: { control: 'boolean' },
    message: { control: 'text' },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
    },
    severity: {
      control: 'select',
      options: [undefined, 'success', 'info', 'warning', 'error'],
    },
    autoHideDuration: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  args: {
    open: true,
    message: 'This is a snackbar message.',
  },
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Show Snackbar</Button>
        <Snackbar
          open={open}
          message="Snackbar with action"
          action={<Button size="sm" color="primary" onClick={() => setOpen(false)}>Undo</Button>}
          onClose={() => setOpen(false)}
        />
      </div>
    )
  },
}

export const WithAction: Story = {
  args: {
    open: true,
    message: 'Item deleted',
    action: <button>Undo</button>,
  },
}

export const Success: Story = {
  args: {
    open: true,
    message: 'Operation completed successfully!',
    severity: 'success',
  },
}

export const Error: Story = {
  args: {
    open: true,
    message: 'Something went wrong.',
    severity: 'error',
  },
}

export const TopCenter: Story = {
  args: {
    open: true,
    message: 'Top center notification',
    position: 'top-center',
  },
}

export const KitchenSink: Story = {
  render: () => {
    const [open, setOpen] = useState<string | null>(null)
    return (
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '24px' }}>
        <Button onClick={() => setOpen('success')}>Success</Button>
        <Button onClick={() => setOpen('error')}>Error</Button>
        <Button onClick={() => setOpen('top')}>Top Center</Button>
        <Snackbar
          open={open === 'success'}
          message="Success!"
          severity="success"
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
        <Snackbar
          open={open === 'error'}
          message="Error occurred"
          severity="error"
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
        <Snackbar
          open={open === 'top'}
          message="Top notification"
          position="top-center"
          onClose={() => setOpen(null)}
          autoHideDuration={3000}
        />
      </div>
    )
  },
}
