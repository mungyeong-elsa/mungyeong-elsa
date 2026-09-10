import { IMAGE_CONFIG } from '../data/content'
import SectionLabel from './SectionLabel'

export default function MuaFarm() {
  return (
    <section id="farm" className="scroll-mt-24 py-section">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* 텍스트 */}
        <div>
          <SectionLabel en="MUA FARM · 무아팜" />
          <h2 className="reveal mt-5 text-fluid-h2 font-extrabold leading-tight text-ink" data-delay="60">
            디지털을 가르치지만
            <br />
            <span className="text-forest">삶은 자연에서</span> 배웁니다.
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-text/90">
            <p className="reveal max-w-prose" data-delay="120">
              무아팜은 문경에서 포도와 박하차 등을 통해 사람들에게 작은 행복을 전하는 농장입니다.
            </p>
            <p className="reveal max-w-prose" data-delay="160">
              농촌의 자연 속에서 머물며 쉬어갈 수 있는 힐링 공간을 만들어가고 있습니다.
            </p>
          </div>

          <div className="reveal mt-10 flex flex-wrap gap-3" data-delay="220">
            {['디지털과 자연', '일과 삶', '배움과 쉼'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-forest/30 bg-forest/5 px-5 py-2.5 text-sm font-semibold text-forest"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 이미지 */}
        <div className="reveal" data-delay="140">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-ink/10 shadow-xl shadow-ink/10">
            {IMAGE_CONFIG.farmImage ? (
              <img
                src={IMAGE_CONFIG.farmImage}
                alt="무아팜 - 문경의 자연과 농장"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-forest via-forest/90 to-ink p-8 text-base">
                <div className="flex justify-between text-[11px] font-semibold uppercase tracking-label text-base/70">
                  <span>MUNGYEONG</span>
                  <span>GRAPE · MINT</span>
                </div>
                <div className="flex items-end justify-between">
                  <p className="display text-5xl font-extrabold">무아팜</p>
                  <span className="text-6xl">🍇</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
