---
title: "OpenAIのモデルがJalapeñoの回路とRISC-Vコア設計を最適化"
description: "モデルの提案でJalapeñoのセル面積が約10〜13%減。AMDは最大14%のPPA改善を報告し、OpenAIはSynopsysとGPT-Synopsysを開発します。"
pubDate: 2026-11-18
category: chatgpt
type: news
tags: [OpenAI, チップ設計, Jalapeño, AMD, RISC-V, Synopsys]
source: https://openai.com/index/advancing-chip-design-with-our-models
draft: false
importance: medium
---

OpenAIは、AIによるチップ設計支援の成果を報告しました。

**Jalapeño(OpenAI初の自社推論チップ)**
- モデルが提案した変更で、スタンダードセル面積がベクトルユニットで約13%、行列ユニットで約10%減りました(チームの推定)。
- 行列ユニットの乗算器の再設計でセル面積が約15%減り、遅延は2クロックから1クロックに短縮。加算器の再設計でも面積が約15%減り、遅延は2クロックのままです。いずれも立ち上げ時にシリコンで確認されました。

**AMD**
- AMDの主力GPU IPで、高度に最適化された基準比で最大14%のPPA(電力・性能・面積)改善。AMDは「約1年分の進捗を5か月足らずで達成」と説明しています。一部の変更は製造に回された最新設計に採用され、次世代主力CPUのブロックでも1桁%の改善を確認しました。各書き換えが動作を保つことはSynopsysのツールで検証しています。

**RISC-Vコアの評価**
- PicoRV32とIbexで、1回あたり約11万2000トークンの予算で評価。両コアでGPT-6.2 Astraの平均スコアが最高で、GPT-6.1 SolはGPT-5.6 Solを上回りました。PicoRV32ではAstraのスコアがGPT-6 Astraの約2倍です。
- 仕様書からコアを設計する方が、既存RTLの改善よりスコアが高く、11万2000トークン付近でGPT-6.2 AstraはPicoRV32で約0.7、Ibexで約0.75でした(採点した実行は計9,881回)。

**今後**: OpenAIはSynopsysと組み、専門の設計者のようにSynopsys EDAツールを使うモデル「GPT-Synopsys」を訓練します。
