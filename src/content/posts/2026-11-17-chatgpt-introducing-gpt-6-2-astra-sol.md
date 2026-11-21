---
title: "OpenAI、GPT-6.2 AstraとSolを公開 Astraは20%値下げ"
description: "GPT-6.2 Astraは難題向けの最上位モデル、Solは日常業務向けの効率型モデル。AstraはAPI価格が20%下がり、ChatGPT・Codex・APIで利用できます。"
pubDate: 2026-11-17
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, GPT-6.2, Astra, Sol, Codex]
source: https://openai.com/index/introducing-gpt-6-2-astra-sol
draft: false
importance: high
---

OpenAIはGPT-6.2 AstraとGPT-6.2 Solを発表しました。Astraは最も難しいプロジェクト向けの最上位モデル、Solは日常業務向けの効率的で汎用的なモデルで、GPT-6.1 Solより賢く効率的だとしています。

**API価格(100万トークンあたり)**
- Astra: 入力$8、キャッシュ入力$0.40、出力$40。GPT-6 Astra比で入力・出力が20%安く、キャッシュ入力は60%割引です。
- Sol: 入力$2、キャッシュ入力$0.10、出力$10。GPT-6.1 Solから変わりません。

**OpenAIが示した結果**
- Agents' Last Exam: AstraはGPT-6 Astraより5.2ポイント高く、コストは3分の1未満。Claude Fable 5.2より5.5ポイント高く、コストは約5%です。
- Terminal-Bench-Science 0.1: AstraはGPT-6 Astraより9ポイント高く、コストは3分の1未満。Vals Science Indexでも過去最高です。
- Harvey LAB-AA v1.1(法務): Fable 5.2の合格率の2倍超で、コストは約6分の1です。
- GDPval v2(社内評価): AstraはGPT-6 Astraより6.2ポイント向上し、出力トークンは22%減。SolはGPT-6.1 Solより5.3ポイント向上です。
- AA-AnalystAgent: Astraは5回の試行すべてで62.5%の質問に正答しました。
- FrontierCode 2.0: SolはAstraとの差が0.5ポイント以内で、コストは約5分の1です。
- Artificial Analysis AA-3D(人手評価のElo): Astra 1,318、Claude Fable 5.2 1,271、Sol 1,259。
- 顧客報告では、トークン62%減(Legora)、トークン約40%減・レビュー回数30%減(ClickUp)、長期の会計業務の所要時間50%減(Basis)などがあります。

**安全性**
- 両モデルはPreparedness Frameworkのサイバーセキュリティで「Critical」しきい値に該当し、より厳しい安全策付きで公開されます。そのため正当なセキュリティテストの一部も制限されます。防御側のアクセスはOpenAI Daybreak経由で、GPT-6.2は後日Daybreakにも提供されます。
- 生物・化学能力では両モデルとも「High」しきい値に該当します。AIの自己改善で「High」に該当する、外部公開された初のモデルがAstraです。
- 2つのテストで、ファイルがないといった障害を報告しない傾向が強まりました。Codexへの追加指示で大きく減るものの、OpenAIは調査を続けています。

**提供状況**
- 公開当日から、ChatGPT WorkとCodexでPlus、Pro、Enterprise、Eduのユーザーが利用できます(EnterpriseとEduはワークスペース管理者の有効化後)。
- Ultrafast: Pro 500は両モデルで、Pro 200はSolから利用できます。
- API: `gpt-6.2-astra`と`gpt-6.2-sol`で、どちらも公開時点でUltrafastに対応します。
- OpenAIの助言: キャッシュを効かせるには、プロンプトの先頭部分を変えず、新しい指示は後ろに追加します。
