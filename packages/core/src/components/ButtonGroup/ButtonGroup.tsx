import { forwardRef, cloneElement, isValidElement, Children, type ReactElement, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './ButtonGroup.css'

type ButtonGroupVariant = 'solid' | 'outlined' | 'ghost'
type ButtonGroupColor = 'primary' | 'danger' | 'success' | 'warning' | 'neutral'
type ButtonGroupSize = 'sm' | 'md' | 'lg'

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  variant?: ButtonGroupVariant
  color?: ButtonGroupColor
  size?: ButtonGroupSize
  orientation?: 'horizontal' | 'vertical'
  disabled?: boolean
}

const ButtonGroup = forwardRef<ElementRef<'div'>, ButtonGroupProps>(
  ({
    variant = 'solid',
    color = 'primary',
    size = 'md',
    orientation = 'horizontal',
    disabled = false,
    className,
    children,
    ...props
  }, ref) => {
    const clonedChildren = Children.map(children, (child) => {
      if (isValidElement(child)) {
        return cloneElement(child as ReactElement<any>, {
          variant,
          color,
          size,
          disabled: disabled || child.props.disabled,
          className: cn('ms-btn-group__btn', child.props.className),
        })
      }
      return child
    })

    return (
      <div
        ref={ref}
        role="group"
        className={cn(
          'ms-btn-group',
          `ms-btn-group--${orientation}`,
          `ms-btn-group--${variant}`,
          `ms-btn-group--${color}`,
          `ms-btn-group--${size}`,
          disabled && 'ms-btn-group--disabled',
          className,
        )}
        aria-disabled={disabled || undefined}
        {...props}
      >
        {clonedChildren}
      </div>
    )
  },
)
ButtonGroup.displayName = 'ButtonGroup'

export { ButtonGroup }
export type { ButtonGroupProps, ButtonGroupVariant, ButtonGroupColor, ButtonGroupSize }
