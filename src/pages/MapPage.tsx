import { useSearchParams } from 'react-router-dom'
import { PortMap } from '../components/map/PortMap'
import { SectionLabel } from '../components/ui/SectionLabel'
import { MAP_FILTERS, type MapFilter } from '../lib/constants'

export function MapPage() {
  const [searchParams] = useSearchParams()
  const requested = searchParams.get('filter') ?? 'all'
  const initialFilter: MapFilter = MAP_FILTERS.includes(requested as MapFilter) ? requested as MapFilter : 'all'
  return (
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink">
      <PortMap initialFilter={initialFilter} selectedEntityId={searchParams.get('entity') ?? undefined} />
      <div className="pointer-events-none absolute left-5 top-[14rem] z-10 sm:left-8">
        <SectionLabel>EL PUERTO · 29190</SectionLabel>
        <h1 className="font-display mt-3 text-3xl tracking-[-0.05em] text-snow sm:text-4xl">El mapa del barrio.</h1>
      </div>
    </section>
  )
}
