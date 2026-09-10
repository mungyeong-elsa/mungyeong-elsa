import { PROFILE_CONFIG, IMAGE_CONFIG } from '../data/content'

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

            {/* 키워드 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {PROFILE_CONFIG.aboutKeywords.map((k, i) => (
                <span
                  key={k}
                  className="reveal display rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/70"
                  data-delay={`${i * 80}`}
                >
                  {k}
                </span>
              ))}
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
        </div>
      </div>
    </section>
  )
}
