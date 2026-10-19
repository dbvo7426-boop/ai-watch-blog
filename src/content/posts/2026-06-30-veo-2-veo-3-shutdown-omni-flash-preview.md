---
title: "Gemini APIでVeo 2とVeo 3.0が提供終了 ― 同日に「Gemini Omni Flash」がプレビュー公開"
description: "Googleは2026年6月30日、Gemini APIのveo-2.0およびveo-3.0系モデルIDを廃止し、開発者にVeo 3.1への移行を促した。同じ日には、動画生成と会話型編集に対応する「Gemini Omni Flash」のパブリックプレビューを開始している。"
pubDate: 2026-06-30
category: veo
type: news
tags: [Google, Veo, Veo3.1, GeminiOmni, GeminiAPI, 提供終了, 動画生成]
source: https://ai.google.dev/gemini-api/docs/changelog
draft: false
importance: medium
---

2026年6月30日は、Googleの開発者向け動画生成モデルにとって世代交代の日となりました。Gemini APIではVeo 2とVeo 3.0のエンドポイントが提供終了となり、VeoのラインナップはVeo 3.1に集約。同じ日に、Google I/O 2026で発表された動画生成・編集モデル「Gemini Omni Flash」のパブリックプレビューが始まりました。

## 詳細

- **6月15日に終了を告知**: Gemini APIの変更履歴で、`veo-2.0-generate-001`、`veo-3.0-generate-001`、`veo-3.0-fast-generate-001`を2026年6月30日に提供終了すると案内
- **移行先**: Veo 3.1のプレビュー版ID(`veo-3.1-generate-preview`、`veo-3.1-fast-generate-preview`)、またはGemini Enterprise Agent Platform上のVeo 3.1 GA版への移行を推奨
- **残るVeoのラインナップ**: 今回の終了後、Gemini APIで使えるVeoはVeo 3.1ファミリー(Veo 3.1、Veo 3.1 Fast、そして2026年3月31日からプレビュー提供中で「最もコスト効率の高い」Veo 3.1 Lite)となる。なおVeoは2026年1月に4K出力と縦型動画の対応拡大を受けている
- **Gemini Omni Flashのプレビュー**: 同日、高速な動画生成と会話による動画編集を担うモデル`gemini-omni-flash-preview`を公開
- **プレビュー版の機能**: Interactions API経由で、テキストから3〜10秒・720pの動画を生成したり、静止画を動かしたりでき、その結果を対話形式で修正していける
- **Veo 4はなし**: 変更履歴にVeo 4は登場せず、OmniがVeoの後継だとする記述もない。両者はあくまで別モデルとして掲載されている

## その後

Veo 2と3.0の終了によって、新しいモデルファミリーが並び立つタイミングでGoogleの動画APIは整理されました。その約2か月後の8月27日、Gemini Omniは`gemini-omni-1.1-flash`として正式版となり、最大40秒のシーン延長、フレーム補間、4Kアップスケールを追加。プレビュー版エンドポイントは9月30日で廃止される予定となりました。Veo 3.1は今もGoogleの看板動画モデルとして掲載されていますが、新機能がOmni側に集まり、Veo 4も発表されていない現状を踏まえると、Veoで開発している開発者は3.1ファミリーが先代と同じように廃止の道をたどるかどうかを注視しておく必要がありそうです。
