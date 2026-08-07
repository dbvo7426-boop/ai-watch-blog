---
title: "Sakana AI、日本語特化LLM API「Sakana Namazu」を提供開始——Moonshot社「Kimi K2.6」がベース"
description: "Sakana AIが、Moonshot AIのオープンモデル「Kimi K2.6」を独自の日本語データでファインチューニングしたLLM API「Sakana Namazu」の提供を開始。市場調査やカスタマーサポートなど、日本語での実務対応を狙う。"
pubDate: 2026-08-03
category: sakana
type: news
tags: [Sakana AI, Namazu, LLM API, 日本語, Kimi K2.6]
source: https://sakana.ai/namazu-api/
draft: false
importance: medium
---

Sakana AIは2026年8月3日、日本語特化のLLM API「Sakana Namazu」の提供を開始しました。Moonshot AIのオープンウェイトモデル「Kimi K2.6」をベースに、Sakana AI独自の日本語データで追加学習を施したモデルです。オーケストレーション製品「Fugu」シリーズとは別系統の、同社にとって初の単体LLM API製品となります。

## 詳細

- **ベースモデルとアプローチ**: ゼロから学習するのではなく、Moonshot AIのオープンモデル「Kimi K2.6」を土台に、Sakana AI独自の内部データで追加学習を実施。ベースモデルが持つ汎用的な推論力を保ちながら、日本語のタスクや日本のビジネス文脈への対応力を高めている
- **既存システムへの組み込みやすさ**: OpenAI API互換のインターフェースを採用しており、既存の実装は`base_url`を変更するだけで移行可能。コードの書き換えは不要
- **標準搭載のツール**: Web検索とコード実行機能を標準で搭載
- **挙動のチューニング**: 不要な出力拒否や回答の偏りを減らす方向でチューニングしたとSakana AIは説明。その裏付けとして、日本特有の政治・社会的な文脈への対応力を測る「FairPoliticsQA」ベンチマークのスコアが34.10%から56.30%へ向上したことを挙げている
- **想定される用途(Sakana AIが挙げる例)**: 自律的なWeb検索と複数ステップのワークフローによる市場調査レポートの自動生成、カスタマーサポートの自動化や注文データ分析によるコスト削減、さらには視覚フィードバックで動く「魚の光ショー」の自動演出といった遊び心のあるデモまで
- **コメント**: 「日本語で実務に使えるLLM APIの選択肢は、まだ限られている」——Sakana AIはNamazuが埋めようとしている市場の空白をこう表現している
- **提供状況**: SakanaのAPIコンソールから即日利用可能。料金は専用の料金ページで公開されており、エンタープライズ向け導入も問い合わせベースで対応

## 使ってみるには

- console.sakana.ai のAPIコンソールから登録し、`base_url`をNamazu用に切り替えるだけで利用開始できる
- Namazuは、2026年6月に発表したリサーチエージェント「Marlin」に続く同社2つ目の商用プロダクトであり、日本語ビジネス市場を明確に狙った初の製品でもある
- 発表全文: sakana.ai/namazu-api
