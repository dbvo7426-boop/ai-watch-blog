(function () {
  const READ_KEY = 'aiwatch:read';
  const BOOKMARK_KEY = 'aiwatch:bookmarks';

  function getStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      return {};
    }
  }

  function setStore(key, obj) {
    try {
      localStorage.setItem(key, JSON.stringify(obj));
    } catch (e) {
      /* localStorageが使えない環境では無視 */
    }
  }

  // 既読は言語をまたいで共有(同じ記事を読んだ、という扱い)
  function markRead(slug) {
    const store = getStore(READ_KEY);
    store[slug] = Date.now();
    setStore(READ_KEY, store);
  }

  function isRead(slug) {
    return !!getStore(READ_KEY)[slug];
  }

  // ブックマークは言語ごとに独立("lang:slug"がキー)
  function bookmarkKey(lang, slug) {
    return `${lang || 'ja'}:${slug}`;
  }

  function isBookmarked(lang, slug) {
    return !!getStore(BOOKMARK_KEY)[bookmarkKey(lang, slug)];
  }

  function getBookmarks() {
    return getStore(BOOKMARK_KEY);
  }

  function toggleBookmark(lang, slug, meta) {
    const store = getStore(BOOKMARK_KEY);
    const key = bookmarkKey(lang, slug);
    if (store[key]) {
      delete store[key];
    } else {
      store[key] = Object.assign({ savedAt: Date.now(), slug, lang: lang || 'ja' }, meta);
    }
    setStore(BOOKMARK_KEY, store);
    return !!store[key];
  }

  function applyCardStates() {
    document.querySelectorAll('[data-slug]').forEach((el) => {
      const slug = el.getAttribute('data-slug');
      el.classList.toggle('is-read', isRead(slug));
    });
    document.querySelectorAll('[data-bookmark-btn]').forEach((btn) => {
      const slug = btn.getAttribute('data-slug');
      const lang = btn.getAttribute('data-lang') || 'ja';
      const active = isBookmarked(lang, slug);
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function bindBookmarkButtons() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-bookmark-btn]');
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const slug = btn.getAttribute('data-slug');
      const lang = btn.getAttribute('data-lang') || 'ja';
      const meta = {
        title: btn.getAttribute('data-title') || '',
        description: btn.getAttribute('data-description') || '',
        category: btn.getAttribute('data-category') || 'other',
        type: btn.getAttribute('data-type') || 'news',
        pubDate: btn.getAttribute('data-pubdate') || '',
      };
      const active = toggleBookmark(lang, slug, meta);
      document
        .querySelectorAll(
          `[data-bookmark-btn][data-slug="${CSS.escape(slug)}"][data-lang="${CSS.escape(lang)}"]`
        )
        .forEach((b) => {
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', String(active));
        });
      document.dispatchEvent(new CustomEvent('aiwatch:bookmarks-changed'));
    });
  }

  function markCurrentPostRead() {
    const el = document.querySelector('[data-current-slug]');
    if (el) markRead(el.getAttribute('data-current-slug'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    markCurrentPostRead();
    applyCardStates();
    bindBookmarkButtons();
  });

  window.AIWatch = { getBookmarks, isBookmarked, isRead, toggleBookmark, applyCardStates };
})();
