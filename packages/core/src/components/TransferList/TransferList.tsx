import { forwardRef, useState, useCallback, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './TransferList.css'

interface TransferItem {
  value: string
  label: string
}

interface TransferListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  left: TransferItem[]
  right: TransferItem[]
  onChange?: (right: TransferItem[]) => void
  leftTitle?: string
  rightTitle?: string
  disabled?: boolean
}

const TransferList = forwardRef<ElementRef<'div'>, TransferListProps>(
  ({ left, right, onChange, leftTitle = 'Options', rightTitle = 'Selected', disabled = false, className, ...props }, ref) => {
    const [selectedLeft, setSelectedLeft] = useState<Set<string>>(new Set())
    const [selectedRight, setSelectedRight] = useState<Set<string>>(new Set())

    const toggleSelect = (set: Set<string>, key: string): Set<string> => {
      const next = new Set(set)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    }

    const moveRight = useCallback(() => {
      if (disabled) return
      const moved = left.filter((item) => selectedLeft.has(item.value))
      const remaining = left.filter((item) => !selectedLeft.has(item.value))
      onChange?.([...right, ...moved])
      setSelectedLeft(new Set())
    }, [left, right, selectedLeft, onChange, disabled])

    const moveLeft = useCallback(() => {
      if (disabled) return
      const moved = right.filter((item) => selectedRight.has(item.value))
      const remaining = right.filter((item) => !selectedRight.has(item.value))
      onChange?.(remaining)
      setSelectedRight(new Set())
    }, [right, selectedRight, onChange, disabled])

    const moveAllRight = useCallback(() => {
      if (disabled) return
      onChange?.([...right, ...left])
      setSelectedLeft(new Set())
    }, [left, right, onChange, disabled])

    const moveAllLeft = useCallback(() => {
      if (disabled) return
      onChange?.([])
      setSelectedRight(new Set())
    }, [onChange, disabled])

    return (
      <div ref={ref} className={cn('ms-transfer-list', disabled && 'ms-transfer-list--disabled', className)} {...props}>
        <div className="ms-transfer-list__panel">
          <div className="ms-transfer-list__header">{leftTitle}</div>
          <div className="ms-transfer-list__items">
            {left.map((item) => (
              <div
                key={item.value}
                className={cn('ms-transfer-list__item', selectedLeft.has(item.value) && 'ms-transfer-list__item--selected')}
                onClick={() => !disabled && setSelectedLeft((prev) => toggleSelect(prev, item.value))}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className="ms-transfer-list__buttons">
          <button type="button" onClick={moveAllRight} disabled={disabled || left.length === 0} title="Move all right">&gt;&gt;</button>
          <button type="button" onClick={moveRight} disabled={disabled || selectedLeft.size === 0} title="Move selected right">&gt;</button>
          <button type="button" onClick={moveLeft} disabled={disabled || selectedRight.size === 0} title="Move selected left">&lt;</button>
          <button type="button" onClick={moveAllLeft} disabled={disabled || right.length === 0} title="Move all left">&lt;&lt;</button>
        </div>

        <div className="ms-transfer-list__panel">
          <div className="ms-transfer-list__header">{rightTitle}</div>
          <div className="ms-transfer-list__items">
            {right.map((item) => (
              <div
                key={item.value}
                className={cn('ms-transfer-list__item', selectedRight.has(item.value) && 'ms-transfer-list__item--selected')}
                onClick={() => !disabled && setSelectedRight((prev) => toggleSelect(prev, item.value))}
              >
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
)
TransferList.displayName = 'TransferList'

export { TransferList, type TransferListProps, type TransferItem }
