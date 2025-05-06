import { switchFollowElemVisible } from './switchFollowElemVisible';
import { handleCollectionPhotos } from './handleCollectionPhotos';
import { blockDummyLink } from './blockDummyLink';
import { hideLoadingScreen } from './hideLoadingScreen';
import { rotateMainVisualPhotos } from './rotateMainVisualPhotos';
import { initGlideSlider } from './initGlideSlider';

// DOMContentLoadedイベントで初期化
document.addEventListener('DOMContentLoaded', () => {
    hideLoadingScreen(() => {
        rotateMainVisualPhotos();
    });
    blockDummyLink();
    handleCollectionPhotos();
    initGlideSlider();
    
    // スクロール処理の初期化
    // 画面途中でリロードすると、画面上部で Observer が実行された後に本来の表示位置へ移動してしまうため、遅延させて実行
    setTimeout(() => {
        switchFollowElemVisible();
    }, 1000);
}); 