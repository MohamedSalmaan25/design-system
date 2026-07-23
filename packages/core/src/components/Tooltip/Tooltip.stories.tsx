import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../Button/Button'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    title: { control: 'text' },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'],
    },
    arrow: { control: 'boolean' },
    delay: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    title: 'Tooltip text',
    children: <Button>Hover me</Button>,
  },
}

export const Arrowless: Story = {
  args: {
    title: 'No arrow tooltip',
    arrow: false,
    children: <Button>No arrow</Button>,
  },
}

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '60px' }}>
      <Tooltip title="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip title="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  ),
}

export const Delay: Story = {
  args: {
    title: 'Appears after 1s',
    delay: 1000,
    children: <Button>Slow tooltip</Button>,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '80px' }}>
      <Tooltip title="Top" placement="top" arrow>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title="Bottom" placement="bottom" arrow>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title="Left" placement="left" arrow>
        <Button>Left</Button>
      </Tooltip>
      <Tooltip title="Right" placement="right" arrow>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title="No arrow" placement="top" arrow={false}>
        <Button>No Arrow</Button>
      </Tooltip>
    </div>
  ),
}
