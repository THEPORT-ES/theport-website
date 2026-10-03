import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Crosshair } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section data-theme-surface="dark" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-void px-5 pb-24 pt-28 sm:px-8 sm:pb-28 lg:items-center lg:pb-16">
      <div className="port-grid pointer-events-none absolute inset-0 -z-10 opacity-45" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[58%] overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070708_0%,transparent_60%),linear-gradient(0deg,#070708_0%,transparent_44%)]" />
        <svg viewBox="0 0 800 900" fill="none" className="absolute inset-0 h-full w-full opacity-65" aria-hidden="true">
          <path d="M610 0v900M690 0v900M770 0v900M400 0v900M480 0v900" stroke="white" strokeOpacity=".08" />
          <path d="M300 120h500M300 200h500M300 280h500M300 360h500M300 440h500M300 520h500M300 600h500M300 680h500M300 760h500" stroke="white" strokeOpacity=".07" />
          <path d="M322 665 387 633l46 8 48-74 56-24 14-90 58-26 22-79 67-45 35-91 62-42" stroke="#c45c3e" strokeWidth="2" strokeDasharray="3 9" />
          <path d="m387 633 46 8 48-74 56-24 14-90 58-26 22-79 67-45" stroke="white" strokeOpacity=".42" strokeWidth="1.5" />
          <circle cx="322" cy="665" r="5" fill="#c45c3e" /><circle cx="322" cy="665" r="16" stroke="#c45c3e" strokeOpacity=".45" />
          <circle cx="697" cy="348" r="4" fill="#c45c3e" /><circle cx="697" cy="348" r="13" stroke="#c45c3e" strokeOpacity=".45" />
          <path d="M322 650v-34m-17 51h-36m444-332h-36m52-17v-36" stroke="#c45c3e" strokeOpacity=".75" />
        </svg>
        <span className="absolute right-12 top-[36%] label-caps text-[0.55rem] text-silver/70">PTO. / GRID 01</span>
        <span className="absolute bottom-[21%] right-[34%] label-caps text-[0.55rem] text-silver/70">29190 — MÁLAGA</span>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-7xl"
      >
        <div className="max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2 w-2 animate-pulse rounded-full bg-signal shadow-[0_0_16px_var(--color-signal)]" />
            <p className="label-caps text-[0.62rem] text-silver">SEÑAL LOCAL · ACTIVA</p>
          </div>
          <p className="font-display text-[clamp(1rem,2.2vw,1.35rem)] font-medium tracking-[0.36em] text-silver">THE PORT<span className="text-signal">.</span></p>
          <h1 className="font-display mt-3 text-[clamp(5.8rem,18vw,15rem)] font-medium leading-[0.78] tracking-[-0.085em] text-snow">
            29190<span className="text-signal">.</span>
          </h1>
          <div className="mt-9 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="label-caps text-[0.65rem] text-silver">EL PUERTO DE LA TORRE · MÁLAGA</p>
              <p className="font-display mt-4 max-w-xl text-2xl font-light leading-tight tracking-[-0.04em] text-snow sm:text-4xl">
                El Puerto de la Torre,<br className="hidden sm:block" /> conectado.
              </p>
            </div>
            <Link to="/map" className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/25 bg-white/[0.04] px-5 py-3 text-xs tracking-[0.15em] text-snow backdrop-blur-md transition-all hover:border-white/70 hover:bg-white/[0.1]">
              VER EL MAPA <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-7 right-6 hidden items-center gap-2 text-[0.58rem] tracking-[0.18em] text-white/50 sm:flex lg:right-10">
          <Crosshair size={12} /> CÓDIGO POSTAL 29190
        </div>
      </motion.div>
      <a href="#the-map" aria-label="Bajar a explorar" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/50 transition-colors hover:text-white lg:block">
        <ArrowDown size={18} strokeWidth={1.4} />
      </a>
    </section>
  )
}
