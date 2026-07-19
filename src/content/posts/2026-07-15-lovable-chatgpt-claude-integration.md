---
title: Lovableアプリ、ChatGPTやClaude内から直接利用可能に
description: LovableがMCPサーバーを通じたエージェント連携機能を発表。公開済みのLovableアプリをChatGPTやClaudeなど外部のAIツールから直接呼び出し、操作できるようになりました。
pubDate: 2026-07-15
category: lovable
type: news
tags: [Lovable, MCP, 連携機能]
source: https://lovable.dev/blog/agent-integrations
draft: false
importance: medium
---

Lovableは、公開済みのLovableアプリをChatGPTやClaudeなど外部のAIツールから直接呼び出せる「エージェント連携」機能を発表しました。Model Context Protocol(MCP)を通じてアプリの機能をAIアシスタントに公開する仕組みで、ユーザーは別画面に移動することなく、普段使っているAIツールの中からLovableアプリの機能を利用できるようになります。

## 詳細

- **仕組み**: 各Lovableアプリに専用のMCPサーバーを立ち上げ、「経費を申請する」「見積もりを作成する」「レポートを生成する」といったアプリが実行できる操作の一覧を平易な言葉でAIツール側に提供する。ChatGPTやClaudeなどMCP対応のAIツールは、ユーザーの依頼内容に合った操作を選んで実行し、結果をユーザーに返す
- **提供対象**: 公開済み(publicly published)のLovableアプリであれば誰でも有効化可能。「Lovableに頼んでオンにするだけ」で使い始められる
- **スコープ設定**: アプリのロジックに基づいてMCPサーバーの公開範囲をLovableが自動提案。公開する操作の範囲や、アクセス権限(誰でも利用可能・サインインユーザーのみ・有料ユーザーのみ)をカスタマイズできる
- **ホスティングと同期**: MCPサーバーはLovable側でホスティング・保守され、公開中のアプリのバージョンと自動的に同期される
- **セキュリティ**: 既定でOAuthによるサインインを要求するほか、公開時にセキュリティチェックを実施
- **想定される使い方**: 制作者が入札内容をレビューする、マーケターがコンテンツをターゲット顧客像に照らして検証する、営業チームがChatGPT経由で見積もりを作成しパイプラインを分析する、といった事例が紹介されている

## 使ってみるには

エージェント連携機能は、公開済みのLovableアプリであれば追加費用なく有効化可能です。Lovableのチャットで機能をオンにするよう依頼するだけで利用開始でき、詳細な設定方法はLovableの公式ドキュメント(docs.lovable.dev)で確認できます。
