// UI文言の辞書。ページ・コンポーネントの決め打ちテキストはすべてここ経由にする
export const UI = {
  ja: {
    latestArticles: '最新記事',
    articleList: '記事一覧',
    tagList: 'タグ一覧',
    bookmarks: 'ブックマーク',
    comments: 'コメント',
    relatedArticles: '関連記事',
    moreCategoryLink: (label: string) => `他の${label}の記事を見る →`,
    itemsCount: (n: number) => `${n} 件`,
    read: '既読',
    prev: '← 前へ',
    next: '次へ →',
    primarySource: '一次情報',
    filterByImportance: '重要度で絞り込み:',
    filterByGenre: '得意分野で絞り込み:',
    targetServices: '対象サービス:',
    noArticlesYet: 'まだ記事がありません。パイプラインの観測をお待ちください。',
    noCategoryArticles: 'このカテゴリの記事はまだありません。',
    noGenreArticles: '該当する記事はまだありません。',
    noTagsYet: 'まだタグの付いた記事がありません。',
    noBookmarks: 'まだブックマークした記事がありません。記事一覧のカードにある🔖アイコンから追加できます。',
    observing: '観測中',
    lastObserved: (t: string) => `最終観測: ${t} JST`,
    rss: 'RSS',
    footerNote:
      '当サイトのニュース記事はAIによる自動生成をベースに、公開前に人間が内容を確認しています。情報の正確性は一次情報(公式発表)をご確認ください。',
    bookmarkAdd: 'ブックマークする',
    bookmarkRemove: 'ブックマークを解除',
    categoryArticleList: (label: string) => `${label}の記事一覧`,
    genreArticleList: (label: string) => `${label}の記事一覧`,
    tagArticleList: (tag: string) => `#${tag} の記事一覧`,
    tryUsingIt: '使ってみるには',
    details: '詳細',
    afterward: 'その後',
  },
  en: {
    latestArticles: 'Latest Articles',
    articleList: 'All Articles',
    tagList: 'Tags',
    bookmarks: 'Bookmarks',
    comments: 'Comments',
    relatedArticles: 'Related Articles',
    moreCategoryLink: (label: string) => `More ${label} articles →`,
    itemsCount: (n: number) => `${n} articles`,
    read: 'Read',
    prev: '← Prev',
    next: 'Next →',
    primarySource: 'Source',
    filterByImportance: 'Filter by importance:',
    filterByGenre: 'Filter by specialty:',
    targetServices: 'Services:',
    noArticlesYet: 'No articles yet. Check back soon.',
    noCategoryArticles: 'No articles in this category yet.',
    noGenreArticles: 'No articles found.',
    noTagsYet: 'No tagged articles yet.',
    noBookmarks: 'No bookmarked articles yet. Use the 🔖 icon on any article card to save one.',
    observing: 'Observing',
    lastObserved: (t: string) => `Last updated: ${t}`,
    rss: 'RSS',
    footerNote:
      'News articles on this site are AI-generated and reviewed by a human before publishing. Please verify accuracy against the primary source.',
    bookmarkAdd: 'Add bookmark',
    bookmarkRemove: 'Remove bookmark',
    categoryArticleList: (label: string) => `${label} Articles`,
    genreArticleList: (label: string) => `${label} Articles`,
    tagArticleList: (tag: string) => `#${tag} Articles`,
    tryUsingIt: 'How to try it',
    details: 'Details',
    afterward: 'What happened next',
  },
};

export type Lang = keyof typeof UI;

export function t(lang: string) {
  return UI[(lang as Lang) in UI ? (lang as Lang) : 'ja'];
}

export function prefix(lang: string) {
  return lang === 'en' ? '/en' : '';
}
