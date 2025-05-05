
const mainPhotos = document.querySelectorAll('.collection__main-photos');

export const switchCards = () => {
    mainPhotos.forEach(mainPhoto =>  {
        // 現在の要素・次の要素
        const frames = mainPhoto.querySelectorAll('.collection__photo-frame');
        if (frames.length === 1) return;
        const current = mainPhoto.querySelector('.collection__photo-frame.is-show');
        const currentIndex = Array.from(frames).indexOf(current);
        const nextIndex = (currentIndex + 1) % frames.length;
        if (nextIndex >= frames.length) {
            nextIndex = 0; 
        }
        const next = frames[nextIndex];
    
        // 一度すべてリセット
        frames.forEach(frame => frame.classList.remove('is-show', 'is-next', 'is-out', 'is-default'));
    
        // クラス付け直し
        current.classList.remove('is-show');
        next.classList.remove('is-next');
    
        current.classList.add('is-out');
        next.classList.add('is-show');
        frames[(nextIndex + 1) % frames.length].classList.add('is-next');

        setTimeout(function () {
            current.classList.remove('is-out');
        }, 1200);
    });
}