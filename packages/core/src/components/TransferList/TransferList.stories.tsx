import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TransferList } from './TransferList'

const meta: Meta<typeof TransferList> = {
  title: 'Components/TransferList',
  component: TransferList,
  argTypes: {
    leftTitle: { control: 'text' },
    rightTitle: { control: 'text' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof TransferList>

const defaultLeft = [
  { value: '1', label: 'Item 1' },
  { value: '2', label: 'Item 2' },
  { value: '3', label: 'Item 3' },
  { value: '4', label: 'Item 4' },
  { value: '5', label: 'Item 5' },
]

export const Default: Story = {
  args: {
    left: defaultLeft,
    right: [],
  },
}

export const Controlled: Story = {
  render: () => {
    const [right, setRight] = useState([{ value: '2', label: 'Item 2' }, { value: '4', label: 'Item 4' }])
    return (
      <TransferList
        left={defaultLeft}
        right={right}
        onChange={setRight}
      />
    )
  },
}

export const WithCustomTitles: Story = {
  args: {
    left: defaultLeft,
    right: [],
    leftTitle: 'Available',
    rightTitle: 'Selected',
  },
}

export const Disabled: Story = {
  args: {
    left: defaultLeft.slice(0, 3),
    right: [{ value: '4', label: 'Item 4' }],
    disabled: true,
  },
}

export const KitchenSink: Story = {
  render: () => {
    const [right, setRight] = useState([{ value: '2', label: 'Item B' }, { value: '4', label: 'Item D' }])
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
        <TransferList
          left={defaultLeft}
          right={[]}
          leftTitle="Options"
          rightTitle="Selected"
        />
        <TransferList
          left={[
            { value: 'a', label: 'Apple' },
            { value: 'b', label: 'Banana' },
            { value: 'c', label: 'Cherry' },
          ]}
          right={right}
          onChange={setRight}
          leftTitle="Fruits"
          rightTitle="Chosen"
        />
        <TransferList
          left={defaultLeft.slice(0, 3)}
          right={[{ value: 'x', label: 'Locked' }]}
          disabled
          leftTitle="Disabled"
          rightTitle="Unavailable"
        />
      </div>
    )
  },
}
