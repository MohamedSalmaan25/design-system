import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete } from './Autocomplete'

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
]

const meta: Meta<typeof Autocomplete> = {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    freeSolo: { control: 'boolean' },
    noOptionsText: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: "",
  },
}

export const WithSelection: Story = {
  render: () => {
    const [value, setValue] = useState<{ value: string; label: string } | null>({ value: 'cherry', label: 'Cherry' })
    return (
      <Autocomplete
        options={fruitOptions}
        value={value}
        onChange={(opt) => setValue(opt)}
        label="Fruit"
        placeholder="Choose a fruit..."
      />
    )
  },
}

export const Disabled: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    disabled: true,
    value: { value: 'banana', label: 'Banana' },
  },
}

export const Error: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    error: true,
  },
}

export const Loading: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    loading: true,
  },
}

export const FullWidth: Story = {
  args: {
    options: fruitOptions,
    label: 'Fruit',
    placeholder: 'Choose a fruit...',
    fullWidth: true,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Autocomplete
        options={fruitOptions}
        label="Default"
        placeholder="Choose a fruit..."
      />
      <Autocomplete
        options={fruitOptions}
        label="With Selection"
        placeholder="Choose a fruit..."
        defaultValue={{ value: 'banana', label: 'Banana' }}
      />
      <Autocomplete
        options={fruitOptions}
        label="Disabled"
        placeholder="Choose a fruit..."
        disabled
        value={{ value: 'apple', label: 'Apple' }}
      />
      <Autocomplete
        options={fruitOptions}
        label="Error State"
        placeholder="Choose a fruit..."
        error
      />
      <Autocomplete
        options={fruitOptions}
        label="Loading"
        placeholder="Choose a fruit..."
        loading
      />
      <Autocomplete
        options={fruitOptions}
        label="Full Width"
        placeholder="Choose a fruit..."
        fullWidth
      />
    </div>
  ),
}
