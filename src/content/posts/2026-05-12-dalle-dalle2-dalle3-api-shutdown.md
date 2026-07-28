---
title: DALL-E 2・DALL-E 3のAPI提供が正式終了、GPT Image系モデルへ完全移行
description: OpenAIがDALL-E 2・DALL-E 3のAPI提供を2026年5月12日付で終了しました。2025年11月の告知どおりの実施で、移行先としてGPT Image 2・GPT Image 1・GPT Image 1 miniが案内されています。
pubDate: 2026-05-12
category: dalle
type: news
tags: [DALL-E, 画像生成, API, 非推奨]
source: https://developers.openai.com/api/docs/deprecations
draft: false
importance: medium
---

OpenAIが2026年5月12日、画像生成モデル「DALL-E 2」「DALL-E 3」のAPI提供を正式に終了しました。2025年11月14日に告知されていた予定どおりの実施で、DALL-E系モデルを利用していた開発者はGPT Image系モデルへの移行が必須となります。

## 詳細

- **終了したモデル**: `dall-e-2`、`dall-e-3`の両モデルが2026年5月12日付でAPI経由の呼び出しに応答しなくなった
- **告知から実施まで**: 2025年11月14日に非推奨化が告知されており、約半年の移行期間を経ての終了
- **移行先**: OpenAIは`gpt-image-2`・`gpt-image-1`・`gpt-image-1-mini`への移行を推奨
- **背景**: ChatGPT内の画像生成もDALL-E 3から2025年12月に「GPT Image 1.5」、2026年4月21日に「ChatGPT Images 2.0」(GPT Image 2)へと既に置き換えが完了しており、API側もこれに合わせた形
- **今後の予定**: 移行先として案内されたモデルのうち`gpt-image-1`は2026年10月23日、`gpt-image-1-mini`・`gpt-image-1.5`・`chatgpt-image-latest`は2026年12月1日に、それぞれ`gpt-image-2`への統合を目的に順次非推奨化される予定

## その後

- DALL-E 2・DALL-E 3を組み込んでいた既存のAPI連携は、モデルIDを`gpt-image-2`などに変更しない限り動作しない状態
- OpenAIは移行に関する質問をDeveloper Forumで受け付けるとしている
- 画像生成モデルの世代交代は2026年内も続く見通しで、最終的にGPT Image 2への一本化が進む
