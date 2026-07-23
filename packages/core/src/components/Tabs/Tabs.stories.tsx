import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, Tab, TabPanel } from './Tabs'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['standard', 'scrollable', 'fullWidth'] },
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<number | string>(0)
    return (
      <Tabs value={value} onChange={(v) => setValue(v)}>
        <Tab value={0} label="Tab One" />
        <Tab value={1} label="Tab Two" />
        <Tab value={2} label="Tab Three" />
        <TabPanel value={0}>Content for Tab One</TabPanel>
        <TabPanel value={1}>Content for Tab Two</TabPanel>
        <TabPanel value={2}>Content for Tab Three</TabPanel>
      </Tabs>
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState<number | string>(0)
    return (
      <Tabs value={value} onChange={(v) => setValue(v)}>
        <Tab value={0} label="Favorites" />
        <Tab value={1} label="Photos" />
        <Tab value={2} label="Settings" />
        <TabPanel value={0}>Favorites content</TabPanel>
        <TabPanel value={1}>Photos content</TabPanel>
        <TabPanel value={2}>Settings content</TabPanel>
      </Tabs>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('a')
    return (
      <div style={{ display: 'flex', gap: 16 }}>
        <Tabs value={value} onChange={(v) => setValue(v)} orientation="vertical">
          <Tab value="a" label="Section A" />
          <Tab value="b" label="Section B" />
          <Tab value="c" label="Section C" />
          <div style={{ padding: 'var(--space-4)' }}>
            <TabPanel value="a">Section A content</TabPanel>
            <TabPanel value="b">Section B content</TabPanel>
            <TabPanel value="c">Section C content</TabPanel>
          </div>
        </Tabs>
      </div>
    )
  },
}

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState<number | string>(0)
    return (
      <Tabs value={value} onChange={(v) => setValue(v)} variant="fullWidth">
        <Tab value={0} label="One" />
        <Tab value={1} label="Two" />
        <Tab value={2} label="Three" />
        <TabPanel value={0}>One</TabPanel>
        <TabPanel value={1}>Two</TabPanel>
        <TabPanel value={2}>Three</TabPanel>
      </Tabs>
    )
  },
}

export const DisabledTab: Story = {
  render: () => {
    const [value, setValue] = useState<number | string>(0)
    return (
      <Tabs value={value} onChange={(v) => setValue(v)}>
        <Tab value={0} label="Active" />
        <Tab value={1} label="Disabled" disabled />
        <Tab value={2} label="Available" />
        <TabPanel value={0}>Active tab content</TabPanel>
        <TabPanel value={2}>Available tab content</TabPanel>
      </Tabs>
    )
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', padding: '24px' }}>
      <TabsWithState />
      <VerticalTabsWithState />
      <FullWidthTabsWithState />
    </div>
  ),
}

function TabsWithState() {
  const [value, setValue] = useState<number | string>(0)
  return (
    <Tabs value={value} onChange={(v) => setValue(v)}>
      <Tab value={0} label="One" />
      <Tab value={1} label="Two" />
      <Tab value={2} label="Three" />
      <TabPanel value={0}>One</TabPanel>
      <TabPanel value={1}>Two</TabPanel>
      <TabPanel value={2}>Three</TabPanel>
    </Tabs>
  )
}

function VerticalTabsWithState() {
  const [value, setValue] = useState<string | number>('a')
  return (
    <Tabs value={value} onChange={(v) => setValue(v)} orientation="vertical">
      <Tab value="a" label="Alpha" />
      <Tab value="b" label="Beta" />
      <Tab value="c" label="Gamma" />
      <TabPanel value="a">Alpha content</TabPanel>
      <TabPanel value="b">Beta content</TabPanel>
      <TabPanel value="c">Gamma content</TabPanel>
    </Tabs>
  )
}

function FullWidthTabsWithState() {
  const [value, setValue] = useState<number | string>(0)
  return (
    <Tabs value={value} onChange={(v) => setValue(v)} variant="fullWidth">
      <Tab value={0} label="A" />
      <Tab value={1} label="B" />
      <Tab value={2} label="C" />
      <TabPanel value={0}>A</TabPanel>
      <TabPanel value={1}>B</TabPanel>
      <TabPanel value={2}>C</TabPanel>
    </Tabs>
  )
}
