import { forwardRef, useId, useState, useCallback, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react'
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
    const {
      label,
      helperText,
      error = false,
      fullWidth = false,
      size = 'md',
      variant = 'outlined',
      startAdornment,
      endAdornment,
      multiline = false,
      className,
      ...rest
    } = props as BaseTextFieldProps & Record<string, any>

    const id = useId()
    const inputId = (rest as any).id || `ms-textfield-${id}`
    const [focused, setFocused] = useState(false)
    const [hasInput, setHasInput] = useState(
      ((rest as any).value !== undefined && (rest as any).value !== '') ||
      ((rest as any).defaultValue !== undefined && (rest as any).defaultValue !== '')
    )
    const isFloating = focused || hasInput

    const handleFocus = useCallback((e: any) => {
      setFocused(true)
      ;(rest as any).onFocus?.(e)
    }, [rest])

    const handleBlur = useCallback((e: any) => {
      setFocused(false)
      ;(rest as any).onBlur?.(e)
    }, [rest])

    const handleChange = useCallback((e: any) => {
      setHasInput(e.target.value !== '')
      ;(rest as any).onChange?.(e)
    }, [rest])

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

    const inputProps = {
      id: inputId,
      className: 'ms-textfield__input',
      onFocus: handleFocus,
      onBlur: handleBlur,
      onChange: handleChange,
      placeholder: label && !isFloating ? '' : (rest as any).placeholder,
      ref,
      ...rest,
    }

    return (
      <div className={rootClassName}>
        {startAdornment && <span className="ms-textfield__adornment ms-textfield__adornment--start">{startAdornment}</span>}
        <div className="ms-textfield__wrapper">
          {multiline ? (
            <textarea {...inputProps as any} rows={(props as any).rows || 4} />
          ) : (
            <input {...inputProps as any} />
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

export { TextField, type TextFieldProps }
