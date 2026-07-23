import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Container } from './Container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', false],
    },
    disableGutters: { control: 'boolean' },
    fixed: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: (
      <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>
        Container Content
      </div>
    ),
  },
}

export const MaxWidthSm: Story = {
  args: {
    maxWidth: 'sm',
    children: (
      <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>
        maxWidth=&quot;sm&quot;
      </div>
    ),
  },
}

export const MaxWidthLg: Story = {
  args: {
    maxWidth: 'lg',
    children: (
      <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>
        maxWidth=&quot;lg&quot;
      </div>
    ),
  },
}

export const Fixed: Story = {
  args: {
    fixed: true,
    children: (
      <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>
        Fixed container
      </div>
    ),
  },
}

export const DisableGutters: Story = {
  args: {
    disableGutters: true,
    children: (
      <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>
        No gutters
      </div>
    ),
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <Container maxWidth="sm">
        <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>sm</div>
      </Container>
      <Container maxWidth="md">
        <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>md</div>
      </Container>
      <Container maxWidth="lg">
        <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>lg</div>
      </Container>
      <Container maxWidth="xl">
        <div style={{ background: '#e0e0e0', padding: '24px', textAlign: 'center' }}>xl</div>
      </Container>
    </div>
  ),
}
