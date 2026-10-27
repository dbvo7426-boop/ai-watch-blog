---
title: "Thinking Machines Lab、975Bのオープンウェイト・マルチモーダルモデル「Inkling」を公開"
description: "Thinking Machines Labが、総パラメータ975B・アクティブ41BのMixture-of-ExpertsモデルInklingを公開しました。完全な重みはHugging Faceで入手でき、Apache 2.0です。"
pubDate: 2026-07-15
category: thinkingmachines
type: news
tags: [Inkling, OpenWeights, MoE, Tinker]
source: https://thinkingmachines.ai/news/introducing-inkling/
draft: false
importance: high
---

Thinking Machines Labは、「ゼロから学習し、完全な重みを公開するモデル」としてInklingを発表しました。同ラボ初のオープンウェイト基盤モデルで、全体で最強を狙うものではなく、幅広くバランスの取れたモデルと位置づけられています。

## 詳細

- **規模とアーキテクチャ:** Mixture-of-Expertsのトランスフォーマーで、総パラメータ975B、アクティブ41B。層ごとにルーティング専門家256個と共有専門家2個、トークンごとに6個のルーティング専門家が動作し、コンテキストは最大1Mトークンです。
- **学習:** テキスト・画像・音声・動画の45兆トークンで事前学習し、NVIDIA GB300 NVL72上で、強化学習は3,000万回超のロールアウトまで拡大しました。テキスト、画像、音声をネイティブに扱います。
- **思考量の調整:** 思考エフォートを調整可能(投稿では0.2から0.99で検証)で、エージェントハーネスの中からも設定できます。Terminal Bench 2.1でNemotron 3 Ultraと同等の結果を約3分の1のトークンで達成したとしています。
- **主なベンチマーク(effort 0.99、ラボ公表値):** SWEBench Verified 77.6%、GPQA Diamond 87.2%、AIME 2026 97.1%、Terminal Bench 2.1 63.8%、HLEはテキストのみ29.7%、ツール使用時46.0%。
- **ライセンスと重み:** 完全な重みがHugging Faceにあり、元のチェックポイントとNVIDIA Blackwell向けNVFP4チェックポイントが提供されます。投稿本文にライセンス名の記載はなく、Hugging Faceのthinkingmachines/InklingモデルページにApache-2.0のタグが付いています。
- **提供形態:** Tinkerでのファインチューニング(64K/256Kコンテキスト、期間限定で50%オフ)、Tinkerコンソール内のInkling Playground、推論パートナーはTogether AI、Fireworks、Modal、Databricks、Baseten。SGLang、vLLM、llama.cpp、Hugging Face transformersに対応します。
- **インタラクションモデル:** Inklingは、音声と映像でのリアルタイム協働を行う同ラボのインタラクションモデルシステムで、裏側の推論モデルを担う設計とされています。ただしこのシステム単体の一般公開は今回確認できていません。

## その後

2週間後に、はるかに小型のInkling-Smallが続きました。またTinkerの1周年記事では、Inklingがファインチューニング対象モデルに含まれ、音声対応もInklingで加わったと説明されています。これまで主にファインチューニングAPI「Tinker」で知られていた同社が、自社の寛容なライセンスの重みを出した点が大きな変化です。ベンチマークの数値はラボ自身のもので、ここでは独立に再現していません。
