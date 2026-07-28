---
title: Perplexity「Computer」に自己改善型メモリ「Brain」搭載、正答率25%向上
description: Perplexityがエージェント基盤「Computer」向けに自己改善型メモリシステム「Brain」を発表。セッションやコネクタ、過去の意思決定をまとめたコンテキストグラフを毎晩自動更新し、既知タスクの正答率を25%向上させています。
pubDate: 2026-06-18
category: perplexity
type: news
tags: [Perplexity, エージェント, メモリ]
source: https://www.perplexity.ai/hub/blog/self-improving-memory-for-agents
draft: false
importance: medium
---

Perplexityが2026年6月18日、エージェント実行基盤「Computer」向けの新しいメモリシステム「Brain」を発表しました。ユーザーの好みを覚える一般的な「メモリ」機能とは異なり、Computerが行った作業そのものから学習し、成功・失敗・修正の履歴を踏まえて自律的に改善していく仕組みです。

## 詳細

- **コンテキストグラフ**: セッション、コネクタの実行結果、ドキュメントの変更、ユーザーによる修正内容を統合し、プロジェクト・アイデア・関係者・情報源をまとめた「LLM wiki」的なコンテキストグラフを構築
- **夜間の自己改善サイクル**: 一定間隔(例えば毎晩)でこのグラフを見直し、何がうまくいき何が失敗したかを分析して、次のタスクの実行方法を自ら改善
- **学習内容**: ユーザーによる訂正や行き止まりだった情報源からも学習し、無駄なモデル呼び出しやトークン消費を削減
- **測定された効果**: 過去に経験したタスクでの正答率が25%向上、再現率(recall)が16%改善、過去の文脈が必要なタスクのコスト削減率は13%
- **提供対象**: Max・Enterprise Maxサブスクリプション向けの「Research Preview」として提供開始

## 使ってみるには

- 現時点ではPerplexity MaxおよびEnterprise Maxサブスクライバー向けのResearch Previewとして提供
- Computer・Personal Computerの利用が前提となる機能で、追加設定なしに恩恵を受けられる
- 利用を続けるほどBrainの精度が高まる設計のため、長期利用者ほど効果を実感しやすい
