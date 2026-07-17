---
title: 基盤モデル「grok-build-0.1」がAPI公開──Grok Build用モデルを単体でも利用可能に
description: xAIがGrok Buildを支えるコーディング特化モデル「grok-build-0.1」をAPIパブリックベータとして公開。低価格・高速性を武器に外部フレームワークからの利用も想定しています。
pubDate: 2026-05-29
category: grok
type: news
tags: [Grok Build, xAI, API, コーディング, AI史]
source: https://x.ai/news/grok-build-0-1
draft: false
---

xAIは、コーディングエージェント「Grok Build」を支える基盤モデル「grok-build-0.1」をxAI APIのパブリックベータとして公開しました。SuperGrokやX Premium Plusへの加入なしに、開発者が同モデルを直接自分のツールやフレームワークに組み込めるようになったのが最大のポイントです。

## 詳細

- **モデルの位置づけ**: Grok Build CLIを内部で動かしているのと同じモデルで、エージェント型のコーディングタスク(Web開発・デバッグ・MCP対応など)向けに特化して訓練されている
- **価格**: 入力100万トークンあたり1ドル、出力100万トークンあたり2ドルと低価格
- **速度**: 100トークン/秒超という高速な応答性能を確保
- **用途の広がり**: コーディング以外でも、エージェント型のツール呼び出し用途で経済的な選択肢として位置づけ
- **対応エコシステム**: xAI API本体に加え、OpenRouterやVercel AI Gatewayでも利用可能。Cursor、Hermes Agent、OpenClaw、Kilo Code、OpenCodeなど外部フレームワークとの連携も進む

## その後

- 6月11日、Grok Build本体にプラグインマーケットプレイスが追加
- 6月15日、複数セッションを一括管理する「Agent Dashboard」が追加
- 7月15日、直前に発覚したリポジトリ無断アップロード問題を受け、Grok Build全体のソースコードがApache 2.0ライセンスで公開された
