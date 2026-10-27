---
title: "Thinking Machines Lab、Inklingと同等性能を4分の1の規模で実現する「Inkling-Small」を公開"
description: "Inkling-Smallは総276B・アクティブ12BのオープンウェイトMoEモデルで、推論とエージェント型コーディングではInklingを上回るとラボは述べています。"
pubDate: 2026-07-30
category: thinkingmachines
type: news
tags: [Inkling, InklingSmall, OpenWeights, Tinker]
source: https://thinkingmachines.ai/news/inkling-small/
draft: false
importance: high
---

Thinking Machines Labは、Inklingと「同等の性能を4分の1の規模で」実現するとする小型のMixture-of-ExpertsモデルInkling-Smallを発表しました。公式投稿の日付は2026年7月30日です(先行報道では7月31日とされていました)。

## 詳細

- **規模:** 総パラメータ276B、アクティブ12B(Inklingは975B/41B)。コンテキストは最大1Mトークンで、思考量を可変にできます。
- **マルチモーダル設計:** ネイティブなマルチモーダルでエンコーダ不要。音声はdMelスペクトログラム、画像は40x40ピクセルのパッチに分割して4層のhMLPで処理します。
- **学習:** 事前学習のデータ配合とレシピを調整。後学習は、Inklingを教師にオンポリシー蒸留したInkling-Small(preview)チェックポイントから開始し、その後2週間エージェント型コーディングのRLを拡大しました。
- **Inklingとの比較(ラボ公表値):** SWEBench Verified 80.2%対77.6%、Terminal Bench 2.1 64.7%対63.8%、GPQA Diamond 89.5%対87.2%、HLEテキストのみ31.6%対29.7%。一方AIME 2026(97.1%対95.5%)とSimpleQA Verified(43.9%対20.6%)ではInklingが上で、知識や事実性ではInklingに優位があるとしています。
- **提供形態:** 完全な重みをHugging Faceで公開(モデルページはApache-2.0タグ、投稿本文にライセンス名の記載はなし)。Tinkerでファインチューニングでき、Tinker Playgroundでテキスト・画像・音声のチャットが可能です。両モデルとも期間限定の割引があります。
- **評価の注記:** 評価の大半はeffort 0.99で実施。Terminal Bench 2.1は社内ハーネスを使い、Web検索で汚染された解答は0点としています。

## その後

フロンティア級のオープンモデルをはるかに低コストで提供・ファインチューニングできるようになりました。10月15日のTinker 1周年記事でも対応モデルにInklingが挙げられています。ラボ自身が認めるトレードオフは事実の想起力の低下です。ベンチマークはすべて自社公表で、独立した検証はされていません。
