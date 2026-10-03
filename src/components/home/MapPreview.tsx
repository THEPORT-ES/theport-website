import { lazy, Suspense, useEffect, useRef, useState } from 'react'

const PortMap = lazy(() => import('../map/PortMap').then(module => ({ default: module.PortMap })))

export function MapPreview() {
  const container = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = container.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { rootMargin: '160px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={container} className="absolute inset-0 bg-[#101115]">
      {visible ? <Suspense fallback={<div className="port-grid h-full w-full" />}><PortMap className="pointer-events-none" preview interactive={false} showFilters={false} /></Suspense> : <div className="port-grid h-full w-full" />}
    </div>
  )
}
