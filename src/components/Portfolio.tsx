import { useMemo, useState } from 'react'
import { PORTFOLIO_DATA, PORTFOLIO_FILTERS, type Portfolio as PortfolioType } from '../data/content'
import SectionLabel from './SectionLabel'

const SIZE_CLASS: Record<PortfolioType['size'], string> = {
  large: 'sm:col-span-2 sm:row-span-2 min-h-[340px] sm:min-h-[440px]',
  wide: 'sm:col-span-2 min-h-[240px]',
  normal: 'min-h-[240px]',
}

const GRADIENTS = [
  'from-forest to-ink',
  'from-accent to-ink',
  'from-ink to-forest',
  'from-beige to-accent',
  'from-forest/90 to-accent',
  'from-ink to-accent',
  'from-accent/90 to-forest',
]

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('ALL')

  const items = useMemo(
    () =>
      filter === 'ALL'
        ? PORTFOLIO_DATA
        : PORTFOLIO_DATA.filter((p) => p.category.includes(filter)),
    [filter],
  )

  return (
    <section id="portfolio" className="scroll-mt-24 border-t border-ink/10 py-section">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel en="SELECTED WORKS · 제가 만든 것들" />
            <h2 className="reveal mt-5 text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
              배운 것을
              <br />
              <span className="text-accent">콘텐츠로</span> 만들었습니다.
            </h2>
          </div>

          {/* 필터 */}
          <div className="reveal flex flex-wrap gap-2" data-delay="120" role="tablist" aria-label="포트폴리오 필터">
            {PORTFOLIO_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`display rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                  filter === f
                    ? 'border-ink bg-ink text-base'
                    : 'border-ink/15 text-muted hover:border-ink/40 hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={item.no}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-ink/10 p-7 text-base shadow-sm transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10 ${SIZE_CLASS[item.size]}`}
            >
              {/* 배경 */}
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-soft group-hover:scale-105"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} transition-transform duration-700 ease-soft group-hover:scale-105`}
                />
              )}
              {/* 가독성 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />

              {/* 상단 넘버/카테고리 */}
              <div className="absolute inset-x-7 top-7 flex items-start justify-between">
                <span className="display text-sm font-bold text-base/80">{item.no}</span>
                <span className="display rounded-full bg-base/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-base/90 backdrop-blur-sm">
                  {item.categoryLabel}
                </span>
              </div>

              {/* 하단 텍스트 */}
              <div className="relative">
                <h3 className={`font-extrabold ${item.size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-base/80 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:max-h-0 sm:overflow-hidden sm:group-hover:max-h-40">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <p className="mt-12 text-center text-muted">해당 분야의 작업이 곧 추가됩니다.</p>
        )}
      </div>
    </section>
  )
}
