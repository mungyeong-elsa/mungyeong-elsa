import { WHATIDO_DATA } from '../data/content'

export default function WhatIDo() {
  return (
    <section id="whatido" className="scroll-mt-24 bg-ink py-section text-base">
      <div className="wrap">
        <p className="eyebrow reveal !text-beige">
          <span className="inline-block h-px w-8 bg-beige" />
          WHAT I DO
        </p>
        <h2 className="reveal mt-5 max-w-3xl text-fluid-h2 font-extrabold leading-tight" data-delay="60">
          디지털을 배우고,
          <br />
          직접 만들고,
          <span className="text-beige"> 세상과 연결합니다.</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {WHATIDO_DATA.map((item, i) => (
            <div
              key={item.no}
              className="reveal group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-base/15 bg-base/[0.03] p-8 transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:border-beige/40 hover:bg-base/[0.06]"
              data-delay={`${i * 100}`}
            >
              <div>
                <span className="display text-xs font-semibold uppercase tracking-label text-base/40">
                  {item.en}
                </span>
                <h3 className="mt-6 text-3xl font-extrabold">{item.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-base/70">{item.desc}</p>
              </div>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-beige/50 to-transparent transition-all duration-500 group-hover:from-beige" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
