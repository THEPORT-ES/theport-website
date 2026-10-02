/**
 * Data access layer.
 * Today: local mocks. Tomorrow: Supabase / PostgreSQL / CMS / API.
 * UI components should import from here — never from raw mock files directly
 * when possible — so swapping the source is a one-file change.
 */
export { businesses } from './businesses'
export { discoverCards } from './discover'
export {
  entities,
  getEntitiesByCategory,
  getEntityById,
} from './entities'
export { portIndexStats } from './index-stats'
export { people } from './people'
