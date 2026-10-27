---
title: "Gemini API、新規有料プロジェクトのGenerate Contentでリクエスト保存をデフォルトで有効化"
description: "Gemini APIのGenerate Content APIを使う新規の有料プロジェクトで、Interactions APIと同様にリクエストがデフォルトで保存されるようになりました。既存プロジェクトの設定は変わりません。"
pubDate: 2026-10-26
category: gemini
type: news
tags: [Gemini API, ログ, 開発者]
source: https://ai.google.dev/gemini-api/docs/changelog
draft: false
importance: low
---

Gemini APIの変更履歴(2026年10月26日)によると、Generate Content APIを使う新規の有料プロジェクトで、リクエストの保存がデフォルトで有効になりました。

## 詳細

- **対象:** `generateContent`、`streamGenerateContent`、`batchGenerateContent`を呼び出す新規の有料プロジェクト。
- **新しいデフォルト:** リクエストは`store=true`で保存され、既存のInteractions APIの挙動と揃います。
- **既存プロジェクト:** 現在の設定のまま変わりません。
- **リクエスト単位で無効化:** 個別のリクエストで`store=false`を指定。
- **プロジェクト単位で無効化:** AI StudioのLogs and Datasetsダッシュボードの設定でGenerate Content APIのログを無効化。
- **保持期間:** 変更履歴には記載がなく、Logs and datasetsのドキュメントを参照する形です。

## その後

今回の変更で、Geminiの主要な2つのAPIのログのデフォルトが揃い、追加設定なしでLogs and Datasetsダッシュボードから保存済みリクエストを確認できます。新規プロジェクトでデータ取り扱いの要件がある場合は、設定を確認し、必要に応じて`store=false`を使うのがよさそうです。執筆時点で追加の発表はありません。
