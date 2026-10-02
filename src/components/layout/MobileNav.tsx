import { Building2, Compass, Map as MapIcon, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/cn'

const items = [
  { to: '/map', label: 'MAP', icon: MapIcon },
  { to: '/discover', label: 'DISCOVER', icon: Compass },
  { to: '/people', label: 'PEOPLE', icon: Users },
  { to: '/business', label: 'BUSINESS', icon: Building2 },
] as const

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.06] bg-void/90 backdrop-blur-xl lg:hidden"
      aria-label="Bottom"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 px-2 py-2">
        {items.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center gap-1 rounded-xl px-2 py-2 transition-colors',
                  isActive ? 'text-snow' : 'text-mist',
                )
              }
            >
              <Icon size={18} strokeWidth={1.5} />
              <span className="text-[0.55rem] tracking-[0.16em]">{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
