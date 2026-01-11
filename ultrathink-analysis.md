# 🔍 무한 로딩 원인 심층 분석 (ULTRATHINK)

## 발견된 치명적 버그들

### 1. ❌ CSS Hidden 클래스의 치명적 결함
**위치:** Line 433-436, Line 2025
```css
#loading.hidden {
    opacity: 0;
    pointer-events: none;
}
```

**문제:**
- `display: flex`가 여전히 유지됨
- `z-index: 9999`도 여전히 유지됨
- 레이어가 화면에 남아있음 (투명하지만 존재)
- 일부 모바일 브라우저에서 `pointer-events: none`이 무시될 수 있음
- **결과: 사용자는 게임 화면을 보지만 클릭이 안 됨!**

### 2. ❌ setInterval 중복 호출 (메모리 누수)
**위치:** Line 1977-1980, startGameSafely() 함수

`startGameSafely()` 함수가 호출되는 곳:
- Line 2002: 타임아웃에서 호출
- Line 2029: 정상 로딩에서 호출  
- Line 2036: 에러 catch에서 호출

**문제:**
- setInterval이 **중복 생성됨**
- 예: 타임아웃 발생하면 첫 번째 호출, 이후 정상 로딩에서 두 번째 호출
- **결과: setInterval이 2개 이상 동시에 실행 → 메모리 누수**

### 3. ❌ window.load 이벤트가 발생 안 할 수 있음
**위치:** Line 1991

**문제:**
- 일부 브라우저에서 `window.load` 이벤트가 늦게 발생하거나 안 발생
- 특히 캐시된 페이지에서는 이미 로드된 상태
- 모바일에서 절전 모드나 백그라운드 탭일 때 문제
- **결과: 초기화 코드 자체가 실행 안 됨**

### 4. ❌ setTimeout 실행이 보장 안 됨
**위치:** Line 2020-2030

**문제:**
- 브라우저가 백그라운드일 때 setTimeout이 지연되거나 무시됨
- 모바일 절전 모드에서 타이머가 멈춤
- **결과: 1초 타임아웃이 실행 안 되면 게임 시작 안 됨**

### 5. ⚠️ 강제 타임아웃이 작동해도 로딩 화면 안 사라짐
**위치:** Line 1996-2003

```javascript
setTimeout(() => {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';  // ← 이건 OK
    }
    startGameSafely();
}, 3000);
```

이 부분은 괜찮지만, 정상 경로(Line 2025)에서는 `classList.add('hidden')`을 사용:
```javascript
loading.classList.add('hidden'); // ← 이게 문제!
```

**불일치 발견!**
- 타임아웃: `display = 'none'` ✅
- 정상 로딩: `classList.add('hidden')` ❌

## 🎯 진짜 원인

**99% 확률:**
1. `window.load` 이벤트가 발생 안 함 (또는 늦게 발생)
2. 따라서 초기화 코드 전체가 실행 안 됨
3. 강제 타임아웃(3초)도 등록 안 됨
4. **결과: 로딩 화면이 영원히 남음**

**대안 시나리오 (1% 확률):**
1. `window.load`는 발생함
2. 하지만 1초 setTimeout이 실행 안 됨
3. 3초 타임아웃은 실행됨
4. `display = 'none'` 적용
5. 하지만 `startGameSafely()` 안에서 에러 발생
6. setInterval이 생성 안 됨
7. **결과: 로딩은 사라지지만 게임이 작동 안 함**

## ✅ 해결 방법

### 즉시 적용 필수:

1. **DOMContentLoaded 이벤트 추가**
   - `window.load` 대신 또는 함께 사용
   - 더 빨리 발생하고 신뢰성 높음

2. **display: none 직접 사용**
   - `classList.add('hidden')` 제거
   - `style.display = 'none'` 통일

3. **setInterval 중복 방지**
   - 플래그 변수로 한 번만 실행

4. **타임아웃 단축**
   - 3초 → 2초로 단축
   - 사용자 체감 개선

5. **즉시 실행**
   - 스크립트 로드 시점에 바로 타임아웃 등록
   - 이벤트 리스너 밖에서 실행
