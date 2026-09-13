import { useEffect, useState } from 'react'

/** 모바일 전용 하단 고정 CTA — 히어로를 지나면 나타남 */
export default function MobileCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-base/95 backdrop-blur-md transition-transform duration-300 ease-soft lg:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex gap-2 px-4 py-3">
        <a href="#lecture" className="btn-primary !min-h-[48px] flex-1 !px-4 !py-3 !text-sm">
          강의 신청하기
        </a>
        <a href="#oneonone-apply" className="btn-outline !min-h-[48px] flex-1 !px-4 !py-3 !text-sm">
          1:1 신청
        </a>
      </div>
    </div>
  )
}
