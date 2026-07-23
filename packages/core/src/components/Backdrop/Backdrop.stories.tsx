import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Backdrop } from './Backdrop'

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
  argTypes: {
    open: { control: 'boolean' },
    invisible: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Backdrop>

export const Default: Story = {
  args: {
    open: true,
    children: <div style={{ color: '#fff', padding: '2rem' }}>Backdrop content</div>,
  },
}

export const Loading: Story = {
  args: {
    open: true,
  },
}

export const Invisible: Story = {
  args: {
    open: true,
    invisible: true,
    children: <div style={{ padding: '2rem' }}>Invisible backdrop</div>,
  },
}

export const WithClickHandler: Story = {
  args: {
    open: true,
    onClick: () => alert('Backdrop clicked'),
    children: <div style={{ color: '#fff', padding: '2rem' }}>Click the backdrop</div>,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p><strong>Loading (Spinner)</strong></p>
        <Backdrop open />
      </div>
      <div>
        <p><strong>With Content</strong></p>
        <Backdrop open>
          <div style={{ color: '#fff', padding: '2rem' }}>Visible backdrop</div>
        </Backdrop>
      </div>
      <div>
        <p><strong>Invisible Backdrop</strong></p>
        <Backdrop open invisible>
          <div style={{ padding: '2rem' }}>Invisible (no dimming)</div>
        </Backdrop>
      </div>
    </div>
  ),
}
