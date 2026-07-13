// サイト全体の設定。サイト名が決まったらここを変更するだけでOK
export const SITE_TITLE = 'AI Watch';
export const SITE_DESCRIPTION =
  '主要AIツールの新機能・アップデートを毎日定点観測。使い方・比較情報もまとめてお届け。';

// カテゴリ定義(色は各サービスのブランドカラーに寄せています)
export const CATEGORIES: Record<string, { label: string; color: string }> = {
  claude: { label: 'Claude', color: '#C15F3C' },
  chatgpt: { label: 'ChatGPT', color: '#10A37F' },
  gemini: { label: 'Gemini', color: '#4285F4' },
  copilot: { label: 'Copilot', color: '#0078D4' },
  other: { label: 'その他', color: '#5B6478' },
};

// 記事タイプ
export const TYPES: Record<string, string> = {
  news: 'ニュース',
  howto: '使い方',
  review: '比較・レビュー',
};

export function formatDate(d: Date): string {
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
