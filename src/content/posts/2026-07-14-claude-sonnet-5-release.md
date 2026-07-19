---
title: Claude Sonnet 5登場、Opus級の性能をSonnet価格で
description: Anthropicが新モデル「Claude Sonnet 5」を発表。コーディングや自律的なタスク遂行でOpus 4.8に迫る性能を、より低コストで実現しています。
pubDate: 2026-06-30
category: claude
type: news
tags: [Claude, Sonnet, 新モデル]
source: https://www.anthropic.com/news/claude-sonnet-5
draft: false
importance: high
---

Anthropicが新モデル「Claude Sonnet 5」を発表しました。コーディングや自律的なタスク遂行において、上位モデルのOpus 4.8に迫る性能を、より低いコストで実現しているのが特徴です。Claude.ai、Claude Code、APIなど全プラットフォームで利用できます。

## 詳細

- **推論・計画力の向上**: 複雑な問題を自律的に解き進める能力が強化された
- **ツール操作**: ブラウザやターミナルなどのソフトウェア操作をより的確にこなす
- **コーディング**: デバッグや最後までのやり切り(follow-through)が改善。テスターからは「これまでのSonnetなら途中で止まっていたタスクを最後まで完了する」との声も
- **安全性**: Sonnet 4.6と比べ、幻覚(ハルシネーション)や過度な迎合(sycophancy)の発生率が低下。悪意あるリクエストの拒否やプロンプトインジェクション耐性も向上

### 提供プラン・料金

| プラン | 内容 |
| --- | --- |
| Free / Pro | デフォルトモデルとして提供 |
| Max / Team / Enterprise | 選択可能なモデルの一つとして提供 |
| API | `claude-sonnet-5` として利用可能 |

料金は2026年8月31日までの導入価格として、入力100万トークンあたり$2、出力100万トークンあたり$10(通常価格は$3/$15)。全プラットフォームでレート制限も引き上げられています。

## 使ってみるには

- **Claude.ai**: Free/Proプランでは自動的にSonnet 5が使われます。Max/Team/Enterpriseではモデル選択メニューから切り替え可能
- **API**: `model: "claude-sonnet-5"` を指定するだけで利用開始できます
- **Claude Code**: アップデート後、追加設定なしでSonnet 5が使われます
