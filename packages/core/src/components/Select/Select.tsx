import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      value,
      defaultValue,
      onChange,
      options,
      placeholder,
      disabled,
      error,
      fullWidth,
      size = 'md',
      label,
      className,
      ...rest
    },
    ref,
  ) => {
    const isControlled = value !== undefined;

    return (
      <div
        className={cn(
          'ms-select',
          `ms-select--${size}`,
          error && 'ms-select--error',
          disabled && 'ms-select--disabled',
          fullWidth && 'ms-select--fullWidth',
          className,
        )}
      >
        {label && <label className="ms-select__label">{label}</label>}
        <div className="ms-select__wrapper">
          <select
            ref={ref}
            value={isControlled ? value : undefined}
            defaultValue={!isControlled ? defaultValue : undefined}
            onChange={onChange}
            disabled={disabled}
            className="ms-select__native"
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="ms-select__arrow" aria-hidden="true">
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    );
  },
);

Select.displayName = 'Select';
