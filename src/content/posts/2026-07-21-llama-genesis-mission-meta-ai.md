---
title: Meta、「Genesis Mission」向けAIモデル(SAM 3・DINOv3)で科学研究を支援
description: Metaが、米国家プロジェクト「Genesis Mission」の第1弾プロジェクトで自社AIモデルSAM 3・DINOv3を活用し、国立研究所の科学データ解析を数週間から約15分に短縮したと発表しました。
pubDate: 2026-07-21
category: llama
type: news
tags: [Meta AI, Genesis Mission, SAM 3, DINOv3, 国立研究所]
source: https://ai.meta.com/blog/genesis-mission-lawrence-berkeley-national-laboratory-segment-anything-dino/
draft: false
importance: medium
---

Metaが、米国家プロジェクト「Genesis Mission」の第1弾プロジェクトにおいて、自社のビジョンAIモデル「Segment Anything Model 3(SAM 3)」と「DINOv3」がどのように科学研究を支援しているかを公表しました。Llamaと並ぶMeta AIの基盤モデル群が、国立研究所の実データ解析に活用されている事例です。

## 詳細

- **Genesis Missionとは**: 2025年後半にホワイトハウス主導で始動した、AIで科学的発見を加速する国家的取り組み。DOE傘下の国立研究所群が中核を担う
- **フラッグシッププロジェクト「SYNAPS-I」**: バークレー国立研究所が主導し、5つの国立研究所から60名の研究者が参加。将来的にはユーザー施設自体が「知的な発見プラットフォーム」として機能することを目指す
- **活用モデル**: 画素単位で物体の輪郭を検出する「SAM 3」と、画像内の構造を自己教師あり学習で識別する「DINOv3」を、300基のA100 GPU上で稼働させ、ビームライン(放射光施設)での画像解析を自動化
- **成果**: 従来は専門家が手作業で数週間かけていた画像解析が、約15分に短縮
- **具体例**: ブドウの木の耐乾性研究において、マイクロCTスキャン画像から水分輸送組織を自動識別。従来はデータセット1件あたり1か月の手作業アノテーションが必要だった
- **DOE幹部のコメント**: 「これにより発見までの時間が数日から一瞬に圧縮され、継続的に自己改善する科学のモデルが確立される」(DOE次官 Dario Gil氏)

## 使ってみるには

- SAM 3・DINOv3はMetaが公開している基盤モデルで、研究機関は自施設のデータ解析パイプラインに組み込んで活用できます
- 詳細はMeta AI公式ブログのGenesis Mission関連記事で公開されています
