import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button/Button'
import { ButtonGroup } from './ButtonGroup'

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outlined', 'ghost'],
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'success', 'warning', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ButtonGroup>

export const Default: Story = {
  args: {
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: (
      <>
        <Button>Left</Button>
        <Button>Center</Button>
        <Button>Right</Button>
      </>
    ),
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: (
      <>
        <Button>Day</Button>
        <Button>Week</Button>
        <Button>Month</Button>
      </>
    ),
  },
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px' }}>
      {(['primary', 'danger', 'success', 'warning', 'neutral'] as const).map((color) => (
        <ButtonGroup key={color} color={color}>
          <Button>{color}</Button>
          <Button>Group</Button>
          <Button>Example</Button>
        </ButtonGroup>
      ))}
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    children: (
      <>
        <Button>Top</Button>
        <Button>Middle</Button>
        <Button>Bottom</Button>
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p><strong>Solid (default)</strong></p>
        <ButtonGroup variant="solid">
          <Button>Yes</Button>
          <Button>No</Button>
          <Button>Maybe</Button>
        </ButtonGroup>
      </div>
      <div>
        <p><strong>Outlined</strong></p>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <p><strong>Ghost</strong></p>
        <ButtonGroup variant="ghost">
          <Button>Copy</Button>
          <Button>Cut</Button>
          <Button>Paste</Button>
        </ButtonGroup>
      </div>
      <div>
        <p><strong>Vertical</strong></p>
        <ButtonGroup orientation="vertical">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <Button>Action 3</Button>
        </ButtonGroup>
      </div>
      <div>
        <p><strong>Disabled</strong></p>
        <ButtonGroup disabled>
          <Button>Save</Button>
          <Button>Save &amp; Close</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </div>
    </div>
  ),
}
