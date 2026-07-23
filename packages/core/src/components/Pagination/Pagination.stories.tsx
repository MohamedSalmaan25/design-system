import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from './Pagination'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    count: { control: 'number' },
    page: { control: 'number' },
    variant: { control: 'select', options: ['outlined', 'text'] },
    color: { control: 'select', options: ['primary', 'neutral'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    siblingCount: { control: 'number' },
    boundaryCount: { control: 'number' },
    hidePrevButton: { control: 'boolean' },
    hideNextButton: { control: 'boolean' },
    showFirstButton: { control: 'boolean' },
    showLastButton: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 10,
  },
}

export const Outlined: Story = {
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 10,
    variant: 'outlined',
  },
}

export const Small: Story = {
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 10,
    size: 'sm',
  },
}

export const Large: Story = {
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 10,
    size: 'lg',
  },
}

export const Disabled: Story = {
  render: (args) => {
    const [page, setPage] = useState(1)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 10,
    disabled: true,
  },
}

export const ManyPages: Story = {
  render: (args) => {
    const [page, setPage] = useState(10)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 50,
  },
}

export const ShowFirstLast: Story = {
  render: (args) => {
    const [page, setPage] = useState(5)
    return <Pagination {...args} page={page} onChange={(p) => setPage(p)} />
  },
  args: {
    count: 20,
    showFirstButton: true,
    showLastButton: true,
  },
}

export const KitchenSink: Story = {
  render: () => {
    const [page1, setPage1] = useState(1)
    const [page2, setPage2] = useState(5)
    const [page3, setPage3] = useState(3)
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
        <Pagination count={10} page={page1} onChange={(p) => setPage1(p)} variant="text" color="primary" />
        <Pagination count={10} page={page2} onChange={(p) => setPage2(p)} variant="outlined" color="neutral" />
        <Pagination count={10} page={page3} onChange={(p) => setPage3(p)} size="sm" />
        <Pagination count={10} page={1} size="lg" disabled />
        <Pagination count={10} page={3} showFirstButton showLastButton />
      </div>
    )
  },
}
