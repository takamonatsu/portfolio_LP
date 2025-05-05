import { handleScroll } from './handleScroll';
import { handlePhotos } from './handlePhotos';
import { dummyLinkHandler } from './dummyLinkHandler';
import { handleLoading } from './loading';

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', () => {
    handleLoading();
    dummyLinkHandler();
    handlePhotos();
    
    // スクロール処理の初期化
    // 画面途中でリロードすると、画面上部で Observer が実行された後に本来の表示位置へ移動してしまうため、遅延させて実行
    setTimeout(function () {
        handleScroll();
    }, 1000);
}); 