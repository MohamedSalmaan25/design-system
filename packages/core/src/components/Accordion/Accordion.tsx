import { createContext, forwardRef, useContext, useState, useCallback, useRef, useEffect, type ReactNode, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Accordion.css'

/* --- Contexts --- */

interface AccordionContextValue {
  expandedValues: Set<string>
  toggleItem: (value: string) => void
}

const AccordionContext = createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion compound components must be used within Accordion')
  return ctx
}

interface AccordionItemContextValue {
  value: string
  disabled: boolean
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(null)

function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext)
  if (!ctx) throw new Error('Accordion.Item compound components must be used within Accordion.Item')
  return ctx
}

/* --- Types --- */

interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultExpandedItem?: string | string[]
  onChange?: (value: string) => void
  allowMultiple?: boolean
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  disabled?: boolean
}

interface AccordionSummaryProps extends HTMLAttributes<HTMLDivElement> {
  expandIcon?: ReactNode
}

interface AccordionDetailsProps extends HTMLAttributes<HTMLDivElement> {
}

/* --- Accordion --- */

const Accordion = forwardRef<ElementRef<'div'>, AccordionProps>(
  ({ defaultExpandedItem, onChange, allowMultiple = false, className, children, ...props }, ref) => {
    const [expandedValues, setExpandedValues] = useState<Set<string>>(() => {
      const initial = defaultExpandedItem
        ? Array.isArray(defaultExpandedItem) ? defaultExpandedItem : [defaultExpandedItem]
        : []
      return new Set(initial)
    })

    const toggleItem = useCallback((value: string) => {
      setExpandedValues(prev => {
        const next = new Set(prev)
        if (next.has(value)) {
          next.delete(value)
        } else {
          if (!allowMultiple) {
            next.clear()
          }
          next.add(value)
        }
        return next
      })
      onChange?.(value)
    }, [allowMultiple, onChange])

    return (
      <AccordionContext.Provider value={{ expandedValues, toggleItem }}>
        <div ref={ref} className={cn('ms-accordion', className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    )
  },
)
Accordion.displayName = 'Accordion'

/* --- Accordion.Item --- */

const AccordionItem = forwardRef<ElementRef<'div'>, AccordionItemProps>(
  ({ value, disabled = false, className, children, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value, disabled }}>
        <div
          ref={ref}
          className={cn('ms-accordion__item', disabled && 'ms-accordion__item--disabled', className)}
          data-disabled={disabled || undefined}
          {...props}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    )
  },
)
AccordionItem.displayName = 'Accordion.Item'

/* --- Accordion.Summary --- */

const defaultChevron = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AccordionSummary = forwardRef<ElementRef<'div'>, AccordionSummaryProps>(
  ({ expandIcon, className, children, onClick, ...props }, ref) => {
    const { expandedValues, toggleItem } = useAccordionContext()
    const { value, disabled } = useAccordionItemContext()
    const isExpanded = expandedValues.has(value)

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return
      onClick?.(e)
      toggleItem(value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        toggleItem(value)
      }
    }

    return (
      <div
        ref={ref}
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={cn('ms-accordion__summary', isExpanded && 'ms-accordion__summary--expanded', className)}
        aria-expanded={isExpanded}
        aria-disabled={disabled || undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <span className="ms-accordion__summary-content">{children}</span>
        <span className={cn('ms-accordion__expand-icon', isExpanded && 'ms-accordion__expand-icon--expanded')}>
          {expandIcon ?? defaultChevron}
        </span>
      </div>
    )
  },
)
AccordionSummary.displayName = 'Accordion.Summary'

/* --- Accordion.Details --- */

const AccordionDetails = forwardRef<ElementRef<'div'>, AccordionDetailsProps>(
  ({ children, className, ...props }, ref) => {
    const { expandedValues } = useAccordionContext()
    const { value } = useAccordionItemContext()
    const isExpanded = expandedValues.has(value)
    const innerRef = useRef<HTMLDivElement>(null)
    const [maxHeight, setMaxHeight] = useState('0')

    useEffect(() => {
      if (innerRef.current) {
        setMaxHeight(isExpanded ? `${innerRef.current.scrollHeight}px` : '0')
      }
    }, [isExpanded, children])

    return (
      <div
        ref={ref}
        className={cn('ms-accordion__details', isExpanded && 'ms-accordion__details--expanded', className)}
        style={{ maxHeight }}
        {...props}
      >
        <div ref={innerRef}>{children}</div>
      </div>
    )
  },
)
AccordionDetails.displayName = 'Accordion.Details'

/* --- Static compound members --- */

interface AccordionComponent
  extends React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>> {
  Item: typeof AccordionItem
  Summary: typeof AccordionSummary
  Details: typeof AccordionDetails
}

;(Accordion as AccordionComponent).Item = AccordionItem
;(Accordion as AccordionComponent).Summary = AccordionSummary
;(Accordion as AccordionComponent).Details = AccordionDetails

const AccordionFinal = Accordion as AccordionComponent

export { AccordionFinal as Accordion }
export type { AccordionProps, AccordionItemProps, AccordionSummaryProps, AccordionDetailsProps }
