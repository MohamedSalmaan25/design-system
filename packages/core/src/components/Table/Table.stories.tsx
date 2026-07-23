import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Table } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    stickyHeader: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Name</Table.Cell>
            <Table.Cell variant="head">Age</Table.Cell>
            <Table.Cell variant="head">Role</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice</Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell>Engineer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Designer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charlie</Table.Cell>
            <Table.Cell>35</Table.Cell>
            <Table.Cell>Manager</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Item</Table.Cell>
            <Table.Cell variant="head" align="right">Qty</Table.Cell>
            <Table.Cell variant="head" align="right">Price</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Widget</Table.Cell>
            <Table.Cell align="right">2</Table.Cell>
            <Table.Cell align="right">$10.00</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gadget</Table.Cell>
            <Table.Cell align="right">1</Table.Cell>
            <Table.Cell align="right">$25.00</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell variant="footer">Total</Table.Cell>
            <Table.Cell variant="footer" align="right">3</Table.Cell>
            <Table.Cell variant="footer" align="right">$35.00</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">ID</Table.Cell>
            <Table.Cell variant="head">Name</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>001</Table.Cell>
            <Table.Cell>Alice</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>002</Table.Cell>
            <Table.Cell>Bob</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

export const StickyHeader: Story = {
  args: {
    stickyHeader: true,
    style: { maxHeight: 120, overflow: 'auto' },
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Name</Table.Cell>
            <Table.Cell variant="head">Department</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank'].map((name) => (
            <Table.Row key={name}>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>Engineering</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </>
    ),
  },
}

export const Aligned: Story = {
  args: {
    children: (
      <>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Left</Table.Cell>
            <Table.Cell variant="head" align="center">Center</Table.Cell>
            <Table.Cell variant="head" align="right">Right</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
            <Table.Cell align="center">Data</Table.Cell>
            <Table.Cell align="right">Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </>
    ),
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Name</Table.Cell>
            <Table.Cell variant="head">Age</Table.Cell>
            <Table.Cell variant="head">Role</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice</Table.Cell>
            <Table.Cell>30</Table.Cell>
            <Table.Cell>Engineer</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bob</Table.Cell>
            <Table.Cell>25</Table.Cell>
            <Table.Cell>Designer</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Table size="sm">
        <Table.Head>
          <Table.Row>
            <Table.Cell variant="head">Item</Table.Cell>
            <Table.Cell variant="head" align="right">Price</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Widget</Table.Cell>
            <Table.Cell align="right">$10</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell variant="footer">Total</Table.Cell>
            <Table.Cell variant="footer" align="right">$10</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  ),
}
