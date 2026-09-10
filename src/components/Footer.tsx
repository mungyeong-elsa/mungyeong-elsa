import { SITE_CONFIG, SOCIAL_CONFIG } from '../data/content'

export default function Footer() {
  const socials = [
    { label: 'Instagram', url: SOCIAL_CONFIG.instagram },
    { label: 'YouTube', url: SOCIAL_CONFIG.youtube },
    { label: 'Blog', url: SOCIAL_CONFIG.blog },
  ].filter((s) => s.url)

  return (
    <footer className="border-t border-base/10 bg-ink pb-10 pt-14 text-base">
      <div className="wrap flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-bold">
            {SITE_CONFIG.brandName} <span className="text-base/60">{SITE_CONFIG.nameKo}</span>
          </p>
          <p className="display mt-2 text-xs font-semibold uppercase tracking-label text-base/50">
            {SITE_CONFIG.roleEn}
          </p>
          <p className="display mt-1 text-xs font-semibold uppercase tracking-label text-base/50">
            {SITE_CONFIG.locationEn}
          </p>
          <p className="mt-6 display text-sm font-semibold uppercase tracking-[0.14em] text-beige/80">
            {SITE_CONFIG.brandLine}
          </p>
        </div>

        {socials.length > 0 && (
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-base/20 transition-colors hover:border-beige hover:text-beige"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="wrap mt-10 border-t border-base/10 pt-6">
        <p className="display text-xs uppercase tracking-wider text-base/40">
          © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.nameEn}. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

function SocialIcon({ name }: { name: string }) {
  const p = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'currentColor' }
  if (name === 'Instagram')
    return (
      <svg {...p}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1 .3.3.6.5 1 .7.3.1.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1-.3-.3-.6-.5-1-.7-.3-.1-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 3.1a4.9 4.9 0 110 9.8 4.9 4.9 0 010-9.8zm0 8.1a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zm6.3-8.3a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
      </svg>
    )
  if (name === 'YouTube')
    return (
      <svg {...p}>
        <path d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7zM9.7 15.3V8.7l6.2 3.3-6.2 3.3z" />
      </svg>
    )
  return (
    <svg {...p}>
      <path d="M4 4h16v16H4V4zm3.5 3.5v9h2.2l3.8-5.6v5.6h2.2v-9h-2.2L9.7 13V7.5H7.5z" />
    </svg>
  )
}
