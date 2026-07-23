import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders with text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('renders with variant class', () => {
    const { container } = render(<Button variant="outline">Outline</Button>)
    expect(container.firstChild).toHaveClass('ms-btn--outline')
  })

  it('renders with color class', () => {
    const { container } = render(<Button color="danger">Danger</Button>)
    expect(container.firstChild).toHaveClass('ms-btn--danger')
  })

  it('renders with size class', () => {
    const { container } = render(<Button size="lg">Large</Button>)
    expect(container.firstChild).toHaveClass('ms-btn--lg')
  })

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('shows spinner when loading', () => {
    const { container } = render(<Button loading>Loading</Button>)
    expect(container.querySelector('.ms-btn__spinner')).toBeInTheDocument()
  })

  it('renders full width class', () => {
    const { container } = render(<Button fullWidth>Full</Button>)
    expect(container.firstChild).toHaveClass('ms-btn--fullWidth')
  })

  it('renders as anchor when href is provided', () => {
    render(<Button href="https://example.com">Link</Button>)
    const el = screen.getByRole('link')
    expect(el.tagName).toBe('A')
    expect(el).toHaveAttribute('href', 'https://example.com')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Button ref={ref}>Ref</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
