import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

export function BrandMark({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <Link
      to="/"
      className={cn('group inline-flex flex-col leading-none', className)}
      aria-label="THE PORT.ES — Home"
    >
      <span className="font-display text-[1.15rem] font-medium tracking-[-0.03em] text-snow sm:text-[1.25rem]">
        THE PORT
        <span className="text-signal transition-colors duration-300 group-hover:text-orbit">
          .
        </span>
        {!compact && (
          <span className="ml-0.5 text-[0.65em] tracking-[0.12em] text-mist">ES</span>
        )}
      </span>
      {!compact && (
        <span className="mt-1 label-caps text-[0.55rem] text-mist/80">
          29190 · MÁLAGA
        </span>
      )}
    </Link>
  )
}
