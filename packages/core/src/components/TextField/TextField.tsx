import { forwardRef, useId, useState, useCallback, type InputHTMLAttributes, type TextareaHTMLAttributes, type ChangeEvent, type FocusEvent } from 'react'
import { cn } from '../../utils/cn.js'
import './TextField.css'

type TextFieldSize = 'sm' | 'md' | 'lg'
type TextFieldVariant = 'outlined' | 'filled' | 'standard'

interface BaseTextFieldProps {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  size?: TextFieldSize
  variant?: TextFieldVariant
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
}

interface TextFieldAsInput extends BaseTextFieldProps, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  multiline?: false
  rows?: never
}

interface TextFieldAsTextarea extends BaseTextFieldProps, Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  multiline: true
  rows?: number
}

type TextFieldProps = TextFieldAsInput | TextFieldAsTextarea

const TextField = forwardRef<HTMLInputElement | HTMLTextAreaElement, TextFieldProps>(
  (props, ref) => {
    const merged = props as BaseTextFieldProps & Record<string, unknown>
    const label = merged.label as string | undefined
    const helperText = merged.helperText as string | undefined
    const error = !!merged.error
    const fullWidth = !!merged.fullWidth
    const size = (merged.size as string) || 'md'
    const variant = (merged.variant as string) || 'outlined'
    const startAdornment = merged.startAdornment as React.ReactNode | undefined
    const endAdornment = merged.endAdornment as React.ReactNode | undefined
    const multiline = !!merged.multiline
    const className = merged.className as string | undefined

    const knownKeys = new Set(['label', 'helperText', 'error', 'fullWidth', 'size', 'variant', 'startAdornment', 'endAdornment', 'multiline', 'className'])
    const r: Record<string, unknown> = {}
    for (const key of Object.keys(merged)) {
      if (!knownKeys.has(key)) r[key] = merged[key]
    }

    const id = useId()
    const inputId = (r.id as string) || `ms-textfield-${id}`
    const [focused, setFocused] = useState(false)
    const [hasInput, setHasInput] = useState(
      (r.value !== undefined && r.value !== '') ||
      (r.defaultValue !== undefined && r.defaultValue !== '')
    )
    const isFloating = focused || hasInput

    const handleFocus = useCallback((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(true);
      (r.onFocus as ((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined)?.(e)
    }, [])

    const handleBlur = useCallback((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFocused(false);
      (r.onBlur as ((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined)?.(e)
    }, [])

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setHasInput(e.target.value !== '');
      (r.onChange as ((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void) | undefined)?.(e)
    }, [])

    const rootClassName = cn(
      'ms-textfield',
      `ms-textfield--${variant}`,
      `ms-textfield--${size}`,
      fullWidth && 'ms-textfield--fullWidth',
      error && 'ms-textfield--error',
      focused && 'ms-textfield--focused',
      label && isFloating && 'ms-textfield--floating',
      multiline && 'ms-textfield--multiline',
      className,
    )

    const placeholder = label && !isFloating ? '' : (r.placeholder as string | undefined)

    return (
      <div className={rootClassName}>
        {startAdornment && <span className="ms-textfield__adornment ms-textfield__adornment--start">{startAdornment}</span>}
        <div className="ms-textfield__wrapper">
          {multiline ? (
            <textarea
              id={inputId}
              className="ms-textfield__input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={placeholder}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              rows={(r.rows as number) || 4}
              {...r as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>}
            />
          ) : (
            <input
              id={inputId}
              className="ms-textfield__input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={placeholder}
              ref={ref as React.Ref<HTMLInputElement>}
              {...r as unknown as InputHTMLAttributes<HTMLInputElement>}
            />
          )}
          {label && <label htmlFor={inputId} className="ms-textfield__label">{label}</label>}
        </div>
        {endAdornment && <span className="ms-textfield__adornment ms-textfield__adornment--end">{endAdornment}</span>}
        {helperText && <p className="ms-textfield__helper">{helperText}</p>}
      </div>
    )
  },
)

TextField.displayName = 'TextField'

export { TextField, type TextFieldProps, type TextFieldSize, type TextFieldVariant }