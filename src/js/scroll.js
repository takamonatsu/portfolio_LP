// スクロール関連の処理
export const initScroll = () => {
    // 追従要素の取得
    const followElement = document.querySelector(".js-follow");
    const topTarget = document.querySelector('[data-id="top_target"]');
    const bottomTarget = document.querySelector('[data-id="bottom_target"]');

    if (!followElement || !topTarget || !bottomTarget) return;

    // 状態を管理するオブジェクト
    const boolObj = {
        top_target: false,
        bottom_target: false,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const isVisible = entry.isIntersecting;
            let isAboveViewport = entry.boundingClientRect.top < 0;

            if (entry.target.dataset.id === "top_target") {
                // 'top_target'が画面より上に存在する場合：true
                boolObj.top_target = isAboveViewport;
            } else if (entry.target.dataset.id === "bottom_target") {
                console.log(entry.boundingClientRect.top);
                // 'bottom_target'が表示されている または 画面より上に存在する場合：true
                boolObj.bottom_target = !isVisible && isAboveViewport;
            }
        });

        // 追従ボタンの表示・非表示を切り替える
        if (boolObj.top_target && !boolObj.bottom_target) {
            followElement.classList.add("is-show");
        } else {
            followElement.classList.remove("is-show");
        }
    });

    // 追従ボタンの表示・非表示を切り替える位置をobserverで監視する
    [topTarget, bottomTarget].forEach((target) => observer.observe(target));
};

// 画面途中でリロードすると、画面上部で Observer が実行された後に本来の表示位置へ移動してしまうため、遅延させて実行
setTimeout(function () {
    initScroll();
}, 1000);
