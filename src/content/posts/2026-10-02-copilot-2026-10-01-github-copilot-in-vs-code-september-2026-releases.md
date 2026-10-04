---
title: "GitHub Copilot in VS Code、2026年9月リリース——定期自動実行・Agent Merge・Codexとの連携強化を追加"
description: "GitHubの2026年9月分VS Code Copilotチェンジログ(v1.136〜v1.140)。定期実行可能な「Recurring Automations」、HydraFusionを活用したコンフリクト解消の「Agent Merge」、エージェントセッションからの直接PR作成、ChatGPTからのCodex会話引き継ぎなどが追加された。"
pubDate: 2026-10-01
category: copilot
type: news
tags: [GitHubCopilot, VSCode, 開発者ツール, チェンジログ]
source: https://github.blog/changelog/2026-10-01-github-copilot-in-vs-code-september-2026-releases
draft: false
importance: medium
---

GitHubは、GitHub Copilot in VS Codeの2026年9月分チェンジログ(バージョン1.136〜1.140)を公開しました。エージェントワークフローと連携機能を中心とした改善がまとめて盛り込まれています。

## 詳細

- **Agentsウィンドウ**: HydraFusionによるモデル・ワークフローの自動選択(リサーチプレビュー)、毎時・毎日・毎週のスケジュール設定やテンプレートからのオンデマンド実行が可能な「Recurring Automations」、HydraFusionを使ってレビューフィードバックとマージコンフリクトを処理する「Agent Merge」、編集オプション付きでエージェントセッションから直接プルリクエストを作成する機能、関連チャット間を階層的に移動できるセッションナビゲーション、自動アーカイブ機能を備えたセッションの整理、保留中の結果やPRチェックを表示する「Application Badges」(プレビュー)、プロジェクト設定済みツールでエージェントセッションを起動できるDev Container対応
- **ワークスペースと環境**: 一般的なチャットから始めて後からローカルフォルダを追加して特定プロジェクトへ絞り込める柔軟なチャット添付機能、ChatGPTからのCodex会話を手動でのコンテキスト移行なしにVS Codeへ直接引き継げるクロスアプリ連続性
- **チャットと連携機能**: アクティブな会話のターンを中断しないエージェントメッセージ、URLまたはコンテキストメニューからGitHubのissueとPRを直接埋め込む機能

## その後

今回のリリース群は、GitHubが今週のCLIおよびアプリのアップデートと同じテーマ——HydraFusion方式の複数モデル協調、スケジュール/定期実行の自動化、OpenAIのCodexとのより緊密な連携——へとVS Code版Copilotの体験を収束させつつあることを示しています。同じ月に登場したコンピュータ操作機能やDynamic Workflowsに先立つ形での発表です。
