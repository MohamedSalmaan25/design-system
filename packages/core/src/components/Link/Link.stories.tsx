import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    href: { control: 'text' },
    underline: { control: 'select', options: ['none', 'hover', 'always'] },
    color: { control: 'select', options: ['primary', 'inherit', 'muted'] },
    variant: { control: 'text' },
    external: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    href: '#',
    children: 'Click me',
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      <div>
        <Link href="#" underline="none">Underline: none</Link>
      </div>
      <div>
        <Link href="#" underline="hover">Underline: hover</Link>
      </div>
      <div>
        <Link href="#" underline="always">Underline: always</Link>
      </div>
      <div>
        <Link href="#" color="primary">Color: primary</Link>
      </div>
      <div>
        <Link href="#" color="inherit">Color: inherit</Link>
      </div>
      <div>
        <Link href="#" color="muted">Color: muted</Link>
      </div>
      <div>
        <Link href="https://example.com" external>External link</Link>
      </div>
    </div>
  ),
}
