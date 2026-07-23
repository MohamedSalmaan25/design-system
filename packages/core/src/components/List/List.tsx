import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type HTMLAttributes, type ElementRef, type PropsWithoutRef } from 'react'
import { cn } from '../../utils/cn.js'
import './List.css'

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  dense?: boolean
  disablePadding?: boolean
  subheader?: React.ReactNode
}

const List = forwardRef<ElementRef<'ul'>, ListProps>(
  ({ dense, disablePadding, subheader, className, children, ...props }, ref) => (
    <div className="ms-list-wrapper">
      {subheader && <div className="ms-list__subheader">{subheader}</div>}
      <ul
        ref={ref}
        className={cn('ms-list', dense && 'ms-list--dense', className)}
        {...props}
      >
        {children}
      </ul>
    </div>
  ),
)
List.displayName = 'List'

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  disablePadding?: boolean
  secondaryAction?: React.ReactNode
}

const Item = forwardRef<ElementRef<'li'>, ListItemProps>(
  ({ disablePadding, secondaryAction, className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('ms-list-item', disablePadding && 'ms-list-item--disablePadding', className)}
      {...props}
    >
      {secondaryAction && <div className="ms-list-item__secondary-action">{secondaryAction}</div>}
      {children}
    </li>
  ),
)
Item.displayName = 'List.Item'

interface ListItemIconProps extends HTMLAttributes<HTMLSpanElement> {}

const ItemIcon = forwardRef<ElementRef<'span'>, ListItemIconProps>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn('ms-list-item-icon', className)} {...props}>
      {children}
    </span>
  ),
)
ItemIcon.displayName = 'List.ItemIcon'

interface ListItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  primary?: React.ReactNode
  secondary?: React.ReactNode
}

const ItemText = forwardRef<ElementRef<'span'>, ListItemTextProps>(
  ({ primary, secondary, className, children, ...props }, ref) => (
    <span ref={ref} className={cn('ms-list-item-text', className)} {...props}>
      {primary && <span className="ms-list-item-text__primary">{primary}</span>}
      {secondary && <span className="ms-list-item-text--secondary">{secondary}</span>}
      {children}
    </span>
  ),
)
ItemText.displayName = 'List.ItemText'

const _List = List as ForwardRefExoticComponent<PropsWithoutRef<ListProps> & RefAttributes<HTMLUListElement>> & {
  Item: typeof Item
  ItemIcon: typeof ItemIcon
  ItemText: typeof ItemText
}
_List.Item = Item
_List.ItemIcon = ItemIcon
_List.ItemText = ItemText

export { _List as List, type ListProps, type ListItemProps, type ListItemIconProps, type ListItemTextProps }
