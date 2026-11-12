---
title: "GoogleとArtificial Analysis、ベンチマーク「Multimodal Knowledge Agent」を発表"
description: "10分野にわたる、複数ステップで視覚的に複雑な専門業務200タスクのベンチマークです。Gemini 4 Carbonは品質で2位、タスクあたりの平均コストは首位モデルの約6分の1です。"
pubDate: 2026-11-10
category: gemini
type: news
tags: [Google, ベンチマーク, Artificial Analysis, マルチモーダル, エージェント]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/
draft: false
importance: medium
---

Googleは2026年11月10日、Artificial Analysisと開発したベンチマーク「Multimodal Knowledge Agent(MKA)」を発表しました。視覚的に複雑なファイルを扱う実際の知識労働で、AIエージェントがどう振る舞うかを測ります。

## 設計

- **専門家:** 10分野、83職種のドメイン専門家が作成に協力しました。分野は、ビジネス、建設、教育、エンジニアリング、金融、ヘルスケア、法務・行政、物流・地図、科学、ソフトウェア・データです。
- **タスク:** 200タスクで、それぞれ熟練した専門家が3〜8時間かける複数ステップの業務です。各タスクは現実的なプロンプト、マルチモーダルな入力ファイル、約70項目のYes/No確認からなる専門家作成のルーブリックで構成され、配点は事実の正確さが75%、視覚デザインが25%です。
- **評価:** すべてのモデルが、同じツール、サンドボックス、ターン数の上限で、オープンソースのハーネス「Stirrup」上で動きます。Google以外のモデルで作ったエージェント型の自動採点役が成果物を採点し、ドメイン専門家は96%の確率でその採点に同意しました。

## 利用方法

200タスクのセットは、学習データや検索への流出を防ぐため、Artificial Analysisが非公開で実行します。10件の公開タスクはHugging Faceにあり、Artificial Analysisで自分のモデルを評価することもできます。手法と全結果は技術レポートにまとめられています。

## 結果

- モデルによって効率に大きな差があり、1タスクあたりの平均ターン数は30〜130です。
- 高い知覚能力が必要で、視覚を除くとモデルは補おうとするものの、多くは失敗します。
- Gemini 4 Carbonは品質で2位となり、タスクあたりの平均コストは首位のモデルの約6分の1で、品質と価格のパレートフロンティア上に位置します。Google AI StudioのGemini API経由で利用できます。
