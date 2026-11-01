---
title: "Cursor、Agent SDKを公開 エージェントをコードのフォルダで定義しevalで検証してデプロイ"
description: "CursorのAgent SDKは、指示・ツール・スキルのフォルダでエージェントを定義し、evalで検証してCursorまたは自社基盤へデプロイできます。"
pubDate: 2026-10-20
category: cursor
type: news
tags: [Cursor, Agent SDK, エージェント, eval]
source: https://cursor.com/changelog/agent-sdk
draft: false
importance: medium
---

CursorはAgent SDKを「本日利用可能」として公開しました。エージェントをコードのフォルダとして定義し、evalでテストして、Cursorまたは自社のインフラにデプロイできます。

## 詳細

- **始め方:** `npx @cursor/agent-sdk init ./my-bot`でひな形を作り、`agent-sdk dev`でプレイグラウンド付きのローカル実行ができます。テンプレートはセキュリティレビュー、オーナーポリシー承認、PR自動修正、Linear/Jiraトリアージの4種です。
- **構成:** `instructions.md`(プロンプト)、`tools/`(型付きアクション)、`skills/`(必要時に読み込む手順)、`mcp-connections/`(MCPのツール)、`channels/`(メッセージの送受信先)。`agent-sdk validate`と`agent-sdk info`で内容を確認できます。
- **デプロイ:** `agent-sdk deploy`でビルドしてURLを割り当て、Cursorのインフラ上で実行します。シークレットや連携はダッシュボードで管理します。
- **チャネル:** GitHub・GitLab・BitbucketのPR/コメント/CIイベント、Slackのメンションとダイレクトメッセージ、Webhook、cronで起動できます。GitHubのイベントはCursorアカウント経由で届くため、公開Webhook URLは不要です。会話ごとにセッションが保たれ、メッセージとツール呼び出しの全記録が残ります。
- **eval:** 固定メッセージを送り、実行されたツール、その入力、返信の形を検証します。ローカルでもCIでも`agent-sdk eval`で実行可能です。`agent-sdk github replay <pr-url>`は実際のPRを署名付きWebhookに変換して送り、`--dry-run --fixtures-dir fixtures/`でevalの入力データとして保存できます。

料金や提供プランはページ上では明記されていません。
