import { forwardRef, useState, useCallback, type InputHTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './NumberField.css'

type NumberFieldSize = 'sm' | 'md' | 'lg'

interface NumberFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'defaultValue' | 'size'> {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  size?: NumberFieldSize
  error?: boolean
  fullWidth?: boolean
}

const NumberField = forwardRef<ElementRef<'input'>, NumberFieldProps>(
  ({
    value: controlledValue,
    defaultValue,
    onChange,
    min,
    max,
    step = 1,
    size = 'md',
    error = false,
    disabled = false,
    fullWidth = false,
    className,
    ...props
  }, ref) => {
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState<number>(defaultValue ?? 0)
    const value = isControlled ? controlledValue : internalValue

    const clamp = useCallback((v: number) => {
      let n = v
      if (min !== undefined) n = Math.max(min, n)
      if (max !== undefined) n = Math.min(max, n)
      return n
    }, [min, max])

    const commit = useCallback((v: number) => {
      const clamped = clamp(v)
      if (!isControlled) setInternalValue(clamped)
      onChange?.(clamped)
    }, [clamp, isControlled, onChange])

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = parseFloat(e.target.value)
      if (!isNaN(raw)) commit(raw)
    }, [commit])

    const increment = useCallback(() => commit(value + step), [commit, value, step])
    const decrement = useCallback(() => commit(value - step), [commit, value, step])

    return (
      <div
        className={cn(
          'ms-number-field',
          `ms-number-field--${size}`,
          error && 'ms-number-field--error',
          disabled && 'ms-number-field--disabled',
          fullWidth && 'ms-number-field--fullWidth',
          className,
        )}
      >
        <button
          type="button"
          className="ms-number-field__btn ms-number-field__btn--decrement"
          onClick={decrement}
          disabled={disabled || (min !== undefined && value <= min)}
          tabIndex={-1}
          aria-label="Decrement"
        >
          -
        </button>
        <input
          ref={ref}
          type="number"
          className="ms-number-field__input"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          className="ms-number-field__btn ms-number-field__btn--increment"
          onClick={increment}
          disabled={disabled || (max !== undefined && value >= max)}
          tabIndex={-1}
          aria-label="Increment"
        >
          +
        </button>
      </div>
    )
  },
)
NumberField.displayName = 'NumberField'

export { NumberField, type NumberFieldProps, type NumberFieldSize }
