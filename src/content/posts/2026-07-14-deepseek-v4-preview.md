---
title: DeepSeek-V4登場、100万トークンのコンテキストとオープンソース最高水準のコーディング性能
description: DeepSeekが新モデル「DeepSeek-V4-Pro」「V4-Flash」を発表。オープンソースモデルとしてエージェント型コーディングで最高水準の性能を実現しています。
pubDate: 2026-04-24
category: deepseek
type: news
tags: [DeepSeek, オープンソース, コーディング]
source: https://api-docs.deepseek.com/news/news260424
draft: false
---

DeepSeekが新モデル「DeepSeek-V4-Pro」「DeepSeek-V4-Flash」のプレビューを公開しました。いずれも100万トークンのコンテキスト長を標準搭載し、APIから即日利用できます。

## 詳細

- **モデル構成**: V4-Pro(総パラメータ1.6兆、アクティブ490億)、V4-Flash(総パラメータ2840億、アクティブ130億)の2種類
- **エージェント性能**: エージェント型コーディングのベンチマークでオープンソース最高水準を記録
- **得意分野**: 世界知識・推論・数学・STEM分野でクローズドソースの最上位モデルに匹敵する性能
- **新アーキテクチャ**: トークン単位の圧縮とDeepSeek Sparse Attention(DSA)により、長文コンテキストを効率的に処理
- **V4-Flash**: 推論性能はV4-Proに迫りつつ、より高速なレスポンスを実現

## 使ってみるには

- APIは即日利用可能。OpenAIのChatCompletions形式・AnthropicのAPI形式の両方に対応
- Claude Code、OpenClaw、OpenCodeなど既存ツールとの連携にも対応
- 旧モデル(deepseek-chat・deepseek-reasoner)は2026年7月24日に提供終了予定のため、早めの移行が推奨されます
