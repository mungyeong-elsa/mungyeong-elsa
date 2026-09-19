import { useEffect, useState } from 'react'

/** 데스크톱 전용 좌측 세로 점(dot) 네비게이션 — 스크롤 위치 표시 + 클릭 이동 */
const SECTIONS = [
  { id: 'top', label: '홈' },
  { id: 'about', label: '소개' },
  { id: 'lecture', label: '강의' },
  { id: 'reviews', label: '후기' },
  { id: 'oneonone', label: '강의문의' },
  { id: 'books', label: '펴낸책' },
  { id: 'indigo', label: '인디go' },
  { id: 'farm', label: '무아팜' },
  { id: 'contact', label: '연락처' },
]

export default function SideNav() {
  const [active, setActive] = useState('top')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-label="섹션 바로가기"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-start gap-4 lg:flex"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-3"
          >
            <span
              className={`block rounded-full transition-all duration-300 ease-soft ${
                isActive
                  ? 'h-3 w-3 bg-accent shadow-[0_0_0_4px_rgba(110,79,212,0.18)]'
                  : 'h-2.5 w-2.5 bg-ink/25 group-hover:bg-ink/50'
              }`}
            />
            <span
              className={`display whitespace-nowrap text-xs font-bold tracking-wide transition-all duration-300 ${
                isActive
                  ? 'text-accent opacity-100'
                  : 'text-ink/60 opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100'
              }`}
            >
              {label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}
