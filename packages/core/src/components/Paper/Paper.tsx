import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Paper.css'

interface PaperProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: 0 | 1 | 2 | 3 | 4
  variant?: 'elevation' | 'outlined'
  square?: boolean
}

const elevationMap = ['var(--shadow-sm)', 'var(--shadow-sm)', 'var(--shadow-md)', 'var(--shadow-lg)', 'var(--shadow-xl)']

const Paper = forwardRef<HTMLDivElement, PaperProps>(
  ({ elevation = 1, variant = 'elevation', square = false, className, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ms-paper',
          `ms-paper--${variant}`,
          square && 'ms-paper--square',
          className,
        )}
        style={{
          ...(variant === 'elevation' ? { boxShadow: elevationMap[elevation] } : {}),
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    )
  },
)

Paper.displayName = 'Paper'

export { Paper, type PaperProps }
