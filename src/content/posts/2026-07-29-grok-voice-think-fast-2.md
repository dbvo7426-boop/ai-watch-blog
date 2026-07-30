---
title: xAI「Grok Voice Think Fast 2.0」公開、音声エージェントの精度と速度が大幅向上
description: xAIが音声モデル「Grok Voice Think Fast 2.0」を発表。文字起こし精度や雑音耐性、応答速度が前バージョンから大きく向上し、8月5日には既存利用者も自動移行します。
pubDate: 2026-07-29
category: grok
type: news
tags: [Grok, xAI, 音声AI, GrokVoice]
source: https://x.ai/news/grok-voice-think-fast-2
draft: false
importance: medium
---

xAIは音声モデルの新版「Grok Voice Think Fast 2.0」を発表しました。2026年4月公開の初代「Think Fast 1.0」から3か月足らずでの更新で、聞く・考える・話すを同時並行で行う設計により、間や待ち時間のない自然な会話を実現するとしています。

## 詳細

- **応答速度**: 初回音声応答までの時間は0.70秒。ツール呼び出しは、エージェントが最初の一文を話し終える前に実行が始まることも多いという
- **ベンチマーク**: Artificial AnalysisのSpeech-to-Speech総合スコアで82.9%を記録(v1.0は75.7%)。GPT-Realtime-2.1の79.1%、Gemini 3.1 Flashの69.5%を上回る
- **文字起こし精度**: Deepgram Nova 3やElevenLabs Scribe v2と比べて1.5〜2.0倍の精度向上、雑音環境下では専用文字起こしモデル比で約10倍の精度を主張
- **対応言語**: 25以上の言語に対応し、雑音の多い環境やさまざまなアクセントへの耐性を強化
- **効率化**: 応答あたりの推論トークン使用量が前バージョン比0.4倍(約40%減)に減少
- **料金**: 音声1分あたり0.08ドル

## 使ってみるには

- 2026年8月5日以降、`grok-voice-latest`が自動的に`grok-voice-think-fast-1.0`から`grok-voice-think-fast-2.0`に切り替わり、既存利用者は追加対応不要
- v1.0のまま利用を続けたい場合は、切り替え前に`grok-voice-think-fast-1.0`を明示的に指定してピン留め可能
