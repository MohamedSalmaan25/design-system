import { forwardRef, useState, useCallback, useRef, type ChangeEvent, type MutableRefObject } from 'react'
import { cn } from '../../utils/cn.js'
import './Switch.css'

export interface SwitchProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  size?: 'sm' | 'md'
  color?: 'primary' | 'danger' | 'success'
  label?: string
  className?: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled,
      size = 'md',
      color = 'primary',
      label,
      className,
    },
    ref,
  ) => {
    const isControlled = controlledChecked !== undefined
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const checked = isControlled ? controlledChecked : internalChecked
    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked)
      onChange?.(e)
    }, [isControlled, onChange])

    return (
      <label
        className={cn(
          'ms-switch',
          `ms-switch--${size}`,
          `ms-switch--${color}`,
          checked && 'ms-switch--checked',
          disabled && 'ms-switch--disabled',
          className,
        )}
      >
        <input
          type="checkbox"
          ref={(el) => {
            inputRef.current = el
            if (typeof ref === 'function') ref(el)
            else if (ref && 'current' in ref) (ref as MutableRefObject<HTMLInputElement | null>).current = el
          }}
          checked={isControlled ? controlledChecked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={handleChange}
          disabled={disabled}
          className="ms-switch__input"
          role="switch"
        />
        <span className="ms-switch__track" aria-hidden="true">
          <span className="ms-switch__thumb" />
        </span>
        {label && <span className="ms-switch__label">{label}</span>}
      </label>
    )
  },
)

Switch.displayName = 'Switch'
