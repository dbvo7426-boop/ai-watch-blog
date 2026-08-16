---
title: "DeepSeek-V4-Proが正式版に、8月16日からはピーク/オフピーク料金制へ移行"
description: "DeepSeekは2026年8月13日、DeepSeek-V4-Proをアプリ・Web・API全てで正式版として提供開始。エージェント関連ベンチマークの向上、3段階の思考強度、OpenAI Responses API形式へのネイティブ対応を実現した一方、8月16日からはピーク/オフピーク料金制による値上げが始まります。"
pubDate: 2026-08-13
category: deepseek
type: news
tags: [DeepSeek, DeepSeek-V4-Pro, AIエージェント, API, 料金]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: high
---

DeepSeekは2026年8月13日、DeepSeek-V4-Proを正式版（GA）として、アプリ・Web・APIの全チャネルで提供開始しました。モデルパラメータを`deepseek-v4-pro`に設定することでアクセスできます。同モデルは4月からプレビュー提供されていましたが、今回のGA版「DeepSeek-V4-Pro-0813」では、モデルがツールを使い、コードを実行し、人手をあまり介さずマルチステップのワークフローを完遂する「エージェント能力」に重点を置いた強化が図られています。

## 詳細

- **エージェント系ベンチマーク**: HLEはツールなしで42.7、ツールありで60.0、Terminal Bench 2.1は87.9、NL2Repoは61.5、Cybergymは83.3、DeepSWEは62.7、DSBench-FullStackは71.1、DSBench-Hardは67.2を記録
- **コンテキストと出力長**: コンテキストウィンドウは最大100万トークン、出力は最大38.4万トークンまで対応
- **3段階の思考強度**: V4-ProとV4-Flashの両方で「low」「high」「max」の3段階の思考強度設定が可能になり、開発者はレイテンシ・コストと推論の深さをトレードオフできるようになった
- **OpenAI Responses APIへのネイティブ対応**: APIがOpenAIのResponses API形式にネイティブ対応し、特にCodex向けに調整された設定が可能に
- **7月のV4-Flashベータからの流れ**: V4-Flashは2026年7月31日にパブリックベータを開始しており、当時のエージェント系スコアはより低め（Terminal Bench 2.1で82.7、DSBench-Hardで59.6）。V4-Pro自体は今回のGAまでスコアは変わっていなかった

## その後

- 2026年8月16日16:00 UTC（協定世界時）から値上げが実施される予定。ピーク/オフピーク料金制が導入され、V4-Proの出力トークン料金は現行の一律100万トークンあたり0.87ドルから、ピーク時には100万トークンあたり3.96ドルに引き上げられる。オフピーク料金はピーク時の半額に設定される
- DeepSeekは8月6日の時点で「大幅な」値上げを予告していたが、当時は具体的な金額は明らかにされていなかった
