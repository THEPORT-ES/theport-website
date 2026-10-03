import { ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Hero } from '../components/home/Hero'
import { MapPreview } from '../components/home/MapPreview'
import { SectionLabel } from '../components/ui/SectionLabel'
import { businesses } from '../data/repository'

export function HomePage() {
  return <>
    <Hero />
    <section id="the-map" className="relative min-h-[34rem] overflow-hidden border-y border-line bg-panel sm:min-h-[42rem]">
      <MapPreview />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void via-void/65 to-transparent" />
      <div className="relative mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-center px-5 py-20 sm:min-h-[42rem] sm:px-8">
        <SectionLabel>29190 · MÁLAGA</SectionLabel>
        <h2 className="font-display mt-6 max-w-xl text-5xl leading-[0.92] tracking-[-0.07em] sm:text-7xl">El barrio,<br />a un mapa de distancia.</h2>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-silver">Una primera mirada a los negocios de aquí. Acércate, explora y descubre el Puerto.</p>
        <Link to="/map" className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs tracking-[0.12em] transition hover:bg-white/10">ABRIR MAPA <ArrowUpRight size={14} /></Link>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><SectionLabel>COMER EN 29190</SectionLabel><h2 className="font-display mt-5 text-5xl tracking-[-0.07em] sm:text-7xl">Cinco sitios<br />para empezar.</h2></div>
        <Link to="/business" className="inline-flex items-center gap-2 text-xs tracking-[0.1em] text-silver hover:text-snow">VER LOS CINCO <ArrowUpRight size={14} /></Link>
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {businesses.slice(0, 3).map((business, i) => <Link key={business.id} to={`/map?entity=${business.entityId}`} className="group min-h-56 rounded-[1.4rem] border border-line bg-panel p-6 shadow-sm shadow-black/[0.035] transition hover:border-line-strong hover:shadow-md sm:p-8">
          <div className="flex items-start justify-between"><span className="font-display text-3xl text-white/30">0{i + 1}</span><ArrowUpRight size={16} className="text-mist transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-snow" /></div>
          <h3 className="font-display mt-10 text-2xl tracking-[-0.04em]">{business.name}</h3>
          <p className="mt-2 flex items-center gap-2 text-xs text-mist"><MapPin size={13} />{business.locationLabel}</p>
          <p className="mt-5 text-sm text-silver">{business.rating?.toFixed(1)} / 10 <span className="text-mist">· {business.ratingSource}</span></p>
        </Link>)}
      </div>
      <p className="mt-5 max-w-3xl text-xs leading-relaxed text-mist">Puntuaciones y número de opiniones publicados por <a className="underline underline-offset-4 hover:text-snow" href="https://www.toppingsandsalads.es/localidad/andalucia/malaga/puerto-de-la-torre/" target="_blank" rel="noreferrer">Toppings &amp; Salads</a>. Selección basada en las puntuaciones del directorio; las cifras pueden cambiar.</p>
    </section>
    <section className="border-y border-line bg-panel px-5 py-20 text-center sm:px-8 sm:py-28">
      <SectionLabel>EL PUERTO LO HACEMOS ENTRE TODOS</SectionLabel>
      <h2 className="font-display mx-auto mt-6 max-w-3xl text-5xl leading-[0.95] tracking-[-0.07em] sm:text-7xl">¿Tienes un negocio,<br />una idea o un proyecto?</h2>
      <Link to="/join" className="mt-8 inline-flex items-center gap-3 rounded-full bg-snow px-6 py-3.5 text-xs tracking-[0.12em] text-void">SÚMATE AL PUERTO <ArrowUpRight size={14} /></Link>
    </section>
  </>
}
