import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionLabel } from '../components/ui/SectionLabel'
import { discoverCards } from '../data/repository'

export function DiscoverPage() {
  return <main className="mx-auto min-h-[75vh] max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
    <SectionLabel>DESCUBRIR · 29190</SectionLabel>
    <h1 className="font-display mt-7 max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-8xl">El Puerto,<br />de otra manera.</h1>
    <p className="mt-7 max-w-md text-sm leading-relaxed text-mist">Un punto de partida para conocer negocios, personas y lugares del barrio. Iremos sumando contenido verificado.</p>
    <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
      {discoverCards.map((card, i) => <Link key={card.id} to={card.href} className="group flex min-h-64 flex-col justify-between bg-void p-6 transition-colors hover:bg-panel sm:p-8"><div className="flex items-center justify-between"><span className="label-caps text-[0.58rem] text-mist">{String(i + 1).padStart(2, '0')} — {card.eyebrow}</span><ArrowUpRight size={16} className="text-mist transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-snow" /></div><div><h2 className="font-display max-w-xs text-2xl leading-tight tracking-[-0.04em]">{card.title}</h2><p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">{card.description}</p></div><span className="label-caps text-[0.55rem] text-signal">VER MÁS ↗</span></Link>)}
    </div>
  </main>
}
