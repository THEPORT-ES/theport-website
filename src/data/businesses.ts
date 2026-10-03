import type { BusinessProfile } from '../types/port'

/** Five highest-rated local restaurants shown in the consulted directory.
 * Ratings and review totals belong to that directory; map coordinates are approximate.
 */
const source = 'https://www.toppingsandsalads.es/localidad/andalucia/malaga/puerto-de-la-torre/'

export const businesses: BusinessProfile[] = [
  {
    id: 'biz-01', name: 'Asador Don Carbón', category: 'Asador',
    tags: ['Pollo asado', 'Para llevar'], description: 'Asador de pollo al carbón.',
    locationLabel: 'C. Cirilo Salinas, 7 · 29190', coordinates: [-4.4933, 36.743],
    rating: 9.8, ratingSource: '1.145 opiniones', ratingSourceUrl: source, entityId: 'biz-01',
  },
  {
    id: 'biz-02', name: 'Trivana', category: 'Restaurante',
    tags: ['Cocina casera'], description: 'Restaurante en El Puerto de la Torre.',
    locationLabel: 'El Puerto de la Torre · 29190', coordinates: [-4.489, 36.746],
    rating: 9.8, ratingSource: '254 opiniones', ratingSourceUrl: source, entityId: 'biz-02',
  },
  {
    id: 'biz-03', name: 'La Teglia Bottega Italiana', category: 'Restaurante italiano',
    tags: ['Cocina italiana'], description: 'Restaurante italiano en la zona de Soliva.',
    locationLabel: 'Av. Escritor Antonio Soler, 19 · Málaga', coordinates: [-4.4758, 36.751],
    rating: 9.8, ratingSource: '240 opiniones', ratingSourceUrl: source, entityId: 'biz-03',
  },
  {
    id: 'biz-04', name: 'Restaurante El Ruiseñor', category: 'Restaurante',
    tags: ['Cocina mediterránea', 'Brasa'], description: 'Restaurante de cocina mediterránea y española.',
    locationLabel: 'C. Ruiseñores, 13 · 29190', coordinates: [-4.4962, 36.748],
    rating: 9.4, ratingSource: '3.274 opiniones', ratingSourceUrl: source, entityId: 'biz-04',
  },
  {
    id: 'biz-05', name: 'El Pikoteo del Puerto', category: 'Restaurante',
    tags: ['Tapas', 'Raciones'], description: 'Restaurante en la calle Escritor Atienza Huertos.',
    locationLabel: 'C. Escritor Atienza Huertos · 29190', coordinates: [-4.4905, 36.7435],
    rating: 9.4, ratingSource: '662 opiniones', ratingSourceUrl: source, entityId: 'biz-05',
  },
]
