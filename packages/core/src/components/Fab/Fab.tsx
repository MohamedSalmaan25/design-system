import { forwardRef, type ButtonHTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Fab.css'

type FabColor = 'primary' | 'default' | 'danger'
type FabSize = 'sm' | 'md' | 'lg'

interface FabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: FabColor
  size?: FabSize
  icon?: React.ReactNode
  href?: string
}

const Fab = forwardRef<ElementRef<'button'>, FabProps>(
  ({ color = 'primary', size = 'md', disabled, onClick, href, icon, className, children, ...props }, ref) => {
    const classNames = cn(
      'ms-fab',
      `ms-fab--${color}`,
      `ms-fab--${size}`,
      children && 'ms-fab--extended',
      className,
    )

    const content = (
      <>
        {icon && <span className="ms-fab__icon">{icon}</span>}
        {children && <span className="ms-fab__label">{children}</span>}
      </>
    )

    if (href) {
      return (
        <a
          ref={ref as any}
          className={classNames}
          href={href}
          aria-disabled={disabled}
          onClick={disabled ? undefined : onClick}
          {...(props as any)}
        >
          {content}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    )
  },
)
Fab.displayName = 'Fab'

export { Fab, type FabProps, type FabColor, type FabSize }
