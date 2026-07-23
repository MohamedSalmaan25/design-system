import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { List } from './List'

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  argTypes: {
    dense: { control: 'boolean' },
    disablePadding: { control: 'boolean' },
    subheader: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof List>

export const Default: Story = {
  render: () => (
    <List>
      <List.Item>
        <List.ItemIcon><span style={{ fontWeight: 'bold' }}>@</span></List.ItemIcon>
        <List.ItemText primary="Inbox" secondary="3 unread" />
      </List.Item>
      <List.Item>
        <List.ItemIcon><span style={{ fontWeight: 'bold' }}>&#9654;</span></List.ItemIcon>
        <List.ItemText primary="Sent" />
      </List.Item>
      <List.Item>
        <List.ItemIcon><span style={{ fontWeight: 'bold' }}>X</span></List.ItemIcon>
        <List.ItemText primary="Trash" />
      </List.Item>
    </List>
  ),
}
