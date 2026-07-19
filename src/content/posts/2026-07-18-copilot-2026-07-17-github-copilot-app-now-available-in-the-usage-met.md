---
title: "Copilot利用状況メトリクスAPIが「Copilot app」の利用状況にも対応"
description: "GitHub Copilotの利用状況メトリクスAPIに、Copilot app単体の利用データを示す新フィールドが追加されました。既存の集計方法には影響しません。"
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, API, 利用状況]
source: https://github.blog/changelog/2026-07-17-github-copilot-app-now-available-in-the-usage-metrics-api
draft: false
importance: low
---

GitHubが、Copilotの利用状況を取得する「usage metrics API」に、独立アプリ版「Copilot app」の利用データを示す新しいフィールドを追加しました。エンタープライズ・組織の管理者は、既存のIDE・チャット・コードレビューなどの指標と同じAPIから、Copilot app単体の利用状況も確認できるようになります。

## 詳細

- **`daily_active_copilot_app_users`**: 特定の日にCopilot appを利用したユニークユーザー数を返す新フィールド
- **`totals_by_copilot_app`**: セッション数・リクエスト数・プロンプト数・トークン使用量など、Copilot appの利用詳細をまとめた独立セクション
- **対応レポート**: エンタープライズ・組織向けの1日/28日レポートの両方に対応
- **既存機能への影響なし**: Copilot appの利用がない場合は該当フィールドが`null`を返す設計のため、既存の集計・ダッシュボードへの影響はない

## 使ってみるには

- 既にusage metrics APIを利用している管理者は、追加設定なしで新フィールドを確認可能
- 詳細な仕様はGitHub公式の[Copilot usage metrics APIドキュメント](https://docs.github.com/rest/copilot/copilot-usage-metrics)を参照
