---
title: "Copilot利用状況メトリクスAPIがエージェントアプリ(Claude・Codex)の活動を報告"
description: "GitHubのCopilot利用状況メトリクスAPIに、GitHub上で動作するClaudeやCodexなどのエージェントアプリの利用実績を返す、オプションのtotals_by_3rd_party_agent配列が追加された。"
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, API, メトリクス, エージェントアプリ, Claude, Codex]
source: https://github.blog/changelog/2026-08-07-copilot-usage-metrics-api-adds-agent-app-activity
draft: false
importance: medium
---

GitHubのCopilot利用状況メトリクスAPIが、GitHub上でエージェントアプリとして直接動作するClaudeやCodexなど、サードパーティ製エージェントの活動状況を追跡できるようになった。APIレスポンスに新しく追加された、オプションの`totals_by_3rd_party_agent`配列によって提供される。

## 詳細

- **エージェントごとの新しいデータ**: `totals_by_3rd_party_agent`の各エントリには、`agent_name`、レポート期間をまたいで追跡できる安定した識別子`agent_id`、`user_initiated_interaction_count`(ユーザー起点のインタラクション数)、`session_count`(セッション数)が含まれる
- **対象パートナー**: 現時点でメトリクスに表示されるエージェントアプリのパートナーとして、ClaudeとCodexが挙げられている
- **レポートの対応範囲**: エンタープライズ、組織、エンタープライズユーザー、組織ユーザーの各レポート種別に対応し、1日単位・28日単位いずれのレポート期間でも利用可能
- **アクセス権限**: エンタープライズオーナーおよび請求管理者、組織オーナー、「Copilotメトリクスの閲覧」権限を持つカスタムロールのユーザーがこのデータを閲覧できる。Copilot利用状況メトリクスのポリシーが有効になっている必要がある
- **後方互換性**: 既存のAPIフィールドに変更はない。同一エージェントに紐づく複数のアプリは1つのエントリに集約され、識別できないエージェントの活動はレポートから除外される

## その後

- Copilot利用状況メトリクスAPIをクエリし、エンタープライズ・組織・エンタープライズユーザー・組織ユーザーの各レポートで新しい`totals_by_3rd_party_agent`配列を確認できる
- エンタープライズまたは組織でCopilot利用状況メトリクスのポリシーが有効になっていることを確認する
- 安定した`agent_id`フィールドを使えば、特定のエージェントアプリの利用状況を複数のレポート期間にわたって追跡できる
