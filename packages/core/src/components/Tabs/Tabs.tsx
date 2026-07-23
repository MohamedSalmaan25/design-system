import {
  forwardRef,
  createContext,
  useContext,
  useCallback,
  useRef,
  Children,
  type ElementRef,
  type ReactNode,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactElement,
} from 'react'
import { cn } from '../../utils/cn.js'
import './Tabs.css'

type TabsOrientation = 'horizontal' | 'vertical'
type TabsVariant = 'standard' | 'scrollable' | 'fullWidth'

interface TabsContextValue {
  value: string | number
  onChange?: (value: string | number) => void
  orientation: TabsOrientation
  variant: TabsVariant
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const ctx = useContext(TabsContext)
  if (!ctx) throw new Error('Tab compound components must be used within <Tabs>')
  return ctx
}

interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string | number
  onChange?: (value: string | number) => void
  orientation?: TabsOrientation
  variant?: TabsVariant
  children?: ReactNode
}

const Tabs = forwardRef<ElementRef<'div'>, TabsProps>(
  (
    {
      value,
      onChange,
      orientation = 'horizontal',
      variant = 'standard',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const tabListRef = useRef<HTMLDivElement>(null)

    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        const tabs = e.currentTarget.querySelectorAll<HTMLButtonElement>(
          '.ms-tab:not(.ms-tab--disabled)',
        )
        const currentIndex = Array.from(tabs).findIndex(
          (tab) => tab.dataset.value === String(value),
        )
        let nextIndex = currentIndex

        if (orientation === 'horizontal') {
          if (e.key === 'ArrowRight') nextIndex = Math.min(currentIndex + 1, tabs.length - 1)
          else if (e.key === 'ArrowLeft') nextIndex = Math.max(currentIndex - 1, 0)
        } else {
          if (e.key === 'ArrowDown') nextIndex = Math.min(currentIndex + 1, tabs.length - 1)
          else if (e.key === 'ArrowUp') nextIndex = Math.max(currentIndex - 1, 0)
        }

        if (nextIndex !== currentIndex && tabs[nextIndex]) {
          e.preventDefault()
          const nextValue = tabs[nextIndex].dataset.value
          if (nextValue !== undefined) {
            onChange?.(/^\d+$/.test(nextValue) ? Number(nextValue) : nextValue)
            tabs[nextIndex]?.focus()
          }
        }
      },
      [value, onChange, orientation],
    )

    const tabsList: ReactElement[] = []
    const panels: ReactElement[] = []

    Children.forEach(children, (child) => {
      if (!child) return
      const el = child as ReactElement
      if (el.type === Tab) {
        tabsList.push(el)
      } else if (el.type === TabPanel) {
        panels.push(el)
      }
    })

    return (
      <TabsContext.Provider value={{ value, onChange, orientation, variant }}>
        <div
          ref={ref}
          className={cn(
            'ms-tabs',
            orientation === 'vertical' && 'ms-tabs--vertical',
            variant === 'scrollable' && 'ms-tabs--scrollable',
            variant === 'fullWidth' && 'ms-tabs--fullWidth',
            className,
          )}
          {...props}
        >
          <div
            ref={tabListRef}
            className="ms-tabs__tab-list"
            role="tablist"
            aria-orientation={orientation}
            onKeyDown={handleKeyDown}
          >
            {tabsList}
          </div>
          {panels.length > 0 && (
            <div className="ms-tabs__panels">
              {panels}
            </div>
          )}
        </div>
      </TabsContext.Provider>
    )
  },
)

Tabs.displayName = 'Tabs'

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string | number
  label?: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

const Tab = forwardRef<ElementRef<'button'>, TabProps>(
  ({ value: tabValue, label, icon, disabled, className, children, ...props }, ref) => {
    const { value, onChange } = useTabsContext()
    const isActive = value === tabValue

    return (
      <button
        ref={ref}
        role="tab"
        data-value={tabValue}
        aria-selected={isActive}
        disabled={disabled}
        className={cn(
          'ms-tab',
          isActive && 'ms-tab--active',
          disabled && 'ms-tab--disabled',
          className,
        )}
        onClick={() => onChange?.(tabValue)}
        {...props}
      >
        {icon && <span className="ms-tab__icon">{icon}</span>}
        {(label || children) && <span className="ms-tab__label">{label || children}</span>}
        {isActive && <span className="ms-tab__indicator" />}
      </button>
    )
  },
)

Tab.displayName = 'Tab'

interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string | number
  children?: ReactNode
}

const TabPanel = forwardRef<ElementRef<'div'>, TabPanelProps>(
  ({ value: panelValue, children, className, ...props }, ref) => {
    const { value } = useTabsContext()
    const isActive = value === panelValue

    if (!isActive) return null

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn('ms-tab-panel', className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

TabPanel.displayName = 'Tab.Panel'

export { Tabs, Tab, TabPanel }
export type { TabsProps, TabProps, TabPanelProps, TabsOrientation, TabsVariant }
