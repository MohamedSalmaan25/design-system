import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Paper } from './Paper'

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  argTypes: {
    elevation: { control: 'select', options: [0, 1, 2, 3, 4] },
    variant: { control: 'select', options: ['elevation', 'outlined'] },
    square: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Paper>

export const Default: Story = {
  args: {
    children: 'This is a paper surface.',
    style: { padding: '24px', maxWidth: 320 },
  },
}

export const Elevated: Story = {
  args: {
    children: 'Elevation 3 paper.',
    elevation: 3,
    style: { padding: '24px', maxWidth: 320 },
  },
}

export const NoShadow: Story = {
  args: {
    children: 'No shadow (elevation 0).',
    elevation: 0,
    style: { padding: '24px', maxWidth: 320 },
  },
}

export const Outlined: Story = {
  args: {
    children: 'Outlined variant.',
    variant: 'outlined',
    style: { padding: '24px', maxWidth: 320 },
  },
}

export const Square: Story = {
  args: {
    children: 'Square corners.',
    square: true,
    style: { padding: '24px', maxWidth: 320 },
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', padding: '24px' }}>
      <Paper elevation={0} style={{ padding: '24px', width: 140 }}>elevation 0</Paper>
      <Paper elevation={1} style={{ padding: '24px', width: 140 }}>elevation 1</Paper>
      <Paper elevation={2} style={{ padding: '24px', width: 140 }}>elevation 2</Paper>
      <Paper elevation={3} style={{ padding: '24px', width: 140 }}>elevation 3</Paper>
      <Paper elevation={4} style={{ padding: '24px', width: 140 }}>elevation 4</Paper>
      <Paper variant="outlined" style={{ padding: '24px', width: 140 }}>outlined</Paper>
      <Paper square style={{ padding: '24px', width: 140 }}>square</Paper>
    </div>
  ),
}
