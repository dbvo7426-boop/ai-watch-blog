(function () {
  const PREF_KEY = 'aiwatch:lang-pref';

  // 言語スイッチャーを手動でクリックしたら、その選択を明示的な希望として記憶する
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-lang-switcher] a[data-lang]');
    if (!link) return;
    try {
      localStorage.setItem(PREF_KEY, link.getAttribute('data-lang'));
    } catch (err) {
      /* ignore */
    }
  });

  // 明示的な選択が無い場合のみ、ブラウザの言語設定を見て自動的に振り分ける
  let pref = null;
  try {
    pref = localStorage.getItem(PREF_KEY);
  } catch (err) {
    /* ignore */
  }
  if (pref) return;

  // 日本語ページに、日本語を優先しないブラウザでアクセスしてきた場合だけ英語版へ誘導する。
  // 逆方向(英語URLへ直接来た場合)は明示的なアクセスとして尊重し、勝手に戻さない。
  const path = window.location.pathname;
  const isEn = path === '/en' || path.startsWith('/en/');
  const browserLang = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
  const prefersJa = browserLang.startsWith('ja');

  if (!isEn && !prefersJa) {
    window.location.replace('/en' + path + window.location.search);
  }
})();
