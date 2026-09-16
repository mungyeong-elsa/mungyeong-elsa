import { REVIEW_DATA } from '../data/content'
import SectionLabel from './SectionLabel'

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`별점 ${n}점`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i < n ? '#F5B301' : 'none'}
          className="shrink-0"
          aria-hidden="true"
        >
          <path
            d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"
            stroke={i < n ? '#F5B301' : '#CBCDF4'}
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 bg-beige/20 py-section">
      <div className="wrap">
        <div className="max-w-2xl">
          <SectionLabel en="REVIEWS · 강의후기" />
          <h2 className="reveal mt-5 text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
            수강생분들이
            <br />
            <span className="text-accent">직접 남긴 후기</span>입니다.
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-muted" data-delay="120">
            강의를 들으신 분들의 생생한 이야기를 전해드립니다.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {REVIEW_DATA.map((r, i) => (
            <figure
              key={r.name + r.course}
              className="reveal flex flex-col rounded-3xl border border-ink/10 bg-paper p-7 shadow-sm"
              data-delay={`${(i % 2) * 80}`}
            >
              <Stars n={r.rating} />
              <p className="display mt-4 text-sm font-semibold uppercase tracking-label text-accent">
                {r.course}
              </p>
              <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-text/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 text-base font-bold text-ink">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
