---
title: Grok Buildに「プラグインマーケットプレイス」登場──MongoDBやVercelなど6社が参加
description: xAIがGrok Build向けのプラグインマーケットプレイスを公開。ターミナルから離れずにMongoDBやVercel、Sentryなどとの連携機能をインストールできるようになりました。
pubDate: 2026-06-11
category: grok
type: news
tags: [Grok Build, xAI, プラグイン, コーディング, AI史]
source: https://x.ai/news/grok-plugin-marketplace
draft: false
importance: low
---

xAIはコーディングエージェント「Grok Build」に、プラグインマーケットプレイスを追加しました。スキルやスラッシュコマンド、フック、MCPサーバーなどをひとまとめにした「プラグイン」を、ターミナルを離れずに閲覧・インストールできる仕組みで、ローンチ時点でMongoDBやVercelなど6つのプラグインが用意されています。

## 詳細

- **プラグインとは**: スキル・スラッシュコマンド・エージェント・フック・MCPサーバー・LSPを1パッケージにまとめたもの
- **ローンチパートナー**: MongoDB(データ探索・クエリ最適化)、Vercel(デプロイ管理・ドメイン設定)、Sentry(スタックトレース解析)、Chrome DevTools(ブラウザ操作・パフォーマンス計測)、Cloudflare(Workers・Durable Objects連携)、Superpowers(エージェント駆動ワークフロー)
- **利用方法**: Grok Build内で`/marketplace`と入力し`i`キーでインストール。コマンドラインからの導入にも対応
- **セキュリティ**: リモートプラグインは特定のコミットSHAに固定され、インストール時にGrok Buildがそのピン留めを検証する仕組み
- **オープンなカタログ**: 自作プラグインは`xai-org/plugin-marketplace`へのプルリクエストで登録申請が可能

## その後

- 6月15日、複数セッションを一括管理する「Agent Dashboard」が追加(Grok Build v0.2.20以降で利用可能)
- 7月15日、直前に発覚したリポジトリ無断アップロード問題への対応として、Grok Build本体のソースコードがApache 2.0ライセンスで公開された
