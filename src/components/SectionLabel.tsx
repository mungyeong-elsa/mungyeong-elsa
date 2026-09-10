interface Props {
  en: string
  ko?: string
  className?: string
}

/** 섹션 상단의 작은 라벨 + 제목 세트 */
export default function SectionLabel({ en, ko, className = '' }: Props) {
  return (
    <div className={className}>
      <p className="eyebrow reveal">
        <span className="inline-block h-px w-8 bg-accent" />
        {en}
      </p>
      {ko && (
        <h2 className="reveal mt-4 text-fluid-h2 font-extrabold text-ink" data-delay="60">
          {ko}
        </h2>
      )}
    </div>
  )
}
