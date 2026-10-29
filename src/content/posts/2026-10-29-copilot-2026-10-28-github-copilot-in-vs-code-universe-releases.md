---
title: "VS Code版GitHub Copilotにクラウドセッション、Agent Host、モデル比較、コンピューター操作"
description: "Universe向けのVS Codeリリースで、クライアント間で引き継げるクラウドエージェントセッション、Agent Host、並列モデル比較、実験的なコンピューター操作、カスタマイズマーケットプレイスが加わりました。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, VS Code, GitHub Universe, エージェント, MCP]
source: https://github.blog/changelog/2026-10-28-github-copilot-in-vs-code-universe-releases
draft: false
importance: medium
---

GitHubはVisual Studio Code向けCopilotのUniverseリリースを公開しました。エージェントセッションをクラウドや自分のマシンで動かし、任意のCopilotクライアントから続行できる点が中心です。

## 詳細

- **クラウドセッション:** VS CodeのAgentsウィンドウからGitHubのインフラ上でクラウドエージェントセッションを開始し、VS Code、GitHub Copilotアプリ、GitHub Mobile、github.com、Copilot CLIで続行できます。SlackやTeamsのDMで始めたセッションも対象です。
- **Agent Host:** ウィンドウを閉じてもセッションが動き続け、Remote SSHやdev tunnels経由で別マシンでも実行できます。GitHub Mobileから開発マシンのエージェントを操作できます(`code agent host --github-environment`)。
- **ハーネス:** Microsoft Copilot SDKベースのCopilotハーネスが新規セッションの既定になります。
- **モデル比較(プレビュー):** モデルとハーネスを並列実行して比較。Judgeモデルが推奨案を示し、Synthesizeで複数案の考えを統合します。プラン要件は記載がありません。
- **コンピューター操作(実験的):** macOSとWindowsで、アプリごとの承認後にデスクトップアプリを操作します。`chat.agentHost.computerUse.enabled`を有効にして`/computer on`を実行。組織はポリシーで無効化できます。
- **Agent Host Protocol:** オープンなプロトコルで、TypeScript、Rust、Go、Kotlin、Swiftのクライアントライブラリがあります。
- **カスタマイズマーケットプレイス(プレビュー):** スキル、MCPサーバー、プラグインを管理でき、管理者は必須化・ブロック・提供元制限のポリシーを設定できます。
- **Copilotコネクター(プレビュー):** MCPサーバーを入れずにSlack、Notion、Microsoft Learnへ接続。全Copilotプランで利用可能です。

## その後

JetBrainsやCopilotアプリのUniverseリリースに続く、VS Code側のセッション可搬性とガバナンスの強化です。多くはプレビューか実験的機能で、バージョン番号は非公開です。
