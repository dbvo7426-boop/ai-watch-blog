---
title: "VS Codeが2027年2月にLocalハーネスを廃止"
description: "LocalハーネスはVS Code 1.146で非推奨となり、2027年2月に削除されます。後継はCopilotハーネスです。"
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, VS Code, 廃止, ハーネス]
source: https://github.blog/changelog/2026-11-16-vs-code-retires-the-local-harness-in-february-2027
draft: false
importance: medium
---

Visual Studio Codeの「Localハーネス」は、エディター内のCopilotエージェントセッションでモデル、コンテキスト、ツールを調整する従来のソフトウェアで、VS Code 1.146で非推奨となり、2027年2月に削除されます。削除までは3か月の移行期間で、Localハーネスは組織のポリシーが許可する場合のみ利用でき、新機能はCopilotハーネスを対象に提供されます。

**後継:** VS Codeに組み込まれたMicrosoft Copilotハーネスで、VS Code 1.143から新規セッションの既定になっています。Copilot SDKをベースにし、Copilot CLIやGitHub Copilotアプリとランタイムを共有します。エージェントのコマンドは引き続きローカルで実行され、ファイルがクラウドに移ることはありません。

**違い:**
- Copilot Fusionがモデルを選択でき、対応する階層ではドラフト作成とレビューの調整も行います。
- 支援付きの権限により承認プロンプトが減ります。リスク評価で承認されない呼び出しは引き続き確認を求めます。
- Copilotコネクター(プレビュー)で、手動のMCPサーバー設定なしにチームのサービスのコンテキストを取り込めます。
- キャンバス(プレビュー)でタスクボードやインタラクティブな図を扱えます。
- セッションはエディターとAgentsウィンドウの間で継続できますが、エディター提供のツールには接続されたエディターが必要です。
- 管理者は、Localハーネスでは強制できない管理型のランタイム権限とサンドボックス制限を適用できます。これらは別途設定が必要です。

**ユーザー:** 新しいセッションを開始し、Session TargetでCopilotを選びます。切り替えでカスタマイズがすべて自動変換されるわけではないため、互換性を確認してください。移行ガイドも用意されています。

**管理者:** vscode.temporaryDefaultToLocalHarnessの例外設定を見直し、2027年2月までにワークフロー、権限制御、サンドボックス設定を検証してください。この一時的なエンタープライズ設定はLocalハーネスとともに削除されます。Copilot Freeユーザーは現在のプランのまま使えますが、個別の機能とFusionの階層はプラン、設定、組織のポリシーに依存します。
