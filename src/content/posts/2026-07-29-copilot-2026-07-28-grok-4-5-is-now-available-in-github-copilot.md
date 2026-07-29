---
title: "GitHub Copilotに「Grok 4.5」が追加 ― xAIの最新推論モデルで高速なエージェント型コーディングへ"
description: "GitHub Copilotが、xAIの最新推論モデル「Grok 4.5」に対応した。50万トークンの大規模コンテキストウィンドウと3段階の推論強度を備え、VS CodeやCopilot CLIなど主要サーフェスで段階的に利用可能になる。"
pubDate: 2026-07-28
category: copilot
type: news
tags: [Copilot, Grok, xAI, GitHub, エージェント型コーディング]
source: https://github.blog/changelog/2026-07-28-grok-4-5-is-now-available-in-github-copilot
draft: false
importance: high
---

GitHubは、xAIの最新推論モデル「Grok 4.5」をGitHub Copilotに追加した。高速なエージェント型コーディングと複雑な複数ステップのワークフローに対応するよう設計されたモデルで、VS CodeやCopilot CLIをはじめとする主要な開発サーフェスから段階的に選択できるようになる。

## 詳細

- **モデル概要**: xAIの最新推論モデル。高速なエージェント型コーディングと複雑な複数ステップのワークフローに対応するよう設計されている
- **コンテキストウィンドウ**: 50万トークンという大規模な文脈長に対応
- **入力形式**: テキストに加えて画像入力にも対応
- **推論強度**: low・medium・highの3段階から選択可能
- **性能**: 社内テストでは、VS CodeやCopilot CLIにおけるターミナルベースのコーディングタスクで高い性能を確認。複数のツールを並列に呼び出して直接アクションを取る点に優れており、探索的な作業、行き詰まった複雑なタスクの打開、時間的制約のあるコーディングワークフローに適するとされる
- **対象プラン**: Copilot Pro、Pro+、Max、Business、Enterprise
- **対応サーフェス**: Visual Studio Code、Visual Studio、Copilot CLI、GitHub Copilotクラウドエージェント、GitHub Copilotアプリ、JetBrains、Xcode、Eclipse
- **課金**: プロバイダのAPI一覧価格に基づく従量課金で請求
- **導入方式**: 2026年7月28日から段階的ロールアウトを開始。Business/Enterprise管理者は、デフォルトで無効になっているGrok 4.5のポリシーを組織のCopilot設定で手動で有効化する必要がある

## 使ってみるには

- 対象プランでロールアウトが到達済みの環境であれば、各エディタ・アプリのモデルピッカーから「Grok 4.5」を選択する
- Business/Enterprise管理者は、事前に組織のCopilot設定で該当ポリシー(デフォルトはオフ)を有効化しておく必要がある
