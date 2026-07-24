import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils/cn.js'
import './Alert.css'

type AlertSeverity = 'success' | 'info' | 'warning' | 'error'
type AlertVariant = 'filled' | 'outlined' | 'standard'

interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  severity?: AlertSeverity
  variant?: AlertVariant
  onClose?: () => void
  icon?: ReactNode
  title?: ReactNode
  children?: ReactNode
}

const iconMap: Record<AlertSeverity, string> = {
  success: '✓',
  info: 'i',
  warning: '!',
  error: 'X',
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      severity = 'info',
      variant = 'standard',
      onClose,
      icon,
      title,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'ms-alert',
          `ms-alert--${severity}`,
          `ms-alert--${variant}`,
          className,
        )}
        {...props}
      >
        {icon !== null && (
          <span className="ms-alert__icon" aria-hidden="true">
            {icon ?? iconMap[severity]}
          </span>
        )}
        <span className="ms-alert__content">
          {title && <span className="ms-alert__title">{title}</span>}
          {children}
        </span>
        {onClose && (
          <button
            type="button"
            className="ms-alert__close"
            aria-label="Close"
            onClick={onClose}
          >
            X
          </button>
        )}
      </div>
    )
  },
)

Alert.displayName = 'Alert'

export { Alert, type AlertProps, type AlertSeverity, type AlertVariant }
