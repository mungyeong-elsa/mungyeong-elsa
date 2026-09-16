import { useEffect, useState } from 'react'
import { BOOK_DATA, type Book } from '../data/content'
import SectionLabel from './SectionLabel'

export default function Books() {
  const [active, setActive] = useState<Book | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setActive(null)
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
    <section id="books" className="scroll-mt-24 bg-beige/30 py-section">
      <div className="wrap">
        <div className="max-w-2xl">
          <SectionLabel en="BOOKS · 제가 만든 책" />
          <h2 className="reveal mt-5 text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
            경험은 기록할 때
            <br />
            <span className="text-accent">콘텐츠</span>가 됩니다.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {BOOK_DATA.map((book, i) => (
            <button
              key={book.title}
              type="button"
              onClick={() => setActive(book)}
              className="reveal group text-left"
              data-delay={`${i * 80}`}
            >
              <BookCover book={book} />
              <p className="display mt-4 text-[11px] font-semibold uppercase tracking-label text-muted">
                {book.label}
              </p>
              <h3 className="mt-1 text-lg font-bold text-ink transition-colors group-hover:text-accent">
                {book.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {active && <BookModal book={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function BookCover({ book }: { book: Book }) {
  return (
    <div className="relative aspect-[3/4.2] overflow-hidden rounded-r-lg rounded-l-sm shadow-lg shadow-ink/15 transition-all duration-500 ease-soft group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-ink/25">
      {book.cover ? (
        <img src={book.cover} alt={book.title} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div
          className="flex h-full w-full flex-col justify-between p-4 text-base"
          style={{ backgroundColor: book.spineColor }}
        >
          <span className="display text-[10px] font-semibold uppercase tracking-label opacity-70">
            인디go
          </span>
          <span className="text-lg font-extrabold leading-tight">{book.title}</span>
        </div>
      )}
      {/* 책등 하이라이트 */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  )
}

function BookModal({ book, onClose }: { book: Book; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${book.title} 소개`}
    >
      <div
        className="relative w-full max-w-lg rounded-t-3xl bg-base p-8 shadow-2xl sm:rounded-3xl sm:p-10 animate-scale-in"
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
        <div className="flex gap-6">
          <div className="w-28 shrink-0">
            <BookCover book={book} />
          </div>
          <div>
            <p className="display text-[11px] font-semibold uppercase tracking-label text-accent">
              {book.label}
            </p>
            <h3 className="mt-1 text-2xl font-extrabold text-ink">{book.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-text/90">{book.desc}</p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {book.soldOut ? (
            <span className="btn w-full cursor-not-allowed bg-muted/25 text-muted sm:w-auto">
              품절
            </span>
          ) : (
            book.buyUrl && (
              <a
                href={book.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full sm:w-auto"
              >
                구매하러 가기
              </a>
            )
          )}
          <a href="#indigo" onClick={onClose} className="btn-outline w-full sm:w-auto">
            인디go 알아보기
          </a>
        </div>
      </div>
    </div>
  )
}
