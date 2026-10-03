/** El Puerto de la Torre, Málaga — approximate center of 29190 */
export const PORT_CENTER: [number, number] = [-4.48965, 36.74335]
export const PORT_BOUNDS: [[number, number], [number, number]] = [
  [-4.53, 36.715],
  [-4.45, 36.77],
]
export const PORT_DEFAULT_ZOOM = 14
export const PORT_MIN_ZOOM = 12
export const PORT_MAX_ZOOM = 17

export const SITE = {
  name: 'THE PORT.ES',
  shortName: 'THE PORT.',
  domain: 'theport.es',
  url: 'https://theport.es',
  email: 'hello@theport.es',
  postalCode: '29190',
  place: 'El Puerto de la Torre',
  city: 'Málaga',
  country: 'Spain',
  instagram: 'https://instagram.com/theport.es',
  linkedin: 'https://linkedin.com/company/theport-es',
  author: {
    name: 'iamjuandiego',
    url: 'https://iamjuandiego.com',
  },
  title: 'THE PORT.ES — El Puerto de la Torre · 29190',
  description:
    'THE PORT.ES — la capa digital de El Puerto de la Torre (29190, Málaga). Personas, empresas, lugares, servicios y comunidad.',
} as const

export const NAV_LINKS = [
  { to: '/map', label: 'MAPA' },
  { to: '/discover', label: 'DESCUBRIR' },
  { to: '/people', label: 'PERSONAS' },
  { to: '/business', label: 'NEGOCIOS' },
  { to: '/join', label: 'SUMARME' },
] as const

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'TODO',
  people: 'PERSONAS',
  business: 'NEGOCIOS',
  places: 'LUGARES',
  food: 'COMER',
  services: 'SERVICIOS',
  events: 'PLANES',
  projects: 'PROYECTOS',
  community: 'COMUNIDAD',
}

export const MAP_FILTERS = [
  'all',
  'people',
  'business',
  'places',
  'food',
  'services',
  'events',
  'projects',
] as const

export type MapFilter = (typeof MAP_FILTERS)[number]

/** Free basemaps — swap provider without touching UI/markers */
export const MAP_STYLE_DARK =
  'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
export const MAP_STYLE_LIGHT =
  'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
