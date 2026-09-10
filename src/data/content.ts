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
  nameEn: 'OH HYUNSOO',
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
  email: 'hello@example.com',
  phone: '010-0000-0000',
  // ▲▲▲ 여기를 실제 정보로 바꾸세요 ▲▲▲
}

export const SOCIAL_CONFIG = {
  // 사용하지 않는 채널은 값을 '' (빈 값)으로 두면 자동으로 숨겨집니다.
  instagram: 'https://instagram.com/',
  youtube: 'https://youtube.com/',
  blog: 'https://blog.naver.com/',
}

/* -------------------------------------------------------------
 *  이미지 경로
 *  1) 사진 파일을 프로젝트의 public/images 폴더에 넣습니다.
 *  2) 아래 경로를 '/images/파일이름.jpg' 형식으로 바꿉니다.
 *  3) 값을 '' (빈 값)으로 두면 감성적인 그래픽 배경이 자동으로 표시됩니다.
 * ----------------------------------------------------------- */
export const IMAGE_CONFIG = {
  profileImage: '', // 예: '/images/profile.jpg'  (ABOUT 세로 사진)
  heroImage: '', // 예: '/images/hero.jpg'      (첫 화면 메인 비주얼)
  farmImage: '', // 예: '/images/farm.jpg'      (무아팜 사진)
  indigoImage: '', // 예: '/images/indigo.jpg'  (인디go 사진)
}

export const PROFILE_CONFIG = {
  aboutTitleKo: '문경엘사는 어떤 사람인가요?',
  aboutHeadline: '가르치는 사람인 동시에\n계속 배우는 사람입니다.',
  aboutBody: [
    '문경에서 AI 디지털 강사로 활동하며 스마트폰 활용부터 AI, SNS, 유튜브, 퍼스널브랜딩, 책 만들기까지 디지털 기술을 실제 삶과 일에 연결하는 교육을 하고 있습니다.',
    '특히 디지털 환경에 익숙하지 않은 시니어와 농업인들이 기술 때문에 소외되지 않고 스스로 디지털 도구를 활용할 수 있도록 돕는 일을 중요하게 생각합니다.',
    '또한 AI를 활용해 자신의 경험과 이야기를 책으로 만드는 일을 좋아합니다.',
    '강의실에서는 누군가에게 새로운 것을 알려주고, 강의실 밖에서는 새로운 것을 배우고, 때로는 직접 농사를 지으며 살아갑니다.',
    "'디지털'과 '삶'이 따로 떨어져 있지 않다고 믿습니다.",
  ],
  aboutKeywords: ['AI', 'PEOPLE', 'BOOK', 'LIFE'],
}

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
export interface Lecture {
  no: string
  title: string
  summary: string
  target: string // 대상
  content: string[] // 교육 내용
  recommend: string // 추천 대상
  method: string // 교육 방식
}

export const LECTURE_DATA: Lecture[] = [
  {
    no: '01',
    title: 'AI 디지털 활용',
    summary: 'ChatGPT를 비롯한 AI를 일상과 업무에 활용하는 방법',
    target: 'AI를 처음 접하는 일반인 · 직장인 · 자영업자',
    content: [
      'ChatGPT 등 생성형 AI의 기본 사용법',
      '글쓰기, 자료 정리, 아이디어 발상에 AI 활용하기',
      '일상과 업무에서 바로 써먹는 실전 예시',
    ],
    recommend: 'AI가 궁금하지만 어디서부터 시작할지 막막한 분',
    method: '실습 중심 · 오프라인/온라인 모두 가능',
  },
  {
    no: '02',
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
  },
  {
    no: '03',
    title: '시니어 디지털 교육',
    summary: '디지털이 낯선 사람도 쉽게 따라올 수 있는 실생활 중심 교육',
    target: '5060 이상 시니어 · 디지털이 어려운 분',
    content: [
      '스마트폰 기본기부터 차근차근',
      '키오스크·모바일 예약 등 실생활 디지털',
      '반복 학습으로 자신감 키우기',
    ],
    recommend: '기술 때문에 소외되지 않고 스스로 해내고 싶은 분',
    method: '눈높이 맞춤 · 반복 · 편안한 분위기',
  },
  {
    no: '04',
    title: '스마트 농부',
    summary: '스마트폰과 AI를 활용해 농업의 생산성과 홍보를 높이는 방법',
    target: '농업인 · 귀농귀촌인 · 농촌 사업자',
    content: [
      '농산물 사진·영상 촬영과 온라인 홍보',
      'SNS로 내 농산물 알리기',
      'AI로 상품 소개글·마케팅 자료 만들기',
    ],
    recommend: '농사에 디지털을 더해 판로를 넓히고 싶은 분',
    method: '농촌 현장 맞춤 실전 교육',
  },
  {
    no: '05',
    title: '1인 미디어 크리에이터',
    summary: '스마트폰 하나로 사진·영상·SNS 콘텐츠 만들기',
    target: '콘텐츠를 시작하고 싶은 예비 크리에이터',
    content: [
      '스마트폰 촬영·편집 기초',
      '릴스·쇼츠 등 숏폼 콘텐츠 만들기',
      'SNS 채널 기획과 꾸준히 운영하는 법',
    ],
    recommend: '거창한 장비 없이 콘텐츠를 시작하고 싶은 분',
    method: '기획 → 촬영 → 편집 → 발행 전 과정 실습',
  },
  {
    no: '06',
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
  },
  {
    no: '07',
    title: '유튜브',
    summary: '유튜브 채널 기획부터 콘텐츠 제작과 운영까지',
    target: '유튜브를 시작하거나 다시 도전하고 싶은 분',
    content: [
      '채널 콘셉트와 방향 잡기',
      '영상 기획·촬영·편집 기초',
      '업로드·운영·꾸준함의 노하우',
    ],
    recommend: '유튜브를 막연히 어렵게만 느끼던 분',
    method: '실제 채널 개설·운영까지 함께',
  },
  {
    no: '08',
    title: 'AI로 나만의 책 만들기',
    summary: '내 경험과 이야기를 AI를 활용해 한 권의 책으로 만드는 과정',
    target: '자신의 경험을 책으로 남기고 싶은 예비 작가',
    content: [
      'AI와 함께 원고 구성·집필하기',
      '이야기를 책의 형태로 다듬기',
      '표지·편집·출판까지 이어지는 과정',
    ],
    recommend: '글쓰기가 부담스럽지만 내 이야기를 남기고 싶은 분',
    method: '기획부터 출판까지 단계별 진행',
  },
  {
    no: '09',
    title: 'AI로 일잘러 되기',
    summary: '반복 업무를 줄이고 AI를 활용해 더 효율적으로 일하는 방법',
    target: '직장인 · 실무자 · 1인 사업자',
    content: [
      '반복 업무를 AI로 자동화·단축하기',
      '문서·기획·보고에 AI 활용',
      '업무별 실전 프롬프트 활용법',
    ],
    recommend: '같은 시간에 더 잘, 더 빠르게 일하고 싶은 분',
    method: '업무 사례 중심 실습',
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
    image: '',
  },
  {
    no: '02',
    title: 'AI는 처음이지',
    category: ['AI', 'BOOK'],
    categoryLabel: '시니어 AI 용어 해설',
    desc: '시니어를 위한 AI 디지털 용어 해설. 어려운 말을 쉽게 풀어 처음 배우는 사람도 이해할 수 있게 했습니다.',
    size: 'normal',
    image: '',
  },
  {
    no: '03',
    title: '웃기지 않아도 괜찮아',
    category: ['AI', 'BOOK', 'CREATOR'],
    categoryLabel: 'AI 그림동화책',
    desc: 'AI를 활용해 제작한 그림동화책.',
    size: 'normal',
    image: '',
  },
  {
    no: '04',
    title: '할머니의 비밀별',
    category: ['AI', 'BOOK', 'CREATOR'],
    categoryLabel: 'AI 그림동화책',
    desc: 'AI를 활용해 제작한 그림동화책.',
    size: 'wide',
    image: '',
  },
  {
    no: '05',
    title: 'AI 디지털 교육',
    category: ['AI', 'FARM'],
    categoryLabel: '교육 프로그램',
    desc: '시니어와 농업인을 위한 AI·디지털 교육 프로그램.',
    size: 'normal',
    image: '',
  },
  {
    no: '06',
    title: '1인 미디어 크리에이터 교육',
    category: ['CREATOR', 'SMARTPHONE'],
    categoryLabel: '콘텐츠 제작 교육',
    desc: '스마트폰을 활용한 사진·영상·SNS 콘텐츠 제작 교육.',
    size: 'wide',
    image: '',
  },
  {
    no: '07',
    title: '퍼스널브랜딩 교육',
    category: ['BRANDING', 'AI'],
    categoryLabel: '브랜딩 교육',
    desc: 'AI와 SNS를 활용한 개인 브랜드 구축 교육.',
    size: 'normal',
    image: '',
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
    title: '스마트폰 씹어먹기',
    label: 'SMARTPHONE',
    desc: '스마트폰이 어렵게 느껴지는 사람도 하나씩 따라 하며 익힐 수 있는 활용 교재. 최신 환경에 맞춰 개정판을 이어가고 있습니다.',
    spineColor: '#667A63',
    cover: '',
  },
  {
    title: 'AI는 처음이지',
    label: 'AI · SENIOR',
    desc: '시니어를 위한 AI 디지털 용어 해설서. 낯선 AI 용어를 일상의 언어로 쉽게 풀어냅니다.',
    spineColor: '#B87952',
    cover: '',
  },
  {
    title: '웃기지 않아도 괜찮아',
    label: 'AI PICTURE BOOK',
    desc: 'AI를 활용해 만든 그림동화책. 누구나 자신의 이야기를 그림책으로 만들 수 있다는 것을 보여줍니다.',
    spineColor: '#17251F',
    cover: '',
  },
  {
    title: '할머니의 비밀별',
    label: 'AI PICTURE BOOK',
    desc: 'AI를 활용해 만든 그림동화책. 따뜻한 이야기와 그림이 함께 담겼습니다.',
    spineColor: '#737A74',
    cover: '',
  },
]
