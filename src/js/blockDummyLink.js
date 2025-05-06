const blockDummyLink = () => {
    document.querySelectorAll('a:not(.collection__freepik-link)').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert('ご覧いただきありがとうございます！こちらはポートフォリオ用のデモページのため、実際のリンク先は設定されておりません。');
        });
    });
}

export { blockDummyLink };