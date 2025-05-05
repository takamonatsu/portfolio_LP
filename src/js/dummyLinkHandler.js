export const dummyLinkHandler = () => {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          alert('ご覧いただきありがとうございます！こちらはポートフォリオ用のデモページのため、実際のリンク先は設定されておりません。');
        });
      });
}