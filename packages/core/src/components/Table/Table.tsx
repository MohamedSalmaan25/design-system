import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type HTMLAttributes, type ElementRef, type ThHTMLAttributes, type TdHTMLAttributes, type PropsWithoutRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Table.css'

type TableSize = 'sm' | 'md'

/* --- Table --- */
interface TableProps extends HTMLAttributes<HTMLTableElement> {
  size?: TableSize
  stickyHeader?: boolean
}

const Table = forwardRef<ElementRef<'table'>, TableProps>(
  ({ size = 'md', stickyHeader, className, children, ...props }, ref) => (
    <div className="ms-table-container" style={{ overflow: 'auto' }}>
      <table
        ref={ref}
        className={cn(
          'ms-table',
          size === 'sm' && 'ms-table--sm',
          stickyHeader && 'ms-table--stickyHeader',
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
)
Table.displayName = 'Table'

/* --- Table.Head --- */
interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Head = forwardRef<ElementRef<'thead'>, TableHeadProps>(
  ({ className, children, ...props }, ref) => (
    <thead ref={ref} className={cn('ms-table__head', className)} {...props}>
      {children}
    </thead>
  ),
)
Head.displayName = 'Table.Head'

/* --- Table.Body --- */
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Body = forwardRef<ElementRef<'tbody'>, TableBodyProps>(
  ({ className, children, ...props }, ref) => (
    <tbody ref={ref} className={cn('ms-table__body', className)} {...props}>
      {children}
    </tbody>
  ),
)
Body.displayName = 'Table.Body'

/* --- Table.Row --- */
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const Row = forwardRef<ElementRef<'tr'>, TableRowProps>(
  ({ className, children, ...props }, ref) => (
    <tr ref={ref} className={cn('ms-table__row', className)} {...props}>
      {children}
    </tr>
  ),
)
Row.displayName = 'Table.Row'

/* --- Table.Cell --- */
interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  variant?: 'head' | 'body' | 'footer'
  width?: string | number
}

const Cell = forwardRef<ElementRef<'td'>, TableCellProps>(
  ({ align, variant, width, className, children, style, ...props }, ref) => {
    const Component = variant === 'head' ? 'th' : 'td'
    return (
      <Component
        ref={ref}
        className={cn(
          'ms-table__cell',
          variant && `ms-table__cell--${variant}`,
          align && `ms-table__cell--${align}`,
          className,
        )}
        style={{ ...style, width }}
        {...props}
      >
        {children}
      </Component>
    )
  },
)
Cell.displayName = 'Table.Cell'

/* --- Table.Footer --- */
interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

const Footer = forwardRef<ElementRef<'tfoot'>, TableFooterProps>(
  ({ className, children, ...props }, ref) => (
    <tfoot ref={ref} className={cn('ms-table__footer', className)} {...props}>
      {children}
    </tfoot>
  ),
)
Footer.displayName = 'Table.Footer'

const _Table = Table as unknown as ForwardRefExoticComponent<PropsWithoutRef<TableProps> & RefAttributes<HTMLTableElement>> & {
  Head: typeof Head
  Body: typeof Body
  Row: typeof Row
  Cell: typeof Cell
  Footer: typeof Footer
}
_Table.Head = Head
_Table.Body = Body
_Table.Row = Row
_Table.Cell = Cell
_Table.Footer = Footer

export { _Table as Table, type TableProps, type TableSize, type TableHeadProps, type TableBodyProps, type TableRowProps, type TableCellProps, type TableFooterProps }
