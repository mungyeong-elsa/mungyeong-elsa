import { useEffect, useState } from 'react'
import {
  LECTURE_DATA,
  APPLY_CONFIG,
  type Lecture as LectureType,
  type LectureStatus,
} from '../data/content'
import {
  applyHref,
  applyOpensNewTab,
  inquiryHref,
  inquiryLabel,
  inquiryOpensNewTab,
} from '../lib/apply'
import SectionLabel from './SectionLabel'

const STATUS_STYLE: Record<LectureStatus, string> = {
  모집중: 'bg-forest/12 text-forest',
  모집예정: 'bg-accent/12 text-accent',
  상시모집: 'bg-ink/8 text-forest',
  마감: 'bg-ink/8 text-muted',
}

function StatusBadge({ status }: { status: LectureStatus }) {
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${STATUS_STYLE[status]}`}>
      {status}
    </span>
  )
}

export default function Lecture() {
  const [active, setActive] = useState<LectureType | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="lecture" className="scroll-mt-24 py-section">
      <div className="wrap">
        <div className="max-w-3xl">
          <SectionLabel en="LECTURE · 함께 배우는 것들" />
          <h2 className="reveal mt-5 text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
            오늘의 배움이
            <br />
            <span className="text-accent">내일의 실천</span>으로 이어지게 도와드립니다.
          </h2>
          <p className="reveal mt-5 text-lg text-muted" data-delay="120">
            카드를 누르면 교육 내용과 수강료를 확인하고 바로 신청할 수 있어요.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LECTURE_DATA.map((lec, i) => (
            <button
              key={lec.no}
              type="button"
              onClick={() => setActive(lec)}
              className="reveal group flex h-full flex-col rounded-3xl border border-ink/12 bg-paper p-7 text-left transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:border-forest hover:shadow-xl hover:shadow-ink/5"
              data-delay={`${(i % 3) * 80}`}
            >
              <div className="flex items-center justify-between">
                <span className="display text-sm font-bold text-accent">{lec.no}</span>
                <StatusBadge status={lec.status ?? '상시모집'} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-ink">{lec.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-muted">{lec.summary}</p>
              {lec.price && (
                <p className="mt-5 text-base font-bold text-ink">
                  수강료 <span className="text-accent">{lec.price}</span>
                </p>
              )}
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-forest transition-colors group-hover:text-accent">
                자세히 보고 신청하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active && <LectureModal lecture={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function LectureModal({ lecture, onClose }: { lecture: LectureType; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${lecture.title} 강의 안내`}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-base p-8 shadow-2xl sm:rounded-3xl sm:p-10 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-base"
          aria-label="닫기"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <span className="display text-sm font-bold text-accent">{lecture.no}</span>
          <StatusBadge status={lecture.status ?? '상시모집'} />
        </div>
        <h3 className="mt-2 text-3xl font-extrabold text-ink">{lecture.title}</h3>
        <p className="mt-3 text-lg text-forest">{lecture.summary}</p>

        <dl className="mt-8 space-y-6">
          <Field label="대상">{lecture.target}</Field>
          <div>
            <dt className="display text-xs font-semibold uppercase tracking-label text-muted">교육 내용</dt>
            <ul className="mt-3 space-y-2">
              {lecture.content.map((c, i) => (
                <li key={i} className="flex gap-3 text-base text-text/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <Field label="추천 대상">{lecture.recommend}</Field>
          <Field label="교육 방식">{lecture.method}</Field>
          {lecture.schedule && <Field label="일정">{lecture.schedule}</Field>}
          {lecture.price && (
            <Field label="수강료">
              <span className="text-xl font-extrabold text-ink">{lecture.price}</span>
            </Field>
          )}
        </dl>

        {(APPLY_CONFIG.guide || APPLY_CONFIG.bankAccount) && (
          <div className="mt-8 rounded-2xl bg-paper p-5 text-base leading-relaxed text-text/80">
            {APPLY_CONFIG.guide && <p>{APPLY_CONFIG.guide}</p>}
            {APPLY_CONFIG.bankAccount && (
              <p className="mt-3">
                <span className="font-semibold text-ink">계좌이체</span>{' '}
                {APPLY_CONFIG.bankAccount}
              </p>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={applyHref(lecture.title)}
            target={applyOpensNewTab() ? '_blank' : undefined}
            rel={applyOpensNewTab() ? 'noopener noreferrer' : undefined}
            onClick={onClose}
            className="btn-primary w-full sm:flex-1"
          >
            이 강의 신청하기
          </a>
          <a
            href={inquiryHref(lecture.title)}
            target={inquiryOpensNewTab() ? '_blank' : undefined}
            rel={inquiryOpensNewTab() ? 'noopener noreferrer' : undefined}
            onClick={onClose}
            className="btn-outline w-full sm:w-auto"
          >
            {inquiryLabel()}
          </a>
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="display text-xs font-semibold uppercase tracking-label text-muted">{label}</dt>
      <dd className="mt-2 text-base leading-relaxed text-text/90">{children}</dd>
    </div>
  )
}
