---
title: "GitHub Spark、github.com上でのサービス縮小を開始 ― 新規ユーザー受付は8月4日で終了"
description: "GitHubのアプリ即席プロトタイピングツール「GitHub Spark」が2026年8月4日、新規ユーザー登録・新規アプリ作成の受付を終了。既存ユーザーは8月31日までにアプリをエクスポート可能で、その後サービスは縮小フェーズに移行する。"
pubDate: 2026-08-04
category: copilot
type: news
tags: [Copilot, GitHub, GitHub Spark]
source: https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com
draft: false
importance: medium
---

GitHubは、github.com上でアプリを即座にプロトタイピングできるツール「GitHub Spark」の段階的な縮小を開始した。本日2026年8月4日付で新規ユーザーの受付と新規アプリの作成を終了し、既存ユーザーも2026年8月31日までにアプリをエクスポートする必要がある。

## 詳細

- **GitHub Sparkとは**: アイデアから動くアプリケーションへと素早く進めることを目的に、github.com上に組み込まれたプロトタイピングツール
- **本日からの変更点**: 2026年8月4日以降、Sparkは新規ユーザーの受付と新規アプリの作成を停止。積極的な開発フェーズから縮小フェーズへと移行する
- **既存ユーザーへの影響**: 現在のSparkユーザーは、2026年8月31日までアプリのエクスポートが可能。この期日を過ぎるとアクセスできなくなる
- **既存の公開済みアプリ**: すでにデプロイ済みのアプリは、Spark本体の終了後も引き続き稼働する
- **すでに終了した関連機能への注意**: SparkアプリからGitHub Modelsの`llm()`関数を呼び出している場合、このタイムラインとは別に移行が必要。同関数は2026年7月30日付で既に提供終了となっている
- **代替として推奨される移行先**: GitHubは、AIを活用したアプリ開発の継続手段として、VS Code上のGitHub Copilot、Copilot CLI、GitHub Copilotアプリを案内している

## 使ってみるには

- Sparkアカウントを持っている場合、「Create repository(リポジトリを作成)」オプションを使い、2026年8月31日までにアプリのコードをエクスポートする
- Sparkアプリ内で`llm()`関数を呼び出している箇所は、他の推論プロバイダーへ置き換え、自分のAPIキーを設定する
- 新規のプロトタイピング作業は、Sparkの代わりにVS Code上のGitHub Copilot、Copilot CLI、GitHub Copilotアプリへ移行する
- `llm()`に依存していない公開済みSparkアプリは特に対応不要で動作し続けるが、期日前にエクスポートは済ませておく
