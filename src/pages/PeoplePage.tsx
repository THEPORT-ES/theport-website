import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionLabel } from '../components/ui/SectionLabel'

export function PeoplePage() {
  return <main className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
    <SectionLabel>PERSONAS · 29190</SectionLabel>
    <h1 className="font-display mt-7 max-w-4xl text-6xl font-medium leading-[0.9] tracking-[-0.07em] sm:text-8xl">La gente que<br />mueve el Puerto.</h1>
    <p className="mt-7 max-w-md text-sm leading-relaxed text-mist">Este espacio será para vecinos, profesionales, artistas y personas con algo que aportar. Se irá llenando con quienes quieran formar parte.</p>
    <Link to="/join" className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-xs tracking-[0.12em] transition hover:bg-white/10">PROPÓN TU PERFIL <ArrowUpRight size={14} /></Link>
  </main>
}
