---
title: "GitHub Copilotの実験的機能「HydraFusion」、VS CodeとCopilotアプリに拡大"
description: "GitHubが、単一モデル選択ではなく1ターン内で複数モデルを協調動作させる実験的機能「HydraFusion」を、Copilot CLI限定からVS CodeとGitHub Copilotアプリへ拡大。長時間タスク向けのリアルタイム進捗通知も追加された。"
pubDate: 2026-09-30
category: copilot
type: news
tags: [GitHubCopilot, HydraFusion, 開発者ツール, VSCode]
source: https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app
draft: false
importance: low
---

GitHubは、実験的機能「HydraFusion」をCopilot CLI限定の提供からVS CodeとGitHub Copilotアプリへ拡大しました。長時間タスク向けのリアルタイム進捗通知と、より明確なステータス表示も追加されています。

## 詳細

- **HydraFusionの仕組み**: ワークフロー選択を最適化問題として扱い、単一モデルによる直接解決、効率重視モデルを使い必要に応じてより高性能なモデルへエスカレーションする方式、独立したレビュアーが改善案を提示する批評方式のいずれかを選択する
- **「Auto」との違い**: Autoはリクエストごとに使用する単一モデルを選ぶのに対し、HydraFusionはワークフローを選択した上で1ターン内で複数モデルを協調動作させる
- **今回の新機能**: Copilot CLI限定からVS CodeとGitHub Copilotアプリへの展開拡大に加え、長時間タスク中のリアルタイム進捗通知とステータス表示による透明性の向上
- **提供状況**: Copilot Pro、Pro+、Business、Enterprise加入者向けの実験的機能として提供

## その後

HydraFusionは、GitHubの9月7日付週次リリースノートでCopilot CLI限定の実験的機能として初めて紹介されていました。今回のVS CodeとCopilotアプリへの拡大により、複数モデルの協調動作がGitHubの主要な開発者向け環境に初めて行き渡ることになり、同じ週に行われたGPT-6.1 Solの展開と時期を同じくしています。
