# FinFit Frontend
### AI 기반 소비 분석 · 금융 문해력 서비스

---

![React](https://img.shields.io/badge/React-18.0-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Bundler-646cff?logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-API-blue?logo=axios)

---

## 📘 Overview

**FinFit Frontend**는 소비 데이터를 기반으로 개인의 금융 문해력을 높이는  
AI 서비스의 **웹 UI를 담당하는 프론트엔드 전용 레포지토리**입니다.

## 예상 UI / UX

<p align="center">
    <img src="https://github.com/user-attachments/assets/c7ea1ad5-2554-4d6a-91b1-87ada7bc3c5c" align="center" width="48%">
    <img src="https://github.com/user-attachments/assets/381bad6f-f4ef-4eae-bf6a-e2841429e864" align="center" width="48%">
</p>

---

## 📂 Project Structure
```
src/
├── components/      # 그래프, 카드, 뉴스, 단어, 레이아웃 등 UI 컴포넌트
├── pages/           # 페이지 라우팅 단위
├── apis/            # axios 인스턴스 + API 요청 함수
├── types/           # TypeScript 타입 정의
├── hooks/           # 커스텀 훅
├── utils/           # 공통 유틸 함수
├── App.tsx
└── main.tsx
```

---

## 🔑 주요 기능 (Frontend)

### ✔ 로그인 & 인증
- Google OAuth
- Access Token 자동 저장
- axios interceptor 인증 처리

### ✔ 메인 대시보드(UI)
- 소비 파이차트 그래프
- 소비 미션 추천
- 오늘의 뉴스
- 오늘의 금융 용어

### ✔ 마이페이지
- 사용자 정보 조회
- CSV 업로드/삭제
- 로그아웃 및 회원탈퇴

### ✔ 거래 분석
- 거래 내역 리스트
- 카테고리 변경 UI

### ✔ 공통 컴포넌트
- Navbar
- Card
- Spinner
- ErrorBox

---
