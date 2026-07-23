import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../Button/Button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { control: 'select', options: ['elevation', 'outlined'] },
    elevation: { control: 'select', options: [0, 1, 2, 3, 4] },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <Card.Media
        component="img"
        src="https://placehold.co/360x200/3b82f6/white?text=Card+Image"
        alt="Placeholder"
        height={200}
      />
      <Card.Content>
        <h3 style={{ margin: '0 0 8px' }}>Card Title</h3>
        <p style={{ margin: 0, color: '#666' }}>
          This is a basic card with an image, content area, and actions.
        </p>
      </Card.Content>
      <Card.Actions>
        <Button size="sm">Learn More</Button>
        <Button size="sm" variant="outline">Share</Button>
      </Card.Actions>
    </Card>
  ),
}

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ maxWidth: 360 }}>
      <Card.Header>
        <h3 style={{ margin: 0 }}>Outlined Card</h3>
      </Card.Header>
      <Card.Content>
        <p style={{ margin: 0, color: '#666' }}>
          This card uses the outlined variant with no elevation shadow.
        </p>
      </Card.Content>
      <Card.Actions>
        <Button size="sm" variant="outline">Action</Button>
      </Card.Actions>
    </Card>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Card style={{ maxWidth: 360 }}>
      <Card.Header>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>JD</div>
          <div>
            <h4 style={{ margin: 0 }}>John Doe</h4>
            <span style={{ fontSize: 12, color: '#999' }}>2 hours ago</span>
          </div>
        </div>
      </Card.Header>
      <Card.Content>
        <p style={{ margin: 0, color: '#666' }}>
          This card has a header with avatar, title, and timestamp.
        </p>
      </Card.Content>
    </Card>
  ),
}

export const ElevationLevels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      {([0, 1, 2, 3, 4] as const).map((elevation) => (
        <Card key={elevation} elevation={elevation} style={{ width: 200 }}>
          <Card.Content>
            <p style={{ margin: 0, textAlign: 'center' }}>Elevation {elevation}</p>
          </Card.Content>
        </Card>
      ))}
    </div>
  ),
}

export const ComplexExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', padding: '24px' }}>
      <Card style={{ maxWidth: 320 }}>
        <Card.Media
          component="img"
          src="https://placehold.co/320x180/22c55e/white?text=Nature"
          alt="Nature"
          height={180}
        />
        <Card.Content>
          <h3 style={{ margin: '0 0 8px' }}>Beautiful Landscape</h3>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
            Explore the breathtaking views from the mountain summit.
          </p>
        </Card.Content>
        <Card.Actions>
          <Button size="sm" color="primary">Read More</Button>
          <Button size="sm" variant="outline" color="neutral">Save</Button>
        </Card.Actions>
      </Card>
      <Card variant="outlined" style={{ maxWidth: 320 }}>
        <Card.Header>
          <h3 style={{ margin: 0, fontSize: 18 }}>Travel Tips</h3>
        </Card.Header>
        <Card.Content>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
            Top 10 tips for traveling on a budget this season.
          </p>
        </Card.Content>
        <Card.Media
          component="img"
          src="https://placehold.co/320x160/f59e0b/white?text=Travel"
          alt="Travel"
          height={160}
        />
        <Card.Actions>
          <Button size="sm" variant="outline">Share</Button>
          <Button size="sm" variant="ghost">Bookmark</Button>
        </Card.Actions>
      </Card>
      <Card elevation={3} style={{ maxWidth: 320 }}>
        <Card.Media
          component="img"
          src="https://placehold.co/320x140/ef4444/white?text=Food"
          alt="Food"
          height={140}
        />
        <Card.Content>
          <h3 style={{ margin: '0 0 8px' }}>Recipe of the Day</h3>
          <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
            A delicious and easy pasta recipe ready in 20 minutes.
          </p>
        </Card.Content>
        <Card.Actions>
          <Button size="sm" color="danger">View Recipe</Button>
        </Card.Actions>
      </Card>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px' }}>
      <div>
        <p><strong>Elevation Card (default)</strong></p>
        <Card style={{ maxWidth: 360 }}>
          <Card.Content>
            <p style={{ margin: 0 }}>Elevation card with shadow</p>
          </Card.Content>
        </Card>
      </div>
      <div>
        <p><strong>Outlined Card</strong></p>
        <Card variant="outlined" style={{ maxWidth: 360 }}>
          <Card.Content>
            <p style={{ margin: 0 }}>Outlined card with border</p>
          </Card.Content>
        </Card>
      </div>
      <div>
        <p><strong>Card with all sub-components</strong></p>
        <Card style={{ maxWidth: 360 }}>
          <Card.Header>
            <strong>Header</strong>
          </Card.Header>
          <Card.Media
            component="img"
            src="https://placehold.co/360x120/3b82f6/white?text=Media"
            alt="Media"
            height={120}
          />
          <Card.Content>
            <p style={{ margin: 0 }}>Content area</p>
          </Card.Content>
          <Card.Actions>
            <Button size="sm">Action 1</Button>
            <Button size="sm" variant="outline">Action 2</Button>
          </Card.Actions>
        </Card>
      </div>
    </div>
  ),
}
