import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../lib/constants'
import { cn } from '../../lib/cn'
import { BrandMark } from '../ui/BrandMark'
import { ButtonLink } from '../ui/Button'
import { setPortTheme, usePortTheme } from '../../lib/theme'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const theme = usePortTheme()
  const darkOverlay = location.pathname === '/' && !scrolled

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || open
            ? 'bg-void/80 backdrop-blur-xl border-b border-line/70'
            : 'bg-transparent',
        )}
        data-dark-overlay={darkOverlay ? 'true' : undefined}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
          <BrandMark compact />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {NAV_LINKS.filter((l) => l.to !== '/join').map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    'label-caps text-[0.65rem] transition-colors duration-300',
                    isActive ? 'text-snow' : 'text-mist hover:text-snow',
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={() => setPortTheme(theme === 'dark' ? 'light' : 'dark')} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-mist transition hover:text-snow" aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <ButtonLink to="/join" size="sm">Súmate</ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={() => setPortTheme(theme === 'dark' ? 'light' : 'dark')} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-snow" aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}>
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-snow" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[45] bg-void/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <nav
              className="flex h-full flex-col justify-center gap-2 px-8 pt-16"
              aria-label="Navegación móvil"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={link.to}
                    className="font-display block py-3 text-4xl font-medium tracking-[-0.03em] text-snow"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <p className="mt-10 label-caps text-mist">29190 · EL PUERTO DE LA TORRE</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
