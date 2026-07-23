import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    allowMultiple: { control: 'boolean' },
    defaultExpandedItem: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  args: {
    children: (
      <>
        <Accordion.Item value="panel-1">
          <Accordion.Summary>Section 1</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>Content for section 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item value="panel-2">
          <Accordion.Summary>Section 2</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>Content for section 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item value="panel-3">
          <Accordion.Summary>Section 3</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>Content for section 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </Accordion.Details>
        </Accordion.Item>
      </>
    ),
  },
}

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    children: (
      <>
        <Accordion.Item value="multi-1">
          <Accordion.Summary>Tab 1</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>Multiple panels can be open simultaneously.</p>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item value="multi-2">
          <Accordion.Summary>Tab 2</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>Try opening this without closing the first one.</p>
          </Accordion.Details>
        </Accordion.Item>
      </>
    ),
  },
}

export const DefaultExpanded: Story = {
  args: {
    defaultExpandedItem: 'panel-1',
    children: (
      <>
        <Accordion.Item value="panel-1">
          <Accordion.Summary>Pre-opened Section</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>This section starts expanded via defaultExpandedItem.</p>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item value="panel-2">
          <Accordion.Summary>Another Section</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>This one starts collapsed.</p>
          </Accordion.Details>
        </Accordion.Item>
      </>
    ),
  },
}

export const DisabledItem: Story = {
  args: {
    children: (
      <>
        <Accordion.Item value="enabled-1">
          <Accordion.Summary>Enabled Section</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>You can toggle this one.</p>
          </Accordion.Details>
        </Accordion.Item>
        <Accordion.Item value="disabled-1" disabled>
          <Accordion.Summary>Disabled Section</Accordion.Summary>
          <Accordion.Details>
            <p style={{ margin: 0 }}>This content is not accessible.</p>
          </Accordion.Details>
        </Accordion.Item>
      </>
    ),
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      <div style={{ flex: '1 1 300px' }}>
        <h4 style={{ margin: '0 0 8px', fontFamily: 'sans-serif' }}>Single</h4>
        <Accordion>
          <Accordion.Item value="s-1">
            <Accordion.Summary>Item One</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Single selection accordion content.</p></Accordion.Details>
          </Accordion.Item>
          <Accordion.Item value="s-2">
            <Accordion.Summary>Item Two</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Only one panel open at a time.</p></Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <h4 style={{ margin: '0 0 8px', fontFamily: 'sans-serif' }}>Allow Multiple</h4>
        <Accordion allowMultiple>
          <Accordion.Item value="m-1">
            <Accordion.Summary>Tab A</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Multi-select is enabled.</p></Accordion.Details>
          </Accordion.Item>
          <Accordion.Item value="m-2">
            <Accordion.Summary>Tab B</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Open alongside other panels.</p></Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </div>
      <div style={{ flex: '1 1 300px' }}>
        <h4 style={{ margin: '0 0 8px', fontFamily: 'sans-serif' }}>With Disabled Item</h4>
        <Accordion>
          <Accordion.Item value="d-1">
            <Accordion.Summary>Active</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Clickable panel.</p></Accordion.Details>
          </Accordion.Item>
          <Accordion.Item value="d-2" disabled>
            <Accordion.Summary>Disabled</Accordion.Summary>
            <Accordion.Details><p style={{ margin: 0 }}>Cannot be opened.</p></Accordion.Details>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  ),
}
