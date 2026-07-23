import React, {
  createContext,
  forwardRef,
  useContext,
  useCallback,
  useRef,
} from 'react';
import { cn } from '../../utils/cn';
import './RadioGroup.css';

interface RadioContextValue {
  name?: string;
  selectedValue?: string;
  onChange: (value: string) => void;
}

const RadioContext = createContext<RadioContextValue | null>(null);

export interface RadioGroupProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  row?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export interface RadioProps {
  value: string;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { name, value, defaultValue, onChange, row, children, className, ...rest },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const internalValue = useRef<string | undefined>(
      !isControlled ? defaultValue : undefined,
    );

    const handleChange = useCallback(
      (newValue: string) => {
        if (!isControlled) {
          internalValue.current = newValue;
        }
        onChange?.(newValue);
      },
      [isControlled, onChange],
    );

    const contextValue: RadioContextValue = {
      name,
      selectedValue: isControlled ? value : internalValue.current,
      onChange: handleChange,
    };

    return (
      <RadioContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="radiogroup"
          className={cn(
            'ms-radio-group',
            row && 'ms-radio-group--row',
            className,
          )}
          {...rest}
        >
          {children}
        </div>
      </RadioContext.Provider>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';

export const Radio = forwardRef<HTMLLabelElement, RadioProps>(
  ({ value, disabled, label, className, ...rest }, ref) => {
    const context = useContext(RadioContext);
    const checked = context?.selectedValue === value;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
        context?.onChange(value);
      }
    };

    return (
      <label
        ref={ref}
        className={cn(
          'ms-radio',
          checked && 'ms-radio--checked',
          disabled && 'ms-radio--disabled',
          className,
        )}
        {...rest}
      >
        <input
          type="radio"
          name={context?.name}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="ms-radio__input"
        />
        <span className="ms-radio__visual" aria-hidden="true" />
        {label && <span className="ms-radio__label">{label}</span>}
      </label>
    );
  },
);

Radio.displayName = 'Radio';
