import { useEffect, useState } from 'react'
import { SITE_CONFIG } from '../data/content'

const NAV = [
  { label: 'ABOUT', ko: '소개', href: '#about' },
  { label: 'LECTURE', ko: '강의', href: '#lecture' },
  { label: 'INQUIRY', ko: '강의문의(1:1 개인지도 가능)', href: '#oneonone' },
  { label: 'PORTFOLIO', ko: '포트폴리오', href: '#portfolio' },
  { label: 'BOOKS', ko: '펴낸책', href: '#books' },
  { label: 'MOOA FARM', ko: '무아팜', href: '#farm' },
  { label: 'CONTACT', ko: '문의', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* 상단 바 (blur는 이 안쪽에만 적용 — fixed 오버레이가 갇히지 않도록) */}
      <div
        className={`transition-all duration-500 ease-soft ${
          scrolled
            ? 'border-b border-ink/10 bg-base/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex items-center justify-between py-4">
        {/* 로고 */}
        <a href="#top" className="group flex flex-col leading-none" aria-label="문경엘사 홈으로">
          <span className="text-lg font-bold text-ink sm:text-xl">{SITE_CONFIG.brandName}</span>
          <span className="display mt-0.5 text-[10px] font-semibold uppercase tracking-label text-muted">
            {SITE_CONFIG.nameEn}
          </span>
        </a>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="주요 메뉴">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="display text-xs font-semibold uppercase tracking-[0.14em] text-text/80 transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a href="#lecture" className="btn-primary !min-h-0 !px-5 !py-2.5 !text-sm">
            강의 신청하기
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
        >
          <div className="flex flex-col items-center justify-center gap-[5px]">
            <span
              className={`h-[2px] w-5 bg-ink transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`}
            />
            <span className={`h-[2px] w-5 bg-ink transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span
              className={`h-[2px] w-5 bg-ink transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </div>
        </button>
        </div>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`fixed inset-0 z-40 bg-base transition-all duration-500 ease-soft lg:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8" aria-label="모바일 메뉴">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 py-4 text-2xl font-bold text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.ko}
            </a>
          ))}
          <a
            href="#lecture"
            onClick={() => setOpen(false)}
            className="btn-primary mt-8 w-full"
          >
            강의 신청하기
          </a>
        </nav>
      </div>
    </header>
  )
}
