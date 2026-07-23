import { forwardRef, useState, type HTMLAttributes } from 'react'
import { cn } from '../../utils/cn.js'
import './Avatar.css'

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: AvatarSize
  fallback?: string
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = '', size = 'md', fallback, className, ...props }, ref) => {
    const [imgError, setImgError] = useState(false)
    const showFallback = !src || imgError

    const initials = fallback || (alt ? alt.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) : '?')

    return (
      <div
        ref={ref}
        className={cn('ms-avatar', `ms-avatar--${size}`, className)}
        role="img"
        aria-label={alt}
        {...props}
      >
        {showFallback ? (
          <span className="ms-avatar__fallback">{initials}</span>
        ) : (
          <img
            className="ms-avatar__img"
            src={src}
            alt={alt}
            onError={() => setImgError(true)}
          />
        )}
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'

export { Avatar, type AvatarProps, type AvatarSize }
