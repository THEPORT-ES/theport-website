import { SITE } from '../../lib/constants'
import { BrandMark } from '../ui/BrandMark'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-6">
          <BrandMark />
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            The digital identity of El Puerto de la Torre.
          </p>
          <p className="label-caps text-[0.6rem] text-mist/70">
            {SITE.postalCode} · {SITE.city.toUpperCase()} · {SITE.country.toUpperCase()}
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <div className="space-y-3">
            <p className="label-caps text-mist">Connect</p>
            <ul className="space-y-2 text-sm text-silver">
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-snow"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-snow"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-snow"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 self-start sm:self-end sm:text-right">
            <p className="text-sm text-mist">
              © {new Date().getFullYear()} {SITE.name}
            </p>
            <p className="text-sm text-mist">
              by{' '}
              <a
                href={SITE.author.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver transition-colors hover:text-snow"
              >
                {SITE.author.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
