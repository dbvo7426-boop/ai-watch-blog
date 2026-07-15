---
title: コードスキャンの警告を自動修正する「Agentic Autofix」がパブリックプレビューに
description: GitHubがコードスキャンの警告をAIエージェントが自動で修正する「Agentic Autofix」をパブリックプレビュー公開。CodeQLでの検証まで行い、ドラフトPRとして提出します。
pubDate: 2026-07-10
category: copilot
type: news
tags: [Copilot, セキュリティ, コードスキャン]
source: https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview
draft: false
---

GitHubが、コードスキャンの警告をAIエージェントが自動で修正する「Agentic Autofix」をパブリックプレビューとして公開しました。従来の無料機能「Generate Fix」を置き換える形で、より強力な「Assign to Copilot」機能として提供されます。

## 詳細

- **自律的な修正フロー**: コードベース内の関連ファイルを探索し、修正案を生成。CodeQLを再実行して修正が機能することを検証し、必要に応じて反復した上でドラフトプルリクエストを作成
- **所要時間**: 修正生成には通常2〜4分。プルリクエストには修正アプローチの詳細な説明も含まれる
- **起動方法**: 個別の警告への割り当て、セキュリティ警告一覧からの一括選択、セキュリティキャンペーン内、REST API経由など複数の方法で実行可能

## 使ってみるには

- 必要な条件: GitHub Code SecurityまたはAdvanced Securityライセンス、およびクラウドエージェント有効化済みのCopilotライセンス
- 現在はパブリックプレビュー中で、実行にはAIクレジットとGitHub Actionsの分数を消費(プレビュー期間中は他のCopilot利用と別集計されません)
- 管理者はリポジトリ単位・組織単位の設定から無効化することも可能です
