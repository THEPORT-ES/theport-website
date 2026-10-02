import { CATEGORY_LABELS, type MapFilter, MAP_FILTERS } from '../../lib/constants'
import { cn } from '../../lib/cn'

type Props = {
  value: MapFilter
  onChange: (filter: MapFilter) => void
  className?: string
}

export function MapFilters({ value, onChange, className }: Props) {
  return (
    <div className={cn('w-full', className)}>
      <p className="mb-3 label-caps text-[0.6rem] text-mist">MAP</p>
      <div
        className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Map categories"
      >
        {MAP_FILTERS.map((filter) => {
          const active = value === filter
          return (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(filter)}
              className={cn(
                'shrink-0 rounded-full border px-3.5 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase transition-all duration-300',
                active
                  ? 'border-snow bg-snow text-void'
                  : 'border-line text-mist hover:border-silver/40 hover:text-snow',
              )}
            >
              {CATEGORY_LABELS[filter]}
            </button>
          )
        })}
      </div>
    </div>
  )
}
