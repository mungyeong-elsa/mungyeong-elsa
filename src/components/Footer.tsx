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
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex transition-transform duration-300 ease-soft hover:-translate-y-1"
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
  const size = 40
  if (name === 'Instagram')
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="igGrad" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.25" stopColor="#FA7E1E" />
            <stop offset="0.5" stopColor="#D62976" />
            <stop offset="0.75" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
        <rect x="6" y="6" width="12" height="12" rx="3.6" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.6" />
        <circle cx="16.4" cy="7.6" r="1.1" fill="#fff" />
      </svg>
    )
  if (name === 'YouTube')
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#FF0000"
          d="M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7z"
        />
        <path fill="#fff" d="M9.7 15.3V8.7l6.2 3.3z" />
      </svg>
    )
  // Naver Blog (네이버)
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#03C75A" />
      <path
        fill="#fff"
        transform="translate(5 5) scale(0.5833)"
        d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727z"
      />
    </svg>
  )
}
