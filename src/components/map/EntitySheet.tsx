import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, Instagram, MapPin, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CATEGORY_LABELS } from '../../lib/constants'
import type { PortEntity } from '../../types/port'
import { categoryColor } from './categoryStyles'

type Props = {
  entity: PortEntity | null
  onClose: () => void
}

export function EntitySheet({ entity, onClose }: Props) {
  return (
    <AnimatePresence>
      {entity && (
        <>
          <motion.button
            type="button"
            aria-label="Close"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={entity.name}
            className="fixed inset-x-0 bottom-0 z-50 max-h-[70dvh] overflow-auto rounded-t-3xl border border-line bg-panel p-6 shadow-2xl md:absolute md:inset-auto md:right-6 md:top-28 md:bottom-auto md:w-[22rem] md:max-h-[calc(100dvh-8rem)] md:rounded-2xl"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p
                  className="label-caps text-[0.6rem]"
                  style={{ color: categoryColor(entity.category) }}
                >
                  {CATEGORY_LABELS[entity.category]}
                  {entity.subcategory ? ` · ${entity.subcategory.toUpperCase()}` : ''}
                </p>
                <h2 className="font-display mt-2 text-2xl font-medium tracking-[-0.03em] text-snow">
                  {entity.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-mist hover:text-snow"
                aria-label="Close panel"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-silver">{entity.description}</p>

            {entity.locationLabel && (
              <p className="mt-5 flex items-center gap-2 text-sm text-mist">
                <MapPin size={14} strokeWidth={1.5} />
                {entity.locationLabel}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              {entity.instagram && (
                <a
                  href={entity.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-mist transition-colors hover:text-snow"
                >
                  <Instagram size={14} /> Instagram
                </a>
              )}
              {entity.website && (
                <a
                  href={entity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase text-mist transition-colors hover:text-snow"
                >
                  <ExternalLink size={14} /> Web
                </a>
              )}
            </div>

            <Link
              to={
                entity.category === 'people'
                  ? '/people'
                  : entity.category === 'business' || entity.category === 'food'
                    ? '/business'
                    : '/discover'
              }
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-snow px-5 py-3 text-xs tracking-[0.16em] uppercase text-void transition-transform active:scale-[0.98]"
              onClick={onClose}
            >
              View profile
            </Link>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
