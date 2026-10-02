import type { PortIndexStat } from '../types/port'

/**
 * Placeholder counts — configurable, not real statistics.
 * Wire to live aggregations when a database exists.
 */
export const portIndexStats: PortIndexStat[] = [
  { key: 'people', label: 'PEOPLE', value: 124 },
  { key: 'businesses', label: 'BUSINESSES', value: 86 },
  { key: 'places', label: 'PLACES', value: 41 },
  { key: 'services', label: 'SERVICES', value: 57 },
  { key: 'events', label: 'EVENTS', value: 12 },
  { key: 'projects', label: 'PROJECTS', value: 8 },
]
