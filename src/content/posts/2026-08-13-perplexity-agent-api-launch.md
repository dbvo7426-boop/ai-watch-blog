---
title: "Perplexity「Agent API」始動、Sonar系エンドポイントは9月に廃止へ"
description: "Perplexityは、Web検索・URL取得・コード実行・MCP接続・金融/人物検索を1つのエンドポイントに統合した「Agent API」を発表。6種類の設定可能なプリセットを提供する一方、Sonar系APIエンドポイントは2026年9月27日に廃止されます。"
pubDate: 2026-08-13
category: perplexity
type: news
tags: [Perplexity, AgentAPI, Sonar, 開発者ツール, API]
source: https://www.perplexity.ai/hub/blog/agent-api-one-place-to-build-with-llms-the-web-and-agents
draft: false
importance: high
---

Perplexityは2026年8月13日、「Agent API」を発表しました。同社はこれを「Web検索、URL取得、コード実行、MCP接続、金融/人物検索のための単一のプログラム可能なエンドポイント」と説明しています。このAPIは、これまでSonarの各ティアに分散していた機能を1つのインターフェースに統合するもので、同社はSonar系エンドポイントを2026年9月27日に廃止することも明らかにしました。

## 詳細

- **統合エンドポイント**: Web検索、URL取得、コード実行サンドボックス、MCPサーバー接続、金融/人物検索ツールを1つのAPIに統合
- **「Search as Code」**: 固定された個別ツールを呼び出すのではなく、モデルがその場で検索パイプラインを組み立てられるアーキテクチャ
- **6種類の設定可能なプリセット**: fast、low、medium、high、xhigh、wide-researchの6種類があり、それぞれモデル・システムプロンプト・ツール設定・推論強度・トークン予算をセットで規定。既存のSonar各ティアはこれらのプリセットに直接対応付けられる
- **性能に関する主張**: 「low」プリセットはSonar Proと比較してBrowseCompで約7倍の性能向上を実現しており、クエリあたり約0.05ドル。より上位のプリセットは、より低コストでDeep Researchに匹敵する品質を実現するとしている
- **移行方法**: Perplexityによれば、既存の連携をAgent APIを指すよう更新する必要があり、既存のSonarユーザー向けにフィールド単位の対応表も提供される

## その後

- **2026年9月27日**: Sonar系APIエンドポイントが廃止され、既存の連携には約45日間の移行猶予期間が設けられる
- 現在Sonar ProなどSonar系ティアを利用している開発者は、廃止による支障を避けるため、期限前に移行を計画しておく必要がある
