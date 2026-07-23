import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import { Spinner } from '../Spinner/Spinner.js'
import './Backdrop.css'

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  invisible?: boolean
}

const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  (
    { open, invisible = false, onClick, className, children, ...props },
    ref,
  ) => {
    if (!open) return null

    return (
      <div
        ref={ref}
        className={cn(
          'ms-backdrop',
          invisible && 'ms-backdrop--invisible',
          className,
        )}
        onClick={onClick}
        aria-hidden="true"
        {...props}
      >
        {children || <Spinner size="lg" color="primary" />}
      </div>
    )
  },
)

Backdrop.displayName = 'Backdrop'

export { Backdrop, type BackdropProps }
