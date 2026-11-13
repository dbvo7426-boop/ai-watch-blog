---
title: "Google、テキスト・画像・音声・動画に対応するオープン埋め込みモデル「EmbeddingGemma 2」を公開"
description: "EmbeddingGemma 2は7億4,000万パラメータ、8Kトークンのコンテキスト、Apache 2.0ライセンスで、テキスト・画像・音声・動画を1つの埋め込み空間に写します。Pixel 11 Proで量子化したテキストのみの重みは約191MBのRAMで動きます。"
pubDate: 2026-10-06
category: gemini
type: news
tags: [EmbeddingGemma, Gemma 4, 埋め込み, オンデバイス]
source: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2
draft: false
importance: medium
---

Google DeepMindは2026年10月6日、Sahil Dua氏とHenrique Schechter Vera氏の投稿でEmbeddingGemma 2を公開しました。Googleは、オンデバイスのマルチモーダル埋め込みで最も高性能なモデルだとしています。

## 詳細

- **モデル:** テキスト、画像、音声、動画を1つの共有埋め込み空間に写すオープンモデルです。Gemma 4のアーキテクチャを使い、7億4,000万パラメータで、Apache 2.0ライセンスで公開されています。初代EmbeddingGemmaのダウンロード数は2,000万回を超えています。
- **モジュール構成:** テキストのみなら最小2億7,000万パラメータで動き、ビジョン(1億7,000万)とオーディオ(3億)のエンコーダーを任意で追加できます。
- **コンテキスト:** 8Kトークンで、EmbeddingGemma 1の4倍です。この範囲で最大5.5分の音声、29枚の画像、58フレームの動画、またはそれらの組み合わせを処理できます。
- **埋め込みサイズ:** Matryoshka Representation Learningにより、768次元のベクトルを512、256、128次元に切り詰められ、保存容量を最大6分の1にできます。
- **ベンチマーク:** MTEB Codeは68.76から78.68に上がりました。多言語テキストの性能は初代と同等です。Googleは、1B未満のマルチモーダル埋め込みモデルでMTEB CodeとMassive Audio Embedding Benchmarkの首位だとしています。
- **オンデバイスのメモリ:** Pixel 11 Proで量子化した場合、テキストのみの重みで約191MB、マルチモーダルモデル全体で約567MBのRAMを使います。テキストのトークナイザーとオーディオエンコーダーはGemma 4と共有されます。

## 入手方法

重みはHugging FaceとKaggleで公開されています。Gemini Enterprise Agent PlatformのModel Gardenでの提供は「近日公開」とされています。transformers、sentence-transformers、MLX、vLLM、llama.cpp、SGLang、Ollama、LM Studio、MediaPipe、LiteRT、transformers.js、WebGPUなどで利用できます。
