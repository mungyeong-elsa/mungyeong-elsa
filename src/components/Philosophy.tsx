export default function Philosophy() {
  return (
    <section className="scroll-mt-24 bg-base py-section">
      <div className="wrap">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow reveal justify-center">
            <span className="inline-block h-px w-8 bg-accent" />
            PHILOSOPHY
          </p>
          <blockquote
            className="reveal mt-10 text-fluid-h2 font-extrabold leading-[1.25] text-ink"
            data-delay="80"
          >
            기술을 배우는 이유는
            <br />
            기술을 잘 쓰기 위해서가 아니라,
            <br />
            <span className="text-accent">내 삶을 더 잘 살아가기</span> 위해서입니다.
          </blockquote>
          <p className="reveal mt-10 text-lg text-muted" data-delay="160">
            배움은 나를 바꾸는 데서 끝나지 않고,
            <br className="sm:hidden" /> 다른 사람의 삶을 바꾸는 데까지 갑니다.
          </p>
        </div>
      </div>
    </section>
  )
}
