import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Spinner.css'

type SpinnerSize = 'sm' | 'md' | 'lg'
type SpinnerColor = 'primary' | 'danger' | 'success' | 'warning'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize
  color?: SpinnerColor
  value?: number
}

const sizeMap: Record<SpinnerSize, number> = {
  sm: 20,
  md: 32,
  lg: 44,
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  (
    { size = 'md', color = 'primary', value, className, ...props },
    ref,
  ) => {
    const determinate = value !== undefined
    const dimension = sizeMap[size]
    const center = dimension / 2
    const radius = center - 3
    const circumference = 2 * Math.PI * radius
    const offset = determinate ? circumference - (value! / 100) * circumference : 0

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuenow={determinate ? value : undefined}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'ms-spinner',
          `ms-spinner--${size}`,
          `ms-spinner--${color}`,
          determinate && 'ms-spinner--determinate',
          className,
        )}
        {...props}
      >
        <svg
          className="ms-spinner__svg"
          width={dimension}
          height={dimension}
          viewBox={`0 0 ${dimension} ${dimension}`}
        >
          <circle
            className="ms-spinner__circle"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth={3}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${center} ${center})`}
          />
        </svg>
      </div>
    )
  },
)

Spinner.displayName = 'Spinner'

export { Spinner, type SpinnerProps, type SpinnerSize, type SpinnerColor }
