import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Chip.css'

type ChipColor = 'default' | 'primary' | 'danger' | 'success' | 'warning'
type ChipSize = 'sm' | 'md'
type ChipVariant = 'filled' | 'outlined'

interface ChipProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  variant?: ChipVariant
  color?: ChipColor
  size?: ChipSize
  avatar?: React.ReactNode
  icon?: React.ReactNode
  onDelete?: () => void
  deleteIcon?: React.ReactNode
}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      variant = 'filled',
      color = 'default',
      size = 'md',
      avatar,
      icon,
      onDelete,
      deleteIcon,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'ms-chip',
          `ms-chip--${variant}`,
          `ms-chip--${color}`,
          `ms-chip--${size}`,
          className,
        )}
        {...props}
      >
        {avatar && <span className="ms-chip__avatar">{avatar}</span>}
        {icon && !avatar && <span className="ms-chip__icon">{icon}</span>}
        <span className="ms-chip__label">{children}</span>
        {onDelete && (
          <span
            className="ms-chip__delete"
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); onDelete() }}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onDelete() } }}
          >
            {deleteIcon || <span aria-hidden="true">&times;</span>}
          </span>
        )}
      </button>
    )
  },
)

Chip.displayName = 'Chip'

export { Chip, type ChipProps, type ChipColor, type ChipSize, type ChipVariant }
