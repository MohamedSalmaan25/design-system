import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, Radio } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    row: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
    defaultValue: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1')
    return (
      <RadioGroup value={value} onChange={(v) => setValue(v)}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  },
}

export const Row: Story = {
  render: () => {
    const [value, setValue] = useState('option1')
    return (
      <RadioGroup value={value} onChange={(v) => setValue(v)} row>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2" />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  },
}

export const DisabledOption: Story = {
  render: () => {
    const [value, setValue] = useState('option1')
    return (
      <RadioGroup value={value} onChange={(v) => setValue(v)}>
        <Radio value="option1" label="Option 1" />
        <Radio value="option2" label="Option 2 (disabled)" disabled />
        <Radio value="option3" label="Option 3" />
      </RadioGroup>
    )
  },
}

export const WithDefaultValue: Story = {
  render: () => (
    <RadioGroup defaultValue="option2" onChange={(v) => console.log(v)}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2 (default)" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
}

export const KitchenSink: Story = {
  render: () => {
    const [value1, setValue1] = useState('a')
    const [value2, setValue2] = useState('x')
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
        <div>
          <strong>Column layout</strong>
          <RadioGroup value={value1} onChange={(v) => setValue1(v)}>
            <Radio value="a" label="Choice A" />
            <Radio value="b" label="Choice B" />
            <Radio value="c" label="Choice C (disabled)" disabled />
          </RadioGroup>
        </div>
        <div>
          <strong>Row layout</strong>
          <RadioGroup value={value2} onChange={(v) => setValue2(v)} row>
            <Radio value="x" label="Extra Small" />
            <Radio value="y" label="Small" />
            <Radio value="z" label="Medium" />
          </RadioGroup>
        </div>
      </div>
    )
  },
}
