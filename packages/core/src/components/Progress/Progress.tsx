import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Progress.css'

type ProgressSize = 'sm' | 'md' | 'lg'
type ProgressColor = 'primary' | 'danger' | 'success' | 'warning'

interface LinearProgressProps extends HTMLAttributes<HTMLDivElement> {
  value?: number
  size?: ProgressSize
  color?: ProgressColor
}

const sizeMap: Record<ProgressSize, string> = {
  sm: '4px',
  md: '6px',
  lg: '8px',
}

const LinearProgress = forwardRef<HTMLDivElement, LinearProgressProps>(
  (
    { value, size = 'md', color = 'primary', className, ...props },
    ref,
  ) => {
    const indeterminate = value === undefined

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={indeterminate ? undefined : value}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'ms-linear-progress',
          `ms-linear-progress--${color}`,
          indeterminate && 'ms-linear-progress--indeterminate',
          className,
        )}
        style={{ height: sizeMap[size], ...props.style }}
        {...props}
      >
        <span className="ms-linear-progress__bar" style={indeterminate ? undefined : { width: `${value}%` }} />
      </div>
    )
  },
)

LinearProgress.displayName = 'LinearProgress'

export { LinearProgress }
export type { LinearProgressProps, ProgressSize, ProgressColor }
