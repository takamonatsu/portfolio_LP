import { initScroll } from './scroll';
import { switchCards } from './switchCards';
import { dummyLinkHandler } from './dummyLinkHandler';

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', () => {
    dummyLinkHandler();
    // スクロール処理の初期化
    // 画面途中でリロードすると、画面上部で Observer が実行された後に本来の表示位置へ移動してしまうため、遅延させて実行
    setTimeout(function () {
        initScroll();
    }, 1000);

    // 5秒ごとに切り替え
    setInterval(switchCards, 5000);
}); 