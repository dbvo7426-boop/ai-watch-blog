---
title: Google DeepMindが「DiffusionGemma」公開、拡散モデル方式で最大4倍高速なテキスト生成を実現
description: Google DeepMindがGemma 4をベースにした拡散言語モデル「DiffusionGemma」をApache 2.0ライセンスで公開。逐次生成ではなく並列でトークンを生成・洗練する方式で、最大4倍の生成速度を実現しています。
pubDate: 2026-06-10
category: gemini
type: news
tags: [Gemini, Gemma, オープンモデル, 拡散モデル]
source: https://developers.googleblog.com/diffusiongemma-the-developer-guide/
draft: false
importance: medium
---

Google DeepMindが2026年6月10日、Gemma 4をベースにした拡散言語モデル「DiffusionGemma」を発表しました。従来の自己回帰型(左から右へ逐次生成する)モデルとは異なり、256トークンのキャンバスを並列に生成・洗練していく方式を採用し、最大4倍の生成速度を実現しています。

## 詳細

- **アーキテクチャ**: 26BのMixture of Experts(MoE)構成で、推論時に有効化されるパラメータは3.8Bのみ
- **生成方式**: トークンを1つずつ順番に生成するのではなく、256トークン分のキャンバスを一度に生成し、双方向アテンションを使って反復的に洗練していく「拡散」方式を採用
- **速度**: NVIDIA GeForce RTX 5090で700トークン/秒以上、NVIDIA H100単体で1,000トークン/秒以上を達成し、従来の自己回帰型モデル比で最大4倍高速
- **省メモリ**: 量子化版は18GBのVRAMに収まり、コンシューマー向けGPUでのローカル実行も現実的に
- **自己修正能力**: 双方向アテンションによりリアルタイムでのエラー修正と並列的な文脈伝播が可能になり、数独のような制約充足タスクを得意とする
- **ライセンス**: モデルの重みはApache 2.0ライセンスでHugging Faceを通じて公開

## 使ってみるには

- Hugging Face Transformers、vLLM(OpenAI互換API)、SGLang、MLX、Google CloudのModel Gardenなど複数の方法でデプロイ可能
- Hackable Diffusion、Unsloth、NVIDIA NeMoを使ったファインチューニング用レシピも公開されている
- 現時点では品質面で自己回帰型モデルに及ばない部分もあり、本番導入よりはレイテンシ重視の用途やエッジ展開での活用が想定される
