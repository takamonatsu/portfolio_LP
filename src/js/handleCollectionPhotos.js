const switchPhotos  = (mainPhoto) => {
    // 現在の要素・次の要素
    const frames = mainPhoto.querySelectorAll('.collection__photo-frame');
    if (!frames.length || frames.length === 1) return;
    const currentFrame  = mainPhoto.querySelector('.collection__photo-frame.is-show');
    const currentIndex = Array.from(frames).indexOf(currentFrame);
    const nextIndex = (currentIndex + 1) % frames.length;
    if (nextIndex >= frames.length) {
        nextIndex = 0; 
    }
    const next = frames[nextIndex];

    // 一度すべてリセット
    frames.forEach(frame => frame.classList.remove('is-show', 'is-next', 'is-out', 'is-default'));

    // クラス付け直し
    currentFrame.classList.remove('is-show');
    next.classList.remove('is-next');

    currentFrame.classList.add('is-out');
    next.classList.add('is-show');
    frames[(nextIndex + 1) % frames.length].classList.add('is-next');

    setTimeout(function () {
        currentFrame.classList.remove('is-out');
    }, 1200);
}

const handleCollectionPhotos  = () => {
    const mainPhotosElement = document.querySelectorAll(".collection__main-photos");

    if(!mainPhotosElement) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const isVisible = entry.isIntersecting;

            if(isVisible) {
                // 即座に実行
                switchPhotos(entry.target);
                // 3.5秒ごとに実行
                const intervalId = setInterval(() => switchPhotos(entry.target), 3500);
                // インターバルIDを要素に保存
                entry.target.dataset.intervalId = intervalId;
            } else {
                // 非表示になったらインターバルをクリア
                if (entry.target.dataset.intervalId) {
                    clearInterval(parseInt(entry.target.dataset.intervalId));
                    delete entry.target.dataset.intervalId;
                }
            }
        });
    });

    // コレクションの画像が表示されているかをobserverで監視する
    mainPhotosElement.forEach((target) => observer.observe(target));
}

export { handleCollectionPhotos };