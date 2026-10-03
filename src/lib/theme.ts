import { useEffect, useState } from 'react'

export type PortTheme = 'light' | 'dark'
const THEME_EVENT = 'theport-theme-change'

export function getPortTheme(): PortTheme {
  if (typeof document !== 'undefined' && document.documentElement.dataset.theme === 'light') return 'light'
  return 'dark'
}

export function setPortTheme(theme: PortTheme) {
  document.documentElement.dataset.theme = theme
  window.localStorage.setItem('theport-theme', theme)
  window.dispatchEvent(new Event(THEME_EVENT))
}

export function usePortTheme() {
  const [theme, setTheme] = useState<PortTheme>(getPortTheme)
  useEffect(() => {
    const sync = () => setTheme(getPortTheme())
    window.addEventListener(THEME_EVENT, sync)
    return () => window.removeEventListener(THEME_EVENT, sync)
  }, [])
  return theme
}
