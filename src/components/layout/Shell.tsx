import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MobileNav } from './MobileNav'

export function Shell() {
  const { pathname } = useLocation()
  const isMap = pathname.startsWith('/map')

  return (
    <div className="min-h-dvh bg-void text-snow">
      <Header />
      <main className={isMap ? '' : 'pb-20 lg:pb-0'}>
        <Outlet />
      </main>
      {!isMap && <Footer />}
      {!isMap && <MobileNav />}
    </div>
  )
}
