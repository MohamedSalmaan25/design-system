import { forwardRef, useEffect, useRef, type MutableRefObject } from 'react';
import { cn } from '../../utils/cn.js';
import './Checkbox.css';

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger' | 'success';
  label?: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      onChange,
      disabled,
      indeterminate,
      size = 'md',
      color = 'primary',
      label,
      className,
      ...rest
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    const setRef = (element: HTMLInputElement | null) => {
      innerRef.current = element;
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref && 'current' in ref) {
        (ref as MutableRefObject<HTMLInputElement | null>).current = element;
      }
    };

    const isControlled = checked !== undefined;

    return (
      <label
        className={cn(
          'ms-checkbox',
          `ms-checkbox--${size}`,
          `ms-checkbox--${color}`,
          checked && 'ms-checkbox--checked',
          disabled && 'ms-checkbox--disabled',
          indeterminate && 'ms-checkbox--indeterminate',
          className,
        )}
      >
        <input
          type="checkbox"
          ref={setRef}
          checked={isControlled ? checked : undefined}
          defaultChecked={!isControlled ? defaultChecked : undefined}
          onChange={onChange}
          disabled={disabled}
          className="ms-checkbox__input"
          {...rest}
        />
        <span className="ms-checkbox__visual" aria-hidden="true" />
        {label && <span className="ms-checkbox__label">{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
