import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Divider.css'

interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'fullWidth' | 'inset' | 'middle'
}

const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', variant = 'fullWidth', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        className={cn(
          'ms-divider',
          `ms-divider--${orientation}`,
          `ms-divider--${variant}`,
          className,
        )}
        {...props}
      />
    )
  },
)

Divider.displayName = 'Divider'

export { Divider, type DividerProps }
