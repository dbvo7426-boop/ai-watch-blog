(function () {
  function getStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } catch (e) {
      return {};
    }
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
    } catch (e) {
      return '';
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[c]);
  }

  function render() {
    const categories = JSON.parse(document.getElementById('categories-data').textContent);
    const types = JSON.parse(document.getElementById('types-data').textContent);
    const bookmarks = getStore('aiwatch:bookmarks');
    const grid = document.getElementById('bookmark-grid');
    const empty = document.getElementById('bookmark-empty');
    const countEl = document.getElementById('bookmark-count');
    const entries = Object.entries(bookmarks).sort(
      (a, b) => (b[1].savedAt || 0) - (a[1].savedAt || 0)
    );

    countEl.textContent = `${entries.length} 件`;
    empty.style.display = entries.length === 0 ? 'block' : 'none';

    grid.innerHTML = entries
      .map(([slug, meta]) => {
        const cat = categories[meta.category] || categories.other;
        const typeLabel = types[meta.type] || meta.type;
        return `
          <div class="card-wrap" data-slug="${escapeHtml(slug)}">
            <a href="/posts/${escapeHtml(slug)}/" class="card">
              <div class="meta">
                <span class="badge" style="background:${cat.color}">${escapeHtml(cat.label)}</span>
                <span class="type-label">${escapeHtml(typeLabel)}</span>
                <span class="date">${formatDate(meta.pubDate)}</span>
              </div>
              <h3>${escapeHtml(meta.title)}</h3>
              <p>${escapeHtml(meta.description)}</p>
            </a>
            <button
              type="button"
              class="bookmark-btn"
              data-bookmark-btn
              data-slug="${escapeHtml(slug)}"
              data-title="${escapeHtml(meta.title)}"
              data-description="${escapeHtml(meta.description)}"
              data-category="${escapeHtml(meta.category)}"
              data-type="${escapeHtml(meta.type)}"
              data-pubdate="${escapeHtml(meta.pubDate)}"
              aria-label="ブックマークを解除"
              aria-pressed="true"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z" />
              </svg>
            </button>
          </div>`;
      })
      .join('');

    if (window.AIWatch) window.AIWatch.applyCardStates();
  }

  document.addEventListener('DOMContentLoaded', render);
  document.addEventListener('aiwatch:bookmarks-changed', render);
})();
