import { forwardRef, useMemo, type ElementRef, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Pagination.css'

type PaginationVariant = 'outlined' | 'text'
type PaginationColor = 'primary' | 'neutral'
type PaginationSize = 'sm' | 'md' | 'lg'

interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  count: number
  page: number
  onChange?: (page: number) => void
  siblingCount?: number
  boundaryCount?: number
  variant?: PaginationVariant
  color?: PaginationColor
  size?: PaginationSize
  disabled?: boolean
  hidePrevButton?: boolean
  hideNextButton?: boolean
  showFirstButton?: boolean
  showLastButton?: boolean
}

function range(start: number, end: number): number[] {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

function usePaginationItems(
  count: number,
  page: number,
  siblingCount: number,
  boundaryCount: number,
): (number | 'ellipsis-start' | 'ellipsis-end')[] {
  return useMemo(() => {
    const totalPages = count
    if (totalPages <= 2 * boundaryCount + 2 * siblingCount + 1) {
      return range(1, totalPages)
    }

    const startPages = range(1, boundaryCount)
    const endPages = range(totalPages - boundaryCount + 1, totalPages)
    const siblingsStart = Math.max(
      Math.min(page - siblingCount, totalPages - boundaryCount - 2 * siblingCount - 1),
      boundaryCount + 2,
    )
    const siblingsEnd = Math.min(
      Math.max(page + siblingCount, boundaryCount + 2 * siblingCount + 2),
      totalPages - boundaryCount - 1,
    )

    const items: (number | 'ellipsis-start' | 'ellipsis-end')[] = [
      ...startPages,
    ]

    if (siblingsStart > boundaryCount + 2) {
      items.push('ellipsis-start')
    } else if (boundaryCount + 1 < totalPages - boundaryCount) {
      items.push(boundaryCount + 1)
    }

    items.push(
      ...range(Math.max(siblingsStart, boundaryCount + 1), Math.min(siblingsEnd, totalPages - boundaryCount)),
    )

    if (siblingsEnd < totalPages - boundaryCount - 1) {
      items.push('ellipsis-end')
    } else if (totalPages - boundaryCount > boundaryCount) {
      items.push(totalPages - boundaryCount)
    }

    items.push(...endPages)

    return items
  }, [count, page, siblingCount, boundaryCount])
}

const Pagination = forwardRef<ElementRef<'nav'>, PaginationProps>(
  (
    {
      count,
      page,
      onChange,
      siblingCount = 1,
      boundaryCount = 1,
      variant = 'text',
      color = 'primary',
      size = 'md',
      disabled = false,
      hidePrevButton = false,
      hideNextButton = false,
      showFirstButton = false,
      showLastButton = false,
      className,
      ...props
    },
    ref,
  ) => {
    const items = usePaginationItems(count, page, siblingCount, boundaryCount)

    const handleChange = (newPage: number) => {
      if (newPage < 1 || newPage > count || disabled) return
      onChange?.(newPage)
    }

    const btnClass = (selected: boolean, btnDisabled: boolean) =>
      cn(
        'ms-pagination__item',
        variant === 'outlined' && 'ms-pagination__item--outlined',
        color === 'primary' && 'ms-pagination__item--primary',
        color === 'neutral' && 'ms-pagination__item--neutral',
        size === 'sm' && 'ms-pagination__item--sm',
        size === 'md' && 'ms-pagination__item--md',
        size === 'lg' && 'ms-pagination__item--lg',
        selected && 'ms-pagination__item--selected',
        (btnDisabled || disabled) && 'ms-pagination__item--disabled',
      )

    return (
      <nav
        ref={ref}
        className={cn('ms-pagination', className)}
        aria-label="Pagination"
        {...props}
      >
        <ul className="ms-pagination__list">
          {showFirstButton && (
            <li>
              <button
                className={btnClass(false, page === 1)}
                onClick={() => handleChange(1)}
                disabled={disabled || page === 1}
                aria-label="First page"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
          )}
          {!hidePrevButton && (
            <li>
              <button
                className={cn(btnClass(false, page === 1), 'ms-pagination__nav-button')}
                onClick={() => handleChange(page - 1)}
                disabled={disabled || page === 1}
                aria-label="Previous page"
              >
                <span aria-hidden="true">&lsaquo;</span>
              </button>
            </li>
          )}
          {items.map((item) => {
            if (item === 'ellipsis-start' || item === 'ellipsis-end') {
              return (
                <li key={item}>
                  <span className="ms-pagination__ellipsis" aria-hidden="true">
                    &hellip;
                  </span>
                </li>
              )
            }
            return (
              <li key={item}>
                <button
                  className={btnClass(item === page, false)}
                  onClick={() => handleChange(item)}
                  disabled={disabled}
                  aria-current={item === page ? 'page' : undefined}
                  aria-label={`Page ${item}`}
                >
                  {item}
                </button>
              </li>
            )
          })}
          {!hideNextButton && (
            <li>
              <button
                className={cn(btnClass(false, page === count), 'ms-pagination__nav-button')}
                onClick={() => handleChange(page + 1)}
                disabled={disabled || page === count}
                aria-label="Next page"
              >
                <span aria-hidden="true">&rsaquo;</span>
              </button>
            </li>
          )}
          {showLastButton && (
            <li>
              <button
                className={btnClass(false, page === count)}
                onClick={() => handleChange(count)}
                disabled={disabled || page === count}
                aria-label="Last page"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          )}
        </ul>
      </nav>
    )
  },
)

Pagination.displayName = 'Pagination'

export { Pagination, type PaginationProps, type PaginationVariant, type PaginationColor, type PaginationSize }
