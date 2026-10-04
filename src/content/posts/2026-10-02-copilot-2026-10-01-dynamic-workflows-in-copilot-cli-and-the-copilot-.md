---
title: "GitHub Copilot、複数手順をエージェントと協調して実行する「Dynamic Workflows」を導入"
description: "GitHubが、Copilot CLI・Copilotアプリ・Copilot SDKに「Dynamic Workflows」を導入。自動化された手順とエージェントの作業を組み合わせたコードベースのプログラムで、並列実行・チェックポイント・人間によるレビューゲートを備え、複雑な反復作業に対応する。"
pubDate: 2026-10-01
category: copilot
type: news
tags: [GitHubCopilot, DynamicWorkflows, 開発者ツール, エージェント]
source: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app
draft: false
importance: medium
---

GitHubは、Copilot CLI・GitHub Copilotアプリ・Copilot SDKの全体にわたって「Dynamic Workflows」を導入しました。自動化された手順とAIエージェントの作業を組み合わせ、複数ステップのタスクを調整するコードベースのプログラムです。

## 詳細

- **概要**: タスクの実行方法を定義するプログラムであり、自動化された手順と1つ以上のエージェントの作業を組み合わせる。GitHub Copilot拡張機能内に存在し、Copilotの拡張性APIを基盤に構築されている
- **主な機能**: コマンド・ツール・外部サービスの実行、独立したタスクの並列または逐次実行、各段階間での構造化データの受け渡し、エージェントによる検証と人間の入力の組み込み、再開前のレビューのためのチェックポイントでの一時停止
- **「/fleet」との違い**: 動的にサブエージェントへ作業を委任する「/fleet」とは異なり、Dynamic Workflowsはあらかじめ定義されたプロセス構造を実行する
- **活用例**: 人間によるレビューゲートを伴う複数段階のリリース検証、プルリクエスト変更の並列分析、大規模コードベース全体でのパターン検出、調査から実装までの一連の流れ、一時停止・再開が必要な長時間処理
- **提供状況**: 全Copilot加入プランでパブリックプレビュー提供中。GitHub Copilotアプリではデフォルトで有効、Copilot CLIでは`--experimental`フラグまたは`/experimental on`で利用可能、Copilot SDKにも含まれる

## その後

Dynamic Workflowsは、GitHubの新たなデスクトップ向け「コンピュータ操作」機能と同時に登場し、Copilotを単発のコード提案から構造化・監査可能な複数ステップの自動化へと押し進めるものです。GitHubがHydraFusionでプレビューしてきた、より自由形式の複数モデル協調とは補完関係にあります。
