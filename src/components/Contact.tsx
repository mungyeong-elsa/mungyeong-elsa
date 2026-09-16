import { CONTACT_CONFIG, APPLY_CONFIG } from '../data/content'

export default function Contact() {
  const channels = [
    { key: 'email', label: 'EMAIL', value: CONTACT_CONFIG.email, href: `mailto:${CONTACT_CONFIG.email}` },
    { key: 'phone', label: 'PHONE', value: CONTACT_CONFIG.phone, href: `tel:${CONTACT_CONFIG.phone.replace(/[^0-9+]/g, '')}` },
  ]

  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-section text-base">
      <div className="wrap">
        <p className="eyebrow reveal !text-beige">
          <span className="inline-block h-px w-8 bg-beige" />
          CONTACT
        </p>

        <h2 className="reveal mt-6 text-fluid-hero font-extrabold leading-[1.05]" data-delay="60">
          함께
          <br />
          <span className="text-beige">만들어볼까요?</span>
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <p className="reveal max-w-lg text-lg leading-relaxed text-base/80" data-delay="120">
            AI 교육, 스마트폰 활용, 디지털 콘텐츠, 퍼스널브랜딩, 책 만들기, 강의 및 협업에 대해 편하게
            문의해주세요. 여러분의 이야기에서 시작합니다.
          </p>

          <div className="reveal space-y-6" data-delay="180">
            {channels.map((c) => (
              <a
                key={c.key}
                href={c.href}
                className="flex items-baseline justify-between border-b border-base/15 pb-4 transition-colors hover:border-beige"
              >
                <span className="display text-xs font-semibold uppercase tracking-label text-base/50">
                  {c.label}
                </span>
                <span className="text-lg font-semibold">{c.value}</span>
              </a>
            ))}
          </div>
        </div>

        {APPLY_CONFIG.kakaoUrl && (
          <div className="reveal mt-12 flex flex-wrap gap-3" data-delay="240">
            <a
              href={APPLY_CONFIG.kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-beige text-ink hover:bg-base"
            >
              카톡으로 문의하기
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
