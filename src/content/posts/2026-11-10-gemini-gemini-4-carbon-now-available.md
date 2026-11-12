---
title: "Gemini 4 Carbonが一般提供に、導入価格は100万トークンあたり入力2ドル・出力10ドル"
description: "GoogleはGemini 4 Carbonを開発者、企業、科学者、Google AI Ultra加入者に提供します。導入価格は2026年11月30日までArgonと同じで、その後2倍になります。"
pubDate: 2026-11-10
category: gemini
type: news
tags: [Gemini 4, Gemini 4 Carbon, Google, 料金, Antigravity]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-carbon-now-available/
draft: false
importance: high
---

Googleは2026年11月10日、Gemini 4 Carbonを開発者、企業、科学者、一般ユーザーに向けて提供開始しました。10月28日の発表時はFairwind Programを通じてサイバー防御担当者への提供から始まっており、その続報です。Googleは、サイバーセキュリティと長期にわたるエージェント型ワークフローで最先端の性能を持つ最も強力なモデルだとしています。Gemini 4 Argonの上位に位置づけられ、ソフトウェア開発や知識労働の大半にはArgonが引き続き適しています。Carbonは深く推論し、検証を繰り返すためにより多くのトークンを使います。

## 料金

- **導入価格:** 100万トークンあたり入力2ドル、出力10ドルで、Argonと同じです。
- **2026年11月30日以降:** 100万トークンあたり入力4ドル、出力20ドルになります(一般公開されるCarbonモデルが対象)。

## 提供先

- **開発者:** Google AI StudioのGemini API有料枠とAndroid Studioです。モデルIDは gemini-4-carbon です。
- **企業:** API またはモデルのドロップダウン経由のGemini for business、Google Antigravity、CodeMenderです。
- **Google AI Ultra加入者:** Google Antigravity、Geminiアプリ、検索のAIモードで順次提供します。
- **サイバー防御担当者:** Fairwind Programで順次提供します。
- **科学者:** Google Antigravityの最上位の利用枠を6か月間無料で提供します。順次提供で、資格と選考があります。

## Googleが報告する結果

- CursorBench 4.0、PerplexityのWANDR、ZapierのAutomationBenchで1位です。タスクあたりのコストは、次点の外部モデルの2分の1未満としています。
- Multimodal Knowledge Agentベンチマークでは2位で、平均タスクあたりのコストは首位のモデルの6分の1未満です。
- 脆弱性の発見、悪用、修正を測るSEC-bench Pro、ExploitGym、CWE-bench v1で首位です。
- 模擬攻撃では、適応型のレッドチーミングエージェントによる攻撃の99%を阻止しました。1回の試行あたりの突破率はArgonの3.1%から0.8%に下がっています。プロンプトインジェクションへの耐性は引き続き改善が必要な領域だとGoogleは述べています。
- 375タスクのエージェント型の誠実性ベンチマークで、Carbonは92%に合格し、Argonは70%でした。

あわせてGoogleは、1つのプロンプトを連携するエージェントのチームに変える /swarm を、Google Antigravityでプレビュー公開しました。Carbonが設計、調整、監査などの深い推論が必要な役割を担います。
