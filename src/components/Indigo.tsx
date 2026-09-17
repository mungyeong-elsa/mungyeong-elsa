import { CONTACT_CONFIG } from '../data/content'

export default function Indigo() {
  return (
    <section
      id="indigo"
      className="relative scroll-mt-24 overflow-hidden bg-ink py-section text-base"
    >
      {/* 감성 배경 */}
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-90">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-forest/30 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-accent/25 blur-[120px]" />
      </div>

      <div className="wrap relative">
        <p className="eyebrow reveal !text-beige">
          <span className="inline-block h-px w-8 bg-beige" />
          INDIGO · 출판 브랜드
        </p>

        <h2
          className="reveal mt-8 max-w-4xl text-fluid-hero font-extrabold leading-[1.05]"
          data-delay="60"
        >
          당신의 이야기도
          <br />
          <span className="text-beige">한 권의 책</span>이 될 수 있습니다.
        </h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="reveal max-w-xl space-y-5 text-lg leading-relaxed text-base/80" data-delay="120">
            <p>2026년부터 시작한 문경엘사의 출판 브랜드 '인디go'.</p>
            <p>
              AI 시대에는 글을 잘 쓰는 사람만 책을 만드는 것이 아니라, 자신의 경험과 이야기를 가진
              누구나 책의 저자가 될 수 있다고 생각합니다.
            </p>
            <p className="font-semibold text-base">
              인디go는 사람들의 경험과 이야기를 책이라는 형태로 세상에 남기는 일을 합니다.
            </p>
            <div className="pt-4">
              <a href="#contact" className="btn bg-beige text-ink hover:bg-base">
                인디go 알아보기
              </a>
            </div>
          </div>

          {/* 문구 카드 */}
          <div className="reveal rounded-3xl border border-base/15 bg-base/[0.04] p-8" data-delay="180">
            <p className="display text-[11px] font-semibold uppercase tracking-label text-base/50">
              indieGo Publishing
            </p>
            <p className="mt-4 text-2xl font-bold leading-snug">
              누구나
              <br />
              <span className="text-beige">자신의 이야기를</span>
              <br />
              책으로.
            </p>
            <p className="mt-6 text-sm text-base/60">
              문의: {CONTACT_CONFIG.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
