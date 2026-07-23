import { forwardRef, useState, useCallback, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Rating.css'

interface RatingProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  max?: number
  precision?: 0.5 | 1
  emptyIcon?: React.ReactNode
  filledIcon?: React.ReactNode
}

const defaultEmpty = <span>&#9734;</span>
const defaultFilled = <span>&#9733;</span>

const Rating = forwardRef<ElementRef<'div'>, RatingProps>(
  ({
    value: controlledValue,
    defaultValue = 0,
    onChange,
    readOnly = false,
    disabled = false,
    size = 'md',
    max = 5,
    precision = 1,
    emptyIcon = defaultEmpty,
    filledIcon = defaultFilled,
    className,
    ...props
  }, ref) => {
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [hoverValue, setHoverValue] = useState<number | null>(null)
    const value = isControlled ? controlledValue : internalValue
    const displayValue = hoverValue ?? value

    const handleClick = useCallback((newValue: number) => {
      if (readOnly || disabled) return
      if (!isControlled) setInternalValue(newValue)
      onChange?.(newValue)
    }, [readOnly, disabled, isControlled, onChange])

    const handleMouseEnter = useCallback((newValue: number) => {
      if (readOnly || disabled) return
      setHoverValue(newValue)
    }, [readOnly, disabled])

    const handleMouseLeave = useCallback(() => {
      if (readOnly || disabled) return
      setHoverValue(null)
    }, [readOnly, disabled])

    const stars = Array.from({ length: max }, (_, i) => i + 1)

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn(
          'ms-rating',
          `ms-rating--${size}`,
          readOnly && 'ms-rating--readOnly',
          disabled && 'ms-rating--disabled',
          className,
        )}
        {...props}
      >
        {stars.map((star) => {
          const isFilled = precision === 1
            ? displayValue >= star
            : displayValue >= star - 0.5
          const isHalf = precision === 0.5 && displayValue >= star - 0.5 && displayValue < star

          return (
            <span
              key={star}
              role="radio"
              aria-checked={value >= star}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              className={cn(
                'ms-rating__icon',
                isFilled && 'ms-rating__icon--filled',
                !isFilled && 'ms-rating__icon--empty',
                hoverValue !== null && star <= hoverValue && 'ms-rating__icon--hover',
              )}
              onClick={() => handleClick(star)}
              onMouseEnter={() => handleMouseEnter(star)}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: readOnly || disabled ? 'default' : 'pointer' }}
            >
              {isHalf ? (
                <span className="ms-rating__half">
                  <span className="ms-rating__half-empty">{emptyIcon}</span>
                  <span className="ms-rating__half-filled">{filledIcon}</span>
                </span>
              ) : isFilled ? filledIcon : emptyIcon}
            </span>
          )
        })}
      </div>
    )
  },
)
Rating.displayName = 'Rating'

export { Rating, type RatingProps }
