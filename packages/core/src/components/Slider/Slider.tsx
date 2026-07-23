import { forwardRef, useState, useCallback, useRef, useEffect, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Slider.css'

type Mark = { value: number; label?: string }

interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  marks?: boolean | Mark[]
  showValue?: 'off' | 'on' | 'auto'
  orientation?: 'horizontal' | 'vertical'
}

const Slider = forwardRef<ElementRef<'div'>, SliderProps>(
  ({
    value: controlledValue,
    defaultValue = 0,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    disabled = false,
    marks = false,
    showValue = 'off',
    orientation = 'horizontal',
    className,
    ...props
  }, ref) => {
    const isControlled = controlledValue !== undefined
    const [internalValue, setInternalValue] = useState(defaultValue)
    const [dragging, setDragging] = useState(false)
    const trackRef = useRef<HTMLDivElement>(null)
    const value = isControlled ? controlledValue : internalValue
    const pct = ((value - min) / (max - min)) * 100

    const updateValue = useCallback((clientX: number, clientY: number) => {
      if (!trackRef.current || disabled) return
      const rect = trackRef.current.getBoundingClientRect()
      let raw: number
      if (orientation === 'horizontal') {
        raw = (clientX - rect.left) / rect.width
      } else {
        raw = 1 - (clientY - rect.top) / rect.height
      }
      const clamped = Math.min(1, Math.max(0, raw))
      const scaled = min + clamped * (max - min)
      const stepped = Math.round((scaled - min) / step) * step + min
      const final = Math.min(max, Math.max(min, stepped))
      if (!isControlled) setInternalValue(final)
      onChange?.(final)
    }, [min, max, step, disabled, isControlled, onChange, orientation])

    const handleMouseDown = useCallback((e: React.MouseEvent) => {
      e.preventDefault()
      setDragging(true)
      updateValue(e.clientX, e.clientY)
    }, [updateValue])

    useEffect(() => {
      if (!dragging) return
      const handleMove = (e: MouseEvent) => {
        e.preventDefault()
        updateValue(e.clientX, e.clientY)
      }
      const handleUp = () => setDragging(false)
      window.addEventListener('mousemove', handleMove)
      window.addEventListener('mouseup', handleUp)
      return () => {
        window.removeEventListener('mousemove', handleMove)
        window.removeEventListener('mouseup', handleUp)
      }
    }, [dragging, updateValue])

    const markArr: Mark[] = Array.isArray(marks) ? marks : marks ? Array.from({ length: 5 }, (_, i) => ({ value: min + (i * (max - min)) / 4 })) : []

    const showVal = showValue === 'on' || (showValue === 'auto' && dragging)

    return (
      <div
        ref={ref}
        className={cn(
          'ms-slider',
          orientation === 'vertical' && 'ms-slider--vertical',
          disabled && 'ms-slider--disabled',
          className,
        )}
        {...props}
      >
        <div
          ref={trackRef}
          className="ms-slider__track"
          onMouseDown={handleMouseDown}
          style={orientation === 'vertical' ? { height: '100%' } : undefined}
        >
          <div className="ms-slider__rail" />
          <div
            className="ms-slider__fill"
            style={orientation === 'horizontal' ? { width: `${pct}%` } : { height: `${pct}%` }}
          />
          <div
            className="ms-slider__thumb"
            style={orientation === 'horizontal' ? { left: `${pct}%` } : { bottom: `${pct}%` }}
            tabIndex={disabled ? -1 : 0}
            role="slider"
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={value}
            aria-disabled={disabled}
          />
        </div>
        {showVal && <div className="ms-slider__value">{value}</div>}
        {marks && markArr.length > 0 && (
          <div className="ms-slider__marks">
            {markArr.map((mark, i) => {
              const mpct = ((mark.value - min) / (max - min)) * 100
              return (
                <div
                  key={i}
                  className="ms-slider__mark"
                  style={orientation === 'horizontal' ? { left: `${mpct}%` } : { bottom: `${mpct}%` }}
                >
                  {mark.label && <span className="ms-slider__mark-label">{mark.label}</span>}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  },
)
Slider.displayName = 'Slider'

export { Slider, type SliderProps }
