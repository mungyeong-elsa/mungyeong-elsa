import { useEffect, useState } from 'react'

/** 어느 위치에서든 맨 위로 올라가는 플로팅 버튼 (스크롤하면 나타남) */
export default function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="맨 위로"
      className={`fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-base/15 bg-ink text-base shadow-xl shadow-ink/25 transition-all duration-300 ease-soft hover:bg-accent lg:bottom-6 lg:right-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 19V5M6 11l6-6 6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
