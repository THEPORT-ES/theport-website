import type { DiscoverCard } from '../types/port'

export const discoverCards: DiscoverCard[] = [
  {
    id: 'd-01',
    eyebrow: 'PLACES',
    title: '5 lugares que deberías conocer',
    description: 'Puntos del mapa con carácter. Empieza por aquí.',
    href: '/map?filter=places',
  },
  {
    id: 'd-02',
    eyebrow: 'NEW',
    title: 'New in 29190',
    description: 'Lo último en llegar al índice digital del barrio.',
    href: '/discover',
    tone: 'accent',
  },
  {
    id: 'd-03',
    eyebrow: 'PEOPLE',
    title: 'People of the Port',
    description: 'Quiénes hacen que 29190 se mueva.',
    href: '/people',
  },
  {
    id: 'd-04',
    eyebrow: 'BUSINESS',
    title: 'Local businesses',
    description: 'Comercios y estudios con identidad propia.',
    href: '/business',
  },
  {
    id: 'd-05',
    eyebrow: 'WEEKEND',
    title: 'Weekend in the Port',
    description: 'Rutas cortas. Buena comida. Algo que contar el lunes.',
    href: '/map?filter=events',
  },
  {
    id: 'd-06',
    eyebrow: 'PROJECTS',
    title: 'Projects shaping the neighborhood',
    description: 'Ideas que están dibujando el próximo capítulo.',
    href: '/map?filter=projects',
  },
]
