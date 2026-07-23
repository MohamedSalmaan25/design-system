import React, { useState, useRef } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Menu, Item, Divider } from './Menu'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom', 'bottom-end', 'top-start', 'top', 'top-end'],
    },
    open: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Menu>

export const Default: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    const btnRef = useRef<HTMLButtonElement>(null)
    return (
      <div style={{ padding: '100px' }}>
        <button ref={btnRef} onClick={() => setAnchor(btnRef.current)}>
          Open Menu
        </button>
        <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
          <Item onClick={() => alert('Profile clicked')}>Profile</Item>
          <Item onClick={() => alert('Settings clicked')}>Settings</Item>
          <Divider />
          <Item onClick={() => alert('Logout clicked')}>Logout</Item>
        </Menu>
      </div>
    )
  },
}

export const KitchenSink: Story = {
  render: () => {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null)
    const [selected, setSelected] = useState<string | null>(null)
    const btnRef = useRef<HTMLButtonElement>(null)
    return (
      <div style={{ padding: '100px' }}>
        <button ref={btnRef} onClick={() => setAnchor(btnRef.current)}>
          {selected || 'Open Menu'}
        </button>
        <Menu anchorEl={anchor} open={!!anchor} onClose={() => setAnchor(null)}>
          <Item
            selected={selected === 'Cut'}
            icon={<span>&#9986;</span>}
            onClick={() => setSelected('Cut')}
          >
            Cut
          </Item>
          <Item
            selected={selected === 'Copy'}
            icon={<span>&#128203;</span>}
            onClick={() => setSelected('Copy')}
          >
            Copy
          </Item>
          <Item
            selected={selected === 'Paste'}
            icon={<span>&#128206;</span>}
            onClick={() => setSelected('Paste')}
          >
            Paste
          </Item>
          <Divider />
          <Item
            disabled
            icon={<span>&#9003;</span>}
            onClick={() => setSelected('Delete')}
          >
            Delete (disabled)
          </Item>
        </Menu>
      </div>
    )
  },
}
