import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Badge.css'

type BadgeVariant = 'dot' | 'standard'
type BadgeColor = 'default' | 'primary' | 'danger' | 'success' | 'warning'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  badgeContent?: React.ReactNode
  variant?: BadgeVariant
  color?: BadgeColor
  overlap?: 'rectangular' | 'circular'
  invisible?: boolean
  max?: number
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      badgeContent,
      variant = 'standard',
      color = 'primary',
      overlap = 'rectangular',
      invisible = false,
      max = 99,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const displayContent = variant === 'dot'
      ? null
      : (typeof badgeContent === 'number' && badgeContent > max
        ? `${max}+`
        : badgeContent)

    const isHidden = invisible || (badgeContent === undefined && variant !== 'dot')

    return (
      <span
        ref={ref}
        className={cn(
          'ms-badge',
          `ms-badge--${variant}`,
          `ms-badge--${color}`,
          `ms-badge--${overlap}`,
          isHidden && 'ms-badge--invisible',
          className,
        )}
        {...props}
      >
        {children}
        <span className="ms-badge__content" role="status">
          {displayContent}
        </span>
      </span>
    )
  },
)

Badge.displayName = 'Badge'

export { Badge, type BadgeProps }
