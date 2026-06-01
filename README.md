# 퍼블리싱 자동화 툴

pe.html 컴포넌트 기반으로 설계서 이미지/텍스트를 분석해 HTML 초안을 자동 생성하는 툴입니다.

## 파일 구조

```
├── index.html          # 메인 UI
├── pe-components.js    # 컴포넌트 DB (pe.html에서 추출)
├── api/
│   └── generate.js     # Vercel Serverless Function (API 키 보호)
├── vercel.json         # Vercel 배포 설정
└── README.md
```

## 배포 방법

### 1단계 - GitHub 저장소 생성
1. GitHub에서 새 저장소(repository) 만들기
2. 이 파일들 전부 업로드 또는 push

### 2단계 - Vercel 연결
1. https://vercel.com 접속 → GitHub 계정으로 로그인
2. "Add New Project" → GitHub 저장소 선택
3. 그대로 Deploy 클릭 (설정 변경 불필요)

### 3단계 - API 키 등록
1. https://console.anthropic.com 에서 API 키 발급
2. Vercel 프로젝트 → Settings → Environment Variables
3. 아래 값 추가:
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-...` (발급받은 키)
4. Save 후 Vercel에서 Redeploy

### 4단계 - 접속
Vercel이 제공하는 URL로 접속하면 바로 사용 가능합니다.
예) `https://publishing-tool.vercel.app`

## 사용 방법

1. 엑슈어 설계서 캡처 이미지를 업로드하거나
2. 화면 설명을 텍스트로 입력
3. "HTML 초안 생성" 버튼 클릭
4. AI가 분석 → 컴포넌트 매핑 → HTML 코드 출력
5. 코드 복사 후 실제 프로젝트에 붙여넣기

## pe-components.js 업데이트 방법

pe.html이 업데이트되면 컴포넌트 DB도 갱신해야 합니다.
Claude에게 새 pe.html을 주고 "pe-components.js 다시 만들어줘"라고 하면 됩니다.
