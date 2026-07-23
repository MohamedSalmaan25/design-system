import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'
import { Button } from '../Button/Button'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  argTypes: {
    anchor: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    variant: {
      control: 'select',
      options: ['temporary', 'persistent', 'permanent'],
    },
    open: { control: 'boolean' },
    width: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: '16px' }}>
            <h3>Drawer Content</h3>
            <p>This is a temporary drawer.</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const AnchorRight: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="right">
          <div style={{ padding: '16px' }}>
            <h3>Right Drawer</h3>
            <p>Content slides in from the right.</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const AnchorTop: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="top" width={200}>
          <div style={{ padding: '16px' }}>
            <h3>Top Drawer</h3>
            <p>Content slides in from the top.</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const AnchorBottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} anchor="bottom" width={200}>
          <div style={{ padding: '16px' }}>
            <h3>Bottom Drawer</h3>
            <p>Content slides in from the bottom.</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Persistent: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div style={{ position: 'relative', minHeight: '300px' }}>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Persistent Drawer
        </Button>
        <div style={{ marginLeft: open ? '300px' : '0', transition: 'margin-left 0.3s', padding: '16px' }}>
          <p>Main content area adjusts when the drawer is toggled.</p>
        </div>
        <Drawer open={open} onClose={() => setOpen(false)} variant="persistent" width={280}>
          <div style={{ padding: '16px' }}>
            <h3>Persistent Drawer</h3>
            <p>This drawer pushes content.</p>
          </div>
        </Drawer>
      </div>
    )
  },
}

export const Permanent: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      <Drawer open variant="permanent" width={240}>
        <div style={{ padding: '16px' }}>
          <h3>Navigation</h3>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      </Drawer>
      <div style={{ padding: '24px', flex: 1 }}>
        <h2>Main Content</h2>
        <p>Permanent drawer is always visible alongside content.</p>
      </div>
    </div>
  ),
}
