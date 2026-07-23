import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Skeleton.css'

type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  animation?: 'pulse' | 'wave' | 'none'
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      animation = 'pulse',
      className,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ms-skeleton',
          `ms-skeleton--${variant}`,
          animation !== 'none' && `ms-skeleton--${animation}`,
          className,
        )}
        style={{
          width,
          height,
          ...(variant === 'text' ? {} : {}),
          ...style,
        }}
        aria-hidden="true"
        {...props}
      />
    )
  },
)

Skeleton.displayName = 'Skeleton'

export { Skeleton, type SkeletonProps }
