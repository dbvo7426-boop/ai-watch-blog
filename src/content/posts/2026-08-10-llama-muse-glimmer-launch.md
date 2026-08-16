---
title: "Meta、オンデバイスエージェント向け300億パラメータモデル「Muse Glimmer」をオープンソース化"
description: "Meta Superintelligence Labsは、コンシューマー向けGPU1枚やMacでも動作し、常時稼働するローカルエージェントを実現するApache 2.0ライセンスの300億パラメータモデル「Muse Glimmer」を公開しました。投機的デコーディングやマルチモーダル入力にも対応します。"
pubDate: 2026-08-10
category: llama
type: news
tags: [Meta, MuseGlimmer, オープンソース, AIエージェント, オンデバイスAI]
source: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
draft: false
importance: high
---

Meta Superintelligence Labsは2026年8月10日、クラウドに依存せずローカルデバイス上でAIエージェントを動かすために設計された、オープンウェイトの300億パラメータモデル「Muse Glimmer」を公開しました。Metaはこれを「止まらないエージェントのために作られた」モデルと表現しており、信頼性の高いツール呼び出し、再起動をまたいだ状態の保持、自己管理型メモリを特徴としています。

## 詳細

- **サイズとフットプリント**: 300億パラメータで、コンシューマー向けGPU1枚やMacでも動作可能。量子化時のメモリフットプリントは20GB未満
- **ライセンス**: 寛容なApache 2.0ライセンスでオープンソース化され、重みはHugging Faceで公開
- **マルチモーダル対応**: テキストと画像の入力に対応し、100以上の言語で訓練されている
- **エージェント向けの作り込み**: エンドツーエンドのエージェントタスク完遂、信頼性の高いツール利用・関数呼び出し、長いワークフローにまたがるマルチステップ推論、失敗からの復旧・エラー診断に合わせてチューニングされている
- **ベンチマーク**: MetaはGemma4-31BやQwen3.6-27Bなど同規模のモデルを、エージェント・コーディング・マルチモーダル・安全性・推論の各ベンチマークで上回るとしており、DeepSearch QA、MCP-Atlas、τ-Bench、SWE-Benchでも良好な結果を示している
- **速度**: 投機的デコーディングにより、RTX 5090で最大3.1倍、M5 Maxで1.8倍、M4 Maxで1.5倍の生成速度向上を実現
- **学習アプローチ**: Metaのより大規模なモデル「Muse Spark」から事前学習時のロジット蒸留によって蒸留され、その後長文コンテキスト・エージェント特化の学習、教師ありファインチューニング、強化学習、さらなる蒸留を経て仕上げられている

## 使ってみるには

- 重みは現在Hugging Faceからダウンロード可能
- vLLM、Ollama、LM Studio、SGLang、llama.cppで既に動作可能。ネイティブのllama.cpp、MLX、ExecuTorch対応も数日以内に展開予定
- FireworksやOpenRouter経由でも利用可能
- 発表全文: research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
