import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumbs, Item } from './Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: { control: 'text' },
    maxItems: { control: 'number' },
    itemsBeforeCollapse: { control: 'number' },
    itemsAfterCollapse: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      <Item href="/">Home</Item>
      <Item href="/products">Products</Item>
      <Item href="/products/electronics">Electronics</Item>
      <Item>Headphones</Item>
    </Breadcrumbs>
  ),
}

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs separator=">">
      <Item href="/">Home</Item>
      <Item href="/blog">Blog</Item>
      <Item href="/blog/tutorials">Tutorials</Item>
      <Item>Getting Started</Item>
    </Breadcrumbs>
  ),
}

export const Collapsed: Story = {
  render: () => (
    <Breadcrumbs maxItems={4} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
      <Item href="/">Home</Item>
      <Item href="/category">Category</Item>
      <Item href="/category/subcategory">Subcategory</Item>
      <Item href="/category/subcategory/detail">Detail</Item>
      <Item href="/category/subcategory/detail/section">Section</Item>
      <Item>Current Page</Item>
    </Breadcrumbs>
  ),
}

export const IconSeparator: Story = {
  render: () => (
    <Breadcrumbs separator={<span>-&gt;</span>}>
      <Item href="/">Dashboard</Item>
      <Item href="/users">Users</Item>
      <Item href="/users/1">John Doe</Item>
      <Item>Edit</Item>
    </Breadcrumbs>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p><strong>Default Separator (/)</strong></p>
        <Breadcrumbs>
          <Item href="/">Home</Item>
          <Item href="/products">Products</Item>
          <Item>Current</Item>
        </Breadcrumbs>
      </div>
      <div>
        <p><strong>Custom Separator ({'>'})</strong></p>
        <Breadcrumbs separator=">">
          <Item href="/">Home</Item>
          <Item href="/blog">Blog</Item>
          <Item>Post</Item>
        </Breadcrumbs>
      </div>
      <div>
        <p><strong>Icon Separator ({'->'})</strong></p>
        <Breadcrumbs separator={<span>-&gt;</span>}>
          <Item href="/">Dashboard</Item>
          <Item href="/settings">Settings</Item>
          <Item>Profile</Item>
        </Breadcrumbs>
      </div>
      <div>
        <p><strong>Collapsed (maxItems=3)</strong></p>
        <Breadcrumbs maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
          <Item href="/">Home</Item>
          <Item href="/a">A</Item>
          <Item href="/b">B</Item>
          <Item href="/c">C</Item>
          <Item href="/d">D</Item>
          <Item>Current</Item>
        </Breadcrumbs>
      </div>
    </div>
  ),
}
