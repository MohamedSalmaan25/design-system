import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Divider } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['fullWidth', 'inset', 'middle'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Divider>

export const Default: Story = {}

export const Inset: Story = {
  args: {
    variant: 'inset',
  },
}

export const Middle: Story = {
  args: {
    variant: 'middle',
  },
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '100px', padding: '24px' }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Center</span>
      <Divider orientation="vertical" variant="inset" style={{ height: '40px' }} />
      <span>Right</span>
    </div>
  ),
}

export const VerticalInset: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '100px', padding: '24px' }}>
      <span>A</span>
      <Divider orientation="vertical" variant="inset" />
      <span>B</span>
    </div>
  ),
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p>Full width</p>
        <Divider variant="fullWidth" />
      </div>
      <div>
        <p>Inset</p>
        <Divider variant="inset" />
      </div>
      <div>
        <p>Middle</p>
        <Divider variant="middle" />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', height: '60px' }}>
        <span>Vertical</span>
        <Divider orientation="vertical" />
        <span>Dividers</span>
        <Divider orientation="vertical" />
        <span>Here</span>
      </div>
    </div>
  ),
}
