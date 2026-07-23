import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Box } from './Box'

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    component: { control: 'text' },
    as: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Box>

export const Default: Story = {
  args: {
    children: 'This is a Box (renders as a <div>)',
    style: { padding: 16, border: '1px solid #ccc', borderRadius: 4 },
  },
}

export const AsSection: Story = {
  args: {
    as: 'section',
    children: 'This Box renders as a <section> element',
    style: { padding: 16, border: '1px solid #ccc', borderRadius: 4, background: '#f5f5f5' },
  },
}

export const AsArticle: Story = {
  args: {
    as: 'article',
    children: 'This Box renders as an <article> element',
    style: { padding: 16, border: '1px solid #ccc', borderRadius: 4 },
  },
}

export const AsMain: Story = {
  args: {
    as: 'main',
    children: 'This Box renders as a <main> element',
    style: { padding: 16, border: '1px solid #ccc', borderRadius: 4, background: '#fafafa' },
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <Box style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4 }}>
        Box as <strong>&lt;div&gt;</strong> (default)
      </Box>
      <Box as="section" style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4, background: '#f5f5f5' }}>
        Box as <strong>&lt;section&gt;</strong>
      </Box>
      <Box as="article" style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4 }}>
        Box as <strong>&lt;article&gt;</strong>
      </Box>
      <Box as="main" style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4, background: '#f0f0f0' }}>
        Box as <strong>&lt;main&gt;</strong>
      </Box>
      <Box as="header" style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4 }}>
        Box as <strong>&lt;header&gt;</strong>
      </Box>
      <Box as="footer" style={{ padding: 16, border: '1px solid #ccc', borderRadius: 4, background: '#f5f5f5' }}>
        Box as <strong>&lt;footer&gt;</strong>
      </Box>
    </div>
  ),
}
