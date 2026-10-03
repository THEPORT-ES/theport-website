import { businesses } from './businesses'
import type { PortEntity } from '../types/port'

/** Map pins are derived from the same five local listings used by the directory. */
export const entities: PortEntity[] = businesses.map((business) => ({
  id: business.entityId ?? business.id,
  name: business.name,
  category: 'food',
  subcategory: business.category,
  description: business.description,
  coordinates: business.coordinates,
  locationLabel: business.locationLabel,
  featured: true,
  rating: business.rating,
  reviewCount: Number(business.ratingSource.replace(/\D/g, '')),
  ratingSource: business.ratingSource,
  ratingSourceUrl: business.ratingSourceUrl,
}))

export function getEntitiesByCategory(category: string): PortEntity[] {
  if (category === 'all') return entities
  return entities.filter((entity) => entity.category === category)
}

export function getEntityById(id: string): PortEntity | undefined {
  return entities.find((entity) => entity.id === id)
}
