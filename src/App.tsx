import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Shell } from './components/layout/Shell'

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })))
const MapPage = lazy(() => import('./pages/MapPage').then(module => ({ default: module.MapPage })))
const DiscoverPage = lazy(() => import('./pages/DiscoverPage').then(module => ({ default: module.DiscoverPage })))
const PeoplePage = lazy(() => import('./pages/PeoplePage').then(module => ({ default: module.PeoplePage })))
const BusinessPage = lazy(() => import('./pages/BusinessPage').then(module => ({ default: module.BusinessPage })))
const JoinPage = lazy(() => import('./pages/JoinPage').then(module => ({ default: module.JoinPage })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Shell />}>
          <Route index element={<Suspense fallback={<PageLoading />}><HomePage /></Suspense>} />
          <Route path="map" element={<Suspense fallback={<PageLoading />}><MapPage /></Suspense>} />
          <Route path="discover" element={<Suspense fallback={<PageLoading />}><DiscoverPage /></Suspense>} />
          <Route path="people" element={<Suspense fallback={<PageLoading />}><PeoplePage /></Suspense>} />
          <Route path="business" element={<Suspense fallback={<PageLoading />}><BusinessPage /></Suspense>} />
          <Route path="join" element={<Suspense fallback={<PageLoading />}><JoinPage /></Suspense>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function PageLoading() {
  return <div className="min-h-[75vh] bg-void" aria-label="Loading" />
}

export default App
