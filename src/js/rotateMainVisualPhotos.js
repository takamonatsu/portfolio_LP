const switchRotateClass = (photo) => {
    if (!photo) return;
    // .is-rotate のクラス名の切り替えで回転のアニメーションを実行
    photo.classList.add('is-rotate');
    setTimeout(() => {
        photo.classList.remove('is-rotate');
    }, 2000);
}

const rotateMainVisualPhotos = () => {
    // メインビジュアル内の切り抜き写真をすべて取得
    const photos = document.querySelectorAll('.mv__cutout-photo');
    if (photos.length === 0) return;

    // それぞれの画像に対して switchRotateClass を実行（1枚のみ時間差で実行）
    photos.forEach((photo, index) => {
        if (index === 0 || index === 2) {
            switchRotateClass(photo); 
        } else if (index === 1) {
            setTimeout(() => {
                switchRotateClass(photo);
            }, 500);
        }
    });

    // ランダムに2枚を回転
    setInterval(() => {
        const indices = [];
        while (indices.length < 2) {
            const randomIndex = Math.floor(Math.random() * photos.length);
            if (!indices.includes(randomIndex)) {
                indices.push(randomIndex);
            }
        }

        // 2枚に回転処理を適用
        indices.forEach(index => {
            switchRotateClass(photos[index]);
        });
    }, 5000);
}

export { rotateMainVisualPhotos };