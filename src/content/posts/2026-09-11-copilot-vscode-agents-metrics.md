---
title: "GitHub Copilotの利用状況メトリクス、VS Code「Agents」ウィンドウの活動を追跡可能に"
description: "GitHubがCopilot利用状況レポートに、VS Code「Agents」ウィンドウの活動を対象とした4つの新しい任意フィールドを追加。日次アクティブユーザー数・セッション/メッセージ数の合計・個人単位の利用状況をエンタープライズ・組織の管理者が確認できるようになった。"
pubDate: 2026-09-11
category: copilot
type: news
tags: [GitHubCopilot, GitHub, VSCode, 利用状況メトリクス, 管理者機能]
source: https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics
draft: false
importance: low
---

GitHubは、VS Codeの「Agents」ウィンドウでの活動を追跡する新しいメトリクスフィールドを、Copilot利用状況レポートに追加しました。

## 詳細

- **新しいフィールド**: 「Agents」ウィンドウの日次ユニークユーザー数を数える`daily_active_vscode_agent_users`、セッション数とユーザーメッセージ数を集計する`totals_by_vscode_agent`、個々のユーザーの利用有無を示す`used_vscode_agent`、そして個人単位でセッション・メッセージ数を追跡する`totals_by_vscode_agent`の個人版
- **わかること**: 何人がVS Codeの「Agents」ウィンドウを利用し、どのように使っているか。組織単位・個人単位の両方で利用パターンを把握し、チーム間の利用状況を比較できる
- **利用対象**: エンタープライズオーナー、課金管理者、組織オーナー、および「Copilotメトリクスの表示」権限を持つカスタムロール。アカウントでCopilot利用状況メトリクスポリシーが有効になっている必要がある

## その後

今回の追加により、これまで管理者向けメトリクスで独自の可視化がなかった「Agents」ウィンドウという利用面についても、GitHubの利用状況レポートの対象範囲が広がりました。組織はCopilot全体の集計データだけでなく、エージェントモードの導入状況をより明確に把握できるようになります。
