import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Typography } from './Typography'

describe('Typography', () => {
  it('renders body1 by default', () => {
    render(<Typography>Text</Typography>)
    expect(screen.getByText('Text')).toBeInTheDocument()
    expect(screen.getByText('Text').tagName).toBe('P')
  })

  it('renders correct heading level', () => {
    render(<Typography variant="h1">Heading</Typography>)
    expect(screen.getByText('Heading').tagName).toBe('H1')
  })

  it('renders body2 variant as paragraph', () => {
    render(<Typography variant="body2">Small text</Typography>)
    expect(screen.getByText('Small text').tagName).toBe('P')
  })

  it('renders caption as span', () => {
    render(<Typography variant="caption">Caption</Typography>)
    expect(screen.getByText('Caption').tagName).toBe('SPAN')
  })

  it('applies custom element via as prop', () => {
    render(<Typography as="div">Div text</Typography>)
    expect(screen.getByText('Div text').tagName).toBe('DIV')
  })

  it('applies variant class name', () => {
    const { container } = render(<Typography variant="h2">Heading</Typography>)
    expect(container.firstChild).toHaveClass('ms-typography--h2')
  })

  it('forwards ref', () => {
    const ref = { current: null }
    render(<Typography ref={ref}>Ref</Typography>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })
})
