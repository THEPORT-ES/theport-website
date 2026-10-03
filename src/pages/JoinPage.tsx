import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionLabel } from '../components/ui/SectionLabel'
import { SITE } from '../lib/constants'
import type { JoinFormData } from '../types/port'

const emptyForm: JoinFormData = { name: '', business: '', category: '', description: '', instagram: '', website: '', email: '', location: '' }
const fieldClass = 'w-full border-b border-line bg-transparent px-0 py-3 text-sm text-snow placeholder:text-mist/60 outline-none transition-colors focus:border-silver'

export function JoinPage() {
  const [form, setForm] = useState(emptyForm)
  const update = (key: keyof JoinFormData, value: string) => setForm(current => ({ ...current, [key]: value }))
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`THE PORT — ${form.business || form.name}`)
    const body = encodeURIComponent([
      `Nombre: ${form.name}`, `Empresa / proyecto: ${form.business || '—'}`, `Categoría: ${form.category || '—'}`, `Descripción: ${form.description || '—'}`, `Instagram: ${form.instagram || '—'}`, `Web: ${form.website || '—'}`, `Email: ${form.email}`, `Ubicación: ${form.location || '—'}`,
    ].join('\n'))
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }
  return (
    <div className="mx-auto grid min-h-[80vh] max-w-7xl gap-14 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 lg:grid-cols-[0.8fr_1.2fr]">
      <div><SectionLabel>SÚMATE · 29190</SectionLabel><h1 className="font-display mt-7 text-6xl font-medium leading-[0.88] tracking-[-0.07em] sm:text-8xl">Súmate<br />al Puerto<span className="text-signal">.</span></h1><p className="mt-7 max-w-sm text-sm leading-relaxed text-mist">¿Construyes algo en El Puerto de la Torre? Añade tu negocio, proyecto o perfil a esta nueva capa del barrio.</p><a href={`mailto:${SITE.email}`} className="mt-8 inline-flex items-center gap-2 text-sm text-silver transition-colors hover:text-snow"><Mail size={15} />{SITE.email}<ArrowUpRight size={13} /></a></div>
      <form onSubmit={submit} className="space-y-8">
        <div className="grid gap-7 sm:grid-cols-2">
          <label className="block text-xs text-mist">Tu nombre<input required autoComplete="name" value={form.name} onChange={e => update('name', e.target.value)} className={fieldClass} placeholder="Nombre y apellidos" /></label>
          <label className="block text-xs text-mist">Negocio o proyecto<input value={form.business} onChange={e => update('business', e.target.value)} className={fieldClass} placeholder="Nombre de tu proyecto" /></label>
          <label className="block text-xs text-mist">Categoría<select required value={form.category} onChange={e => update('category', e.target.value)} className={`${fieldClass} appearance-none`}><option value="" className="bg-panel text-snow">Selecciona una categoría</option>{[['people','Personas'],['business','Negocios'],['places','Lugares'],['food','Comer'],['services','Servicios'],['events','Planes'],['projects','Proyectos'],['community','Comunidad']].map(([value,label]) => <option key={value} value={value} className="bg-panel text-snow">{label}</option>)}</select></label>
          <label className="block text-xs text-mist">Email<input required type="email" autoComplete="email" value={form.email} onChange={e => update('email', e.target.value)} className={fieldClass} placeholder="tu@email.com" /></label>
          <label className="block text-xs text-mist">Instagram<input value={form.instagram} onChange={e => update('instagram', e.target.value)} className={fieldClass} placeholder="@usuario" /></label>
          <label className="block text-xs text-mist">Web<input type="url" value={form.website} onChange={e => update('website', e.target.value)} className={fieldClass} placeholder="https://" /></label>
          <label className="block text-xs text-mist sm:col-span-2">Ubicación<input value={form.location} onChange={e => update('location', e.target.value)} className={fieldClass} placeholder="Zona o ubicación en 29190" /></label>
          <label className="block text-xs text-mist sm:col-span-2">Cuéntanos un poco más<textarea rows={3} value={form.description} onChange={e => update('description', e.target.value)} className={`${fieldClass} resize-y`} placeholder="¿Qué estás construyendo?" /></label>
        </div>
        <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-snow px-6 py-3.5 text-xs tracking-[0.15em] text-void transition hover:bg-white">ENVIAR PROPUESTA <ArrowUpRight size={14} /></button>
        <p className="text-xs leading-relaxed text-mist/70">Se abrirá tu aplicación de correo para enviar la propuesta a {SITE.email}. El formulario no guarda datos en esta versión.</p>
      </form>
    </div>
  )
}
