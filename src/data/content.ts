/* =============================================================
 *  콘텐츠 관리 파일 (CONTENT MANAGEMENT)
 * -------------------------------------------------------------
 *  이 파일만 수정하면 홈페이지의 대부분 내용을 바꿀 수 있습니다.
 *  코드를 몰라도 아래 따옴표(" ") 안의 글자만 고치면 됩니다.
 *
 *  - SITE_CONFIG      : 사이트 기본 정보 / 브랜드 문구
 *  - PROFILE_CONFIG   : 소개(ABOUT) 글
 *  - CONTACT_CONFIG   : 이메일 / 전화번호
 *  - SOCIAL_CONFIG    : SNS 링크
 *  - IMAGE_CONFIG     : 이미지 경로 (사진 교체용)
 *  - WHATIDO_DATA     : "하는 일" 3가지
 *  - LECTURE_DATA     : 강의 목록
 *  - PORTFOLIO_DATA   : 포트폴리오(작업물) 목록
 *  - BOOK_DATA        : 책 목록
 * ============================================================= */

export const SITE_CONFIG = {
  brandName: '문경엘사',
  nameKo: '오현수',
  nameEn: 'OH HYUNSUE',
  role: 'AI 디지털 강사',
  roleEn: 'AI DIGITAL CREATOR',
  location: '경상북도 문경',
  locationEn: 'MUNGYEONG, KOREA',

  // 브랜드 핵심 문장
  brandLine: '배우고, 만들고, 나누고, 기록합니다.',
  coreMessage: 'AI와 디지털을 삶과 일에 연결합니다.',
  subMessage: '어렵게 배우는 디지털이 아니라\n내 삶에 바로 써먹는 디지털.',
  brandDefinition: '디지털 기술을 사람의 삶에 연결하는 사람',

  copyrightYear: '2026',
}

export const CONTACT_CONFIG = {
  // ▼▼▼ 여기를 실제 정보로 바꾸세요 ▼▼▼
  email: 'm31aswater@gmail.com',
  phone: '010-6769-5539',
  // ▲▲▲ 여기를 실제 정보로 바꾸세요 ▲▲▲
}

/* -------------------------------------------------------------
 *  APPLY_CONFIG — 강의 신청 / 결제 안내
 * -------------------------------------------------------------
 *  ※ 값을 '' (빈 값)으로 두면 해당 버튼/안내가 자동으로 숨겨지고,
 *    신청 버튼은 자연스럽게 '문의하기'로 연결됩니다.
 *
 *  - formUrl     : 신청서 링크(구글폼/네이버폼 등). 만들면 여기에 붙여넣기.
 *                  구글폼이면 강의명이 자동으로 채워지도록 아래 formEntryId도 설정.
 *  - formEntryId : 구글폼에서 '강의명'을 받는 칸의 entry.xxxx 번호 (선택).
 *  - kakaoUrl    : 카카오톡 채널 / 오픈채팅 링크 (선택).
 *  - bankAccount : 계좌이체 안내 문구 (예: '농협 123-4567-8901 오현수') (선택).
 *  - tossLink    : 토스 결제/송금 링크 (선택).
 *  - guide       : 신청 후 안내 문구.
 * ----------------------------------------------------------- */
export const APPLY_CONFIG = {
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdufAh6ohRGfctPVs_ygor6jk90AaDaM1auXEc5KdA_lQDaRg/viewform', // 구글폼 신청서
  formEntryId: 'entry.944691295', // '수강 희망 강좌' 칸 (강의명 자동 채움)
  kakaoUrl: 'https://open.kakao.com/me/mgdtelsa', // 카카오톡 오픈채팅
  bankAccount: '농협 352-1330-3711-13 오현수', // 계좌이체 안내
  tossLink: '', // 예: 'https://toss.me/xxxx'
  guide:
    '신청서를 남겨주시면 문경엘사가 직접 연락드려 일정과 결제 방법(계좌이체 또는 간편 결제 링크)을 안내해드립니다.',
}

export const SOCIAL_CONFIG = {
  // 사용하지 않는 채널은 값을 '' (빈 값)으로 두면 자동으로 숨겨집니다.
  instagram: 'https://www.instagram.com/mgdtelsa',
  youtube: 'https://www.youtube.com/@mooafarm',
  blog: 'https://blog.naver.com/mooafarm',
}

/* -------------------------------------------------------------
 *  이미지 경로
 *  1) 사진 파일을 프로젝트의 public/images 폴더에 넣습니다.
 *  2) 아래 경로를 '/images/파일이름.jpg' 형식으로 바꿉니다.
 *  3) 값을 '' (빈 값)으로 두면 감성적인 그래픽 배경이 자동으로 표시됩니다.
 * ----------------------------------------------------------- */
export const IMAGE_CONFIG = {
  profileImage: '/images/profile.jpg', // (ABOUT 세로 사진) 일러스트 초상
  heroImage: '/images/hero.jpg', // (첫 화면 메인 비주얼) 자연 속 실물 프로필
  farmImage: '/images/farm.jpg', // (무아팜 사진) 문경 포도밭
  indigoImage: '', // 예: '/images/indigo.jpg'  (인디go 사진)
}

export const PROFILE_CONFIG = {
  aboutTitleKo: '문경엘사는 어떤 사람인가요?',
  aboutHeadline: '가르치는 사람인 동시에\n계속 배우는 사람입니다.',
  aboutBody: [
    '스마트폰부터 AI, 콘텐츠, 나만의 책까지. 디지털이 어려운 시니어와 농업인에게 가장 쉽게 알려드리는 문경의 AI 디지털 강사입니다.',
    '디지털과 삶은 따로 있지 않습니다. 배운 것을 삶과 일, 나만의 브랜드로 연결합니다.',
  ],
  aboutKeywords: ['AI', 'PEOPLE', 'BOOK', 'LIFE'],
}

/* -------------------------------------------------------------
 *  CAREER · CERT — 경력 / 자격증 (ABOUT 섹션에 표시)
 *  최신순으로 정렬. 새 항목은 { } 블록을 복사해 맨 위에 추가하세요.
 * ----------------------------------------------------------- */
export interface Career {
  period: string
  role: string
}

export const CAREER_DATA: Career[] = [
  { period: '2026.03 ~ 현재', role: "문경시문화원 'AI로 작가되기' 강사" },
  { period: '2024.03 ~ 현재', role: '문경시니어문화센터 스마트폰 고급반 강사' },
  { period: '2024.03 ~ 현재', role: '주흘문화센터 컴퓨터반 강사' },
  { period: '2023.03 ~ 현재', role: '가은읍 1인미디어 크리에이터반 강사' },
  { period: '2026.04', role: '문경시 마을활동가 AI활용교육 강사' },
  { period: '2025.02', role: '문경시 농업기술센터 AI 농장브랜딩 강좌' },
  { period: '2021.09 ~ 2023.12', role: '경북디지털배움터(상주·문경) 강사' },
]

export interface Cert {
  name: string
  org: string
  year: string
}

export const CERT_DATA: Cert[] = [
  { name: 'AI전문강사', org: '국제AI브랜딩협회', year: '2026' },
  { name: 'AI프롬프트활용능력 1급', org: '한국생산성본부', year: '2025' },
  { name: '디지털튜터 1급', org: '비저너리 글로벌', year: '2022' },
  { name: '스마트폰지도사 1급', org: '한국소셜마케팅진흥원', year: '2020' },
  { name: '1인미디어콘텐츠강사', org: '한국소셜미디어전문가협회', year: '2020' },
  { name: '정보처리산업기사', org: '한국산업인력공단', year: '1999' },
]

/* -------------------------------------------------------------
 *  WHAT I DO — 하는 일 3가지
 * ----------------------------------------------------------- */
export const WHATIDO_DATA = [
  {
    no: '01',
    en: 'LEARN',
    title: '배웁니다',
    desc: 'AI와 스마트폰을 쉽고 실용적으로 배웁니다. 처음이어도 괜찮습니다.',
  },
  {
    no: '02',
    en: 'CREATE',
    title: '만듭니다',
    desc: '사진, 영상, SNS, 책과 콘텐츠를 직접 만듭니다.',
  },
  {
    no: '03',
    en: 'CONNECT',
    title: '연결합니다',
    desc: '배운 것을 사람들과 나누고 나만의 브랜드로 연결합니다.',
  },
]

/* -------------------------------------------------------------
 *  LECTURE — 강의 목록
 *  새 강의를 추가하려면 { } 블록을 복사해서 아래에 붙여넣으세요.
 * ----------------------------------------------------------- */
export type LectureStatus = '모집중' | '모집예정' | '상시모집' | '마감'

export interface Lecture {
  no: string
  title: string
  summary: string
  target: string // 대상
  content: string[] // 교육 내용
  recommend: string // 추천 대상
  method: string // 교육 방식
  status?: LectureStatus // 모집 상태 (선택 · 기본 '상시모집')
  price?: string // 가격 (선택 · 예: '10만원', '문의')
  schedule?: string // 일정 (선택 · 예: '매주 화 10:00')
}

export const LECTURE_DATA: Lecture[] = [
  {
    no: '01',
    title: 'AI와 캔바로 셀프출판',
    summary: 'AI와 캔바를 활용해 내 이야기를 직접 책으로 만들고 출판하는 과정',
    target: '자신의 경험과 이야기를 책으로 남기고 싶은 분',
    content: [
      'AI로 원고 구성·집필하기',
      '캔바로 표지와 본문 디자인하기',
      '전자책·종이책 셀프출판까지',
    ],
    recommend: '글쓰기와 디자인이 막막했지만 내 책을 내고 싶은 분',
    method: '기획부터 출판까지 단계별 진행',
    status: '상시모집',
    price: '문의',
  },
  {
    no: '02',
    title: '바이브코딩으로 홈페이지 만들기',
    summary: 'AI와 대화하며 코딩 없이 나만의 홈페이지를 만드는 방법',
    target: '홈페이지가 필요한 강사·자영업자·1인 사업자·크리에이터',
    content: [
      'AI에게 원하는 것을 설명해 화면 만들기',
      '내 소개·강의·상품을 담은 페이지 구성',
      '실제 인터넷에 배포하고 운영하기',
    ],
    recommend: '개발은 몰라도 내 홈페이지를 갖고 싶은 분',
    method: '실습 중심 · 오프라인/온라인 모두 가능',
    status: '상시모집',
    price: '문의',
  },
  {
    no: '03',
    title: '1인 미디어 크리에이터 (유튜브 포함)',
    summary: '스마트폰 하나로 사진·영상·SNS·유튜브 콘텐츠 만들기',
    target: '유튜브·SNS 콘텐츠를 시작하고 싶은 예비 크리에이터',
    content: [
      '스마트폰 촬영·편집 기초',
      '릴스·쇼츠 등 숏폼 콘텐츠 만들기',
      '유튜브 채널 기획부터 영상 제작·업로드·운영까지',
      'SNS 채널 기획과 꾸준히 운영하는 법',
    ],
    recommend: '거창한 장비 없이 유튜브·SNS 콘텐츠를 시작하고 싶은 분',
    method: '기획 → 촬영 → 편집 → 발행, 채널 개설·운영까지 실습',
    status: '상시모집',
    price: '문의',
  },
  {
    no: '04',
    title: '퍼스널브랜딩',
    summary: 'AI와 SNS를 활용해 나만의 전문성과 브랜드 만들기',
    target: '강사·전문가·자영업자 · 나를 알리고 싶은 분',
    content: [
      '나의 강점과 이야기 정리하기',
      'AI로 브랜드 콘셉트·콘텐츠 만들기',
      'SNS로 전문성 꾸준히 쌓기',
    ],
    recommend: '자신의 경험을 브랜드로 만들고 싶은 분',
    method: '나만의 브랜드 설계 워크숍형',
    status: '상시모집',
    price: '문의',
  },
  {
    no: '05',
    title: '스마트폰 활용',
    summary: '사진, 영상, 카카오톡, 앱과 모바일 생활까지',
    target: '스마트폰을 더 잘 쓰고 싶은 모든 분',
    content: [
      '사진·영상 잘 찍고 정리하는 법',
      '카카오톡·앱·모바일 생활 200% 활용',
      '실생활에 필요한 기능 위주 실습',
    ],
    recommend: '스마트폰을 두려워하지 않고 생활에 활용하고 싶은 분',
    method: '천천히 따라 하는 실습형 수업',
    status: '상시모집',
    price: '문의',
  },
]

/* -------------------------------------------------------------
 *  PORTFOLIO — 작업물 목록
 *  category 는 아래 중 하나 이상: AI, SMARTPHONE, CREATOR, BRANDING, BOOK, FARM
 *  size: 'large' | 'wide' | 'normal'  (카드 크기 — 편집 레이아웃)
 * ----------------------------------------------------------- */
export interface Portfolio {
  no: string
  title: string
  category: string[]
  categoryLabel: string
  desc: string
  size: 'large' | 'wide' | 'normal'
  image?: string
}

export const PORTFOLIO_DATA: Portfolio[] = [
  {
    no: '01',
    title: '스마트폰 씹어먹기',
    category: ['SMARTPHONE', 'BOOK'],
    categoryLabel: '스마트폰 활용 교재',
    desc: '스마트폰 활용 교육 교재. 2024년부터 출간하고 있으며, 최신 스마트폰 환경에 맞춰 개정판을 계속 제작하고 있습니다.',
    size: 'large',
    image: '/images/book-smartphone.jpg',
  },
  {
    no: '02',
    title: 'AI는 처음이지',
    category: ['AI', 'BOOK'],
    categoryLabel: '시니어 AI 용어 해설',
    desc: '시니어를 위한 AI 디지털 용어 해설. 어려운 말을 쉽게 풀어 처음 배우는 사람도 이해할 수 있게 했습니다.',
    size: 'normal',
    image: '/images/book-ai.jpg',
  },
  {
    no: '03',
    title: '웃기지 않아도 괜찮아',
    category: ['AI', 'BOOK', 'CREATOR'],
    categoryLabel: 'AI 그림동화책',
    desc: 'AI를 활용해 제작한 그림동화책.',
    size: 'normal',
    image: '/images/book-funny.jpg',
  },
  {
    no: '04',
    title: '할머니의 비밀별',
    category: ['AI', 'BOOK', 'CREATOR'],
    categoryLabel: 'AI 그림동화책',
    desc: 'AI를 활용해 제작한 그림동화책.',
    size: 'wide',
    image: '/images/book-grandma.jpg',
  },
  {
    no: '05',
    title: 'AI 디지털 교육',
    category: ['AI', 'FARM'],
    categoryLabel: '교육 프로그램',
    desc: '시니어와 농업인을 위한 AI·디지털 교육 프로그램. 문경 지역 기관에서 진행한 실제 강의 현장입니다.',
    size: 'normal',
    image: '/images/lecture.jpg',
  },
  {
    no: '06',
    title: '1인 미디어 크리에이터 교육',
    category: ['CREATOR', 'SMARTPHONE'],
    categoryLabel: '콘텐츠 제작 교육',
    desc: '스마트폰을 활용한 사진·영상·SNS 콘텐츠 제작 교육. 문경시 마을홍보 영상제작 강의 현장입니다.',
    size: 'wide',
    image: '/images/creator.jpg',
  },
  {
    no: '07',
    title: '퍼스널브랜딩 교육',
    category: ['BRANDING', 'AI'],
    categoryLabel: '브랜딩 교육',
    desc: 'AI와 SNS를 활용한 개인 브랜드 구축 교육. 농장 브랜딩과 농산물 마케팅(ChatGPT·캔바·캡컷) 강의 현장입니다.',
    size: 'normal',
    image: '/images/branding.jpg',
  },
]

export const PORTFOLIO_FILTERS = [
  'ALL',
  'AI',
  'SMARTPHONE',
  'CREATOR',
  'BRANDING',
  'BOOK',
  'FARM',
] as const

/* -------------------------------------------------------------
 *  BOOKS — 책 목록
 * ----------------------------------------------------------- */
export interface Book {
  title: string
  label: string
  desc: string
  cover?: string
  spineColor: string // 표지 색 (사진 없을 때)
}

export const BOOK_DATA: Book[] = [
  {
    title: '2026 스마트폰 씹어먹기 기본편',
    label: 'SMARTPHONE',
    desc: '스마트폰이 어렵게 느껴지는 사람도 하나씩 따라 하며 익힐 수 있는 활용 교재. 최신 환경에 맞춰 개정판을 이어가고 있습니다.',
    spineColor: '#667A63',
    cover: '/images/book-smartphone.jpg',
  },
  {
    title: '스마트폰 씹어먹기 1 (기본편)',
    label: 'SMARTPHONE · 2025 with AI',
    desc: '2025 최신판 with AI · 기본편. 스마트폰의 기본기를 처음부터 차근차근 익히는 공저 교재입니다.',
    spineColor: '#6E4FD4',
    cover: '/images/book-sseb1.jpg',
  },
  {
    title: '스마트폰 씹어먹기 2 (활용편)',
    label: 'SMARTPHONE · 2025 with AI',
    desc: '2025 최신판 with AI · 활용편. 사진·영상·앱까지 스마트폰을 200% 활용하는 공저 교재입니다.',
    spineColor: '#6E4FD4',
    cover: '/images/book-sseb2.jpg',
  },
  {
    title: '스마트폰 씹어먹기 3 (생활편)',
    label: 'SMARTPHONE · 2025 with AI',
    desc: '2025 최신판 with AI · 생활편. 실생활에서 바로 쓰는 스마트폰 활용을 담은 공저 교재입니다.',
    spineColor: '#6E4FD4',
    cover: '/images/book-sseb3.jpg',
  },
  {
    title: 'AI는 처음이지',
    label: 'AI · SENIOR',
    desc: '시니어를 위한 AI 디지털 용어 해설서. 낯선 AI 용어를 일상의 언어로 쉽게 풀어냅니다.',
    spineColor: '#B87952',
    cover: '/images/book-ai.jpg',
  },
  {
    title: '웃기지 않아도 괜찮아',
    label: 'AI PICTURE BOOK',
    desc: 'AI를 활용해 만든 그림동화책. 누구나 자신의 이야기를 그림책으로 만들 수 있다는 것을 보여줍니다.',
    spineColor: '#17251F',
    cover: '/images/book-funny.jpg',
  },
  {
    title: '할머니의 비밀별',
    label: 'AI PICTURE BOOK',
    desc: 'AI를 활용해 만든 그림동화책. 따뜻한 이야기와 그림이 함께 담겼습니다.',
    spineColor: '#737A74',
    cover: '/images/book-grandma.jpg',
  },
  {
    title: '엄마의 꽃밭',
    label: 'COLORING BOOK',
    desc: 'AI로 그린 그림에 색을 입히는 컬러링북. 꽃밭 속 따뜻한 풍경을 직접 칠하며 쉬어갈 수 있습니다.',
    spineColor: '#B87952',
    cover: '/images/book-mom.jpg',
  },
  {
    title: '24절기 색칠하기',
    label: 'COLORING BOOK',
    desc: '24절기의 자연 풍경과 우리 조상의 지혜를 담은 컬러링북. 계절의 흐름을 색으로 만나 봅니다.',
    spineColor: '#667A63',
    cover: '/images/book-24.jpg',
  },
]

/* -------------------------------------------------------------
 *  ONE-ON-ONE — 1:1 개인지도
 *  배우고 싶은 것만 골라 내 속도에 맞춰 배우는 맞춤형 수업.
 * ----------------------------------------------------------- */
export const ONEONONE_CONFIG = {
  headline: '강의 문의는 언제든 환영합니다\n1:1 개인지도도 가능해요',
  lead: '스마트폰 사용부터 AI 활용, SNS, 유튜브, 캡컷, 퍼스널브랜딩, 나만의 책 만들기까지 — 궁금한 강의를 편하게 문의하세요. 원하시면 배우고 싶은 것만 골라 내 속도에 맞춰 1:1로도 배울 수 있습니다.',
  quote: '모르는 것을 부끄러워하지 마세요.\n모르는 만큼 천천히 알려드릴게요.',
  // 온라인/오프라인 안내
  online: '온라인 · Zoom, Google Meet 등 화상으로 진행',
  offline: '오프라인 · 문경 지역에서 직접 만나 진행',
  // 수업료 안내 (상담 후 결정)
  priceNote: '수업료는 배우실 내용과 횟수에 따라 상담 후 결정됩니다.',
}

// 함께 배우는 강의 vs 1:1 비교 (방문자가 자신에게 맞는 쪽을 고르도록)
export const ONEONONE_COMPARE = [
  {
    tag: '함께 배우는 강의',
    desc: '정해진 커리큘럼으로 여러 사람과 함께 배우고 싶다면',
    href: '#lecture',
    cta: '강의 둘러보기',
    highlight: false,
  },
  {
    tag: '나에게 맞춘 1:1 개인지도',
    desc: '내가 궁금한 것만, 내 속도에 맞춰 배우고 싶다면',
    href: '#contact',
    cta: '강의 문의하기',
    highlight: true,
  },
]

// 이런 분께 추천합니다
export const ONEONONE_TARGETS: string[] = [
  '단체 수업에서는 질문하기 어려웠던 분',
  '스마트폰을 처음부터 차근차근 배우고 싶은 분',
  'ChatGPT·AI를 내 일에 제대로 활용하고 싶은 분',
  '유튜브·SNS를 시작하고 싶은 분',
  '농산물이나 내 사업을 SNS로 홍보하고 싶은 분',
  '강의에서 배웠지만 혼자 하려니 막히는 분',
]

// 진행 흐름 (신청 → 결제 → 수업)
export const ONEONONE_STEPS: string[] = [
  '개인지도 신청',
  '배우고 싶은 내용 작성',
  '문경엘사가 확인',
  '수업 일정 확정',
  '결제',
  '수업 시작',
]

// 대표 후기 (실제 후기가 생기면 여기서 수정·추가)
export const ONEONONE_REVIEWS: string[] = [
  '단체 수업에서는 질문하기 어려웠는데, 제 스마트폰을 직접 보면서 알려주시니 훨씬 이해하기 쉬웠어요.',
  'ChatGPT를 처음에는 무서워했는데, 이제는 매일 사용하고 있어요.',
  '제가 하고 싶은 일을 이야기했더니 필요한 AI 활용법을 딱 맞춰 알려주셔서 좋았습니다.',
]

/* -------------------------------------------------------------
 *  REVIEWS — 강의후기 (수강생 실제 후기)
 *  후기를 추가하려면 { } 블록을 복사해 붙여넣으세요. rating은 1~5.
 * ----------------------------------------------------------- */
export interface Review {
  name: string // 수강생 이름/닉네임
  course: string // 강의 제목
  quote: string // 후기 내용
  rating: number // 별점 (1~5)
}

export const REVIEW_DATA: Review[] = [
  {
    name: '주** 님',
    course: '스마트폰 하나로 AI 작곡가',
    quote:
      '차분하게 하나하나 꼼꼼하게 알려주셔서 저처럼 초보자도 잘 따라할 수 있었어요. 내가 만든 곡이 나온다는 게 신기했고, 신세계를 경험하게 해주셔서 감사합니다.',
    rating: 5,
  },
  {
    name: '한** 님',
    course: '스마트폰 앱으로 만드는 나만의 AI 그림',
    quote:
      'AI에 막연한 호기심만 있었는데, 회원가입부터 툴 사용법까지 하나하나 친절하게 알려주셔서 초보자도 어렵지 않게 따라갈 수 있었어요. 실습 위주라 AI가 어렵다는 편견이 사라졌습니다.',
    rating: 5,
  },
  {
    name: '박** 님',
    course: '눈과 손이 편해지는 화면 설정',
    quote:
      '작은 설정 하나만 바꿔도 눈의 피로가 줄고 손 사용이 훨씬 편해진다는 점이 인상 깊었어요. 매일 쓰는 스마트폰을 조금 더 편안하고 똑똑하게 사용할 수 있게 되었습니다.',
    rating: 5,
  },
  {
    name: '네* 님',
    course: '온디바이스 AI 활용',
    quote:
      '새로운 AI 트렌드와 온디바이스 AI 기능을 체계적으로 정리해주셔서 재밌게 들었어요. 현수 샘 강의를 들으면 몰랐던 따끈따끈한 정보를 많이 얻게 되어 정말 유익합니다.',
    rating: 5,
  },
]
