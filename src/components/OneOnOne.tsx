import {
  ONEONONE_CONFIG,
  ONEONONE_COMPARE,
  ONEONONE_TARGETS,
  ONEONONE_STEPS,
  ONEONONE_REVIEWS,
} from '../data/content'
import { applyHref, applyOpensNewTab, inquiryHref, inquiryOpensNewTab } from '../lib/apply'
import { APPLY_CONFIG } from '../data/content'
import SectionLabel from './SectionLabel'

export default function OneOnOne() {
  const newTab = applyOpensNewTab()
  const applyAttrs = newTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <section id="oneonone" className="scroll-mt-24 bg-paper py-section">
      <div className="wrap">
        <div className="max-w-3xl">
          <SectionLabel en="INQUIRY · 강의 문의 (1:1 개인지도 가능)" />
          <h2 className="reveal mt-5 whitespace-pre-line text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
            {ONEONONE_CONFIG.headline}
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-muted" data-delay="120">
            {ONEONONE_CONFIG.lead}
          </p>
        </div>

        {/* 함께 배우는 강의 vs 1:1 비교 */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {ONEONONE_COMPARE.map((c) => (
            <div
              key={c.tag}
              className={`reveal flex flex-col rounded-3xl border p-7 ${
                c.highlight
                  ? 'border-forest bg-ink text-base'
                  : 'border-ink/12 bg-base'
              }`}
            >
              <h3 className={`text-xl font-extrabold ${c.highlight ? 'text-base' : 'text-ink'}`}>
                {c.tag}
              </h3>
              <p className={`mt-3 flex-1 text-base leading-relaxed ${c.highlight ? 'text-base/80' : 'text-muted'}`}>
                {c.desc}
              </p>
              <a
                href={c.href}
                {...(c.highlight ? applyAttrs : {})}
                className={
                  c.highlight
                    ? 'btn mt-6 bg-beige text-ink hover:bg-base'
                    : 'btn-outline mt-6'
                }
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>

        {/* 추천 대상 + 진행 흐름 */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="reveal">
            <h3 className="text-2xl font-extrabold text-ink">이런 분께 추천합니다</h3>
            <ul className="mt-6 space-y-3">
              {ONEONONE_TARGETS.map((t) => (
                <li key={t} className="flex gap-3 text-base leading-relaxed text-text/90">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-accent">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" data-delay="80">
            <h3 className="text-2xl font-extrabold text-ink">어떻게 진행되나요?</h3>
            <ol className="mt-6 space-y-3">
              {ONEONONE_STEPS.map((s, i) => (
                <li key={s} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-base px-5 py-4">
                  <span className="display flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-base">
                    {i + 1}
                  </span>
                  <span className="text-base font-semibold text-ink">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              {ONEONONE_CONFIG.online}
              <br />
              {ONEONONE_CONFIG.offline}
            </p>
            {ONEONONE_CONFIG.priceNote && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent/12 px-4 py-2 text-sm font-bold text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M12 8v5m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {ONEONONE_CONFIG.priceNote}
              </p>
            )}
          </div>
        </div>

        {/* 후기 */}
        {ONEONONE_REVIEWS.length > 0 && (
          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {ONEONONE_REVIEWS.map((r, i) => (
              <blockquote
                key={i}
                className="reveal rounded-2xl border border-ink/10 bg-base p-6 text-base leading-relaxed text-text/90"
                data-delay={`${(i % 3) * 60}`}
              >
                <span className="text-3xl font-extrabold leading-none text-accent">“</span>
                <p className="mt-2">{r}</p>
              </blockquote>
            ))}
          </div>
        )}

        {/* 핵심 메시지 + 최종 CTA */}
        <div
          id="oneonone-apply"
          className="reveal mt-16 scroll-mt-24 rounded-3xl bg-ink px-8 py-12 text-center text-base sm:px-12"
        >
          <p className="mx-auto max-w-2xl whitespace-pre-line text-xl font-bold leading-relaxed sm:text-2xl">
            {ONEONONE_CONFIG.quote}
          </p>
          <a
            href={applyHref('1:1 개인지도')}
            {...applyAttrs}
            className="btn mt-8 bg-beige text-ink hover:bg-base"
          >
            강의 문의하기
          </a>
          {APPLY_CONFIG.kakaoUrl && (
            <p className="mt-5">
              <a
                href={inquiryHref('1:1 개인지도')}
                target={inquiryOpensNewTab() ? '_blank' : undefined}
                rel={inquiryOpensNewTab() ? 'noopener noreferrer' : undefined}
                className="text-base font-semibold text-beige underline underline-offset-4 hover:text-base"
              >
                또는 카톡으로 편하게 문의하기
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
