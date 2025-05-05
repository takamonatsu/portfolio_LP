import { initScroll } from './scroll';
import { switchCards } from './switchCards';

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', () => {
    // スクロール処理の初期化
    // 画面途中でリロードすると、画面上部で Observer が実行された後に本来の表示位置へ移動してしまうため、遅延させて実行
    setTimeout(function () {
        initScroll();
    }, 1000);

    // 5秒ごとに切り替え
    setInterval(switchCards, 5000);
}); 