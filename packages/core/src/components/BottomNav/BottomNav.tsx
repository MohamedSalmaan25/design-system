import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type HTMLAttributes, type ElementRef, type ButtonHTMLAttributes, type PropsWithoutRef } from 'react'
import { cn } from '../../utils/cn.js'
import './BottomNav.css'

interface BottomNavProps extends HTMLAttributes<HTMLElement> {
  showLabels?: boolean
}

const BottomNav = forwardRef<ElementRef<'nav'>, BottomNavProps>(
  ({ showLabels: _showLabels = true, className, children, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn('ms-bottom-nav', className)}
        {...props}
      >
        {children}
      </nav>
    )
  },
)
BottomNav.displayName = 'BottomNav'

interface BottomNavActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  label?: string
}

const Action = forwardRef<ElementRef<'button'>, BottomNavActionProps>(
  ({ icon, label, disabled, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        role="tab"
        className={cn('ms-bottom-nav__action', className)}
        disabled={disabled}
        {...props}
      >
        <span className="ms-bottom-nav__icon">{icon}</span>
        {label && <span className="ms-bottom-nav__label">{label}</span>}
      </button>
    )
  },
)
Action.displayName = 'BottomNav.Action'

const _BottomNav = BottomNav as ForwardRefExoticComponent<PropsWithoutRef<BottomNavProps> & RefAttributes<HTMLElement>> & {
  Action: typeof Action
}
_BottomNav.Action = Action

export { _BottomNav as BottomNav, type BottomNavProps, type BottomNavActionProps }
