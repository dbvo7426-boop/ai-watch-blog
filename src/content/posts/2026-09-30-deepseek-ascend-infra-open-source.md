---
title: "DeepSeek、Huawei Ascend向け学習スタックをオープンソース化"
description: "DeepSeekは2026年9月29〜30日、DeepGEMM-AscendやDeepEP-Ascendを含む主要な学習・推論インフラをHuawei Ascend NPU向けに移植し公開。NVIDIA向けに構築してきたソフトウェアスタックを中国国産ハードウェアへ拡張した。"
pubDate: 2026-09-30
category: deepseek
type: news
tags: [DeepSeek, Huawei Ascend, オープンソース, TileLang, DeepGEMM, GitHub]
source: https://github.com/deepseek-ai/DeepGEMM-Ascend
draft: false
importance: high
---

DeepSeekは2026年9月29〜30日、NVIDIA GPU向けに構築してきたのと同じ低レイヤーのソフトウェアスタックをHuawei Ascend NPU向けに移植し、コアインフラライブラリ群をオープンソースとして公開しました。公開は同社自身のGitHub組織上で行われ、新規リポジトリ2件と、既存プロジェクト3件へのAscend対応アップデートという形になっています。

## 詳細

- **新規リポジトリ**: 行列乗算カーネルライブラリをAscend向けに移植した「DeepGEMM-Ascend」と、MoE(混合エキスパート)のdispatch/combine処理向けに高性能な通信を行う「DeepEP-Ascend」
- **アップデートされた既存プロジェクト**: これまでNVIDIA向けのみだった「TileKernels」「DeepSelect」「FlashMLA」にもAscend対応が追加
- **対象ハードウェア**: HuaweiのAscend 950シリーズ(950DT)で動作検証済みで、CANN 9.20ツールキットとtorch_npuパッケージが必要
- **API互換性**: DeepGEMM-AscendはNVIDIA向けオリジナル版DeepGEMMと完全なAPI互換を保ちつつ、BF16・FP8・FP4のGEMM、MQAロジット、MegaMoE、HC Prenorm GEMMをサポート
- **DeepSeekが公表した性能数値**: 密なBF16 GEMMのハードウェア利用率は最大99.8%、4096×7168×16384形状でFP4×FP4は1,701 TFLOPS、BF16×BF16は431 TFLOPS、DeepEP-AscendはAscend 950DT・CANN 9.2.0環境のEP8構成でdispatch帯域373〜375GB/s、combine帯域345〜347GB/s
- **カーネル記述言語**: 従来のNVIDIA向けツールチェーンと同様、CUDAに代わるタイルベースDSL「TileLang」を引き続き採用
- **ライセンス**: MITライセンスで公開

## その後

今回の公開は、DeepSeekがNVIDIAのCUDAエコシステムへの依存を減らし、自社の学習・推論スタックを中国国産アクセラレーターへ移植可能にする取り組みの一環と受け止められています。別系統のコードベースを用意するのではなく、API互換のAscend移植版として提供することで、既にNVIDIA向けカーネルインターフェースに統合しているパートナー企業がそのままHuawei製シリコン上でDeepSeek流のインフラを動かせるようにし、移行コストを抑えています。これは9月上旬のV4.1-Flashモデル発表に続く動きであり、モデルのリリースと並行して内部インフラツールをオープンソース化するというDeepSeekのこれまでのパターンを踏襲するものです。
