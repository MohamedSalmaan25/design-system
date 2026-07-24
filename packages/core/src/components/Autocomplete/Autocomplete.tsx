import { forwardRef, useState, useRef, useEffect, useCallback, type HTMLAttributes, type MutableRefObject } from 'react'
import { cn } from '../../utils/cn.js'
import '../TextField/TextField.css'
import './Autocomplete.css'

interface AutocompleteOption {
  value: string
  label: string
}

interface AutocompleteProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  options: AutocompleteOption[]
  value?: AutocompleteOption | null
  defaultValue?: AutocompleteOption | null
  onChange?: (option: AutocompleteOption | null) => void
  onInputChange?: (value: string) => void
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  fullWidth?: boolean
  freeSolo?: boolean
  loading?: boolean
  noOptionsText?: string
}

const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue = null,
      onChange,
      onInputChange,
      label,
      placeholder,
      disabled = false,
      error = false,
      fullWidth = false,
      freeSolo: _freeSolo = false,
      loading = false,
      noOptionsText = 'No options',
      className,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [focused, setFocused] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const [selectedValue, setSelectedValue] = useState<AutocompleteOption | null>(defaultValue)
    const inputRef = useRef<HTMLInputElement>(null)
    const listRef = useRef<HTMLUListElement>(null)
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    const isControlled = controlledValue !== undefined
    const currentValue = isControlled ? controlledValue : selectedValue
    const isFloating = focused || !!inputValue

    const filteredOptions = options.filter(opt =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase()),
    )

    const selectOption = useCallback((option: AutocompleteOption | null) => {
      if (!isControlled) setSelectedValue(option)
      onChange?.(option)
      setInputValue(option ? option.label : '')
      setOpen(false)
    }, [isControlled, onChange])

    useEffect(() => {
      if (open && filteredOptions.length > 0) {
        setHighlightedIndex(0)
      }
    }, [open, filteredOptions.length])

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          setOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (!open) { setOpen(true); return }
        setHighlightedIndex(i => Math.min(i + 1, filteredOptions.length - 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setHighlightedIndex(i => Math.max(i - 1, 0))
      } else if (e.key === 'Enter' && open && highlightedIndex >= 0) {
        e.preventDefault()
        selectOption(filteredOptions[highlightedIndex])
      } else if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    const showOptions = open && !disabled

    return (
      <div
        ref={(el) => {
          wrapperRef.current = el
          if (typeof ref === 'function') ref(el)
          else if (ref && 'current' in ref) (ref as MutableRefObject<HTMLDivElement | null>).current = el
        }}
        className={cn(
          'ms-autocomplete',
          fullWidth && 'ms-autocomplete--fullWidth',
          error && 'ms-autocomplete--error',
          disabled && 'ms-autocomplete--disabled',
          focused && 'ms-autocomplete--focused',
          label && isFloating && 'ms-autocomplete--floating',
          className,
        )}
        {...props}
      >
        <div className="ms-autocomplete__input-wrapper">
          <input
            ref={inputRef}
            className="ms-textfield__input ms-autocomplete__input"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
              onInputChange?.(e.target.value)
              setOpen(true)
            }}
            onFocus={() => { setFocused(true); setOpen(true) }}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={label && !isFloating ? '' : placeholder}
            disabled={disabled}
            role="combobox"
            aria-expanded={showOptions}
            aria-haspopup="listbox"
          />
          {label && <label className="ms-autocomplete__label">{label}</label>}
          <span className="ms-autocomplete__indicator" onClick={() => !disabled && setOpen(o => !o)}>
            &#9660;
          </span>
        </div>

        {showOptions && (
          <ul
            ref={listRef}
            className="ms-autocomplete__listbox"
            role="listbox"
          >
            {loading ? (
              <li className="ms-autocomplete__option ms-autocomplete__option--loading">
                Loading...
              </li>
            ) : filteredOptions.length === 0 ? (
              <li className="ms-autocomplete__option ms-autocomplete__option--no-results">
                {noOptionsText}
              </li>
            ) : (
              filteredOptions.map((opt, idx) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={currentValue?.value === opt.value}
                  className={cn(
                    'ms-autocomplete__option',
                    idx === highlightedIndex && 'ms-autocomplete__option--highlighted',
                    currentValue?.value === opt.value && 'ms-autocomplete__option--selected',
                  )}
                  onClick={() => selectOption(opt)}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                >
                  {opt.label}
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    )
  },
)

Autocomplete.displayName = 'Autocomplete'

export { Autocomplete, type AutocompleteProps, type AutocompleteOption }
