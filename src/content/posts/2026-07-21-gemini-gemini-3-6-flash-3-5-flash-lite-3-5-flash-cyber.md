---
title: "Google、「Gemini 3.6 Flash」「3.5 Flash-Lite」「3.5 Flash Cyber」を発表"
description: "Googleが、エージェント向けの効率性を重視した新モデル群「Gemini 3.6 Flash」「Gemini 3.5 Flash-Lite」「Gemini 3.5 Flash Cyber」を発表。コスト・速度・専門性の異なる3モデルをFlashシリーズに追加した。"
pubDate: 2026-07-21
category: gemini
type: news
tags: [Gemini, Google, Flash, 新モデル]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-6-flash-3-5-flash-lite-3-5-flash-cyber/
draft: false
importance: high
---

Googleが、AIエージェントの実運用を意識した新モデル群「Gemini 3.6 Flash」「Gemini 3.5 Flash-Lite」「Gemini 3.5 Flash Cyber」を発表しました。3.6 FlashはGitHub Copilotなどサードパーティ製品にも同日中に展開が始まっており、Flashシリーズの主力モデルとして位置づけられています。

## 詳細

- **Gemini 3.6 Flash**: 主力ワークホースモデルで、コーディング・ナレッジワーク・マルチモーダル対応力が向上。出力トークン数を3.5 Flash比で17%削減し、DeepSWEなど一部ベンチマークでは最大65%のトークン削減を達成。OSWorld-Verifiedで83.0%(旧78.4%)、MLE Benchで63.9%(旧49.7%)を記録。価格は入力$1.50/出力$7.50(各100万トークンあたり)で、3.5 Flashより安価ながら高性能
- **Gemini 3.5 Flash-Lite**: 3.5世代で最速・最安価な選択肢。出力速度は350トークン/秒に達し、エージェント的ワークフローで旧Flash-Lite世代を大きく上回る性能を発揮。Terminal-Bench 2.1では54%(旧31%)を記録。価格は入力$0.30/出力$2.50(各100万トークンあたり)
- **Gemini 3.5 Flash Cyber**: サイバーセキュリティに特化したモデルで、脆弱性の検出・修正を行うエージェント「CodeMender」と組み合わせて利用。政府機関や信頼できるパートナー向けの限定パイロットプログラムとしてのみ提供され、一般提供はされていない
- **提供開始**: Gemini 3.6 FlashとGemini 3.5 Flash-Liteは、Google AI Studio、Android Studio、Gemini Enterprise Agent Platform、Geminiアプリで即日利用可能。Flash-LiteはGoogle検索にも順次展開中

## 使ってみるには

- Google AI StudioまたはGeminiアプリから、Gemini 3.6 FlashおよびGemini 3.5 Flash-Liteを試すことができる
- GitHub Copilotなどサードパーティ製品経由でも、Gemini 3.6 Flashが順次利用可能になっている
- Gemini 3.5 Flash Cyberは一般提供されておらず、政府機関・パートナー向けの限定パイロットのみで利用可能
