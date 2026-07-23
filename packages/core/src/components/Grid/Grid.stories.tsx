import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    container: { control: 'boolean' },
    item: { control: 'boolean' },
    xs: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] },
    sm: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] },
    md: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] },
    lg: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] },
    xl: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'] },
    spacing: { control: 'select', options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
    alignItems: { control: 'text' },
    justifyContent: { control: 'text' },
    direction: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Grid>

const boxStyle: React.CSSProperties = {
  background: '#e3f2fd',
  border: '1px solid #90caf9',
  padding: '12px',
  borderRadius: '4px',
  textAlign: 'center',
}

export const Default: Story = {
  args: {
    container: true,
    spacing: 3,
    children: (
      <>
        <Grid item xs={12} sm={6} md={3}><div style={boxStyle}>Item 1</div></Grid>
        <Grid item xs={12} sm={6} md={3}><div style={boxStyle}>Item 2</div></Grid>
        <Grid item xs={12} sm={6} md={3}><div style={boxStyle}>Item 3</div></Grid>
        <Grid item xs={12} sm={6} md={3}><div style={boxStyle}>Item 4</div></Grid>
      </>
    ),
  },
}

export const KitchenSink: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '24px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}><div style={boxStyle}>Full width (xs=12)</div></Grid>
        <Grid item xs={6}><div style={boxStyle}>Half (xs=6)</div></Grid>
        <Grid item xs={6}><div style={boxStyle}>Half (xs=6)</div></Grid>
        <Grid item xs={4}><div style={boxStyle}>Third (xs=4)</div></Grid>
        <Grid item xs={4}><div style={boxStyle}>Third (xs=4)</div></Grid>
        <Grid item xs={4}><div style={boxStyle}>Third (xs=4)</div></Grid>
        <Grid item xs={3}><div style={boxStyle}>Quarter</div></Grid>
        <Grid item xs={3}><div style={boxStyle}>Quarter</div></Grid>
        <Grid item xs={3}><div style={boxStyle}>Quarter</div></Grid>
        <Grid item xs={3}><div style={boxStyle}>Quarter</div></Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs="auto"><div style={boxStyle}>Auto</div></Grid>
        <Grid item xs="auto"><div style={boxStyle}>Auto Width</div></Grid>
        <Grid item xs="auto"><div style={boxStyle}>Auto</div></Grid>
      </Grid>
    </div>
  ),
}
