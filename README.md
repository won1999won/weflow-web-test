# WEFLOW Web

WEFLOW 웹 제작 서비스 소개 페이지를 Next.js 기반으로 재구현한 프론트엔드 프로젝트입니다.  
홈, 서비스, 성공사례, 제작 플랜, 예약, 랜딩 페이지, 관리자 화면을 포함합니다.

## 주요 기능

- 메인 홈 화면
  - WEFLOW 소개 히어로 섹션
  - 케어 플랜 혜택
  - 성공사례 미리보기
  - 제작 진행 과정
  - 무료진단 CTA
  - 고객 후기

- 서비스 페이지
  - 상담부터 제작, SEO 등록, 광고 운영, 사후관리까지의 진행 과정
  - 블로그, 인스타, 스레드, 네이버 키워드 등 운영 관리 항목 소개

- 성공사례 페이지
  - 업종별 성공사례 카드 그리드
  - 사례 이미지와 블로그 링크 연결

- 제작플랜 & 가격안내
  - START 랜딩페이지
  - GROW 홈페이지
  - MASTER 프리미엄
  - WE / FLOW / WEFLOW CARE 관리 플랜
  - 네이버 광고, 당근 플레이스 광고 플랜

- 예약 및 무료진단 폼
  - 이름, 연락처, 제작 종류, 업종, 요청사항 입력
  - 개인정보 수집 동의 체크
  - 예약 페이지에서는 날짜와 원하는 시간대 입력 가능

- 관리자 화면
  - `/admin` 경로에서 문의/예약 데이터 확인
  - 진행중/완료 상태 변경
  - 데이터 삭제

## 사용 기술

- Next.js App Router
- React
- JavaScript
- Tailwind CSS
- lucide-react
- Next Image
- localStorage

## 프로젝트 구조

```txt
src
├─ app
│  ├─ page.js
│  ├─ services/page.js
│  ├─ cases/page.js
│  ├─ pricing/page.js
│  ├─ reservation/page.js
│  ├─ landing/page.js
│  └─ admin/page.js
├─ components
│  ├─ layout
│  │  ├─ Header.jsx
│  │  ├─ Footer.jsx
│  │  └─ BottomBar.jsx
│  ├─ site
│  │  └─ SiteSections.jsx
│  └─ ui
│     └─ FormModal.jsx
└─ data
   └─ siteData.js
```

## 데이터 관리 방식

문의와 예약 데이터는 프론트엔드 테스트용으로 브라우저 `localStorage`에 저장됩니다.

- 문의 데이터: `weflow_inquiries`
- 예약 데이터: `weflow_reservations`

실제 운영 환경에서는 서버 API와 DB 연동이 필요합니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 아래 주소로 접속합니다.

```txt
http://localhost:3000
```

관리자 화면:

```txt
http://localhost:3000/admin
```

## 빌드 및 검증

```bash
npm run lint
npm run build
```

## 구현 메모

- 콘텐츠 데이터는 `src/data/siteData.js`에 분리했습니다.
- 화면 섹션은 `src/components/site/SiteSections.jsx`에서 공통으로 관리합니다.
- 각 라우트 파일은 필요한 섹션 컴포넌트만 불러오는 얇은 구조로 구성했습니다.
- 무료진단 모달은 공통 레이아웃에 포함되어 모든 페이지에서 열 수 있습니다.
