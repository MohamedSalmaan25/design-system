import { forwardRef, type HTMLAttributes, type ElementRef } from 'react'
import { cn } from '../../utils/cn.js'
import './Card.css'

/* --- Types --- */

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'elevation' | 'outlined'
  elevation?: 0 | 1 | 2 | 3 | 4
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
}

interface CardMediaProps extends HTMLAttributes<HTMLElement> {
  component?: 'img' | 'div' | 'picture'
  src?: string
  alt?: string
  height?: string | number
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
}

interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
}

/* --- Card --- */

const Card = forwardRef<ElementRef<'div'>, CardProps>(
  ({ variant = 'elevation', elevation = 1, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'ms-card',
          variant === 'elevation' ? 'ms-card--elevation' : 'ms-card--outlined',
          variant === 'elevation' && `ms-card--elevation-${elevation}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Card.displayName = 'Card'

/* --- Card.Header --- */

const CardHeader = forwardRef<ElementRef<'div'>, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('ms-card__header', className)} {...props}>
        {children}
      </div>
    )
  },
)
CardHeader.displayName = 'Card.Header'

/* --- Card.Media --- */

const CardMedia = forwardRef<ElementRef<'div'>, CardMediaProps>(
  ({ component = 'div', src, alt, height, className, children, style, ...props }, ref) => {
    const mediaStyle = { ...(height != null ? { height } : {}), ...style }

    if (component === 'img') {
      return (
        <img
          ref={ref as React.Ref<HTMLImageElement>}
          className={cn('ms-card__media', className)}
          src={src}
          alt={alt || ''}
          style={mediaStyle}
          {...(props as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
      )
    }

    if (component === 'picture') {
      return (
        <picture
          ref={ref as React.Ref<HTMLPictureElement>}
          className={cn('ms-card__media', className)}
          style={mediaStyle}
          {...(props as React.HTMLAttributes<HTMLElement>)}
        >
          {children}
        </picture>
      )
    }

    return (
      <div
        ref={ref}
        className={cn('ms-card__media', className)}
        style={mediaStyle}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    )
  },
)
CardMedia.displayName = 'Card.Media'

/* --- Card.Content --- */

const CardContent = forwardRef<ElementRef<'div'>, CardContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('ms-card__content', className)} {...props}>
        {children}
      </div>
    )
  },
)
CardContent.displayName = 'Card.Content'

/* --- Card.Actions --- */

const CardActions = forwardRef<ElementRef<'div'>, CardActionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('ms-card__actions', className)} {...props}>
        {children}
      </div>
    )
  },
)
CardActions.displayName = 'Card.Actions'

/* --- Static compound members --- */

interface CardComponent
  extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
  Header: typeof CardHeader
  Media: typeof CardMedia
  Content: typeof CardContent
  Actions: typeof CardActions
}

;(Card as CardComponent).Header = CardHeader
;(Card as CardComponent).Media = CardMedia
;(Card as CardComponent).Content = CardContent
;(Card as CardComponent).Actions = CardActions

const CardFinal = Card as CardComponent

export { CardFinal as Card }
export type { CardProps, CardHeaderProps, CardMediaProps, CardContentProps, CardActionsProps }
