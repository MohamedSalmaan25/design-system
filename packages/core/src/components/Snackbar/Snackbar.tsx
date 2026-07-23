import { forwardRef, useEffect, useState, useCallback, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn.js'
import './Snackbar.css'

type SnackbarPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
type SnackbarSeverity = 'success' | 'info' | 'warning' | 'error'

interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  message?: ReactNode
  onClose?: () => void
  autoHideDuration?: number
  action?: ReactNode
  position?: SnackbarPosition
  severity?: SnackbarSeverity
}

const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    {
      open,
      message,
      onClose,
      autoHideDuration = 5000,
      action,
      position = 'bottom-center',
      severity,
      className,
      ...props
    },
    ref,
  ) => {
    const [exiting, setExiting] = useState(false)

    const handleClose = useCallback(() => {
      setExiting(true)
      setTimeout(() => {
        setExiting(false)
        onClose?.()
      }, 200)
    }, [onClose])

    useEffect(() => {
      if (!open || !autoHideDuration) return
      const timer = setTimeout(handleClose, autoHideDuration)
      return () => clearTimeout(timer)
    }, [open, autoHideDuration, handleClose])

    if (!open && !exiting) return null

    const [vert, horiz] = position.split('-') as [string, string]

    return (
      <div
        ref={ref}
        className={cn(
          'ms-snackbar',
          `ms-snackbar--${vert}-${horiz}`,
          severity && `ms-snackbar--${severity}`,
          open && !exiting ? 'ms-snackbar--enter' : 'ms-snackbar--exit',
          className,
        )}
        role="alert"
        aria-live="assertive"
        {...props}
      >
        <span className="ms-snackbar__content">{message}</span>
        {action && <span className="ms-snackbar__action">{action}</span>}
      </div>
    )
  },
)

Snackbar.displayName = 'Snackbar'

export { Snackbar, type SnackbarProps, type SnackbarPosition, type SnackbarSeverity }
