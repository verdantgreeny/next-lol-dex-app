# Riot API를 활용한 리그 오브 레전드 정보 앱

#### 배포된 링크 : [배포링크](https://next-lol-dex-app.vercel.app/)

### 💬 프로젝트 소개

이 애플리케이션은 Riot API를 활용하여 챔피언, 아이템, 로테이션 등 리그 오브 레전드와 관련된 다양한 정보를 제공합니다.
사용자는 앱을 통해 각 챔피언의 상세 정보, 게임 내 아이템 정보, 주간 무료 챔피언 로테이션 등의 데이터를 확인할 수 있습니다.

<hr>

### **⏳ 작업 기간**: 2025. 03. 10 ~ 2025. 03. 19

<hr>

### ⚙️ 기술 스택

- Next.js
- Typescript
- TanStack Query
- Tailwind CSS

<hr>

### ✅ 구현한 기능

- 챔피언 목록: 모든 챔피언의 리스트를 불러와서 보여줍니다.
- 챔피언 상세 정보: 특정 챔피언을 선택하면 상세 정보(이름, 타이틀, 스킬, 스토리 등)를 볼 수 있습니다.
- 아이템 목록: 게임 내 아이템 정보를 불러와 리스트로 제공합니다.
- 무료 챔피언 로테이션: 주간 무료 챔피언 정보를 API를 통해 불러와 표시합니다.
- 로딩 및 에러 핸들링 고도화
- 반응형 디자인: PC와 모바일에서 모두 사용할 수 있도록 반응형 레이아웃을 구현합니다.
- 다크 모드 지원: 다크 모드와 라이트 모드 간 전환 기능 구현

<hr>

### ⚙ 프로젝트 화면 및 구조

**1. 🚀 프로젝트 화면**

**1-1. Home**
![](https://velog.velcdn.com/images/verdantgreeny/post/2f3c1252-69aa-4ff0-88bc-f674aba3b228/image.png)

**1-2. Champions**
![](https://velog.velcdn.com/images/verdantgreeny/post/bb2562d3-6669-4041-9694-4bba9fde072a/image.png)
![](https://velog.velcdn.com/images/verdantgreeny/post/eaa06c92-8c00-48b0-8373-e355fd6c3ca7/image.png)

**1-3. Items**
![](https://velog.velcdn.com/images/verdantgreeny/post/c2739b93-e0d3-44fe-90e2-65ae08eb1959/image.png)
![](https://velog.velcdn.com/images/verdantgreeny/post/2854d87d-e71f-4816-b5f8-86d9922b95b3/image.png)

**1-4. Rotation**
![](https://velog.velcdn.com/images/verdantgreeny/post/e08c915c-bdfd-458f-a9f7-0019e3431da0/image.png)

**1-5. 반응형**
<br/>
![](https://velog.velcdn.com/images/verdantgreeny/post/4c8b5266-edbb-4d9f-95dc-1e02049b0342/image.gif)

<hr>

**2. 구조** <br />

## 📁 프로젝트 구조

```markdown
📦src
┣ 📂app
┃ ┣ 📂api
┃ ┃ ┗ 📂rotation
┃ ┃ ┃ ┗ 📜route.ts
┃ ┣ 📂champions
┃ ┃ ┣ 📂[id]
┃ ┣ 📂items
┃ ┃ ┣ 📂[name]
┃ ┣ 📂rotation
┃ ┣ 📜error.tsx
┃ ┣ 📜global-error.tsx
┃ ┣ 📜layout.tsx
┃ ┣ 📜loading.tsx
┃ ┣ 📜page.tsx
┃ ┗ 📜providers.tsx
┣ 📂components
┃ ┣ 📂champions
┃ ┣ 📂common
┃ ┣ 📂items
┃ ┣ 📂layout
┣ 📂constants
┣ 📂hooks
┣ 📂styles
┣ 📂types
┣ 📂utils
┗ 📜.DS_Store
```

<br />

## 🚀 트러블 슈팅

#### 1. [챔피언 로테이션 데이터 처리, Promise.all로 성능 향상](https://velog.io/@verdantgreeny/챔피언-로테이션-데이터-처리-Promise.all로-성능-향상)

#### 2. [Hydration 경고 문제와 해결 시도](https://velog.io/@verdantgreeny/Hydration-경고-문제와-해결-시도)

<hr>
