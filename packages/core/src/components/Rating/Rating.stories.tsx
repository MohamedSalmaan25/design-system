import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    value: { control: 'number' },
    defaultValue: { control: 'number' },
    max: { control: 'number' },
    precision: { control: 'select', options: [0.5, 1] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Rating>

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(3)
    return <Rating value={value} onChange={(v) => setValue(v)} />
  },
}

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 2,
    disabled: true,
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center', padding: '24px' }}>
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} size="md" />
      <Rating defaultValue={3} size="lg" />
    </div>
  ),
}

export const HalfPrecision: Story = {
  render: () => {
    const [value, setValue] = useState(3.5)
    return <Rating value={value} onChange={(v) => setValue(v)} precision={0.5} />
  },
}

export const CustomMax: Story = {
  args: {
    defaultValue: 7,
    max: 10,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Rating defaultValue={3} />
      <Rating value={4} readOnly />
      <Rating defaultValue={2} disabled />
      <Rating defaultValue={3} size="sm" />
      <Rating defaultValue={3} size="lg" />
      <Rating defaultValue={3.5} precision={0.5} />
      <Rating defaultValue={8} max={10} />
    </div>
  ),
}
