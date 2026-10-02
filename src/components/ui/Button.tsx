import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'ghost' | 'line'
type Size = 'md' | 'sm'

type Common = {
  children: React.ReactNode
  className?: string
  variant?: Variant
  size?: Size
}

const styles: Record<Variant, string> = {
  primary:
    'bg-snow text-void hover:bg-white active:scale-[0.98]',
  ghost:
    'bg-transparent text-snow border border-line hover:border-silver/50 hover:bg-white/[0.03]',
  line:
    'bg-transparent text-silver hover:text-snow border-b border-line-strong rounded-none px-0 pb-1 hover:border-snow',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm tracking-[0.14em] uppercase',
  sm: 'px-4 py-2 text-xs tracking-[0.16em] uppercase',
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: Common & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-[var(--ease-port)] disabled:opacity-40',
        styles[variant],
        variant !== 'line' && sizes[size],
        variant === 'line' && 'text-xs tracking-[0.18em] uppercase',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function ButtonLink({
  to,
  children,
  className,
  variant = 'primary',
  size = 'md',
  external,
}: Common & { to: string; external?: boolean }) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-[var(--ease-port)]',
    styles[variant],
    variant !== 'line' && sizes[size],
    variant === 'line' && 'text-xs tracking-[0.18em] uppercase',
    className,
  )

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
