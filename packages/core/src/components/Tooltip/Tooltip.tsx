import { forwardRef, useState, useRef, useEffect, useCallback, type ReactElement, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Tooltip.css'

type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'

interface TooltipProps {
  title: string
  children: ReactElement
  placement?: TooltipPlacement
  arrow?: boolean
  open?: boolean
  delay?: number
}

const placementMap: Record<TooltipPlacement, string> = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  'top-start': 'top',
  'top-end': 'top',
  'bottom-start': 'bottom',
  'bottom-end': 'bottom',
  'left-start': 'left',
  'left-end': 'left',
  'right-start': 'right',
  'right-end': 'right',
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ title, children, placement = 'top', arrow = true, open: controlledOpen, delay = 300 }, ref) => {
    const [internalOpen, setInternalOpen] = useState(false)
    const isControlled = controlledOpen !== undefined
    const visible = isControlled ? controlledOpen : internalOpen

    const triggerRef = useRef<HTMLElement | null>(null)
    const tooltipRef = useRef<HTMLDivElement | null>(null)
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const show = useCallback(() => {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        if (!isControlled) setInternalOpen(true)
      }, delay)
    }, [delay, isControlled])

    const hide = useCallback(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
      if (!isControlled) setInternalOpen(false)
    }, [isControlled])

    useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }, [])

    useEffect(() => {
      if (!visible || !triggerRef.current || !tooltipRef.current) return
      const trigger = triggerRef.current
      const tooltip = tooltipRef.current
      const triggerRect = trigger.getBoundingClientRect()
      const tooltipRect = tooltip.getBoundingClientRect()

      let top = 0
      let left = 0

      switch (placement) {
        case 'top':
          top = -tooltipRect.height - 8
          left = (triggerRect.width - tooltipRect.width) / 2
          break
        case 'bottom':
          top = triggerRect.height + 8
          left = (triggerRect.width - tooltipRect.width) / 2
          break
        case 'left':
          top = (triggerRect.height - tooltipRect.height) / 2
          left = -tooltipRect.width - 8
          break
        case 'right':
          top = (triggerRect.height - tooltipRect.height) / 2
          left = triggerRect.width + 8
          break
        case 'top-start':
          top = -tooltipRect.height - 8
          left = 0
          break
        case 'top-end':
          top = -tooltipRect.height - 8
          left = triggerRect.width - tooltipRect.width
          break
        case 'bottom-start':
          top = triggerRect.height + 8
          left = 0
          break
        case 'bottom-end':
          top = triggerRect.height + 8
          left = triggerRect.width - tooltipRect.width
          break
        case 'left-start':
          top = 0
          left = -tooltipRect.width - 8
          break
        case 'left-end':
          top = triggerRect.height - tooltipRect.height
          left = -tooltipRect.width - 8
          break
        case 'right-start':
          top = 0
          left = triggerRect.width + 8
          break
        case 'right-end':
          top = triggerRect.height - tooltipRect.height
          left = triggerRect.width + 8
          break
      }

      tooltip.style.top = `${top}px`
      tooltip.style.left = `${left}px`
    }, [visible, placement, children])

    const child = typeof children === 'object' && 'type' in children
      ? children
      : <span>{children}</span>

    return (
      <div
        ref={ref}
        className="ms-tooltip"
        onMouseEnter={show}
        onMouseLeave={hide}
        style={{ position: 'relative', display: 'inline-flex' }}
      >
        <span ref={triggerRef} style={{ display: 'inline-flex' }}>
          {children}
        </span>
        <div
          ref={(el) => {
            tooltipRef.current = el
          }}
          role="tooltip"
          className={cn(
            'ms-tooltip__content',
            `ms-tooltip--${placementMap[placement]}`,
            visible && 'ms-tooltip--visible',
          )}
        >
          {title}
          {arrow && <span className="ms-tooltip__arrow" />}
        </div>
      </div>
    )
  },
)

Tooltip.displayName = 'Tooltip'

export { Tooltip, type TooltipProps, type TooltipPlacement }
