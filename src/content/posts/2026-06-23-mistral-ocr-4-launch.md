---
title: Mistral AI、文書解析モデル「OCR 4」を発表──構造化データとセルフホストに対応
description: Mistral AIがOCR 4を発表。バウンディングボックスやブロック分類、信頼度スコア付きで文書を構造化データに変換し、単一コンテナでのセルフホストにも対応する高精度な文書インテリジェンスモデルです。
pubDate: 2026-06-23
category: mistral
type: news
tags: [Mistral, Mistral AI, OCR, 文書AI]
source: https://mistral.ai/news/ocr-4/
draft: false
importance: medium
---

Mistral AIが2026年6月23日、文書解析モデル「OCR 4」を発表しました。非構造化文書をバウンディングボックス・ブロック分類・信頼度スコア付きの構造化データへと変換するモデルで、単一コンテナでのセルフホストにも対応し、機密文書を外部クラウドAPIに送れない規制業界の企業でも利用できる点を打ち出しています。

## 詳細

- **構造化出力**: タイトル・表・数式・署名などをブロック単位で分類し、抽出テキストとともにバウンディングボックスと単語ごとの信頼度スコアを返す
- **多言語対応**: 10の言語グループにまたがる170言語をサポート
- **性能**: OlmOCRBenchで85.20のスコアを記録し、人間評価者による比較でも競合の文書AIシステムに対し平均72%の勝率
- **セルフホスト**: 単一コンテナでの展開が可能で、データを外部に出せない企業向けにオンプレミス運用に対応
- **料金**: API利用は1,000ページあたり4ドル(Batch API利用で2ドルに割引)、Document AIは1,000ページあたり5ドル
- **提供チャネル**: Mistral Studio、Amazon SageMaker、Microsoft Foundry経由でAPI提供。Snowflake Parse Documentへの対応も予定
- **エンタープライズ連携**: AI Now Summit 2026で発表された企業向け検索フレームワーク「Search Toolkit」にも統合され、文書取り込みから引用付きRAGパイプラインまでを一気通貫で構築可能に

## 使ってみるには

- 「Getting Started with OCR 4 Cookbook」でハンズオンガイドを確認できる
- 2026年7月7日開催の本番運用ウェビナーへの登録、または営業チームへの直接問い合わせも可能
- 詳細はMistral公式サイト(mistral.ai/news/ocr-4/)を参照
