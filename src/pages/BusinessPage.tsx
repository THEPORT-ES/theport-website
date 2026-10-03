import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionLabel } from '../components/ui/SectionLabel'
import { businesses } from '../data/repository'

const sourceUrl = 'https://www.toppingsandsalads.es/localidad/andalucia/malaga/puerto-de-la-torre/'

export function BusinessPage() {
  return <main className="mx-auto min-h-[75vh] max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
    <SectionLabel>NEGOCIOS · 29190</SectionLabel>
    <div className="mt-7 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><h1 className="font-display text-6xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-8xl">Cinco sitios<br />para comer.</h1><p className="max-w-xs text-sm leading-relaxed text-mist">Cinco restaurantes del Puerto con las puntuaciones más altas en el directorio consultado.</p></div>
    <div className="mt-14 divide-y divide-line border-y border-line">
      {businesses.map((business, i) => <article key={business.id} className="group grid gap-5 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:py-8">
        <span className="font-display text-2xl tracking-[-0.05em] text-line-strong transition-colors group-hover:text-signal">{String(i + 1).padStart(2, '0')}</span>
        <div><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><h2 className="font-display text-2xl tracking-[-0.04em] sm:text-3xl">{business.name}</h2><span className="label-caps text-[0.55rem] text-mist">{business.category}</span></div><p className="mt-2 max-w-xl text-sm leading-relaxed text-mist">{business.description}</p><div className="mt-3 flex flex-wrap gap-2">{business.tags.map(tag => <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[0.58rem] tracking-[0.1em] text-mist">{tag}</span>)}</div></div>
        <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end"><span className="flex items-center gap-1.5 text-xs text-mist"><MapPin size={13} />{business.locationLabel}</span><div className="flex items-center gap-4"><span className="text-right text-sm text-snow"><strong>{business.rating?.toFixed(1)}</strong><span className="text-mist"> / 10<br />{business.ratingSource}</span></span><Link to={`/map?entity=${business.entityId}`} aria-label={`Ver ${business.name} en el mapa`} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-mist transition hover:border-snow hover:text-snow"><ArrowUpRight size={15} /></Link></div></div>
      </article>)}
    </div>
    <p className="mt-6 max-w-3xl text-xs leading-relaxed text-mist">Puntuaciones y volumen de opiniones según <a className="underline underline-offset-4 hover:text-snow" href={sourceUrl} target="_blank" rel="noreferrer">Toppings &amp; Salads</a>, consultado el 3 de octubre de 2026. Es una referencia de ese directorio, no una clasificación oficial. Los puntos del mapa son aproximados y están pendientes de confirmar.</p>
  </main>
}
