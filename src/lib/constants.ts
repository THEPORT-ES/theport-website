/** El Puerto de la Torre, Málaga — approximate center of 29190 */
export const PORT_CENTER: [number, number] = [-4.4936, 36.7694]
export const PORT_BOUNDS: [[number, number], [number, number]] = [
  [-4.52, 36.74],
  [-4.46, 36.80],
]
export const PORT_DEFAULT_ZOOM = 13.2
export const PORT_MIN_ZOOM = 11.5
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
  { to: '/map', label: 'MAP' },
  { to: '/discover', label: 'DISCOVER' },
  { to: '/people', label: 'PEOPLE' },
  { to: '/business', label: 'BUSINESS' },
  { to: '/join', label: 'JOIN' },
] as const

export const CATEGORY_LABELS: Record<string, string> = {
  all: 'ALL',
  people: 'PEOPLE',
  business: 'BUSINESS',
  places: 'PLACES',
  food: 'FOOD',
  services: 'SERVICES',
  events: 'EVENTS',
  projects: 'PROJECTS',
  community: 'COMMUNITY',
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

/** Free dark basemap — swap provider without touching UI/markers */
export const MAP_STYLE_URL =
  'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
