import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type BreakpointValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';
type Spacing = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  item?: boolean;
  xs?: BreakpointValue;
  sm?: BreakpointValue;
  md?: BreakpointValue;
  lg?: BreakpointValue;
  xl?: BreakpointValue;
  spacing?: Spacing;
  alignItems?: string;
  justifyContent?: string;
  direction?: string;
}

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, container, item, xs, sm, md, lg, xl, spacing, alignItems, justifyContent, direction, children, style, ...props }, ref) => {
    const breakpointClasses = [xs, sm, md, lg, xl].reduce<string[]>((acc, val, i) => {
      if (val !== undefined) {
        acc.push(`ms-grid--${breakpoints[i]}-${val}`);
      }
      return acc;
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          'ms-grid',
          container && 'ms-grid--container',
          item && 'ms-grid__item',
          spacing && `ms-grid--spacing-${spacing}`,
          ...breakpointClasses,
          className
        )}
        style={{
          alignItems,
          justifyContent,
          flexDirection: direction as React.CSSProperties['flexDirection'],
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = 'Grid';
