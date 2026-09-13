import { APPLY_CONFIG, CONTACT_CONFIG } from '../data/content'

/**
 * 신청 링크를 만든다.
 * - 구글폼/네이버폼(formUrl)이 있으면 그 링크로 (구글폼이면 강의명 자동 채움)
 * - 없으면 카카오톡(kakaoUrl)으로
 * - 그것도 없으면 이메일 문의로 폴백
 */
export function applyHref(courseName?: string): string {
  const { formUrl, formEntryId, kakaoUrl } = APPLY_CONFIG

  if (formUrl) {
    if (courseName && formEntryId) {
      const sep = formUrl.includes('?') ? '&' : '?'
      return `${formUrl}${sep}usp=pp_url&${formEntryId}=${encodeURIComponent(courseName)}`
    }
    return formUrl
  }

  if (kakaoUrl) return kakaoUrl

  const subject = courseName
    ? `[강의 신청] ${courseName} — 문경엘사`
    : '[강의 신청] 문경엘사'
  return `mailto:${CONTACT_CONFIG.email}?subject=${encodeURIComponent(subject)}`
}

/** 신청 링크가 외부(폼/카톡)라 새 탭으로 열어야 하는지 여부 */
export function applyOpensNewTab(): boolean {
  return Boolean(APPLY_CONFIG.formUrl || APPLY_CONFIG.kakaoUrl)
}
