// サイト全体の設定。サイト名が決まったらここを変更するだけでOK
export const SITE_TITLE = 'AI観測所';
export const SITE_DESCRIPTION =
  '主要AIツールの新機能・アップデートを毎日定点観測。使い方・比較情報もまとめてお届け。';

// カテゴリ定義(色は各サービスのブランドカラーに寄せています)
export const CATEGORIES: Record<string, { label: string; color: string }> = {
  adept: { label: 'Adept', color: '#14B8A6' },
  chatgpt: { label: 'ChatGPT', color: '#10A37F' },
  claude: { label: 'Claude', color: '#C15F3C' },
  copilot: { label: 'Copilot', color: '#0078D4' },
  cursor: { label: 'Cursor', color: '#1E293B' },
  dalle: { label: 'DALL-E', color: '#F97316' },
  deepseek: { label: 'DeepSeek', color: '#3B82F6' },
  devin: { label: 'Devin', color: '#6366F1' },
  elevenlabs: { label: 'ElevenLabs', color: '#4C1D95' },
  gemini: { label: 'Gemini', color: '#4285F4' },
  genspark: { label: 'Genspark', color: '#84CC16' },
  grok: { label: 'Grok', color: '#18181B' },
  lindy: { label: 'Lindy', color: '#D946EF' },
  llama: { label: 'Llama', color: '#0668E1' },
  lovable: { label: 'Lovable', color: '#FF5470' },
  manus: { label: 'Manus', color: '#DC2626' },
  midjourney: { label: 'Midjourney', color: '#8B5CF6' },
  mistral: { label: 'Mistral', color: '#FA520F' },
  notebooklm: { label: 'NotebookLM (Gemini Notebook)', color: '#FBBF24' },
  perplexity: { label: 'Perplexity', color: '#06B6D4' },
  qwen: { label: 'Qwen', color: '#A21CAF' },
  runway: { label: 'Runway', color: '#00C2A8' },
  skywork: { label: 'Skywork', color: '#10B981' },
  sora: { label: 'Sora', color: '#FF8A65' },
  stablediffusion: { label: 'Stable Diffusion', color: '#EC4899' },
  suno: { label: 'Suno', color: '#F59E0B' },
  other: { label: 'その他', color: '#5B6478' },
};

// 記事タイプ
export const TYPES: Record<string, string> = {
  news: 'ニュース',
  howto: '使い方',
  review: '比較・レビュー',
};

// 1ページあたりの記事数(トップ・カテゴリ別・タグ別ページ共通)
export const PAGE_SIZE = 9;

export function formatDate(d: Date): string {
  return d.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
