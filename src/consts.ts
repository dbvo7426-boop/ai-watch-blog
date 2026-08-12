// サイト全体の設定。サイト名が決まったらここを変更するだけでOK
export const SITE_TITLE = 'AI観測所';
export const SITE_DESCRIPTION =
  '主要AIツールの新機能・アップデートを毎日定点観測。使い方・比較情報もまとめてお届け。';

// カテゴリ定義(色は各サービスのブランドカラーに寄せています)
// genre: そのAIサービスが得意とする分野(GENRESのキーのいずれか)。otherはジャンル分け対象外なので未設定
// domain: 公式サイトのドメイン。ファビコンをアイコンとして表示するために使用(未設定の場合は色ドットのみ表示)
export const CATEGORIES: Record<string, { label: string; color: string; genre?: string; domain?: string }> = {
  adept: { label: 'Adept', color: '#14B8A6', genre: 'agent', domain: 'adept.ai' },
  chatgpt: { label: 'ChatGPT', color: '#10A37F', genre: 'chat', domain: 'chatgpt.com' },
  claude: { label: 'Claude', color: '#C15F3C', genre: 'chat', domain: 'claude.ai' },
  copilot: { label: 'Copilot', color: '#0078D4', genre: 'coding', domain: 'github.com' },
  cursor: { label: 'Cursor', color: '#1E293B', genre: 'coding', domain: 'cursor.com' },
  dalle: { label: 'DALL-E', color: '#F97316', genre: 'image', domain: 'openai.com' },
  deepseek: { label: 'DeepSeek', color: '#3B82F6', genre: 'chat', domain: 'deepseek.com' },
  devin: { label: 'Devin', color: '#6366F1', genre: 'coding', domain: 'cognition.com' },
  elevenlabs: { label: 'ElevenLabs', color: '#4C1D95', genre: 'voice', domain: 'elevenlabs.io' },
  gemini: { label: 'Gemini', color: '#4285F4', genre: 'chat', domain: 'gemini.google.com' },
  genspark: { label: 'Genspark', color: '#84CC16', genre: 'agent', domain: 'genspark.ai' },
  grok: { label: 'Grok', color: '#18181B', genre: 'chat', domain: 'grok.com' },
  lindy: { label: 'Lindy', color: '#D946EF', genre: 'agent', domain: 'lindy.ai' },
  llama: { label: 'Llama', color: '#0668E1', genre: 'chat', domain: 'llama.com' },
  lovable: { label: 'Lovable', color: '#FF5470', genre: 'coding', domain: 'lovable.dev' },
  manus: { label: 'Manus', color: '#DC2626', genre: 'agent', domain: 'manus.im' },
  midjourney: { label: 'Midjourney', color: '#8B5CF6', genre: 'image', domain: 'midjourney.com' },
  mistral: { label: 'Mistral', color: '#FA520F', genre: 'chat', domain: 'mistral.ai' },
  notebooklm: { label: 'NotebookLM (Gemini Notebook)', color: '#FBBF24', genre: 'agent', domain: 'notebooklm.google' },
  perplexity: { label: 'Perplexity', color: '#06B6D4', genre: 'agent', domain: 'perplexity.ai' },
  qwen: { label: 'Qwen', color: '#A21CAF', genre: 'chat', domain: 'qwen.ai' },
  runway: { label: 'Runway', color: '#00C2A8', genre: 'video', domain: 'runway.com' },
  sakana: { label: 'Sakana AI', color: '#FB7185', genre: 'agent', domain: 'sakana.ai' },
  skywork: { label: 'Skywork', color: '#10B981', genre: 'agent', domain: 'skywork.ai' },
  sora: { label: 'Sora', color: '#FF8A65', genre: 'video', domain: 'sora.com' },
  stablediffusion: { label: 'Stable Diffusion', color: '#EC4899', genre: 'image', domain: 'stability.ai' },
  suno: { label: 'Suno', color: '#F59E0B', genre: 'voice', domain: 'suno.com' },
  other: { label: 'その他', color: '#5B6478' },
};

// アフィリエイトバナー定義。キーはCATEGORIESと同じ。設定されているカテゴリの記事末尾にのみ
// 自動でバナーが表示される(記事本文への手動貼り付けは不要)。色はCATEGORIESのbrandカラーを流用
export const AFFILIATE_LINKS: Record<string, { url: string; tagline: string }> = {
  genspark: { url: 'https://www.genspark.ai/?via=taka102', tagline: '「あなたのAI社員」を今すぐ試す' },
};

// ジャンル定義(各AIサービスの得意分野)
export const GENRES: Record<string, string> = {
  chat: '汎用対話・モデル',
  image: '画像生成',
  video: '動画生成',
  voice: '音声・音楽',
  coding: 'コーディング',
  agent: '検索・エージェント',
};

// 記事タイプ
export const TYPES: Record<string, string> = {
  news: 'ニュース',
  howto: '使い方',
  review: '比較・レビュー',
};

// AIによる重要度判定のラベル(unratedはバッジを表示しない)
export const IMPORTANCE: Record<string, string> = {
  high: 'AI判定 重要度:高',
  medium: 'AI判定 重要度:中',
  low: 'AI判定 重要度:低',
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
