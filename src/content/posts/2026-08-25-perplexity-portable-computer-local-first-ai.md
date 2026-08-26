---
title: "Perplexity、ローカル完結型AIエージェント「Portable Computer」を発表"
description: "PerplexityはAIエージェント「Computer」のローカル実行版「Portable Computer」を発表。NVIDIA DGX Spark上で完全にデバイス上で動作し、必要なときだけクラウドにエスカレーションすることで機密データをローカルに保つ。"
pubDate: 2026-08-25
category: perplexity
type: news
tags: [Perplexity, Computer, NVIDIA, オンデバイスAI, プライバシー, AIエージェント]
source: https://perplexity.ai/hub/blog/introducing-portable-computer-for-local-first-ai
draft: false
importance: high
---

Perplexityは、AIエージェント「Perplexity Computer」をユーザー自身のマシン上で完全に動作させるローカル版「Portable Computer」を発表した。AIによる分析やファイルの統合、複雑なワークフローの実行をすべて手元のデバイスで行い、必要な場合にのみクラウドへとエスカレーションする仕組みだ。

## 詳細

- **概要**: Perplexity Computerのローカルファースト版で、機密文書や非公開のコードベースといったデータをデフォルトでデバイス上に留めるよう設計されている
- **ハードウェアパートナーシップ**: NVIDIAと共同開発し、特にGrace Blackwell GB10プラットフォーム（20コアArm CPU、NVIDIA GPU、128GBのユニファイドメモリ）を搭載したデスクトップサイズのAIコンピューター「NVIDIA DGX Spark」向けに構築。将来的にはNVIDIA RTX GPU搭載PCへの対応も予定
- **オンデバイスのモデル・スタック**: ローカルではQwen 3.8 27Bまたはその後学習版であるPPLX 27Bを実行し、ローカルの検索インデックス、オーケストレーター、スケジューラーを備える。ローカル処理にはクレジット課金が発生しない
- **ローカルディクテーション**: 音声入力にはNVIDIAのNemotron 3.5 ASRモデルをデバイス上で実行
- **要求に応じたクラウドエスカレーション**: ユーザーはリアルタイムのウェブアクセスやより高度な推論が必要な場合に限り、クラウドへのエスカレーションを選択的に許可できる。データが端末外に出る前には必ず許可を求める仕組みになっている
- **アーキテクチャ（Perplexityが公開した技術解説記事によると）**: デフォルトでデバイス上で動作し、必要なときだけリモートの機能にアクセスするよう、ハーネスとモデルを共同設計したものと説明されている
- **提供状況**: Perplexity ProおよびMaxの加入者向けに順次展開。まずLinuxでPerplexityアプリ内のワンクリックセットアップから利用可能になり、Windows対応は「近日提供予定」

## その後

Portable Computerの投入により、Perplexityはこれまでクラウドベースのエージェントにデータを送ることに慎重だった、機密情報を扱うプロフェッショナル層のユーザーを取り込む狙いがあるとみられる。NVIDIA DGX Sparkとのパートナーシップは、高性能なオンデバイスAIハードウェアへ向かう業界全体の動きも象徴している。今後はWindowsやRTX GPU搭載PCへの対応拡大に加え、ローカルファーストのアプローチが製品ライン全体へと広がっていく可能性がある。
