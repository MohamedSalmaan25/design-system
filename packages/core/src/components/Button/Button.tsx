import { forwardRef, type ButtonHTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Button.css'

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link'
type ButtonColor = 'primary' | 'danger' | 'success' | 'warning' | 'neutral'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  loading?: boolean
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'start' | 'end'
  href?: string
}

const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  (
    {
      variant = 'solid',
      color = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = 'start',
      disabled,
      className,
      children,
      href,
      ...props
    },
    ref,
  ) => {
    const classNames = cn(
      'ms-btn',
      `ms-btn--${variant}`,
      `ms-btn--${color}`,
      `ms-btn--${size}`,
      fullWidth && 'ms-btn--fullWidth',
      loading && 'ms-btn--loading',
      icon && !children && 'ms-btn--iconOnly',
      className,
    )

    if (href) {
      return (
        <a
          ref={ref as unknown as React.Ref<HTMLAnchorElement>}
          className={classNames}
          href={href}
          aria-disabled={disabled || loading}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {loading && <span className="ms-btn__spinner" aria-hidden="true" />}
          {!loading && icon && iconPosition === 'start' && (
            <span className="ms-btn__icon">{icon}</span>
          )}
          {children && <span className="ms-btn__label">{children}</span>}
          {!loading && icon && iconPosition === 'end' && (
            <span className="ms-btn__icon">{icon}</span>
          )}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="ms-btn__spinner" aria-hidden="true" />}
        {!loading && icon && iconPosition === 'start' && (
          <span className="ms-btn__icon">{icon}</span>
        )}
        {children && <span className="ms-btn__label">{children}</span>}
        {!loading && icon && iconPosition === 'end' && (
          <span className="ms-btn__icon">{icon}</span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button, type ButtonProps, type ButtonVariant, type ButtonColor, type ButtonSize }
