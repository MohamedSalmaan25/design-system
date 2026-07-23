import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Menubar } from './Menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Components/Menubar',
  component: Menubar,
}

export default meta
type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: () => (
    <Menubar>
      <Menubar.Item trigger="File">
        <Menubar.Menu>
          <button>New</button>
          <button>Open</button>
          <button>Save</button>
        </Menubar.Menu>
      </Menubar.Item>
      <Menubar.Item trigger="Edit">
        <Menubar.Menu>
          <button>Undo</button>
          <button>Redo</button>
        </Menubar.Menu>
      </Menubar.Item>
    </Menubar>
  ),
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ padding: '24px' }}>
      <Menubar>
        <Menubar.Item trigger="File">
          <Menubar.Menu>
            <button onClick={() => alert('New')}>New Project</button>
            <button onClick={() => alert('Open')}>Open File</button>
            <hr />
            <button onClick={() => alert('Save')}>Save</button>
            <button onClick={() => alert('Save As')}>Save As</button>
            <hr />
            <button onClick={() => alert('Exit')}>Exit</button>
          </Menubar.Menu>
        </Menubar.Item>
        <Menubar.Item trigger="Edit">
          <Menubar.Menu>
            <button onClick={() => alert('Undo')}>Undo</button>
            <button onClick={() => alert('Redo')}>Redo</button>
            <hr />
            <button onClick={() => alert('Cut')}>Cut</button>
            <button onClick={() => alert('Copy')}>Copy</button>
            <button onClick={() => alert('Paste')}>Paste</button>
          </Menubar.Menu>
        </Menubar.Item>
        <Menubar.Item trigger="View">
          <Menubar.Menu>
            <button onClick={() => alert('Zoom In')}>Zoom In</button>
            <button onClick={() => alert('Zoom Out')}>Zoom Out</button>
            <button onClick={() => alert('Fullscreen')}>Fullscreen</button>
          </Menubar.Menu>
        </Menubar.Item>
        <Menubar.Item trigger="Help">
          <Menubar.Menu>
            <button onClick={() => alert('About')}>About</button>
            <button onClick={() => alert('Docs')}>Documentation</button>
          </Menubar.Menu>
        </Menubar.Item>
      </Menubar>
    </div>
  ),
}
