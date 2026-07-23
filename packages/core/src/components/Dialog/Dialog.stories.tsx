import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog } from './Dialog'
import { Button } from '../Button/Button'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    fullWidth: { control: 'boolean' },
    fullScreen: { control: 'boolean' },
    open: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Dialog.Title>Dialog Title</Dialog.Title>
          <Dialog.Content>
            This is the dialog content. You can put any content here.
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  },
}

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open with Actions</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Content>
            Are you sure you want to proceed with this action?
          </Dialog.Content>
          <Dialog.Actions>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button color="danger" onClick={() => setOpen(false)}>Delete</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  },
}

export const FullWidth: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Full Width</Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
          <Dialog.Title>Full Width Dialog</Dialog.Title>
          <Dialog.Content>
            This dialog spans the full width of its maxWidth container.
          </Dialog.Content>
          <Dialog.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  },
}

export const FullScreen: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Full Screen</Button>
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
          <Dialog.Title>Full Screen Dialog</Dialog.Title>
          <Dialog.Content>
            This dialog takes up the entire screen.
          </Dialog.Content>
          <Dialog.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  },
}

export const MaxWidthOptions: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [maxWidth, setMaxWidth] = useState<'sm' | 'md' | 'lg' | 'xl'>('sm')
    return (
      <>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map((mw) => (
            <Button key={mw} variant={maxWidth === mw ? 'solid' : 'outline'} onClick={() => { setMaxWidth(mw); setOpen(true) }}>
              {mw.toUpperCase()}
            </Button>
          ))}
        </div>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth={maxWidth}>
          <Dialog.Title>maxWidth=&quot;{maxWidth}&quot;</Dialog.Title>
          <Dialog.Content>
            This dialog uses the {maxWidth} maxWidth breakpoint.
          </Dialog.Content>
          <Dialog.Actions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </>
    )
  },
}
