// スクロール関連の処理
const switchFollowElemVisible = () => {
    // 追従要素の取得
    const followElements = document.querySelectorAll(".js-follow");
    // 表示非表示の切り替え位置の要素を取得
    const topTarget = document.querySelector('[data-id="top_target"]');
    const bottomTarget = document.querySelector('[data-id="bottom_target"]');

    if (!followElements || !topTarget || !bottomTarget) return;

    // 状態を管理するオブジェクト
    const boolObj = {
        top_target: false,
        bottom_target: false,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // その切り替え位置の要素が表示されているかを確認
            const isVisible = entry.isIntersecting;
            //その切り替え位置の要素がビューポートの上に存在するかを確認
            let isAboveViewport = entry.boundingClientRect.top < 0;

            if (entry.target.dataset.id === "top_target") {
                // 'top_target'が画面より上に存在する場合：true
                boolObj.top_target = isAboveViewport;
            } else if (entry.target.dataset.id === "bottom_target") {
                // 'bottom_target'が表示されている または 画面より上に存在する場合：true
                boolObj.bottom_target = !isVisible && isAboveViewport;
            }
        });

        // 追従ボタンの表示・非表示を切り替える
        followElements.forEach(followElement => {
            if (boolObj.top_target && !boolObj.bottom_target) {
                followElement.classList.add("is-show");
            } else {
                followElement.classList.remove("is-show");
            }
        });
    });

    // 追従ボタンの表示・非表示を切り替える位置の要素をobserverで監視する
    [topTarget, bottomTarget].forEach((target) => observer.observe(target));
};

export { switchFollowElemVisible };