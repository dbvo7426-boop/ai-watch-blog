---
title: "GitHub Copilot for JetBrains、エンタープライズ管理設定に対応"
description: "GitHub Copilot for JetBrainsがエンタープライズ管理設定に対応。プラグインマーケットプレイスの統制、MCPサーバーアクセス、OpenTelemetryのルーティング、パーミッションモードを管理者が一元管理できるようになった。"
pubDate: 2026-08-18
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, エンタープライズ, ガバナンス, MCP, OpenTelemetry]
source: https://github.blog/changelog/2026-08-18-enterprise-managed-settings-in-github-copilot-for-jetbrains
draft: false
importance: medium
---

GitHub Copilot for JetBrainsが、他のCopilotクライアントで既に提供されているエンタープライズ管理設定の仕組みに対応した。これにより管理者は「エンタープライズのCopilotプランを利用する全員に一貫した統制を適用」できるようになり、JetBrains IDE内でも直接ガバナンスをかけられるようになる。

## 詳細

- **プラグインマーケットプレイスの統制**: `enabledPlugins`で有効/無効にするプラグインを管理者が指定でき、`extraKnownMarketplaces`で追加のプラグインソースを承認、`strictKnownMarketplaces`でインストール元を承認済みソースのみに制限できる
- **MCPサーバーの許可リスト**: `allowedMcpServers`と`deniedMcpServers`により、JetBrainsから接続できるModel Context Protocolサーバーを一元管理し、エンタープライズの許可リスト外のサーバーへの接続を防止する。これは今月GitHubが他のCopilotクライアント向けに追加したのと同じ制御機構
- **OpenTelemetryのルーティング**: 管理者はコレクターのエンドポイント、プロトコル、サービス名、リソース属性、コンテンツキャプチャポリシーをテレメトリ向けに設定可能。管理設定は開発者側の設定より優先されるため、個々の設定にかかわらずテレメトリは承認済みのコレクターへ一貫してルーティングされる
- **パーミッションモードのロックダウン**: `permissions.disableBypassPermissionsMode`を`disable`に設定すると、通常の確認ステップを省略するBypass ApprovalsやAutopilot系機能の利用を防止できる
- **配信の仕組み**: 設定は、GitHubが他のCopilotエンタープライズポリシーで既に使っている`managed-settings.json`と同じ仕組みで適用され、これがJetBrainsプラグインにも拡張された形になる

## その後

- JetBrains IDE向けの最新のGitHub Copilotプラグインにアップデートすると、管理設定のサポートが有効になる
- エンタープライズ管理者は、既存の`managed-settings.json`設定にプラグイン・MCP・OpenTelemetry・パーミッションモード関連のキーを追加できる
- 完全なキー一覧と構文についてはGitHubのエンタープライズ管理設定リファレンスドキュメントを参照
