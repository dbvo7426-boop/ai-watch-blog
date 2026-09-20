---
title: "GitHub Copilotの利用状況メトリクス、スキル・カスタムエージェント・MCPサーバー・プラグインもカバー"
description: "GitHubがCopilotの利用状況メトリクスAPIを拡張し、スキル・カスタムエージェント・MCPサーバー・スラッシュコマンド・プラグインといったエージェント的なCLI活動を追跡可能に。どの項目が最も使われ、何人の異なるユーザーが利用しているかを示す。"
pubDate: 2026-09-17
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 利用状況メトリクス, MCP, 管理者機能]
source: https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api
draft: false
importance: low
---

GitHubはCopilotの利用状況メトリクスAPIを拡張し、エージェント的なCLIのカスタマイズ機能を対象範囲に加えました。スキル、カスタムエージェント、MCPサーバー、スラッシュコマンド、プラグインの利用状況が可視化されます。

## 詳細

- **追跡対象**: スキル、カスタムエージェント、Model Context Protocol(MCP)サーバー、スラッシュコマンド、プラグインの5カテゴリ
- **わかること**: `totals_by_skill`、`totals_by_custom_agent`、`totals_by_mcp`といった配列により、利用回数の多い上位5項目とその利用回数がわかるほか、別の件数フィールドから何種類の項目が利用されているかも把握できる
- **利用回数の計測方法**: `interaction_count`は、スキルとスラッシュコマンドの呼び出し回数に加え、カスタムエージェントの起動回数やMCPサーバーへの接続試行回数も計測する
- **利用対象**: エンタープライズオーナー、課金管理者、組織オーナー、および「Copilotメトリクスの表示」権限を持つロールを付与されたユーザー。アカウントでCopilot利用状況メトリクスポリシーが有効になっている必要がある

## その後

今回の拡張により、組織はこれまで集計利用数の中に埋もれていたCopilot利用の一部——MCPサーバーやカスタムエージェントといったCLIレベルのカスタマイズ——を可視化できるようになり、管理者はどの拡張機能が実際に採用されているかを具体的に把握できます。
