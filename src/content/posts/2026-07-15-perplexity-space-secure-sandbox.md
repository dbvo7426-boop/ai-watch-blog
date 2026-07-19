---
title: Perplexityが新サンドボックス基盤「SPACE」発表、エージェントの安全性と速度を両立
description: Perplexityがエージェント実行基盤「Computer」向けの新サンドボックス技術「SPACE」を発表。認証情報をサンドボックス内に持ち込まない設計で、起動速度も従来比5倍に高速化しました。
pubDate: 2026-07-15
category: perplexity
type: news
tags: [Perplexity, エージェント, セキュリティ]
source: https://www.perplexity.ai/hub/blog/secure-sandboxes-for-agents
draft: false
importance: medium
---

Perplexityが、エージェント実行基盤「Computer」を支える新しいサンドボックス技術「SPACE」を発表しました。認証情報をサンドボックス内部に一切持ち込まない設計により、安全性と実行速度を同時に高めています。

## 詳細

- **背景**: エージェントはファイル編集やコード実行、数時間〜数日にわたる複数ステップのタスクをユーザーに代わって実行するため、「どのモデルが賢いか」以上に「どこで実行されるか」が重要になっている
- **仕組み**: タスクごとに使い捨ての(ephemeral)サンドボックスを起動し、タスク終了後は中身ごと即座に破棄。長時間の作業向けには一時停止・再開・分岐が可能な「セッション」でサンドボックスをラップし、ローリングスナップショット技術でコンテキストを引き継ぐ
- **3層のセキュリティ構造**:
  - **Control Plane**: 単一APIで全リクエストを受け付け、サンドボックスの生成・状態管理・破棄タイミングを一元的に判断
  - **Node-level Services**: 認証情報をサンドボックスの外部から必要な瞬間にのみ渡す仕組み。Googleアカウント連携などのサインインもサンドボックス内に認証情報を露出させずに処理し、送信ネットワークトラフィックもノード単位で制御
  - **In-sandbox**: 各タスクをAWSのFirecracker microVM上で完全に隔離実行し、ホストや他の並行タスクへの影響を遮断
- **性能**: サンドボックス起動のレイテンシは中央値60ミリ秒(従来185ミリ秒)、P90で89ミリ秒(従来447ミリ秒)と、従来比で約5倍高速化

## 使ってみるには

- SPACEはPerplexityのエージェント基盤「Computer」の内部インフラとして既に稼働しており、Computer・Personal Computerの利用者は追加設定なしにこの恩恵を受けられます
- 技術詳細はPerplexity Researchの記事「Making SPACE: Secure and Efficient Runtimes for Long-Running Agents」でも公開されています
