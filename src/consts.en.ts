// English equivalents of consts.ts — labels only, colors/keys stay in sync with the Japanese version
export const SITE_TITLE_EN = 'AI Watch Station';
export const SITE_DESCRIPTION_EN =
  "Daily tracking of updates and new features across the world's major AI tools, with practical how-to and comparison coverage.";

export const CATEGORIES_EN: Record<
  string,
  { label: string; color: string; genre?: string; domain?: string; archived?: boolean }
> = {
  adept: { label: 'Adept', color: '#14B8A6', genre: 'agent', domain: 'adept.ai' },
  antigravity: { label: 'Antigravity', color: '#34A853', genre: 'coding', domain: 'antigravity.google' },
  chatgpt: { label: 'ChatGPT', color: '#10A37F', genre: 'chat', domain: 'chatgpt.com' },
  claude: { label: 'Claude', color: '#C15F3C', genre: 'chat', domain: 'claude.ai' },
  cursor: { label: 'Cursor', color: '#1E293B', genre: 'coding', domain: 'cursor.com' },
  dalle: { label: 'DALL-E', color: '#F97316', genre: 'image', domain: 'openai.com', archived: true },
  deepseek: { label: 'DeepSeek', color: '#3B82F6', genre: 'chat', domain: 'deepseek.com' },
  devin: { label: 'Devin', color: '#6366F1', genre: 'coding', domain: 'cognition.com' },
  elevenlabs: { label: 'ElevenLabs', color: '#4C1D95', genre: 'voice', domain: 'elevenlabs.io' },
  flux: { label: 'FLUX', color: '#B45309', genre: 'image', domain: 'bfl.ai' },
  gemini: { label: 'Gemini', color: '#4285F4', genre: 'chat', domain: 'gemini.google.com' },
  notebooklm: { label: 'Gemini Notebook', color: '#FBBF24', genre: 'agent', domain: 'notebooklm.google' },
  genspark: { label: 'Genspark', color: '#84CC16', genre: 'agent', domain: 'genspark.ai' },
  copilot: { label: 'GitHub Copilot', color: '#0078D4', genre: 'coding', domain: 'github.com' },
  glm: { label: 'GLM', color: '#2563EB', genre: 'chat', domain: 'z.ai' },
  grok: { label: 'Grok', color: '#18181B', genre: 'chat', domain: 'grok.com' },
  ideogram: { label: 'Ideogram', color: '#475569', genre: 'image', domain: 'ideogram.ai' },
  kimi: { label: 'Kimi', color: '#1F2937', genre: 'chat', domain: 'kimi.com' },
  kiro: { label: 'Kiro', color: '#7C3AED', genre: 'coding', domain: 'kiro.dev' },
  kling: { label: 'Kling', color: '#0891B2', genre: 'video', domain: 'klingai.com' },
  lindy: { label: 'Lindy', color: '#D946EF', genre: 'agent', domain: 'lindy.ai' },
  llama: { label: 'Llama', color: '#0668E1', genre: 'chat', domain: 'llama.com' },
  lovable: { label: 'Lovable', color: '#FF5470', genre: 'coding', domain: 'lovable.dev' },
  manus: { label: 'Manus', color: '#DC2626', genre: 'agent', domain: 'manus.im' },
  mscopilot: { label: 'Microsoft Copilot', color: '#5C2D91', genre: 'chat', domain: 'copilot.microsoft.com' },
  midjourney: { label: 'Midjourney', color: '#8B5CF6', genre: 'image', domain: 'midjourney.com' },
  minimax: { label: 'MiniMax', color: '#E11D48', genre: 'video', domain: 'minimax.io' },
  mistral: { label: 'Mistral', color: '#FA520F', genre: 'chat', domain: 'mistral.ai' },
  perplexity: { label: 'Perplexity', color: '#06B6D4', genre: 'agent', domain: 'perplexity.ai' },
  qwen: { label: 'Qwen', color: '#A21CAF', genre: 'chat', domain: 'qwen.ai' },
  replit: { label: 'Replit', color: '#F26207', genre: 'coding', domain: 'replit.com' },
  runway: { label: 'Runway', color: '#00C2A8', genre: 'video', domain: 'runway.com' },
  sakana: { label: 'Sakana AI', color: '#FB7185', genre: 'agent', domain: 'sakana.ai' },
  seedance: { label: 'Seedance', color: '#0EA5E9', genre: 'video', domain: 'seed.bytedance.com' },
  skywork: { label: 'Skywork', color: '#10B981', genre: 'agent', domain: 'skywork.ai' },
  sora: { label: 'Sora', color: '#FF8A65', genre: 'video', domain: 'sora.com', archived: true },
  stablediffusion: { label: 'Stable Diffusion', color: '#EC4899', genre: 'image', domain: 'stability.ai' },
  suno: { label: 'Suno', color: '#F59E0B', genre: 'voice', domain: 'suno.com' },
  thinkingmachines: { label: 'Thinking Machines Lab', color: '#065F46', genre: 'chat', domain: 'thinkingmachines.ai' },
  veo: { label: 'Veo', color: '#EA4335', genre: 'video', domain: 'deepmind.google' },
  other: { label: 'Other', color: '#5B6478' },
};

// Affiliate banner config. Keys match CATEGORIES_EN. Only categories listed here get an
// auto-rendered banner at the end of their articles (no manual paste-in needed). Color comes
// from CATEGORIES_EN's brand color.
export const AFFILIATE_LINKS_EN: Record<string, { url: string; tagline: string }> = {
  genspark: { url: 'https://www.genspark.ai/?via=taka102', tagline: 'Try "your AI employee" now' },
};

export const GENRES_EN: Record<string, string> = {
  chat: 'Chat & General Models',
  image: 'Image Generation',
  video: 'Video Generation',
  voice: 'Voice & Music',
  coding: 'Coding',
  agent: 'Search & Agents',
};

export const TYPES_EN: Record<string, string> = {
  news: 'News',
  howto: 'How-to',
  review: 'Comparison',
};

export const IMPORTANCE_EN: Record<string, string> = {
  high: 'AI Rating: High',
  medium: 'AI Rating: Medium',
  low: 'AI Rating: Low',
};

export function formatDateEn(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}
