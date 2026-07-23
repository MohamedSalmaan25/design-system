import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../utils/cn.js'
import { Backdrop } from '../Backdrop/Backdrop.js'
import './Dialog.css'

type DialogMaxWidth = 'sm' | 'md' | 'lg' | 'xl'

interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  maxWidth?: DialogMaxWidth
  fullWidth?: boolean
  fullScreen?: boolean
  children?: ReactNode
}

interface DialogTitleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

interface DialogActionsProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const Dialog = forwardRef<HTMLDivElement, DialogProps>(
  (
    { open, onClose, maxWidth = 'sm', fullWidth = false, fullScreen = false, children, className, ...props },
    ref,
  ) => {
    const paperRef = useRef<HTMLDivElement>(null)

    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose?.()
          return
        }
        if (e.key === 'Tab') {
          const paper = paperRef.current
          if (!paper) return
          const focusable = paper.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          )
          if (focusable.length === 0) return
          const first = focusable[0]
          const last = focusable[focusable.length - 1]
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault()
              last.focus()
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault()
              first.focus()
            }
          }
        }
      },
      [onClose],
    )

    useEffect(() => {
      if (!open) return
      document.addEventListener('keydown', handleKeyDown)
      const timer = setTimeout(() => {
        const first = paperRef.current?.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        )
        first?.focus()
      }, 50)
      return () => {
        clearTimeout(timer)
        document.removeEventListener('keydown', handleKeyDown)
      }
    }, [open, handleKeyDown])

    if (!open) return null

    return (
      <Backdrop open={open} onClick={onClose} className="ms-dialog__backdrop">
        <div
          ref={(node) => {
            if (typeof ref === 'function') ref(node)
            else if (ref) ref.current = node
            ;(paperRef as any).current = node
          }}
          role="dialog"
          aria-modal="true"
          className={cn(
            'ms-dialog',
            `ms-dialog--${maxWidth}`,
            fullWidth && 'ms-dialog--fullWidth',
            fullScreen && 'ms-dialog--fullScreen',
            className,
          )}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          <div className="ms-dialog__paper">{children}</div>
        </div>
      </Backdrop>
    )
  },
)

Dialog.displayName = 'Dialog'

const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('ms-dialog__title', className)} {...props}>
      {children}
    </div>
  ),
)

DialogTitle.displayName = 'Dialog.Title'

const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('ms-dialog__content', className)} {...props}>
      {children}
    </div>
  ),
)

DialogContent.displayName = 'Dialog.Content'

const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn('ms-dialog__actions', className)} {...props}>
      {children}
    </div>
  ),
)

DialogActions.displayName = 'Dialog.Actions'

const DialogCompound = Object.assign(Dialog, {
  Title: DialogTitle,
  Content: DialogContent,
  Actions: DialogActions,
})

export { DialogCompound as Dialog }
export type {
  DialogProps,
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
  DialogMaxWidth,
}
