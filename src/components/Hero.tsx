import { SITE_CONFIG, IMAGE_CONFIG } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* 은은한 배경 그래픽 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-beige/40 blur-3xl" />
        <div className="absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="wrap grid items-center gap-12 pb-section lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* 좌측 텍스트 */}
        <div>
          <p className="eyebrow reveal">
            <span className="inline-block h-px w-8 bg-accent" />
            {SITE_CONFIG.roleEn} · {SITE_CONFIG.locationEn}
          </p>

          <h1 className="reveal mt-6 text-fluid-hero font-extrabold leading-[1.02] text-ink" data-delay="60">
            {SITE_CONFIG.brandName}
            <span className="mt-2 block text-muted">{SITE_CONFIG.nameKo}</span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-fluid-h3 font-bold text-forest" data-delay="120">
            AI와 디지털을
            <br />
            삶과 일에 연결합니다.
          </p>

          <p className="reveal mt-6 max-w-lg text-lg leading-relaxed text-muted" data-delay="180">
            AI부터 스마트폰, SNS와 책 만들기까지. 배우는 데서 끝나지 않고 직접 만들고 기록하며, 사람들과
            나누는 디지털 라이프를 만들어갑니다.
          </p>

          <div className="reveal mt-10 flex flex-wrap gap-3" data-delay="240">
            <a href="#lecture" className="btn-primary">
              강의 알아보기
            </a>
            <a href="#portfolio" className="btn-outline">
              포트폴리오 보기
            </a>
          </div>

          {/* 브랜드 문장 */}
          <div className="reveal mt-12 flex flex-wrap items-center gap-x-3 gap-y-2" data-delay="300">
            {['배우고', '만들고', '나누고', '기록합니다'].map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                <span className="display text-sm font-semibold uppercase tracking-[0.12em] text-ink/70">
                  {w}
                </span>
                {i < 3 && <span className="h-1 w-1 rounded-full bg-accent/60" />}
              </span>
            ))}
          </div>
        </div>

        {/* 우측 에디토리얼 콜라주 비주얼 */}
        <div className="reveal" data-delay="160">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-md lg:max-w-none">
      {/* 메인 이미지 / 그래디언트 플레이스홀더 */}
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-ink/10 bg-gradient-to-br from-forest/85 via-ink to-ink shadow-2xl shadow-ink/20">
        {IMAGE_CONFIG.heroImage ? (
          <img
            src={IMAGE_CONFIG.heroImage}
            alt="문경엘사 오현수"
            className="h-full w-full object-cover"
            loading="eager"
          />
        ) : (
          <div className="relative flex h-full w-full flex-col justify-between p-8 text-base">
            <div className="flex justify-between text-[11px] font-semibold uppercase tracking-label text-base/70">
              <span>AI · DIGITAL</span>
              <span>2026</span>
            </div>
            <div>
              <p className="display text-6xl font-extrabold leading-none text-base/95">엘사</p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-base/70">
                문경의 자연과 디지털, 책과 사람. 하나의 이야기로 연결됩니다.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-semibold uppercase tracking-wider text-base/80">
              {['AI', 'PHONE', 'BOOK', 'FARM'].map((t) => (
                <span key={t} className="rounded-full border border-base/25 py-1.5">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 겹쳐진 작은 카드 (책) */}
      <div className="absolute -bottom-6 -left-6 w-36 rotate-[-6deg] rounded-2xl border border-ink/10 bg-paper p-4 shadow-xl shadow-ink/10 sm:w-40">
        <div className="mb-3 h-20 rounded-lg bg-gradient-to-br from-accent to-beige" />
        <p className="text-xs font-bold text-ink">AI로 나만의 책</p>
        <p className="mt-0.5 text-[11px] text-muted">경험을 기록으로</p>
      </div>

      {/* 겹쳐진 작은 배지 (자연) */}
      <div className="absolute -right-4 top-8 flex h-20 w-20 rotate-6 flex-col items-center justify-center rounded-2xl border border-ink/10 bg-forest text-center text-base shadow-xl shadow-forest/20 sm:h-24 sm:w-24">
        <span className="text-2xl">🍇</span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider">MOOA FARM</span>
      </div>
    </div>
  )
}
