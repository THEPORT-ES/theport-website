import type { DiscoverCard } from '../types/port'

export const discoverCards: DiscoverCard[] = [
  { id: 'd-01', eyebrow: 'COMER', title: 'Restaurantes del Puerto', description: 'Cinco sitios seleccionados según las valoraciones publicadas en un directorio.', href: '/business' },
  { id: 'd-02', eyebrow: 'MAPA', title: 'Explora 29190', description: 'Consulta los puntos incluidos en esta primera versión del mapa.', href: '/map', tone: 'accent' },
  { id: 'd-03', eyebrow: 'PERSONAS', title: 'Quiénes somos', description: 'Un espacio abierto para la gente que da vida al barrio.', href: '/people' },
  { id: 'd-04', eyebrow: 'PARTICIPA', title: 'Añade lo tuyo', description: '¿Tienes un negocio, proyecto o propuesta local?', href: '/join' },
]
