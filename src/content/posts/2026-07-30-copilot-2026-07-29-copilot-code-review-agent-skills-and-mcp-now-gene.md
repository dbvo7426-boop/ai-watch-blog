---
title: "GitHub Copilotのコードレビュー、Agent SkillsとMCP連携が正式提供開始"
description: "GitHubがCopilotのコードレビュー機能におけるAgent SkillsとMCPサーバー連携を全プラン向けに正式提供(GA)開始。チーム独自のツールやドキュメントをレビューに組み込めるようになった。"
pubDate: 2026-07-29
category: copilot
type: news
tags: [Copilot, GitHub, MCP, コードレビュー, Agent Skills]
source: https://github.blog/changelog/2026-07-29-copilot-code-review-agent-skills-and-mcp-now-generally-available
draft: false
importance: medium
---

GitHubは、Copilotのコードレビュー機能におけるAgent SkillsとMCPサーバー連携を、Copilot Pro・Pro+・Business・Enterpriseの全プラン向けに正式提供(GA)開始した。チーム独自の内部ツールやドキュメント、コーディング規約をレビュープロセスに直接組み込めるようになる。

## 詳細

- **GA開始日**: 2026年7月29日付で、Copilot Pro、Pro+、Business、Enterprise全プランのユーザー向けにAgent SkillsとMCPサーバー連携のコードレビュー対応が正式提供(GA)に
- **Agent Skills**: チーム独自の内部ツールやコーディング規約をレビュー中に呼び出せる機能。`.github/skills`配下のサブディレクトリに`SKILL.md`ファイルを追加し、リポジトリや組織固有のコンテキストを記述して設定する
- **MCPサーバー連携**: 課題管理ツールやドキュメント管理システム、サービスカタログなどのサードパーティ製品をコードレビューに直接統合できる。ツールアクセスは読み取り専用に制限されており、GitHub製とPlaywright製のMCPサーバーはデフォルトで組み込み済み
- **可視化の強化**: コードレビューのコメントが、Agent SkillsまたはMCPのコンテキストを使って生成されたものかどうかが表示されるようになり、どの機能がレビューに寄与したか分かりやすくなった
- **設定方法(MCP)**: リポジトリ設定の「Copilot」→「MCP servers」から接続し、認証トークンはリポジトリ設定の「Secrets and variables」→「Agents」に保存する
- **設定方法(Agent Skills)**: `.github/skills`配下にスキルごとのディレクトリを作成し、`SKILL.md`に必要な指示やコンテキストを記述する
- **移行**: パブリックプレビュー期間中に設定済みの構成は、変更を加えることなくそのまま動作を継続する

## 使ってみるには

- 対象プラン(Pro、Pro+、Business、Enterprise)であれば追加の申請なしに機能が有効
- チーム独自のツールと連携させたい場合は、リポジトリ設定の「Copilot」→「MCP servers」からMCPサーバーを追加する
- コーディング規約などをレビューに反映させたい場合は、`.github/skills`配下に`SKILL.md`を作成する
- 既にプレビュー版で設定済みの場合は、そのまま利用を継続できる
