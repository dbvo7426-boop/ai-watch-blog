---
title: "GitHub Copilotのエージェント基盤「Copilot harness」、JetBrains向けが一般提供開始"
description: "GitHub Copilot for JetBrainsを支えるエージェント基盤「Copilot harness」が一般提供に。JetBrains内蔵MCPサーバーのパブリックプレビューやIDE内「/review」連携も同時に追加された。"
pubDate: 2026-08-24
category: copilot
type: news
tags: [GitHubCopilot, GitHub, JetBrains, MCP, 開発者ツール]
source: https://github.blog/changelog/2026-08-24-copilot-harness-generally-available-in-copilot-for-jetbrains
draft: false
importance: medium
---

GitHubは、GitHub Copilot for JetBrainsを支えるエージェント基盤「Copilot harness」を一般提供に移行しました。同時に、JetBrains内蔵のMCPサーバーがパブリックプレビューとして追加されています。

## 詳細

- **新機能**: JetBrains内蔵のMCP(Model Context Protocol)サーバーがパブリックプレビューとして登場し、エージェントのワークフローからIDEネイティブの機能に直接アクセス可能に。アプリを切り替えずにJetBrains内から使える「/review」連携も追加され、プラグイン更新後には「新機能」タブが自動的に表示されるようになった
- **使い勝手の改善**: モデルの検索・管理機能が向上し列のサイズ変更にも対応、デバッグワークフローの並び替えやトークン使用量によるフィルタリングも改善。チャット内での長いツール出力の扱いも改善され、マルチルートワークスペースでは全プロジェクトフォルダを横断したカスタマイズの検出が可能に
- **信頼性の修正**: アカウント検出・サインインの安定化、MCPのスキーマおよびツール状態の処理改善、再開後のセッション継続性向上、チャット入力欄でのファイル・フォルダ参照の復元、WSLのワークツリー起動の不具合修正など

## その後

Copilot harnessの一般提供により、JetBrainsはGitHubがすでにVS CodeやVisual Studioに展開済みのエージェント基盤と足並みを揃えたことになります。今後、JetBrainsユーザーも同様のタイミングで新しいCopilotエージェント機能を利用できるようになると見られます。
