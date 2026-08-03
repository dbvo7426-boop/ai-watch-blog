(function () {
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    })[c]);
  }

  function normalize(s) {
    return String(s || '').toLowerCase();
  }

  let index = null;
  let categories, types, importance;

  function matches(item, terms) {
    const haystack = normalize(
      [item.title, item.description, (item.tags || []).join(' '), item.category].join(' ')
    );
    return terms.every((term) => haystack.includes(term));
  }

  function render() {
    if (!index) return;

    const cfg = window.AIWATCH_SEARCH_CONFIG;
    const input = document.getElementById('search-input');
    const grid = document.getElementById('search-grid');
    const empty = document.getElementById('search-empty');
    const hint = document.getElementById('search-hint');
    const countEl = document.getElementById('search-count');

    const rawQuery = input.value.trim();

    const url = new URL(window.location.href);
    if (rawQuery) url.searchParams.set('q', rawQuery);
    else url.searchParams.delete('q');
    history.replaceState(null, '', url);

    if (!rawQuery) {
      grid.innerHTML = '';
      empty.style.display = 'none';
      hint.style.display = 'block';
      countEl.textContent = cfg.itemsCount(0);
      return;
    }
    hint.style.display = 'none';

    const terms = normalize(rawQuery).split(/\s+/).filter(Boolean);
    const results = index.filter((item) => matches(item, terms)).slice(0, 60);

    countEl.textContent = cfg.itemsCount(results.length);
    empty.style.display = results.length === 0 ? 'block' : 'none';

    grid.innerHTML = results
      .map((item) => {
        const cat = categories[item.category] || categories.other;
        const typeLabel = types[item.type] || item.type;
        const importanceLabel = importance[item.importance];
        let dateLabel = '';
        try {
          dateLabel = new Date(item.pubDate).toLocaleDateString(cfg.dateLocale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });
        } catch (e) {
          dateLabel = '';
        }
        return `
          <div class="card-wrap" data-slug="${escapeHtml(item.slug)}">
            <a href="${cfg.prefix}/posts/${escapeHtml(item.slug)}/" class="card">
              <div class="meta">
                <span class="badge" style="background:${cat.color}">${escapeHtml(cat.label)}</span>
                <span class="type-label">${escapeHtml(typeLabel)}</span>
                <span class="date">${dateLabel}</span>
                <span class="read-flag">${escapeHtml(cfg.readLabel)}</span>
                ${importanceLabel ? `<span class="importance-badge importance-${item.importance}">${escapeHtml(importanceLabel)}</span>` : ''}
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.description)}</p>
            </a>
          </div>`;
      })
      .join('');

    if (window.AIWatch) window.AIWatch.applyCardStates();
  }

  function init() {
    const cfg = window.AIWATCH_SEARCH_CONFIG;
    categories = JSON.parse(document.getElementById('categories-data').textContent);
    types = JSON.parse(document.getElementById('types-data').textContent);
    importance = JSON.parse(document.getElementById('importance-data').textContent);

    const input = document.getElementById('search-input');
    const params = new URLSearchParams(window.location.search);
    input.value = params.get('q') || '';

    fetch(cfg.indexUrl)
      .then((r) => r.json())
      .then((data) => {
        index = data;
        render();
      });

    let debounce;
    input.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(render, 150);
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
