# 문경엘사 오현수 — 개인브랜드 포트폴리오

> AI와 디지털을 삶과 일에 연결합니다.
> **배우고, 만들고, 나누고, 기록합니다.**

React + TypeScript + Tailwind CSS 로 만든 1페이지 개인브랜드 웹사이트입니다.
개발을 몰라도 아래 설명만 따라 하면 내용을 직접 수정할 수 있어요.

---

## 🗂 콘텐츠는 여기 한 곳에서만 수정합니다

거의 모든 글, 연락처, 링크, 이미지 경로는 아래 **한 파일**에 모여 있습니다.

```
src/data/content.ts
```

이 파일만 열어서 큰따옴표 `" "` 안의 글자를 고치면 홈페이지 내용이 바뀝니다.
(글자만 바꾸고, 따옴표·쉼표·기호는 그대로 두세요.)

---

## 1. 로컬(내 컴퓨터)에서 실행하는 방법

1. [Node.js](https://nodejs.org) 를 설치합니다. (LTS 버전 권장)
2. 이 폴더에서 터미널(명령 프롬프트)을 열고 아래를 한 줄씩 실행합니다.

```bash
npm install
```

```bash
npm run dev
```

3. 화면에 나오는 주소(예: `http://localhost:5173`)를 브라우저에 입력하면 사이트가 보입니다.
   글을 수정하고 저장하면 화면이 자동으로 바뀝니다.

> 종료할 때는 터미널에서 `Ctrl + C` 를 누르세요.

---

## 2. 사진(이미지) 교체하는 방법

1. 바꿀 사진 파일을 `public/images` 폴더에 넣습니다.
   (`images` 폴더가 없으면 새로 만드세요.)
2. `src/data/content.ts` 파일의 `IMAGE_CONFIG` 부분을 찾습니다.
3. 아래처럼 파일 경로를 적어줍니다. (맨 앞에 `/images/` 붙이기)

```ts
export const IMAGE_CONFIG = {
  profileImage: '/images/profile.jpg', // ABOUT 세로 사진
  heroImage: '/images/hero.jpg',       // 첫 화면 큰 사진
  farmImage: '/images/farm.jpg',       // 무아팜 사진
  indigoImage: '',                     // 값이 비어있으면 그래픽이 자동 표시
}
```

> 값을 `''` (빈 값)으로 두면 사진 대신 감성적인 색상 그래픽이 자동으로 나옵니다. 그래서 사진이 없어도 화면이 깨지지 않습니다.

포트폴리오 카드와 책 표지 사진은 각각 `PORTFOLIO_DATA`, `BOOK_DATA` 의 `image` / `cover` 값에 경로를 적으면 됩니다.

---

## 3. 이메일 / 전화번호 수정하는 방법

`src/data/content.ts` 의 `CONTACT_CONFIG` 를 고칩니다.

```ts
export const CONTACT_CONFIG = {
  email: '실제이메일@주소.com',
  phone: '010-1234-5678',
}
```

---

## 4. SNS 링크 수정하는 방법

`src/data/content.ts` 의 `SOCIAL_CONFIG` 를 고칩니다.
사용하지 않는 채널은 값을 `''` (빈 값)으로 두면 화면에서 자동으로 사라집니다.

```ts
export const SOCIAL_CONFIG = {
  instagram: 'https://instagram.com/내계정',
  youtube: 'https://youtube.com/@내채널',
  blog: 'https://blog.naver.com/내블로그',
}
```

---

## 5. 포트폴리오(작업물) 추가하는 방법

`src/data/content.ts` 의 `PORTFOLIO_DATA` 에서 `{ ... }` 한 덩어리를 복사해
맨 아래에 붙여넣고 내용을 바꾸면 됩니다.

```ts
{
  no: '08',
  title: '새 작업 제목',
  category: ['AI', 'BOOK'],       // 필터 분류 (여러 개 가능)
  categoryLabel: '카드에 뜨는 작은 라벨',
  desc: '작업 설명입니다.',
  size: 'normal',                  // 'large' | 'wide' | 'normal' (카드 크기)
  image: '',                       // 사진 경로 (없으면 그래픽 자동)
},
```

- `category` 에 넣을 수 있는 값: `AI`, `SMARTPHONE`, `CREATOR`, `BRANDING`, `BOOK`, `FARM`

---

## 6. 책 추가하는 방법

`src/data/content.ts` 의 `BOOK_DATA` 에서 `{ ... }` 를 복사해 붙여넣고 수정합니다.

```ts
{
  title: '책 제목',
  label: 'AI · BOOK',
  desc: '책 소개 글입니다.',
  spineColor: '#667A63',   // 표지 색 (사진 없을 때 사용)
  cover: '',               // 표지 사진 경로 (있으면 우선 사용)
},
```

---

## 7. Vercel 에 배포하는 방법

### 방법 A. 웹사이트에서 (가장 쉬움)

1. 이 폴더를 GitHub 저장소에 올립니다.
2. [vercel.com](https://vercel.com) 에 로그인 → **Add New → Project**
3. GitHub 저장소를 선택하면 Vercel 이 자동으로 설정을 인식합니다.
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. **Deploy** 를 누르면 몇 초 뒤 인터넷 주소가 만들어집니다.
5. 이후에는 GitHub 에 수정 내용을 올릴 때마다 자동으로 다시 배포됩니다.

### 방법 B. 터미널에서 (CLI)

```bash
npm install -g vercel
vercel
```

안내에 따라 로그인하고 엔터를 몇 번 누르면 배포됩니다.

---

## 🎨 색상 / 디자인 시스템

`tailwind.config.js` 에서 브랜드 색상을 관리합니다.

| 이름 | 색상 | 용도 |
| --- | --- | --- |
| base | `#F7F5F0` | 배경 |
| ink | `#17251F` | 진한 강조 / 어두운 섹션 |
| text | `#27302C` | 본문 글자 |
| muted | `#737A74` | 보조 글자 |
| forest | `#667A63` | 자연 그린 포인트 |
| beige | `#D8CBB8` | 따뜻한 베이지 |
| accent | `#B87952` | 포인트 컬러 |

---

## 🧱 폴더 구조

```
src/
├─ data/content.ts      ← 콘텐츠는 전부 여기! (제일 자주 수정)
├─ components/          ← 화면 구역별 컴포넌트
│  ├─ Header, Hero, About, WhatIDo, Lecture,
│  ├─ Portfolio, Books, Indigo, MuaFarm,
│  └─ Philosophy, Contact, Footer
├─ hooks/useReveal.ts   ← 스크롤 등장 애니메이션
├─ App.tsx              ← 전체 조립
└─ index.css            ← 공통 스타일
```

---

made with ☕ for 문경엘사 오현수
