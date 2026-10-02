import type { PersonProfile } from '../types/port'

/** Mock profiles — not real people. Swap for CMS/API later. */
export const people: PersonProfile[] = [
  {
    id: 'person-01',
    name: 'María Solís',
    role: 'Visual Designer',
    bio: 'Diseña identidades que se sienten locales y se ven globales.',
    entityId: 'p-01',
    instagram: 'https://instagram.com',
  },
  {
    id: 'person-02',
    name: 'Leo Navarro',
    role: 'Founder',
    bio: 'Construye productos con raíces en 29190 y mirada larga.',
    entityId: 'p-02',
    website: 'https://theport.es',
  },
  {
    id: 'person-03',
    name: 'Aina Romero',
    role: 'Athlete',
    bio: 'Entrena, inspira y pone el barrio en movimiento.',
    entityId: 'p-03',
  },
  {
    id: 'person-04',
    name: 'Diego Faro',
    role: 'Photographer',
    bio: 'Documenta la luz, las calles y lo que aún no tiene nombre.',
  },
  {
    id: 'person-05',
    name: 'Nora Vidal',
    role: 'Chef',
    bio: 'Cocina de temporada. Producto cercano. Mesa larga.',
  },
  {
    id: 'person-06',
    name: 'Hugo Rivas',
    role: 'Architect',
    bio: 'Espacios que respiran. Proyectos que anclan el barrio.',
  },
]
