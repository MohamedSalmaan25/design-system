import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    activeStep: { control: 'number' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    alternativeLabel: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Stepper>

const basicSteps = [
  { label: 'Select plan' },
  { label: 'Payment' },
  { label: 'Confirmation' },
]

const stepsWithOptional = [
  { label: 'Shipping address', optionalText: 'Optional' },
  { label: 'Payment details' },
  { label: 'Review order' },
]

export const Default: Story = {
  args: {
    activeStep: 1,
    steps: basicSteps,
  },
}

export const Completed: Story = {
  args: {
    activeStep: 3,
    steps: basicSteps,
  },
}

export const Vertical: Story = {
  args: {
    activeStep: 0,
    steps: basicSteps,
    orientation: 'vertical',
  },
}

export const AlternativeLabel: Story = {
  args: {
    activeStep: 1,
    steps: basicSteps,
    alternativeLabel: true,
  },
}

export const WithOptionalText: Story = {
  args: {
    activeStep: 1,
    steps: stepsWithOptional,
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '24px' }}>
      <Stepper activeStep={1} steps={basicSteps} />
      <Stepper activeStep={0} steps={basicSteps} alternativeLabel />
      <Stepper activeStep={2} steps={basicSteps} orientation="vertical" />
      <Stepper activeStep={1} steps={stepsWithOptional} />
    </div>
  ),
}
