import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Select>

const countries = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
  { value: 'fr', label: 'France' },
]

export const Default: Story = {
  args: {
    options: countries,
    placeholder: 'Select a country',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Select
        options={countries}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Select a country"
      />
    )
  },
}

export const WithLabel: Story = {
  args: {
    options: countries,
    label: 'Country',
    placeholder: 'Select a country',
  },
}

export const Small: Story = {
  args: {
    options: countries.slice(0, 3),
    size: 'sm',
    placeholder: 'Small select',
  },
}

export const Large: Story = {
  args: {
    options: countries.slice(0, 3),
    size: 'lg',
    placeholder: 'Large select',
  },
}

export const Error: Story = {
  args: {
    options: countries,
    placeholder: 'Select a country',
    error: true,
    label: 'Country',
  },
}

export const Disabled: Story = {
  args: {
    options: countries,
    placeholder: 'Disabled',
    disabled: true,
  },
}

export const FullWidth: Story = {
  args: {
    options: countries,
    placeholder: 'Full width select',
    fullWidth: true,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', maxWidth: 400 }}>
      <Select options={countries} placeholder="Default" />
      <Select options={countries} placeholder="Small" size="sm" />
      <Select options={countries} placeholder="Large" size="lg" />
      <Select options={countries} placeholder="With label" label="Choose one" />
      <Select options={countries} placeholder="Error state" error label="Country" />
      <Select options={countries} placeholder="Disabled" disabled />
      <Select options={countries} placeholder="Full width" fullWidth />
    </div>
  ),
}
