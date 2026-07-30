---
title: "OpenAI、新モデル群「GPT-5.6」を発表 ― 3段階構成でフロンティア性能と効率を両立"
description: "OpenAIが次世代モデル「GPT-5.6」を発表。最上位のSol、汎用のTerra、軽量のLunaという3段階構成で、性能とコスト効率を同時に引き上げた。CodexやChatGPT Workなどエージェント的な用途を念頭に設計されている。"
pubDate: 2026-07-29
category: chatgpt
type: news
tags: [ChatGPT, GPT-5.6, OpenAI, モデル, Codex]
source: https://openai.com/index/gpt-5-6-frontier-intelligence-efficiency
draft: false
importance: high
---

OpenAIは、次世代モデル群「GPT-5.6」を発表した。最上位の「GPT-5.6 Sol」、汎用バランス型の「GPT-5.6 Terra」、軽量・低コストの「GPT-5.6 Luna」という3段階構成で提供され、トークンあたりの実行効率を高めることで、フロンティア級の知能とコスト効率を同時に引き上げたことが特徴。CodexやChatGPT Workなどエージェント的なワークロードでの活用を念頭に設計されている。

## 詳細

- **3段階のモデル構成**: 最大の推論能力を持つ最上位モデル「GPT-5.6 Sol」、日常利用向けの中間モデル「GPT-5.6 Terra」、最速・最安の軽量モデル「GPT-5.6 Luna」の3種類を用意
- **ベンチマーク**: Solは「Artificial Analysis Coding Agent Index」でClaude Fable 5を上回る性能を記録。Terraは前モデルのGPT-5.5と同等の知能ベンチマークスコアを、より低い価格で達成
- **価格**: Solのコーディングタスクの実行コストはClaude Fable 5の半額以下。TerraはGPT-5.5の50%の価格で同等の知能を実現。Lunaの価格はSol比で80%安い
- **効率改善**: 投機的デコーディング(speculative decoding)の改良でトークン生成効率を15%以上向上、カーネル最適化でエンドツーエンドの提供コストを20%削減。モデル自体が「1トークンあたりの仕事量を最大化する」よう訓練されている点も特徴
- **自己改善能力**: TritonやGluonといったカーネル言語を用いて、モデル自身が本番環境のカーネルを自律的に最適化できる。検証には「FpSan(Floating-Point Sanitizer)」と呼ばれる独自ツールを用い、カーネルの正確性を担保している
- **利用規模**: ChatGPTは全世界で10億人のアクティブユーザー、200万社以上の法人に利用されており、GPT-5.6は今後4年間にわたる展開を見据えて設計された
- **想定用途**: CodexやChatGPT Workといったエージェント的なプロダクトでの利用を軸に、投機的デコーディングやKVキャッシュ最適化、プロンプトキャッシュなどの技術を活用する

## 使ってみるには

- ChatGPTやChatGPT Work、Codexなどの対応プロダクトでモデル選択時に「GPT-5.6」系列(Sol・Terra・Luna)を選ぶ
- コーディングエージェント用途で最高性能を求める場合はSol、日常利用やコストバランスを重視する場合はTerra、軽量・低コストのタスクにはLunaを選ぶとよい
- API利用時の詳細な提供時期やモデル名は今後順次案内される見込み
