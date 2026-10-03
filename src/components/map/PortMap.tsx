import * as maplibregl from 'maplibre-gl'
import { setWorkerUrl } from 'maplibre-gl'
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url'
import type {
  GeoJSONSource,
  Map as MapLibreMap,
  MapLayerMouseEvent,
} from 'maplibre-gl'
import type { FeatureCollection, LineString, Point } from 'geojson'
import { useEffect, useMemo, useRef, useState } from 'react'
import { getEntitiesByCategory } from '../../data/repository'
import {
  MAP_STYLE_DARK,
  MAP_STYLE_LIGHT,
  PORT_CENTER,
  PORT_DEFAULT_ZOOM,
  PORT_MAX_ZOOM,
  PORT_MIN_ZOOM,
  PORT_BOUNDS,
  type MapFilter,
} from '../../lib/constants'
import type { PortEntity } from '../../types/port'
import { usePortTheme } from '../../lib/theme'
import { categoryColor } from './categoryStyles'
import { EntitySheet } from './EntitySheet'
import { MapFilters } from './MapFilters'

// MapLibre v6 requires Vite to bundle its worker explicitly.
setWorkerUrl(mapWorkerUrl)

type Props = {
  initialFilter?: MapFilter
  className?: string
  showFilters?: boolean
  interactive?: boolean
  preview?: boolean
  selectedEntityId?: string
}

function toFeatureCollection(items: PortEntity[]): FeatureCollection<Point> {
  return {
    type: 'FeatureCollection',
    features: items.map((item) => ({
      type: 'Feature',
      id: item.id,
      properties: {
        id: item.id,
        category: item.category,
        name: item.name,
        color: categoryColor(item.category),
      },
      geometry: {
        type: 'Point',
        coordinates: item.coordinates,
      },
    })),
  }
}

function toLinkCollection(items: PortEntity[]): FeatureCollection<LineString> {
  const sample = items.slice(0, Math.min(items.length, 10))
  return {
    type: 'FeatureCollection',
    features: sample.map((a, i) => {
      const b = sample[(i + 1) % sample.length]
      return {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [a.coordinates, b.coordinates],
        },
      }
    }),
  }
}

export function PortMap({
  initialFilter = 'all',
  className = '',
  showFilters = true,
  interactive = true,
  preview = false,
  selectedEntityId,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapLibreMap | null>(null)
  const entitiesRef = useRef<PortEntity[]>([])
  const [filter, setFilter] = useState<MapFilter>(initialFilter)
  const [selected, setSelected] = useState<PortEntity | null>(null)
  const [ready, setReady] = useState(false)
  const theme = usePortTheme()

  const filtered = useMemo(() => getEntitiesByCategory(filter), [filter])
  entitiesRef.current = filtered

  useEffect(() => {
    setFilter(initialFilter)
  }, [initialFilter])

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: theme === 'dark' ? MAP_STYLE_DARK : MAP_STYLE_LIGHT,
      center: PORT_CENTER,
      maxBounds: PORT_BOUNDS,
      zoom: preview ? 13.5 : PORT_DEFAULT_ZOOM,
      minZoom: PORT_MIN_ZOOM,
      maxZoom: PORT_MAX_ZOOM,
      attributionControl: { compact: true },
      interactive,
      pitch: preview ? 0 : 28,
      bearing: preview ? 0 : -12,
      dragRotate: interactive,
      touchPitch: false,
    })

    if (interactive) {
      map.addControl(
        new maplibregl.NavigationControl({
          visualizePitch: true,
          showCompass: false,
        }),
        'bottom-right',
      )
    }

    map.on('load', () => {
      const initial = entitiesRef.current

      map.addSource('port-entities', {
        type: 'geojson',
        data: toFeatureCollection(initial),
        promoteId: 'id',
      })

      map.addSource('port-links', {
        type: 'geojson',
        data: toLinkCollection(initial),
      })

      map.addLayer({
        id: 'port-links',
        type: 'line',
        source: 'port-links',
        paint: {
          'line-color': '#ffffff',
          'line-opacity': 0.06,
          'line-width': 1,
        },
      })

      map.addLayer({
        id: 'port-halo',
        type: 'circle',
        source: 'port-entities',
        paint: {
          'circle-radius': ['interpolate', ['linear'], ['zoom'], 11, 10, 15, 22],
          'circle-color': ['get', 'color'],
          'circle-opacity': 0.14,
          'circle-blur': 0.6,
        },
      })

      map.addLayer({
        id: 'port-points',
        type: 'circle',
        source: 'port-entities',
        paint: {
          'circle-radius': [
            'case',
            ['boolean', ['feature-state', 'selected'], false],
            7,
            4.5,
          ],
          'circle-color': ['get', 'color'],
          'circle-stroke-width': 1.5,
          'circle-stroke-color': '#070708',
          'circle-opacity': 0.95,
        },
      })

      map.addLayer({
        id: 'port-core',
        type: 'circle',
        source: 'port-entities',
        paint: {
          'circle-radius': 1.6,
          'circle-color': '#ffffff',
          'circle-opacity': 0.85,
        },
      })

      setReady(true)
    })

    const onEnter = () => {
      map.getCanvas().style.cursor = 'pointer'
    }
    const onLeave = () => {
      map.getCanvas().style.cursor = ''
    }
    const onClick = (e: MapLayerMouseEvent) => {
      const feature = e.features?.[0]
      const id = feature?.properties?.id as string | undefined
      if (!id || !feature) return

      const entity = entitiesRef.current.find((item) => item.id === id) ?? null
      setSelected(entity)

      for (const item of entitiesRef.current) {
        map.setFeatureState(
          { source: 'port-entities', id: item.id },
          { selected: item.id === id },
        )
      }

      const coords =
        entity?.coordinates ??
        (feature.geometry as Point).coordinates as [number, number]

      map.easeTo({
        center: coords,
        zoom: Math.max(map.getZoom(), 14.2),
        duration: 800,
      })
    }

    map.on('mouseenter', 'port-points', onEnter)
    map.on('mouseleave', 'port-points', onLeave)
    map.on('click', 'port-points', onClick)

    mapRef.current = map

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [interactive, preview, theme])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready) return

    const points = map.getSource('port-entities') as GeoJSONSource | undefined
    const links = map.getSource('port-links') as GeoJSONSource | undefined
    points?.setData(toFeatureCollection(filtered))
    links?.setData(toLinkCollection(filtered))
    setSelected(null)
  }, [filtered, ready])

  useEffect(() => {
    const map = mapRef.current
    if (!map || !ready || !selectedEntityId) return
    const entity = entitiesRef.current.find((item) => item.id === selectedEntityId)
    if (!entity) return
    setSelected(entity)
    map.setFeatureState({ source: 'port-entities', id: entity.id }, { selected: true })
    map.easeTo({ center: entity.coordinates, zoom: Math.max(map.getZoom(), 14.2), duration: 800 })
  }, [ready, selectedEntityId])

  const resetView = () => {
    const map = mapRef.current
    if (!map) return
    map.easeTo({
      center: PORT_CENTER,
      zoom: PORT_DEFAULT_ZOOM,
      pitch: 28,
      bearing: -12,
      duration: 900,
    })
    setSelected(null)
    for (const item of entitiesRef.current) {
      map.setFeatureState(
        { source: 'port-entities', id: item.id },
        { selected: false },
      )
    }
  }

  return (
    <div className={`relative h-full w-full overflow-hidden bg-ink ${className}`}>
      <div ref={containerRef} className="absolute inset-0 h-full w-full" />

      <div className="pointer-events-none absolute inset-0 port-vignette opacity-25" />
      <div className="pointer-events-none absolute inset-0 port-noise opacity-10" />

      {showFilters && (
        <div className="absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-void via-void/80 to-transparent px-4 pb-10 pt-20 sm:px-6 md:pt-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <MapFilters value={filter} onChange={setFilter} />
            <button
              type="button"
              onClick={resetView}
              className="self-start rounded-full border border-line bg-panel/80 px-4 py-2 text-[0.65rem] tracking-[0.18em] uppercase text-mist backdrop-blur-md transition-colors hover:text-snow md:self-auto"
            >
              Volver al inicio
            </button>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute bottom-6 left-4 z-10 sm:left-6">
        <p className="label-caps text-[0.6rem] text-mist/80">
          29190 · EL PUERTO DE LA TORRE
        </p>
      </div>

      <EntitySheet entity={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
