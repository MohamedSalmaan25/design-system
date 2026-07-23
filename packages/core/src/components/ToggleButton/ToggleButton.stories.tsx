import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ToggleButton, ToggleButtonGroup } from './ToggleButton'

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton',
  component: ToggleButton,
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof ToggleButton>

export const Default: Story = {
  args: {
    value: 'bold',
    children: 'Bold',
  },
}

export const Selected: Story = {
  args: {
    value: 'bold',
    selected: true,
    children: 'Bold',
  },
}

export const ToggleButtonGroupExclusive: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('left')
    return (
      <ToggleButtonGroup value={value} onChange={setValue} exclusive>
        <ToggleButton value="left">Left</ToggleButton>
        <ToggleButton value="center">Center</ToggleButton>
        <ToggleButton value="right">Right</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const ToggleButtonGroupMultiple: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>(['bold', 'italic'])
    return (
      <ToggleButtonGroup value={value} onChange={setValue}>
        <ToggleButton value="bold">B</ToggleButton>
        <ToggleButton value="italic">I</ToggleButton>
        <ToggleButton value="underline">U</ToggleButton>
        <ToggleButton value="strikethrough">S</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const VerticalGroup: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('asc')
    return (
      <ToggleButtonGroup value={value} onChange={setValue} exclusive orientation="vertical">
        <ToggleButton value="asc">Ascending</ToggleButton>
        <ToggleButton value="desc">Descending</ToggleButton>
      </ToggleButtonGroup>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    const [value, setValue] = useState<string | string[]>('md')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="sm">
          <ToggleButton value="sm">Small</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="md">
          <ToggleButton value="md">Medium</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup value={value} onChange={setValue} exclusive size="lg">
          <ToggleButton value="lg">Large</ToggleButton>
        </ToggleButtonGroup>
      </div>
    )
  },
}

function ExclusiveGroup() {
  const [value, setValue] = useState<string | string[]>('left')
  return (
    <ToggleButtonGroup value={value} onChange={setValue} exclusive>
      <ToggleButton value="left">Left</ToggleButton>
      <ToggleButton value="center">Center</ToggleButton>
      <ToggleButton value="right">Right</ToggleButton>
    </ToggleButtonGroup>
  )
}

function MultipleGroup() {
  const [value, setValue] = useState<string | string[]>(['bold', 'italic'])
  return (
    <ToggleButtonGroup value={value} onChange={setValue}>
      <ToggleButton value="bold">B</ToggleButton>
      <ToggleButton value="italic">I</ToggleButton>
      <ToggleButton value="underline">U</ToggleButton>
      <ToggleButton value="strikethrough">S</ToggleButton>
    </ToggleButtonGroup>
  )
}

function VerticalGroupComponent() {
  const [value, setValue] = useState<string | string[]>('asc')
  return (
    <ToggleButtonGroup value={value} onChange={setValue} exclusive orientation="vertical">
      <ToggleButton value="asc">Ascending</ToggleButton>
      <ToggleButton value="desc">Descending</ToggleButton>
    </ToggleButtonGroup>
  )
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <ExclusiveGroup />
      <MultipleGroup />
      <VerticalGroupComponent />
    </div>
  ),
}
