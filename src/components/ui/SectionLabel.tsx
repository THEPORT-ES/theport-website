import { cn } from '../../lib/cn'

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn('label-caps text-mist', className)}>
      <span className="mr-3 inline-block h-px w-6 translate-y-[-0.2em] bg-signal align-middle" />
      {children}
    </p>
  )
}
