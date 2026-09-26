---
title: "GitHubの「agentic autofix」、Copilot Memoryを活用して過去の修正から学習"
description: "GitHubの自動セキュリティ修正機能「agentic autofix」が、Copilot Memoryを有効化した顧客向けに対応。セキュリティ警告を解決する前に既存のメモリを参照し、生成した修正パターンを今後のために記憶する。コードレビューやクラウドエージェントの挙動にも活かされる。"
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Autofix, CopilotMemory, セキュリティ]
source: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory
draft: false
importance: low
---

GitHubのセキュリティ警告を自動解決する機能「agentic autofix」が、Copilot Memoryを有効化している顧客向けに、同機能との連携に対応しました。

## 詳細

- **仕組み**: セキュリティ警告を解決する際、agentic autofixは既存のメモリから関連するコンテキストを参照し、修正を生成すると、その修正パターンを今後のためにメモリとして保存する
- **積み重なる効果**: 保存されたメモリはコードレビューやクラウドエージェントの挙動といった他のCopilot機能にも活用され、リポジトリ固有の安全なコーディングパターンが時間とともに確立されていく
- **必要条件**: agentic autofixとCopilot Memoryの両方を明示的に有効化する必要がある。この連携はパブリックプレビュー中

## その後

今回の変更により、各セキュリティ修正が使い捨ての対応ではなく再利用可能なパターンへと変わります。警告が解決されるたびに、特定の脆弱性クラスをそのリポジトリがどう扱うかについてのCopilotの理解が深まっていきます。
