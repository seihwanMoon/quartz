---
title: "Google’s 7-Step Vibe Engineering Skill Is Incredible"
source_url: "https://youtu.be/4bfKyZ7hbsU?si=amRLXXiit6ENEqNN"
published_date: "2026-04-08"
duration: "31:06"
summary_line: "Google Cloud식 7단계 에이전트 스킬로 아이디어 정제부터 PRD, 수직 슬라이스 구현, 리뷰·배포까지 묶는 실전형 개발 워크플로를 검증한 영상"
---

# Google’s 7-Step Vibe Engineering Skill Is Incredible

- 원본 URL: https://youtu.be/4bfKyZ7hbsU?si=amRLXXiit6ENEqNN
- 원본 영상 등록일: 2026-04-08
- 재생시간: 31:06
- 처리 시각: 2026-04-09 11:13:57

## 전체 개요
- Google Cloud 디렉터가 공개한 production-grade agent skills library를 실제 개발 흐름에 대입해, 아이디어 정제-사양화-계획-구현-검증-리뷰-배포로 이어지는 7단계 작업 체계를 해부
- 레시피 포크 기능을 예시로, 과설계 없이 MVP를 단순화하되 계보 추적, 테스트, UI 품질, 보안, CI/CD까지 실제로 동작하는지 확인

## 타임라인 지식 구조도
- [00:00] Google Cloud production-grade agent skills 라이브러리 소개
- [01:30] 아이디어 정제와 PRD 산출
- [03:00] 계획 분해와 수직 슬라이스 구현
- [04:30] 새 프로젝트·기존 기능·대형 변경에 대한 적용 범위
- [07:30] 레시피 포크 앱의 실제 맥락
- [15:00] 스킬의 한계, PRD와 아키텍처 문서화
- [24:00] 테스트·리뷰·보안·성능 점검
- [27:00] CI/CD와 브랜치 보호

## 주요 목차별 상세 요약

### [00:00] production-grade agent skills 라이브러리 개요
- 핵심은 복잡한 오케스트레이션이 아니라, 단계별 skills 조합으로 에이전트 작업을 구조화하는 방식
- 전체 흐름은 7개 명령, 19개 skills로 구성된 체계
- 목표는 단순 vibe coding 보조가 아니라 PRD-계획-구현-검증-리뷰-배포까지 묶는 실전형 워크플로
- 기존 GitHub spec kit처럼 중요한 구현 누락을 줄이는 방향
  - 근거와 예시
    - Google Cloud director의 production-grade agent skills library 언급
    - 7개 명령, 19개 skills
    - 비교 대상: GitHub spec kit
    - 핵심 산출물: PRD
  - 세부 요약
    - 도구가 많아져도 성능이 자동으로 좋아지는 건 아니라는 문제의식
    - 한 덩어리 자동화보다 단계별 skill 주입으로 중간 판단 여지 확보
    - 이 영상은 실제 앱에 이 흐름을 적용해 새 기능을 만드는 실험으로 전개

### [01:30] 아이디어 정제와 PRD 생성
- 첫 단계는 흐릿한 아이디어를 무엇을 만들지, 왜 만드는지 수준까지 좁히는 것
- 출력은 곧바로 구현 코드가 아니라 PRD
- 질문을 통해 설계를 수렴시키는 대화형 정제 과정이 핵심
- 과도한 기능 추가보다 MVP 경계 확정에 초점
  - 근거와 예시
    - skill 이름: idea refine
    - How might we 형태로 문제 재구성
    - 3~5개 설계 옵션 제안
    - 예시 요구: forking style, clean fork
  - 세부 요약
    - 레시피 변형 기능을 예로 들며, 원본과의 계보 관계를 어떻게 남길지 먼저 정리
    - git-style 인터페이스가 자연스러워도 사용자에게는 과도하게 복잡할 수 있다는 점을 고려
    - 아이디어 정제만으로는 부족하고, 이후 PRD 수준의 구체화가 필요

### [03:00] 계획 분해와 수직 슬라이스
- PRD를 바로 실행하지 않고, dependency graph를 먼저 정리한 뒤 phase 단위로 나누는 방식
- horizontal slicing보다 vertical slicing 선호
- 한 phase마다 schema, API, UI를 함께 묶어 작은 완성 단위로 전진
- 계획 자체를 프로젝트 문서에 기록해 범위를 고정
  - 근거와 예시
    - phase 1: foundation, database + types
    - phase 2: core backend
    - phase 3: chat UI
    - build phase one / phase two / phase three 식 호출
    - vertical slicing vs horizontal slicing
  - 세부 요약
    - 전체를 한 번에 밀면 컨텍스트가 빨리 소모된다는 점을 반복 강조
    - 각 phase를 명시해야 에이전트가 범위를 넘지 않음
    - 작업 단위를 작게 쪼개면 구현, 검증, 커밋이 서로 연결됨

### [04:30] 적용 범위와 TDD 기반 구현
- 새 프로젝트, 기존 기능 추가, 대형 변경 모두 같은 체계로 다룰 수 있음
- 구현은 red-green-refactor 사이클로 진행
- 먼저 failing test를 쓰고, 그다음 구현, 마지막에 정리
- 컨텍스트와 phase를 분리하면 동시에 너무 많은 일을 벌이지 않게 됨
  - 근거와 예시
    - red / green / refactor
    - failing test first
    - 새 프로젝트, 기존 프로젝트의 새 기능, 큰 변경 모두 적용 가능
    - phase를 지정해야 한다는 설명
  - 세부 요약
    - 수평 분해 방식처럼 DB/API/UI를 따로 만들고 나중에 붙이는 방식은 비판 대상
    - 한 기능을 사용자 관점의 단일 흐름으로 묶어 검증 가능하게 만드는 쪽을 선호
    - 실행 단계에서도 phase를 나눠야 컨텍스트 윈도우 소모가 덜함

### [07:30] 레시피 포크 앱의 MVP 설계
- 실제 예시는 레시피를 저장하고 포크하는 앱
- 목표는 fork된 변형을 추적하면서도 UI는 단순하게 유지하는 것
- 원본과 파생 버전의 계보를 남기되, 처음부터 git처럼 복잡하게 만들지 않음
- 현재 MVP는 자기 레시피 중심, 미래에는 타인 레시피 포크 가능성도 언급
  - 근거와 예시
    - 예시 요청: bourbon을 넣은 French onion soup
    - 생성 결과: recipe card, ingredients, steps, flavor profile, 추가 정보, save 버튼
    - 원본 레시피 페이지에 파생 버전 목록 표시
    - 포크의 포크: unlimited depth
    - 현재는 simple list, 미래에 row level security 필요 가능성
  - 세부 요약
    - 원본 카드에서 fork된 변형들을 한눈에 보여주는 단순 list 선호
    - git-style UI, flavor diff, lineage explorer 같은 고급 표현은 이번 단계에서 과설계로 판단
    - 원본 레시피와 파생 레시피의 계보를 저장하는 것이 핵심 요구

### [15:00] 스킬 명시 사용과 UI 품질 규범
- 아이디어 정제만으로는 구현 불가, PRD와 아키텍처 문서화가 필요
- 스킬은 명시적으로 사용 지시해야 안정적
- 프런트엔드는 별도 UI engineering skill로 품질 규범을 강제
- 에러 화면과 상태 처리를 포함해 blank screen을 피하는 쪽을 중시
  - 근거와 예시
    - skill에 정확히 지시해야 한다는 언급
    - architecture outline in project documentation
    - error screens / error handling
    - data fetching과 presentation 분리
    - state management를 앱 맥락에 맞게 선택
  - 세부 요약
    - 생성형 결과가 있어도 바로 build 가능한 상태는 아니므로 요구사항, 검증 기준, 기술 경계를 더 내려야 함
    - 스킬 내부에 prompt engineering이 들어가 있어, 단순 프롬프트보다 단계적 수렴을 유도
    - MVP는 과도한 도구화 없이 단순하지만 추적 가능한 구조를 유지

### [24:00] 실행 검증, 버그 수정, 다축 리뷰
- fork 기능 자체는 대체로 작동하지만, 목록 렌더링 버그가 발견됨
- API에 데이터가 있어도 UI 조건식이나 root recipe 처리에서 빠질 수 있음
- 수정 뒤에는 five axis review로 correctness, readability, architecture fit, security, performance를 점검
- 단순 수동 확인만으로는 부족하고 리뷰 스킬이 필요
  - 근거와 예시
    - forked recipes 목록이 안 보이는 버그
    - variants.length > 1 조건이 발동하지 않는 정황
    - root recipe ID가 null이라 조회값이 0으로 떨어질 가능성
    - five axis review: correctness / readable-simple / architecture fit / security / performance
    - about a thousand lines 규모 변경 언급
  - 세부 요약
    - 코어 로직은 정상인데 root cause를 직접 찾아 한 번에 고치는 방향
    - summer herb 버전, French onion beef stew 버전 등 fork 추적 사례 확인
    - 문제를 많이 건드리기보다 원인 지점만 수정하는 태도 강조

### [27:00] 보안·배포·브랜치 보호
- 실전 배포를 위해 CI/CD와 브랜치 보호를 붙이는 단계
- Supabase 사용 시 ORM, SQL injection, 테스트 게이트 같은 보안·품질 조건을 의식
- feature -> development -> main/master 흐름으로 배포 통제
- main 직접 push 차단이 실수 방지의 핵심
  - 근거와 예시
    - Supabase, ORM, SQL injection 언급
    - GitHub Actions로 테스트 자동 실행
    - feature / development / main / master 브랜치 운영
    - main 직접 push 차단
    - forkcast V2 저장소, Vercel 언급
  - 세부 요약
    - AI가 실수할 수 있으므로 correctness, security, performance를 별도 리뷰로 걸러야 함
    - 개인 프로젝트라 다단계 테스트 체계는 과할 수 있지만, 최소한의 브랜치 보호는 필요
    - 후속 영상에서 추가 브랜치 잠금과 보호 규칙을 다룰 가능성을 예고

## 핵심 결론
- 전달 메시지는 명확함: 에이전트는 한 번에 다 맡기는 자동화가 아니라, 아이디어 정제-PRD-계획-수직 슬라이스-검증-리뷰-배포로 쪼갠 실전 절차 안에서 가장 강해짐
- 과설계보다 단순한 MVP, 묵시적 자동화보다 명시적 스킬 호출, 실행만이 아니라 보안과 브랜치 보호까지 포함한 운영이 최종 완성 조건

## 액션 아이템
- 아이디어를 먼저 정제한 뒤 PRD로 구체화
- 작업을 phase별 vertical slice로 분해
- 구현 전 failing test부터 작성
- 스킬을 명시적으로 호출해 사용
- 리뷰 단계에서 correctness, security, performance를 점검
- main 직접 push를 차단하는 브랜치 보호를 적용

## 핵심 키워드
- 에이전트 스킬
- PRD
- 수직 슬라이스
- 포크 레시피
- CI/CD
