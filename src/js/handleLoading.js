// ローディング画面の管理
const handleLoading = (onComplete) => {
    const bodyElement = document.querySelector('body');
    bodyElement.style.opacity = '1';

    window.addEventListener('load', () => {
        const loading = document.querySelector('.loading');
        if (!loading) return;
    
        setTimeout(() => {
            loading.classList.add('is-hidden');
        }, 2000);
        
        // アニメーション後にDOMから削除
        setTimeout(() => {
            bodyElement.style.overflow = 'auto';
            bodyElement.classList.add('is-show');
            loading.remove();
            if (typeof onComplete === 'function') {
                onComplete();
            }
        }, 2600);
    });
};

export { handleLoading };