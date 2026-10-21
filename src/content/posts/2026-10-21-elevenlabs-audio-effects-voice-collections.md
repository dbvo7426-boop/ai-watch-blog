---
title: "ElevenLabs、TTSのオーディオエフェクト、ボイスコレクションAPI、チケット統合を追加"
description: "ElevenLabsの10月18〜21日の更新で、Text to SpeechとText to Dialogueにaudio_effects、ボイスコレクションAPI、Speech to Textのターン予測、エージェントのチケット統合が追加された。"
pubDate: 2026-10-21
category: elevenlabs
type: news
tags: [ElevenLabs, TTS, API, Agents]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabsは2026年10月18〜21日のチェンジログで、Text to Speech、Speech to Text、Voices、ElevenAgentsにまたがる更新を公開した。目玉は生成音声に対する新しいオーディオエフェクト機能だ。

## 詳細

- **オーディオエフェクト:** Text to SpeechとText to Dialogueが、フィルタープリセット、距離、リバーブ、背景ノイズ、パンニングを指定する`audio_effects`オブジェクトに対応。有効なIDを返すカタログ用エンドポイントも追加された。エフェクトによるリクエスト費用の変化はない。
- **リアルタイムSpeech to Text:** WebSocketに`turn_prediction`コミット方式を追加。話者が話し終えたとモデルが予測した時点でセグメントを確定する。
- **ボイスコレクション:** APIでコレクションの作成・一覧・更新・削除、ボイスの追加・削除が可能に(新規エンドポイント6本)。
- **ElevenAgents:** 同一エージェントの未解決チケットを最大50件まで1件に統合可能。ワークフローの終了ノードに成功/失敗の`outcome`を指定でき、新規エージェントは通話キューイングが既定で有効。`tool_ids_strict`で上書きしたツール一覧を完全なツールセットにできる。
- **SDK:** JavaScript/Python SDK v2.72.0とCLI v1.5.0が新オプションに対応。

## その後

エフェクトが組み込まれたことで、開発者は別の音声加工工程なしに生成音声の質感を調整でき、ターン予測は低遅延の音声エージェントを狙った機能とみられる。エフェクトの具体的な音質やターン予測の精度についてはチェンジログに詳細がなく、未公表である。
