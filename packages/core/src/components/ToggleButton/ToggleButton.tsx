import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
} from 'react';
import { cn } from '../../utils/cn';
import './ToggleButton.css';

interface ToggleButtonGroupContextValue {
  selectedValue?: string | string[];
  onChange?: (value: string) => void;
  exclusive?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const ToggleButtonGroupContext =
  createContext<ToggleButtonGroupContextValue | null>(null);

export interface ToggleButtonProps {
  value: string;
  selected?: boolean;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, selected: boolean) => void;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export interface ToggleButtonGroupProps {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  exclusive?: boolean;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
  className?: string;
}

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    {
      value,
      selected: selectedProp,
      onChange,
      disabled,
      size: sizeProp,
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const ctx = useContext(ToggleButtonGroupContext);
    const size = sizeProp || ctx?.size || 'md';

    let isSelected: boolean;
    if (selectedProp !== undefined) {
      isSelected = selectedProp;
    } else if (ctx?.selectedValue !== undefined) {
      if (Array.isArray(ctx.selectedValue)) {
        isSelected = ctx.selectedValue.includes(value);
      } else {
        isSelected = ctx.selectedValue === value;
      }
    } else {
      isSelected = false;
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;
      onChange?.(e, !isSelected);
      ctx?.onChange?.(value);
    };

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        aria-pressed={isSelected}
        onClick={handleClick}
        className={cn(
          'ms-toggle-button',
          `ms-toggle-button--${size}`,
          isSelected && 'ms-toggle-button--selected',
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';

export const ToggleButtonGroup = forwardRef<
  HTMLDivElement,
  ToggleButtonGroupProps
>(
  (
    {
      value,
      onChange,
      exclusive,
      orientation = 'horizontal',
      size = 'md',
      children,
      className,
      ...rest
    },
    ref,
  ) => {
    const handleChange = useCallback(
      (buttonValue: string) => {
        if (!onChange) return;
        if (exclusive) {
          onChange(buttonValue);
        } else {
          const current = Array.isArray(value) ? value : [];
          const next = current.includes(buttonValue)
            ? current.filter((v) => v !== buttonValue)
            : [...current, buttonValue];
          onChange(next);
        }
      },
      [onChange, exclusive, value],
    );

    return (
      <ToggleButtonGroupContext.Provider
        value={{ selectedValue: value, onChange: handleChange, exclusive, size }}
      >
        <div
          ref={ref}
          role="group"
          className={cn(
            'ms-toggle-button-group',
            orientation === 'vertical' && 'ms-toggle-button-group--vertical',
            className,
          )}
          {...rest}
        >
          {children}
        </div>
      </ToggleButtonGroupContext.Provider>
    );
  },
);

ToggleButtonGroup.displayName = 'ToggleButtonGroup';
