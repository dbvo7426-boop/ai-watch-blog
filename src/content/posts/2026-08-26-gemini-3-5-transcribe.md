---
title: "Google、85言語以上に対応した音声認識モデル「Gemini 3.5 Transcribe」を発表"
description: "Googleが新しい音声認識モデル「Gemini 3.5 Transcribe」を発表。文字起こしを自動整形し、最大3人の話者をタイムスタンプ付きで識別。単語誤り率をストリーミング4.0%・録音済み2.6%まで下げ、レイテンシも従来比70%改善した。"
pubDate: 2026-08-26
category: gemini
type: news
tags: [Gemini, Google, GeminiTranscribe, 音声認識, GoogleAIStudio]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5-transcribe/
draft: false
importance: high
---

Googleは新しい音声認識モデル「Gemini 3.5 Transcribe」を発表しました。生の音声データを、リアルタイム・録音済みの両方に対応しながら、正確で読みやすく整形されたテキストへと直接変換します。

## 詳細

- **スマートな文字起こし**: 話者の言い直しを自動的に処理し、フィラー(「えー」「あの」など)を除去、生の逐語録ではなく整形済みのテキストとして出力
- **複数話者の識別**: 録音内の最大3人の異なる話者を識別し、タイムスタンプ付きで発話を割り当て
- **関数呼び出しとカスタム語彙**: 複雑な後続タスクを他のGeminiモデルに委譲でき、専門用語や特殊な綴りにも対応
- **対応言語**: 85言語以上を自動検出し文字起こし可能
- **ベンチマーク結果**: 単語誤り率(WER)はストリーミングで4.0%、録音済みで2.6%を記録し、文字起こしのレイテンシは前モデル比70%改善。FLEURSベンチマークではストリーミング5.50%、非ストリーミング5.04%のWER
- **提供状況**: 開発者向けにはGoogle AI StudioおよびGoogle Antigravityでパブリックプレビューを提供、企業向けにはGemini Enterprise Agent Platformでパブリックプレビューを提供。一般ユーザー向けには、macOS版Geminiアプリおよび一部の国・言語向けAndroid版「Rambler」アプリから展開を開始し、Chrome対応も近日予定

## その後

「Gemini 3.5 Transcribe」により、Googleはリアルタイム文字起こしや音声エージェント関連ツールの領域でより直接的に競争できる立場になります。この分野では対応言語数だけでなく、レイテンシと複数話者の識別精度が同じくらい重要です。Chromeや「Rambler」の対象市場拡大については、今後の展開が待たれます。
