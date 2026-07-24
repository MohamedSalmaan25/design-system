import {
  forwardRef,
  createContext,
  Children,
  isValidElement,
  type ElementRef,
  type ReactNode,
  type HTMLAttributes,
  type AnchorHTMLAttributes,
} from 'react'
import { cn } from '../../utils/cn.js'
import './Breadcrumbs.css'

interface BreadcrumbsContextValue {
  separator: ReactNode
  separatorClass: string
}

const BreadcrumbsContext = createContext<BreadcrumbsContextValue>({
  separator: '/',
  separatorClass: '',
})

interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  separator?: ReactNode
  maxItems?: number
  itemsBeforeCollapse?: number
  itemsAfterCollapse?: number
  children?: ReactNode
}

const Breadcrumbs = forwardRef<ElementRef<'nav'>, BreadcrumbsProps>(
  (
    {
      separator = '/',
      maxItems,
      itemsBeforeCollapse = 1,
      itemsAfterCollapse = 1,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const items = Children.toArray(children).filter(isValidElement)
    const totalItems = items.length
    const shouldCollapse =
      maxItems !== undefined && totalItems > maxItems

    let visibleItems: React.ReactElement[] = []

    if (shouldCollapse) {
      const before = items.slice(0, itemsBeforeCollapse)
      const after = items.slice(totalItems - itemsAfterCollapse)
      const collapsed = (
        <BreadcrumbsCollapsed key="ms-collapsed" />
      )
      visibleItems = [...before, collapsed, ...after]
    } else {
      visibleItems = items as React.ReactElement[]
    }

    return (
      <BreadcrumbsContext.Provider
        value={{ separator, separatorClass: 'ms-breadcrumbs__separator' }}
      >
        <nav
          ref={ref}
          className={cn('ms-breadcrumbs', className)}
          aria-label="Breadcrumb"
          {...props}
        >
          <ol className="ms-breadcrumbs__list">
            {visibleItems.map((item, index) => (
              <li key={index} className="ms-breadcrumbs__item">
                {item}
                {index < visibleItems.length - 1 && (
                  <span className="ms-breadcrumbs__separator" aria-hidden="true">
                    {separator}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </BreadcrumbsContext.Provider>
    )
  },
)

Breadcrumbs.displayName = 'Breadcrumbs'

interface BreadcrumbsItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
   linkComponent?: React.ElementType<React.ComponentProps<'a'>>
}

const Item = forwardRef<ElementRef<'a'>, BreadcrumbsItemProps>(
  ({ href, linkComponent, className, children, ...props }, ref) => {
    const LinkComponent = linkComponent || 'a'
    const isCurrent = !href

    if (isCurrent) {
      return (
        <span
          ref={ref}
          className={cn('ms-breadcrumbs__link', 'ms-breadcrumbs__link--current', className)}
          aria-current="page"
          {...props}
        >
          {children}
        </span>
      )
    }

    return (
      <LinkComponent
        ref={ref}
        href={href}
        className={cn('ms-breadcrumbs__link', className)}
        {...props}
      >
        {children}
      </LinkComponent>
    )
  },
)

Item.displayName = 'Breadcrumbs.Item'

function BreadcrumbsCollapsed() {
  return (
    <span className="ms-breadcrumbs__collapsed" aria-hidden="true">
      &hellip;
    </span>
  )
}

export { Breadcrumbs, Item }
export type { BreadcrumbsProps, BreadcrumbsItemProps }
