import { forwardRef, type ElementType, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Typography.css'

type TypographyVariant =
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body1' | 'body2'
  | 'caption' | 'overline'

type TypographyColor =
  | 'default'
  | 'muted'
  | 'subtle'
  | 'inverse'
  | 'primary'
  | 'danger'
  | 'success'

type TypographyAlign = 'left' | 'center' | 'right'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  color?: TypographyColor
  align?: TypographyAlign
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  as?: ElementType
  truncate?: boolean
}

const variantMapping: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
}

const Typography = forwardRef<ElementRef<'p'>, TypographyProps>(
  (
    {
      variant = 'body1',
      color = 'default',
      align,
      weight,
      as,
      truncate = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? variantMapping[variant]

    const classNames = cn(
      'ms-typography',
      `ms-typography--${variant}`,
      `ms-typography--${color}`,
      align && `ms-typography--${align}`,
      weight && `ms-typography--${weight}`,
      truncate && 'ms-typography--truncate',
      className,
    )

    return (
      <Component ref={ref} className={classNames} {...props}>
        {children}
      </Component>
    )
  },
)

Typography.displayName = 'Typography'

export { Typography, type TypographyProps, type TypographyVariant, type TypographyColor }
