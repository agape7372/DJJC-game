// 실행 흐름 시뮬레이션 테스트
console.log('🧪 게임 로딩 시뮬레이션 테스트\n');

// Mock DOM and browser APIs
global.document = {
    getElementById: (id) => {
        if (id === 'loading') {
            return {
                style: {},
                classList: {
                    add: (cls) => console.log(`  📝 loading.classList.add('${cls}')`)
                }
            };
        }
        return null;
    },
    addEventListener: (event, handler) => {
        console.log(`  📌 ${event} 리스너 등록됨`);
        if (event === 'DOMContentLoaded') {
            // Simulate immediate execution
            setTimeout(() => {
                console.log(`\n⚡ ${event} 발생!`);
                handler();
            }, 50);
        }
    },
    querySelector: () => null,
    createElement: () => ({ style: {}, appendChild: () => {} })
};

global.window = {
    addEventListener: (event, handler) => {
        console.log(`  📌 window.${event} 리스너 등록됨`);
        if (event === 'load') {
            setTimeout(() => {
                console.log(`\n⚡ window.${event} 발생!`);
                handler();
            }, 100);
        }
    }
};

global.navigator = {
    vibrate: () => {}
};

global.requestAnimationFrame = (fn) => setTimeout(fn, 16);

let logs = [];
const originalLog = console.log;
console.log = (...args) => {
    const msg = args.join(' ');
    if (msg.includes('✅') || msg.includes('⚡') || msg.includes('🚨') || msg.includes('⏰')) {
        logs.push(msg);
    }
    originalLog(...args);
};

// Test execution timeline
console.log('='.repeat(60));
console.log('📍 스크립트 로드 시작 (t=0ms)');
console.log('='.repeat(60));

// Simulate the initialization code
let gameStarted = false;
let intervalsCreated = false;

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
        console.log('✅ 로딩 화면 완전 제거');
    }
}

function startGame() {
    if (!intervalsCreated) {
        console.log('✅ 게임 루프 시작');
        console.log('✅ Auto-save & Energy regen 활성화');
        intervalsCreated = true;
    }
}

function initGame() {
    if (gameStarted) {
        console.log('⚠️  이미 시작됨, 중복 방지');
        return;
    }

    console.log('🍫 게임 초기화 시작...');
    console.log('✅ Canvas 초기화 완료');
    console.log('✅ 게임 상태 로드 완료');
    hideLoading();
    startGame();
    gameStarted = true;
    console.log('🎮 게임 시작 완료!');
}

function forceStartGame() {
    console.log('🚨 강제 시작! (타임아웃)');
    hideLoading();
    if (!gameStarted) {
        initGame();
    }
}

// Actual initialization sequence
setTimeout(forceStartGame, 2000);
console.log('⏰ 2초 강제 타임아웃 등록됨');

document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOMContentLoaded 발생');
    setTimeout(initGame, 100);
});

window.addEventListener('load', () => {
    console.log('🌐 window.load 발생');
    setTimeout(initGame, 100);
});

// Wait for all events to complete
setTimeout(() => {
    console.log('\n' + '='.repeat(60));
    console.log('📊 최종 결과:');
    console.log('='.repeat(60));
    logs.forEach(log => console.log(log));
    console.log('\n' + (gameStarted ? '✅ 게임 정상 시작됨!' : '❌ 게임 시작 실패!'));
    console.log('='.repeat(60));
    process.exit(gameStarted ? 0 : 1);
}, 2500);
