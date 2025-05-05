// ローディング画面の管理
export const handleLoading = () => {
    const loading = document.querySelector('.loading');
    if (!loading) return;

    // すべての画像要素を取得
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    let isMinimumTimePassed = false;
    let isAllImagesLoaded = false;

    // 最低表示時間の設定
    setTimeout(() => {
        isMinimumTimePassed = true;
        if (isAllImagesLoaded) {
            loading.classList.add('is-hidden');
        }
    }, 3000);

    // 画像が読み込まれた時の処理
    const imageLoaded = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
            isAllImagesLoaded = true;
            // 最低表示時間が経過している場合のみ非表示にする
            if (isMinimumTimePassed) {
                loading.classList.add('is-hidden');
            }
        }
    };

    // 各画像の読み込み完了を監視
    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
            img.addEventListener('error', imageLoaded); // エラー時もカウント
        }
    });
}; 