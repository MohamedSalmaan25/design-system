import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    showValue: { control: 'select', options: ['off', 'on', 'auto'] },
    marks: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: 50,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30)
    return <Slider value={value} onChange={setValue} />
  },
}

export const WithMarks: Story = {
  args: {
    defaultValue: 50,
    marks: true,
    showValue: 'on',
  },
}

export const Vertical: Story = {
  args: {
    defaultValue: 50,
    orientation: 'vertical',
    style: { height: 200 },
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 40,
    disabled: true,
  },
}

export const CustomRange: Story = {
  args: {
    min: 0,
    max: 200,
    step: 10,
    defaultValue: 100,
    showValue: 'on',
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px', maxWidth: 600 }}>
      <div style={{ width: '100%' }}>
        <Slider defaultValue={50} showValue="on" />
      </div>
      <div style={{ width: '100%' }}>
        <Slider defaultValue={30} marks showValue="on" />
      </div>
      <div style={{ width: '100%' }}>
        <Slider defaultValue={70} disabled />
      </div>
      <div style={{ height: 200 }}>
        <Slider defaultValue={50} orientation="vertical" showValue="on" />
      </div>
    </div>
  ),
}
