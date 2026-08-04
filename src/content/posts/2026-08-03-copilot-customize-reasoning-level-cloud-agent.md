---
title: GitHub Copilotのクラウドエージェント、タスクごとに推論レベルをカスタマイズ可能に
description: GitHub Copilotのクラウドエージェントで、対応モデルの推論レベルをタスク委任時に設定できるようになった。応答品質とトークン・クレジット消費量のトレードオフを調整できる。
pubDate: 2026-08-03
category: copilot
type: news
tags: [Copilot, GitHub, クラウドエージェント, 推論]
source: https://github.blog/changelog/2026-08-03-customize-the-reasoning-level-for-copilot-cloud-agent
draft: false
importance: low
---

GitHubは、Copilotクラウドエージェントにタスクを委任する際、推論レベルをカスタマイズできる機能を追加しました。利用するモデルの選択に加え、対応モデルであれば応答前にどの程度推論させるかを設定できるようになります。

## 詳細

- **新機能**: Copilotクラウドエージェントでタスクを開始する際、モデルの選択に加えて、対応モデルの推論レベルを設定できるようになった
- **トレードオフ**: 推論レベルを高くすると複雑な問題への回答精度は向上するが、消費するトークンとCopilotクレジットも増加する
- **提供対象**: クラウドエージェントを含む有料Copilotプラン全て(Copilot Pro、Pro+、Business、Enterprise、Max)で利用可能

## 使ってみるには

- Copilotクラウドエージェントで新しいタスクを開始し、対応モデルを選択する
- タスクを委任する前に、モデルと合わせて希望の推論レベルを選択する
- どの推論レベルがタスクに適しているかは、GitHubのAIモデル選択に関するドキュメントを参照する
