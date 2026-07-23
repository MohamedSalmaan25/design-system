import React, { forwardRef, ElementType, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  component?: ElementType;
  as?: ElementType;
  children?: React.ReactNode;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component, as, className, children, ...props }, ref) => {
    const Component = as || component || 'div';
    return (
      <Component ref={ref} className={cn('ms-box', className)} {...props}>
        {children}
      </Component>
    );
  }
);

Box.displayName = 'Box';
