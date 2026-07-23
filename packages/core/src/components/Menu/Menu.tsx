import {
  forwardRef,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
  useId,
  type ElementRef,
  type ReactNode,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
} from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../utils/cn.js'
import './Menu.css'

type MenuPlacement =
  | 'bottom-start'
  | 'bottom'
  | 'bottom-end'
  | 'top-start'
  | 'top'
  | 'top-end'

interface MenuContextValue {
  onItemClick?: () => void
  onItemSelect?: () => void
}

const MenuContext = createContext<MenuContextValue>({})

interface MenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  onClose: () => void
  placement?: MenuPlacement
  children?: ReactNode
}

function getPlacementStyles(anchorEl: HTMLElement, placement: MenuPlacement) {
  const rect = anchorEl.getBoundingClientRect()
  const styles: Record<string, string> = {}

  if (placement.startsWith('bottom')) {
    styles.top = `${rect.bottom + 4}px`
  } else {
    styles.bottom = `${window.innerHeight - rect.top + 4}px`
  }

  if (placement.endsWith('start')) {
    styles.left = `${rect.left}px`
  } else if (placement.endsWith('end')) {
    styles.left = `${rect.right}px`
    styles.transform = 'translateX(-100%)'
  } else {
    styles.left = `${rect.left + rect.width / 2}px`
    styles.transform = 'translateX(-50%)'
  }

  return styles
}

const Menu = forwardRef<ElementRef<'div'>, MenuProps>(
  ({ anchorEl, open, onClose, placement = 'bottom-start', children }, ref) => {
    const menuRef = useRef<HTMLDivElement | null>(null)
    const [menuStyle, setMenuStyle] = useState<Record<string, string>>({})
    const id = useId()

    useEffect(() => {
      if (open && anchorEl) {
        setMenuStyle(getPlacementStyles(anchorEl, placement))
      }
    }, [open, anchorEl, placement])

    useEffect(() => {
      if (!open) return

      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          onClose()
        }
      }

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }

      const handleScroll = () => {
        if (anchorEl) {
          setMenuStyle(getPlacementStyles(anchorEl, placement))
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
      window.addEventListener('scroll', handleScroll, true)
      window.addEventListener('resize', handleScroll)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
        document.removeEventListener('keydown', handleEscape)
        window.removeEventListener('scroll', handleScroll, true)
        window.removeEventListener('resize', handleScroll)
      }
    }, [open, onClose, anchorEl, placement])

    const handleItemClick = useCallback(() => {
      onClose()
    }, [onClose])

    if (!open) return null

    return createPortal(
      <div
        ref={(node) => {
          if (typeof ref === 'function') ref(node)
          else if (ref) ref.current = node
          menuRef.current = node
        }}
        role="menu"
        className="ms-menu"
        style={menuStyle}
        aria-labelledby={id}
      >
        <MenuContext.Provider value={{ onItemClick: handleItemClick }}>
          <div className="ms-menu__paper">
            <ul className="ms-menu__list">{children}</ul>
          </div>
        </MenuContext.Provider>
      </div>,
      document.body,
    )
  },
)

Menu.displayName = 'Menu'

interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  disabled?: boolean
  selected?: boolean
  icon?: ReactNode
  children?: ReactNode
}

const Item = forwardRef<ElementRef<'button'>, MenuItemProps>(
  ({ onClick, disabled, selected, icon, className, children, ...props }, ref) => {
    const { onItemClick } = useContext(MenuContext)

    const handleClick = () => {
      if (disabled) return
      onClick?.()
      onItemClick?.()
    }

    return (
      <li role="none">
        <button
          ref={ref}
          role="menuitem"
          disabled={disabled}
          className={cn(
            'ms-menu-item',
            selected && 'ms-menu-item--selected',
            disabled && 'ms-menu-item--disabled',
            className,
          )}
          onClick={handleClick}
          {...props}
        >
          {icon && <span className="ms-menu-item__icon">{icon}</span>}
          <span className="ms-menu-item__label">{children}</span>
        </button>
      </li>
    )
  },
)

Item.displayName = 'Menu.Item'

interface MenuDividerProps extends HTMLAttributes<HTMLHRElement> {}

const Divider = forwardRef<ElementRef<'hr'>, MenuDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <li role="none">
        <hr
          ref={ref}
          role="separator"
          className={cn('ms-menu-divider', className)}
          {...props}
        />
      </li>
    )
  },
)

Divider.displayName = 'Menu.Divider'

export { Menu, Item, Divider }
export type { MenuProps, MenuItemProps, MenuDividerProps, MenuPlacement }
