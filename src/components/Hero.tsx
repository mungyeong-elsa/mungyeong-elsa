import { useEffect, useRef, useState } from 'react'
import { SITE_CONFIG, IMAGE_CONFIG } from '../data/content'
import { applyHref, applyOpensNewTab } from '../lib/apply'

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
        <div className="relative z-20">
          <p className="eyebrow reveal">
            <span className="inline-block h-px w-8 bg-accent" />
            {SITE_CONFIG.roleEn} · {SITE_CONFIG.locationEn}
          </p>

          <h1 className="reveal mt-6 text-fluid-hero font-extrabold leading-[1.02] text-ink" data-delay="60">
            <span className="block">{SITE_CONFIG.brandName}</span>
            <span className="mt-1 block text-[1.333em] leading-[1.0] text-muted">
              {SITE_CONFIG.nameKo}
            </span>
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

          {/* 브랜드 문장 */}
          <div className="reveal mt-8 flex flex-wrap items-center gap-x-3 gap-y-2" data-delay="220">
            {['배우고', '만들고', '나누고', '기록합니다'].map((w, i) => (
              <span key={w} className="flex items-center gap-3">
                <span className="display text-sm font-semibold uppercase tracking-[0.12em] text-ink/70">
                  {w}
                </span>
                {i < 3 && <span className="h-1 w-1 rounded-full bg-accent/60" />}
              </span>
            ))}
          </div>

          <div className="reveal mt-8 flex flex-wrap items-center gap-3" data-delay="280">
            <HeroDropdown label="강의" variant="primary" items={LECTURE_ITEMS} />
            <HeroDropdown label="포트폴리오" variant="outline" items={PORTFOLIO_ITEMS} />
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

type DropItem = { label: string; href: string; external?: boolean; accent?: boolean }

const LECTURE_ITEMS: DropItem[] = [
  { label: '강의 알아보기', href: '#lecture' },
  { label: '강의후기', href: '#reviews' },
  { label: '강의 신청하기', href: applyHref(), external: applyOpensNewTab(), accent: true },
]

const PORTFOLIO_ITEMS: DropItem[] = [
  { label: '책소개', href: '#books' },
  { label: '인디go', href: '#indigo' },
  { label: '무아팜', href: '#farm' },
]

function HeroDropdown({
  label,
  variant,
  items,
}: {
  label: string
  variant: 'primary' | 'outline'
  items: DropItem[]
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className={variant === 'primary' ? 'btn-primary' : 'btn-outline'}
      >
        {label}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute left-0 top-full z-40 mt-3 w-64 overflow-hidden rounded-2xl border border-ink/10 bg-paper p-2 shadow-2xl shadow-ink/15 animate-fade-up"
          role="menu"
        >
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={`flex items-center justify-between rounded-xl px-5 py-4 text-lg font-bold transition-colors ${
                it.accent ? 'text-accent hover:bg-accent/10' : 'text-ink hover:bg-base'
              }`}
            >
              {it.label}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 opacity-40" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      )}
    </div>
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
        <div className="mb-3 aspect-[3/4] overflow-hidden rounded-lg bg-gradient-to-br from-accent to-beige">
          <img
            src="/images/book-grandma.jpg"
            alt="할머니의 비밀별 책 표지"
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-xs font-bold leading-snug text-ink">AI와 캔바로 작가되기</p>
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
