// ローディング画面の管理
const hideLoadingScreen = (onComplete) => {
    // ローディング画面が表示される前にコンテンツの要素が一瞬表示されてしまう問題を解消
    const bodyElement = document.querySelector('body');
    bodyElement.style.opacity = '1';

    window.addEventListener('load', () => {
        const loading = document.querySelector('.loading');
        if (!loading) return;
    
        // 1.5秒後にローディング画面を非表示にする
        setTimeout(() => {
            loading.classList.add('is-hidden');
        }, 1500);
        
        // アニメーション後にDOMから削除
        setTimeout(() => {
            // ローディング画面が表示されているときはスクロールできないようにしているため、 overfolw: auto; に戻す
            bodyElement.style.overflow = 'auto';
            // コンテンツ表示後に実行されるアニメーションのために .is-show を付与
            bodyElement.classList.add('is-show');
            // ローディング画面は再表示しないため削除
            loading.remove();
            // メインビジュアルのアニメーションを実行
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }, 2600);
    });
};

export { hideLoadingScreen };