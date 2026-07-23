import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { NumberField } from './NumberField'

const meta: Meta<typeof NumberField> = {
  title: 'Components/NumberField',
  component: NumberField,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    defaultValue: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof NumberField>

export const Default: Story = {
  args: {
    defaultValue: 0,
    min: 0,
    max: 100,
    step: 1,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', maxWidth: '400px' }}>
      <NumberField defaultValue={0} min={0} max={100} size="sm" />
      <NumberField defaultValue={50} min={0} max={100} size="md" />
      <NumberField defaultValue={10} min={0} max={20} size="lg" />
      <NumberField defaultValue={0} min={0} max={10} step={2} />
      <NumberField defaultValue={5} min={0} max={10} error />
      <NumberField defaultValue={3} min={0} max={10} disabled />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(5)
    return (
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <p>Value: {value}</p>
        <NumberField value={value} onChange={setValue} min={0} max={20} />
      </div>
    )
  },
}
