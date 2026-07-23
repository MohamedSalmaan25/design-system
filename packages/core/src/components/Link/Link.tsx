import { forwardRef, type ElementRef, type AnchorHTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Link.css'

type LinkUnderline = 'none' | 'hover' | 'always'
type LinkColor = 'primary' | 'inherit' | 'muted'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  underline?: LinkUnderline
  color?: LinkColor
  variant?: string
  as?: React.ElementType
  external?: boolean
}

const Link = forwardRef<ElementRef<'a'>, LinkProps>(
  (
    {
      href,
      underline = 'hover',
      color = 'primary',
      variant,
      as: Component,
      external,
      className,
      target,
      rel,
      children,
      ...props
    },
    ref,
  ) => {
    const classNames = cn(
      'ms-link',
      `ms-link--underline-${underline}`,
      `ms-link--${color}`,
      variant && `ms-link--${variant}`,
      className,
    )

    const linkProps = {
      ref,
      className: classNames,
      href,
      target: external ? '_blank' : target,
      rel: external ? 'noopener noreferrer' : rel,
      ...props,
    }

    if (Component) {
      return <Component {...linkProps}>{children}</Component>
    }

    return <a {...linkProps}>{children}</a>
  },
)

Link.displayName = 'Link'

export { Link, type LinkProps, type LinkUnderline, type LinkColor }
