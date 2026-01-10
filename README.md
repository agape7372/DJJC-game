# 🍪 두바이 쫀득 쿠키 타이쿤 (Dubai Cookie Tycoon)

[![Deploy to GitHub Pages](https://github.com/agape7372/DJJC-game/actions/workflows/deploy.yml/badge.svg)](https://github.com/agape7372/DJJC-game/actions/workflows/deploy.yml)

> **상용급 웹 타이쿤 게임** - 두바이를 강타한 쫀득 쿠키로 사업 제국을 건설하세요!

## 🎮 지금 플레이하기

**👉 [게임 시작하기](https://agape7372.github.io/DJJC-game/)** _(GitHub Pages 배포 후 활성화)_

또는 로컬에서 실행:
```bash
# 저장소 클론
git clone https://github.com/agape7372/DJJC-game.git
cd DJJC-game

# 브라우저에서 index.html 열기
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

---

## ✨ 게임 특징

### 🎨 완전한 픽셀 아트
- **외부 이미지 파일 없음** - 모든 그래픽을 Canvas API로 코드 생성
- 두바이 쿠키의 쫀득한 필링까지 디테일하게 표현
- 카다이프면, 피스타치오, 오븐, 손님 등 모두 픽셀 단위 드로잉

### 🔊 프로시저럴 사운드
- **Web Audio API**로 모든 효과음 실시간 합성
- 클릭음, 베이킹 소리, 돈 버는 소리, BGM 등
- 외부 오디오 파일 불필요

### 🎯 3가지 중독성 미니게임
1. **카다이프면 볶기** - 타이밍 게임 (10번 성공)
2. **피스타치오 분쇄** - 클릭 게임 (20개 분쇄)
3. **쿠키 굽기** - 온도 조절 게임 (완벽한 타이밍!)

### 💰 완벽한 타이쿤 시뮬레이션
```
재료 획득 → 필링 합성 → 쿠키 제작 → 손님 판매 → 수익!
```
- 손님 대기열 시스템 (인내심 게이지)
- 만족/불만족 감정 표현
- 실시간 통계 추적

### 🚀 업그레이드 & 자동화
- ⚙️ 자동 카다이프/피스타치오 생산기
- 🔥 자동 오븐
- 💵 판매가 상승
- 👥 손님 스폰 속도 증가
- **무한 성장 가능!**

### 💾 진행상황 저장
- LocalStorage 자동 저장 (10초마다)
- 오프라인 수익 계산 (최대 24시간)
- "알바생이 돈을 벌었습니다!" 시스템

### 📱 완벽한 반응형
- 데스크톱 & 모바일 최적화
- 터치 제스처 지원
- 어떤 화면 크기에서도 완벽한 UX

### ✨ 주스니스 (Juiciness)
- 💥 파티클 시스템 (쿠키 부스러기, 금가루)
- 📳 스크린 쉐이크
- 🎬 부드러운 애니메이션
- 🎉 레벨업 연출

---

## 🎯 게임플레이

### 초보자 가이드

1. **재료 획득**
   - "카다이프면 볶기" 버튼 클릭 → 미니게임
   - "피스타치오 분쇄" 버튼 클릭 → 미니게임

2. **필링 제작**
   - 카다이프 5개 + 피스타치오 3개 → 두바이 필링 1개

3. **쿠키 굽기**
   - 쿠키 도우 구매 (₩500)
   - 도우 1개 + 필링 1개 → 베이킹 미니게임

4. **판매하기**
   - 손님 대기열에서 손님 클릭
   - 쿠키 판매 → 돈 획득! 💰

5. **업그레이드**
   - 자동화 구매 → 방치형 수익
   - 판매가 상승 → 더 큰 수익
   - 무한 성장! 📈

---

## 🛠️ 기술 스택

- **HTML5 Canvas** - 픽셀 아트 렌더링
- **Web Audio API** - 프로시저럴 사운드
- **LocalStorage API** - 저장/불러오기
- **Vanilla JavaScript** - 외부 라이브러리 없음
- **CSS3** - 반응형 UI/UX
- **단일 HTML 파일** - 완전 독립 실행

### 아키텍처
```javascript
- SpriteEngine      // 픽셀 드로잉 엔진
- AudioEngine       // 사운드 합성
- ParticleSystem    // 파티클 효과
- GameLogic         // 게임 로직
- SaveSystem        // 저장/불러오기
- 3x MinigameClass  // 미니게임 컨트롤러
- Customer          // 손님 AI
```

---

## 📊 게임 통계

추적되는 데이터:
- 총 쿠키 판매량
- 총 수익
- 만족한 손님 수
- 화난 손님 수
- 플레이 시간
- 초당 수익 (실시간)

---

## 🎨 스크린샷

_(게임 플레이 화면)_
- 픽셀 아트 쿠키 디스플레이
- 손님 대기열
- 미니게임 화면
- 업그레이드 메뉴
- 통계 대시보드

---

## 🚀 배포

### GitHub Pages
이 프로젝트는 GitHub Actions로 자동 배포됩니다:
- Push 시 자동 빌드 & 배포
- GitHub Pages에서 즉시 플레이 가능

### 수동 배포
단일 HTML 파일이므로 어디든 배포 가능:
- Netlify
- Vercel
- AWS S3
- Azure Static Web Apps
- 심지어 USB에 담아서도!

---

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포하세요!

---

## 🙏 크레딧

**게임 디자인 & 개발**
- Theme: 두바이 쫀득 쿠키 (Dubai Viral Dessert)
- Engine: 100% 순수 JavaScript
- Art: Procedural Pixel Art
- Sound: Web Audio API Synthesis

---

## 🎯 향후 계획

- [ ] 리더보드 시스템
- [ ] 추가 레시피
- [ ] 계절별 이벤트
- [ ] 업적 시스템
- [ ] PWA 지원 (오프라인 플레이)
- [ ] 멀티플레이어 (친구 방문)

---

## 🐛 버그 리포트 & 피드백

이슈나 제안사항이 있으시면:
- [GitHub Issues](https://github.com/agape7372/DJJC-game/issues)

---

## ⭐ 별점 주기

게임이 마음에 드셨다면 ⭐️ 스타를 눌러주세요!

---

<div align="center">

**만든 이의 한마디:**
> "바삭한 카다이프면과 쫀득한 피스타치오 필링의 조화,
> 그것이 바로 두바이 쿠키의 매력입니다. 🍪✨"

[![Play Now](https://img.shields.io/badge/▶️_PLAY_NOW-e94560?style=for-the-badge&logoColor=white)](https://agape7372.github.io/DJJC-game/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/agape7372/DJJC-game)
[![License](https://img.shields.io/badge/License-MIT-4ecca3?style=for-the-badge)](LICENSE)

</div>
