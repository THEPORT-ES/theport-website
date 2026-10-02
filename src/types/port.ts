export type PortCategory =
  | 'people'
  | 'business'
  | 'places'
  | 'food'
  | 'services'
  | 'events'
  | 'projects'
  | 'community'

export type PortEntity = {
  id: string
  name: string
  category: PortCategory
  subcategory?: string
  description: string
  coordinates: [number, number] // [lng, lat]
  locationLabel?: string
  image?: string
  website?: string
  instagram?: string
  featured?: boolean
}

export type PersonProfile = {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  instagram?: string
  website?: string
  entityId?: string
}

export type BusinessProfile = {
  id: string
  name: string
  category: string
  tags: string[]
  description: string
  locationLabel: string
  rating?: number
  image?: string
  website?: string
  instagram?: string
  entityId?: string
}

export type DiscoverCard = {
  id: string
  eyebrow: string
  title: string
  description: string
  href: string
  tone?: 'default' | 'accent'
}

export type PortIndexStat = {
  key: PortCategory | 'businesses'
  label: string
  value: number
}

export type JoinFormData = {
  name: string
  business: string
  category: PortCategory | ''
  description: string
  instagram: string
  website: string
  email: string
  location: string
}
