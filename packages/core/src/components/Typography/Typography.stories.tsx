import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
    },
    color: {
      control: 'select',
      options: ['default', 'muted', 'subtle', 'inverse', 'primary', 'danger', 'success'],
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    truncate: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
}

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
}

export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'This is body1 text. The quick brown fox jumps over the lazy dog.',
  },
}

export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'This is body2 text. The quick brown fox jumps over the lazy dog.',
  },
}

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption text - small and subtle',
  },
}

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline Text',
  },
}

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1 - Regular paragraph text</Typography>
      <Typography variant="body2">Body 2 - Smaller paragraph text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">Overline text</Typography>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="default">Default</Typography>
      <Typography color="muted">Muted</Typography>
      <Typography color="primary">Primary</Typography>
      <Typography color="danger">Danger</Typography>
      <Typography color="success">Success</Typography>
    </div>
  ),
}
