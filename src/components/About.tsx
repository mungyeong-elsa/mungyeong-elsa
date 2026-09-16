import {
  PROFILE_CONFIG,
  IMAGE_CONFIG,
  CAREER_DATA,
  CERT_DATA,
} from '../data/content'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-ink/10 py-section">
      <div className="wrap grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* 좌측 이미지 + 키워드 */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="reveal relative aspect-[3/4] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-gradient-to-b from-beige/60 to-forest/25">
              {IMAGE_CONFIG.profileImage ? (
                <img
                  src={IMAGE_CONFIG.profileImage}
                  alt="문경엘사 오현수 프로필"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ink/50">
                  <span className="text-5xl">🌿</span>
                  <span className="display text-sm font-semibold uppercase tracking-label">
                    Profile Photo
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 우측 텍스트 */}
        <div className="order-1 lg:order-2">
          <p className="eyebrow reveal">
            <span className="inline-block h-px w-8 bg-accent" />
            ABOUT
          </p>
          <h2 className="reveal mt-4 text-fluid-h3 font-bold text-muted" data-delay="60">
            {PROFILE_CONFIG.aboutTitleKo}
          </h2>

          <p
            className="reveal mt-6 whitespace-pre-line text-fluid-h2 font-extrabold leading-tight text-ink"
            data-delay="120"
          >
            {PROFILE_CONFIG.aboutHeadline}
          </p>

          <div className="mt-8 space-y-5">
            {PROFILE_CONFIG.aboutBody.map((p, i) => (
              <p
                key={i}
                className={`reveal max-w-prose text-lg leading-relaxed ${
                  i === PROFILE_CONFIG.aboutBody.length - 1
                    ? 'font-semibold text-forest'
                    : 'text-text/90'
                }`}
                data-delay={`${Math.min(i * 40, 200)}`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* 경력 · 자격증 */}
          <div className="reveal mt-12 border-t border-ink/10 pt-10" data-delay="80">
            <div className="grid gap-10 sm:grid-cols-2">
              {/* 경력 */}
              <div>
                <h3 className="display text-xs font-semibold uppercase tracking-label text-muted">
                  주요 경력
                </h3>
                <ul className="mt-4 space-y-4">
                  {CAREER_DATA.map((c) => (
                    <li key={c.period + c.role} className="flex flex-col gap-0.5">
                      <span className="display text-sm font-bold text-forest">{c.period}</span>
                      <span className="text-base leading-snug text-text/90">{c.role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 자격증 */}
              <div>
                <h3 className="display text-xs font-semibold uppercase tracking-label text-muted">
                  자격증
                </h3>
                <ul className="mt-4 space-y-4">
                  {CERT_DATA.map((c) => (
                    <li key={c.name} className="flex flex-col gap-0.5">
                      <span className="text-base font-bold text-ink">{c.name}</span>
                      <span className="text-sm text-muted">
                        {c.org} · {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
