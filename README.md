# 쇼핑몰 프로젝트

React 프론트엔드와 Node.js/Express 백엔드로 만든 쇼핑몰 애플리케이션입니다.

## 기능

- 상품 목록 조회
- 장바구니 추가/제거
- 수량 조절
- 주문 처리

## 로컬 실행

### 백엔드 실행
```bash
cd backend
npm install
npm start
```

### 프론트엔드 실행 (다른 터미널)
```bash
cd frontend
npm install
npm start
```

## Docker 실행

```bash
docker-compose up --build
```

- 프론트엔드: http://localhost:3000
- 백엔드 API: http://localhost:5000

## Docker Hub에 배포

1. Docker 이미지 빌드
```bash
docker build -t leehyun1798/shopping-mall-backend:latest ./backend
docker build -t leehyun1798/shopping-mall-frontend:latest ./frontend
```

2. Docker Hub에 로그인
```bash
docker login
```

3. 이미지 푸시
```bash
docker push leehyun1798/shopping-mall-backend:latest
docker push leehyun1798/shopping-mall-frontend:latest
```

## 프로젝트 구조

```
shopping-mall/
├── backend/          # Node.js/Express 백엔드
├── frontend/         # React 프론트엔드
└── docker-compose.yml
```
