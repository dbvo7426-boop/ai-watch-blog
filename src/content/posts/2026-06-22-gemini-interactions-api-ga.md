---
title: Gemini「Interactions API」が正式提供開始、エージェント向けの標準インターフェースに
description: GoogleがGemini向け新API「Interactions API」を正式提供(GA)開始。2025年12月のベータから半年でstable化し、Managed AgentsやDeep Research強化などフロンティア機能の主要な受け皿となります。
pubDate: 2026-06-22
category: gemini
type: news
tags: [Gemini, API, 開発者向け, エージェント]
source: https://blog.google/innovation-and-ai/technology/developers-tools/interactions-api-general-availability/
draft: false
importance: medium
---

Googleが2026年6月22日、Geminiモデル・エージェント向けの新しいAPI「Interactions API」を正式提供(GA)開始しました。2025年12月に公開ベータとして登場してから半年でのGA移行となり、スキーマが安定版になったほか、Google AI Studioや公式ドキュメントでもデフォルトの窓口として位置づけられます。

## 詳細

- **単一の統合エンドポイント**: モデル推論とエージェント実行を1つのAPIで扱えるようにし、サーバー側での状態管理・バックグラウンド実行・マルチモーダル生成・ツールの組み合わせに対応
- **Managed Agents**: リモートのLinuxサンドボックスを自動プロビジョニングする機能を搭載し、デフォルトエージェントとして「Antigravity」を採用
- **バックグラウンド実行**: `background=True`を指定するだけで、長時間かかるタスクを非同期に処理可能
- **ツールの強化**: Google検索やGoogleマップなどの組み込みツールとカスタム関数を1回のリクエストで併用でき、ツールがテキストと画像を同時に返せるようになった
- **Deep Researchの強化**: 新しいエージェントバージョン、協調的なプランニング、チャートやインフォグラフィックの生成に対応
- **メディア生成**: 画像生成、音楽生成(Lyria 3)、複数話者対応の音声合成が利用可能に
- **スキーマの刷新**: 従来の「ロール」ベースの構造から「ステップ」ベースの構造への「From Roles to Steps」と呼ばれる設計変更を実施
- **コスト最適化**: 最大50%のコスト削減が見込める「Flex」「Priority」の料金ティアを新設
- **移行方針**: 従来の`generateContent` APIは引き続きサポートされるが、フロンティア機能は今後Interactions API限定で提供される流れが強まる見通し

## 使ってみるには

- Google AI StudioでInteractions APIがデフォルトのインターフェースとして選択可能
- Python・JavaScript SDK経由で利用でき、LiteLLM・Eigent・Agnoなど統合パートナー経由でも対応
- 既存の`generateContent`ベースの実装は引き続き動作するが、新規プロジェクトではInteractions APIの利用がGoogleから推奨されている
