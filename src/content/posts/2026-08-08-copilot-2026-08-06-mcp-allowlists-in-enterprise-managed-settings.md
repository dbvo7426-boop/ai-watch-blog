---
title: "GitHub、エンタープライズ管理設定にMCPサーバーの許可/拒否リストを追加"
description: "エンタープライズ管理者が、GitHub CopilotクライアントがどのMCP(Model Context Protocol)サーバーに接続できるかを一元管理できるようになった。managed-settings.jsonの新しいallowedMcpServers/deniedMcpServersキーを使用。"
pubDate: 2026-08-06
category: copilot
type: news
tags: [GitHub Copilot, MCP, エンタープライズ, ガバナンス, セキュリティ]
source: https://github.blog/changelog/2026-08-06-mcp-allowlists-in-enterprise-managed-settings
draft: false
importance: medium
---

GitHubが、GitHub Copilotクライアントがどのモデルコンテキストプロトコル(MCP)サーバーに接続できるかを、エンタープライズ管理者が一元的に制御できる仕組みを追加した。既存のエンタープライズ管理設定の仕組みに`allowedMcpServers`と`deniedMcpServers`という2つの新しいキーが加わり、一般提供が開始されている。

## 詳細

- **3種類のサーバー指定方法**: `serverUrl`はHTTP/SSE経由のリモートサーバーを対象とし、ワイルドカードパターンにも対応。`serverCommand`はローカルのstdioサーバーを、コマンドと引数の完全一致で指定。`serverName`はユーザーが付けたラベルによる指定で、あくまで利便性のためのものであり、それ単体ではセキュリティ制御にはならない
- **フェイルクローズ設計**: 設定が不正または検証できない場合、許可するのではなくブロックされる。誤設定があった場合、露出ではなく制限側に倒れる仕組み
- **上書き可能なポリシー**: サーバー管理型のデプロイでは、`allowedMcpServers`と`deniedMcpServers`の両方を`overridable`として指定でき、個々のチームがエンタープライズのベースライン設定の上に独自の許可/拒否リストを重ねられる
- **対応クライアント**: GitHub Copilotアプリ、Copilot CLI、VS Codeがいずれもこの新しい許可/拒否リスト設定に対応
- **設定方法**: 管理者はエンタープライズの`.github-private`リポジトリ内にある`copilot/managed-settings.json`にキーを追加し、デフォルトブランチにコミットする。他のCopilotエンタープライズポリシーと同じ仕組みが使われる

## その後

- エンタープライズ管理者は`.github-private`リポジトリの`copilot/managed-settings.json`に`allowedMcpServers`と`deniedMcpServers`のエントリを追加すれば利用できる
- 実際のアクセス制御には`serverUrl`または`serverCommand`によるマッチングを使い、`serverName`はあくまでラベルとして扱い、セキュリティ境界とはみなさないこと
- 個別の組織がエンタープライズのベースラインを拡張する必要がある場合は、ポリシーを`overridable`に設定する
