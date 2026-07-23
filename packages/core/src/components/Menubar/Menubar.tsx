import { forwardRef, useState, useCallback, useRef, useEffect, type HTMLAttributes, type ElementRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Menubar.css'

/* --- Menubar --- */
interface MenubarProps extends HTMLAttributes<HTMLDivElement> {}

const MenubarContext = forwardRef<ElementRef<'div'>, MenubarProps>(
  ({ className, children, ...props }, ref) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const menubarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menubarRef.current && !menubarRef.current.contains(e.target as Node)) {
          setActiveIndex(null)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const items = (Array.isArray(children) ? children : [children]).filter(
      (c): c is React.ReactElement<MenubarItemProps> => c != null && typeof c === 'object' && 'type' in c,
    )

    return (
      <div ref={menubarRef}>
        <div
          ref={ref}
          role="menubar"
          className={cn('ms-menubar', className)}
          {...props}
        >
          {items.map((child, index) => {
            const isOpen = activeIndex === index
            return (
              <div key={index} className="ms-menubar__item-wrapper" style={{ position: 'relative' }}>
                <button
                  role="menuitem"
                  className={cn(
                    'ms-menubar__item',
                    isOpen && 'ms-menubar__item--active',
                  )}
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  onMouseEnter={() => {
                    if (activeIndex !== null) setActiveIndex(index)
                  }}
                >
                  {(child as any).props?.trigger}
                </button>
                {isOpen && (
                  <div className="ms-menubar__menu" role="menu">
                    {(child as any).props?.children}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)
MenubarContext.displayName = 'Menubar'

/* --- Menubar.Item --- */
interface MenubarItemProps {
  trigger: React.ReactNode
  children?: React.ReactNode
}

const Item: React.FC<MenubarItemProps> = () => null
Item.displayName = 'Menubar.Item'

/* --- Menubar.Menu --- */
interface MenubarMenuProps extends HTMLAttributes<HTMLDivElement> {}

const Menu = forwardRef<ElementRef<'div'>, MenubarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('ms-menubar__menu-inner', className)} {...props}>
      {children}
    </div>
  ),
)
Menu.displayName = 'Menubar.Menu'

;(MenubarContext as any).Item = Item
;(MenubarContext as any).Menu = Menu

const Menubar = MenubarContext as typeof MenubarContext & {
  Item: typeof Item
  Menu: typeof Menu
}

export { Menubar, type MenubarProps, type MenubarItemProps, type MenubarMenuProps }
