import {
  forwardRef,
  useEffect,
  useRef,
  type ElementRef,
  type MutableRefObject,
  type ReactNode,
  type HTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn.js'
import './Drawer.css'

type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom'
type DrawerVariant = 'temporary' | 'persistent' | 'permanent'

interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  onClose?: () => void
  anchor?: DrawerAnchor
  variant?: DrawerVariant
  width?: number | string
  children?: ReactNode
}

const Drawer = forwardRef<ElementRef<'div'>, DrawerProps>(
  (
    {
      open,
      onClose,
      anchor = 'left',
      variant = 'temporary',
      width = 280,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const drawerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      if (!open || variant !== 'temporary') return

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose?.()
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [open, onClose, variant])

    const widthStyle = anchor === 'left' || anchor === 'right' ? { width } : { height: width }
    const isHorizontal = anchor === 'left' || anchor === 'right'

    const paper = (
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node)
          else if (ref && 'current' in ref) (ref as MutableRefObject<HTMLDivElement | null>).current = node
          drawerRef.current = node
        }}
        className={cn(
          'ms-drawer',
          `ms-drawer--${anchor}`,
          `ms-drawer--${variant}`,
          open && 'ms-drawer--open',
          className,
        )}
        style={widthStyle}
        {...props}
      >
        <div className="ms-drawer__paper">{children}</div>
      </div>
    )

    if (variant === 'temporary') {
      if (!open) return null
      return createPortal(
        <>
          <div
            className="ms-drawer__backdrop"
            onClick={onClose}
            aria-hidden="true"
          />
          {paper}
        </>,
        document.body,
      )
    }

    if (variant === 'persistent') {
      return (
        <>
          {paper}
        </>
      )
    }

    return paper
  },
)

Drawer.displayName = 'Drawer'

export { Drawer, type DrawerProps, type DrawerAnchor, type DrawerVariant }
