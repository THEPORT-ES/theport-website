import type { PortCategory } from '../../types/port'

export const CATEGORY_COLORS: Record<PortCategory, string> = {
  people: '#6e9fff',
  business: '#f4f4f6',
  places: '#8a8a92',
  food: '#c45c3e',
  services: '#c8c8d0',
  events: '#e8a87c',
  projects: '#7eb8ff',
  community: '#a78bfa',
}

export function categoryColor(category: PortCategory) {
  return CATEGORY_COLORS[category] ?? '#f4f4f6'
}
