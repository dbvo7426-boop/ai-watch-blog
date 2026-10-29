---
title: "GitHub Copilot アプリ向けセキュリティ拡張がパブリックプレビュー"
description: "GitHub セキュリティ拡張により、Copilot アプリを離れずに code scanning アラートの確認、Copilot による解説・修正、/security-review の実行ができます。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot app, Code scanning, Security, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-security-extension-for-the-github-copilot-app
draft: false
importance: medium
---

GitHub Copilot アプリ向けの新しい GitHub セキュリティ拡張がパブリックプレビューになりました。リポジトリの code scanning アラートを確認し、Copilot に解説や修正を任せる作業を一か所で行えます。

## 詳細

- **アラート:** 未解決のアラートを重大度順に一覧表示し、検索とフィルターで絞り込めます。詳細と該当コードを開く(github.com の完全なページも開ける)、関連するプルリクエストの確認、修正しないアラートの却下ができます。委任された却下承認を使う組織では、却下は承認に回されます。
- **Explain と Fix:** アラートを選んで Copilot に依頼します。修正はローカルの作業コピーにのみ適用され、コミットやプッシュは行われません。
- **プルリクエスト前:** 現在の変更に `/security-review` を実行すると、結果が既存アラートの隣に表示されます。前回のレビュー以降にコードが変わると通知されます。
- **インストール:** `copilot plugin install github-security@awesome-copilot` を実行するか、アプリで Customize をクリックして `github-security` を検索し Install します。自動で有効になり、セッションから Security canvas を開けます。
- **コスト:** Explain、Fix、`/security-review` は選択中のモデルを使い、AI クレジットを消費します。閲覧と却下は AI を使いません。
- **提供範囲:** github.com とデータレジデンシー付き GitHub Enterprise Cloud。GitHub Enterprise Server は非対応です。どの Copilot プランでもインストールと `/security-review` が可能で、Business と Enterprise では管理者による Copilot アプリのポリシー有効化が必要です。既存アラートの閲覧・修正には code scanning の有効化と権限が必要で、プライベートリポジトリでは GitHub Code Security が必要です。

## その後

アラートの発見からローカルでの修正までの往復が短くなります。修正をコミットしない設計で、人間によるレビューも維持されます。プラグインとして提供されるため、管理者が持つプラグイン管理設定の仕組みにも合います。1 件の修正あたりのクレジット消費量は非公開です。
