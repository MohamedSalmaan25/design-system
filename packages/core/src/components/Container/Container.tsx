import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type MaxWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: MaxWidth;
  disableGutters?: boolean;
  fixed?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, disableGutters, fixed, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ms-container',
          maxWidth && `ms-container--${maxWidth}`,
          disableGutters && 'ms-container--disableGutters',
          fixed && 'ms-container--fixed',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
