const switchPhotos  = (mainPhoto) => {
    // 表示されているコレクションの画像をすべて取得
    const frames = mainPhoto.querySelectorAll('.collection__photo-frame');
    if (!frames.length || frames.length === 1) return;

    // 現在表示されている要素
    const currentFrame  = mainPhoto.querySelector('.collection__photo-frame.is-show');
    // 在表示されている要素が何番目の要素かを取得
    const currentIndex = Array.from(frames).indexOf(currentFrame);
    // 次の番号を確認
    const nextIndex = (currentIndex + 1) % frames.length;

    // 次のに表示される要素を取得
    const nextFrame = frames[nextIndex];

    // 一度すべてリセット
    frames.forEach(frame => frame.classList.remove('is-show', 'is-next', 'is-out', 'is-default'));

    // クラスを付与
    // 現在表示されている要素(.is-show) → 離れる要素(.is-out)　
    currentFrame.classList.add('is-out');
    // 次に表示されている要素(.is-next) → 現在表示されている要素(.is-show)　
    nextFrame.classList.add('is-show');
    // 次の次に表示されている要素　→　次に表示されている要素(.is-next)
    frames[(nextIndex + 1) % frames.length].classList.add('is-next');

    // 表示されている写真に合わせて著作権のリンクを切り替える
    switchLinks(mainPhoto, nextFrame);

    // アニメーション終了後に .is-out を削除
    setTimeout(function () {
        currentFrame.classList.remove('is-out');
    }, 1200);
}

const switchLinks = (mainPhoto, nextFrame) => {
    const freepikLinkElement = mainPhoto.nextElementSibling;
    const dataLink = nextFrame.dataset.link;
    const freepikLink = `https://www.freepik.com/${dataLink}`
    freepikLinkElement.setAttribute('href', freepikLink)
}

const handleCollectionPhotos  = () => {
    // コレクション画像の要素をすべて取得
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