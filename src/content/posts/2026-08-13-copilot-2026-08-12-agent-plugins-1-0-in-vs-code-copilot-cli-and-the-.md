---
title: "GitHub、「Agent Plugins 1.0」を公開 ― プラグインを一度作れば全クライアントで動く共通規格"
description: "GitHubが、AWS、Anysphere、Microsoft、OpenAI、Vercel、Googleと共同で策定したオープン規格「Agent Plugins 1.0」を公開。プラグインを一度作れば、VS Code、Copilot CLI、Copilotアプリなど対応する全エージェントクライアントで利用できるようになる。"
pubDate: 2026-08-12
category: copilot
type: news
tags: [GitHub Copilot, Agent Plugins, MCP, VS Code, Copilot CLI, オープン規格]
source: https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app
draft: false
importance: medium
---

GitHubが、エージェントのスキルとMCP(Model Context Protocol)サーバーを1つのプラグインにまとめて、対応するあらゆるエージェントクライアントで動かせるようにするオープンでベンダー中立な規格「Agent Plugins 1.0」を公開した。全Copilotプランで一般提供が始まっている。

## 詳細

- **解決する課題**: これまでプラグインを複数のプラットフォームに公開するには、プラットフォームごとに別々のマニフェストとディレクトリ構成を維持する必要があった。Agent Plugins 1.0はスキルとMCPサーバーを1つの統一フォーマットにまとめることで、プラグインを一度作れば対応する全環境で使い回せるようにする
- **対応クライアント**: VS Code、Copilot CLI、GitHub Copilotアプリ、GitHub Copilot SDK、Copilotクラウドエージェント
- **オープン規格として複数社が共同メンテナンス**: AWS、Anysphere、Microsoft、OpenAI、Vercelがコアメンテナーを務め、今回新たにGoogleもコアメンテナーとして加わった。GitHubやMicrosoft単独が管理する規格ではない点がポイント
- **既存プラグインの移行方法**: `plugin.json`に`$schema`参照を追加し、スキルは`skills/`ディレクトリに、MCP設定は`mcp.json`に整理する。Copilot固有のコンポーネント(カスタムエージェント、コマンド、ルール、フック、拡張機能)は`com.github.copilot/`ディレクトリに配置すれば、他のクライアントはそれを単純に無視する
- **発見とインストール**: プラグインはAwesome Copilotマーケットプレイスからインストールでき、このマーケットプレイスはVS Code、Copilot CLI、Copilotアプリでデフォルトで利用可能
- **エンタープライズ向けガバナンス**: Copilot BusinessおよびEnterpriseの管理者は`managed-settings.json`でプラグインを管理できる。`enabledPlugins`で特定のプラグインを自動インストールまたはブロックし、`extraKnownMarketplaces`/`strictKnownMarketplaces`で利用可能なマーケットプレイスを制御する。既存のmanaged-settings設定はそのまま適用されるため、Agent Plugins専用のポリシーを別途設定する必要はない
- **後方互換性**: 既存のGitHub Copilotプラグインは移行なしでそのまま動作し続ける

## 使ってみるには

プラグインは今日から、VS Code、Copilot CLI、CopilotアプリのいずれかでAwesome Copilotマーケットプレイスからインストールできる。プラグインを新規に作成・移行する開発者は、変更履歴の記事からリンクされているGitHubの「Build an Agent Plugin」ガイドとAgent Plugins 1.0仕様書、およびサンプルプラグインと移行ガイドを参照するとよい。
