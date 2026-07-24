---
title: GitHub Issues、AIエージェント自動化の承認・確信度・理由を管理する新機能をパブリックプレビュー公開
description: "GitHubがIssuesにエージェント自動化の透明性・制御機能を追加。変更を承認待ちにする「Approvals」、AIの確信度に応じた自動適用の切り替え、変更理由の記録を、パブリックプレビューとして提供開始した。"
pubDate: 2026-07-23
category: copilot
type: news
tags: [GitHub, Copilot, Issues, 自動化]
source: https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview
draft: false
importance: medium
---

GitHubは、GitHub Issuesにおけるエージェント自動化の可視性と制御を強化する新機能をパブリックプレビューとして公開した。GitHub Agentic WorkflowsやCopilotクラウドエージェントによる自動化がラベル付け・種別変更・担当者割り当て・クローズなどを行う際に、その理由を明示し、必要に応じて人が変更内容を承認・却下できるようにするのが狙い。

## 詳細

- **Approvals(承認)**: 自動化が変更を即座に適用するのではなく"提案"としてパネルに表示し、個別またはまとめて承認・却下できる
- **Confidence ratings(確信度評価)**: エージェントが各アクションを高・中・低の確信度で評価。高確信度の変更は自動適用され、中・低確信度の提案はレビュー待ちとなる
- **Rationale tracking(理由の記録)**: サポート対象の全アクションについて変更理由が記録され、監査証跡として確認・判断材料に利用できる
- **対応アクション**: ラベル、フィールド、種別(type)、クローズ操作、担当者(assignee)の変更(公開時点)
- **対応先**: GitHub Agentic WorkflowsおよびCopilotクラウドエージェントによる自動化。REST・GraphQL API経由でも利用可能
- **検索**: Issue検索で `has:suggestions` を使うと、レビュー待ちの提案を一覧できる
- **設定**: リポジトリ管理者は確信度のしきい値を設定でき、完全自動運用から全件レビューまで柔軟に調整可能

## 使ってみるには

- GitHub Agentic Workflowsを利用している場合はワークフローをアップグレードし、必要に応じて `issue-intents: true` を設定すると理由情報を要求できる
- Copilotクラウドエージェントを使う場合は特別な更新は不要で、リポジトリの「Agents」タブから自動化を作成すればよい
- 現在はパブリックプレビュー段階(2026年7月23日提供開始)
