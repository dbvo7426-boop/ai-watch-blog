---
title: "Google、Gemini画像生成モデルを高速・低価格に刷新した「Nano Banana 2.1」を発表"
description: "GoogleがGemini APIで一般提供を開始した「gemini-nano-banana-2.1」は、4K出力や14枚までの参照画像合成、テキスト描画の改善、検索グラウンディングに対応。Geminiアプリ、AIモード、Flow、Stitch、Google広告にも順次展開される。"
pubDate: 2026-10-06
category: gemini
type: news
tags: [Gemini, Google, NanoBanana, 画像生成, GeminiAPI]
source: https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1
draft: false
importance: medium
---

Googleは画像生成・対話型編集モデルの新版「Nano Banana 2.1」を、Gemini APIにおいて「gemini-nano-banana-2.1」として発表しました。従来モデルの「gemini-3.1-flash-image」は非推奨となりました。

## 詳細

- **モデル**: `gemini-nano-banana-2.1`。Googleは「最新の高効率な画像生成・対話型編集モデル」と説明しており、上位モデルNano Banana Proに対する効率重視版という位置づけ
- **解像度**: 1K(デフォルト)・2K・4Kでの出力に対応し、1:4、4:1、1:8、8:1といったワイド・パノラマ比率も含む。以前報告されていたタイリングによる不具合も修正済み
- **参照画像**: 最大14枚の参照画像を同時に合成するマルチ画像フュージョンに対応し、会話を通じて最大4人のキャラクターと10個のオブジェクトの一貫性を維持できる
- **その他の機能**: Google ウェブ検索・画像検索によるグラウンディング、思考レベルの設定(最小・中・高)、Batch API対応。入力トークン上限は131,072、出力トークン上限は32,768で、テキスト・画像・動画・PDFの入力を受け付ける
- **品質面の主張**: Googleは、従来のNano Banana 2と比べて画質・リアリズム、テキスト描画、インフォグラフィックのレイアウト精度が向上したとしている
- **提供状況**: Gemini APIで一般提供を開始済みで、Geminiアプリ、検索のAIモード、Google AI Studio、Flow、Stitch、Google広告、Gemini Enterprise Platformにも順次展開中

## その後

今回のリリースは、年内に投入されたNano Banana 2に続く、Googleの画像生成ラインの急速な反復開発サイクルを示すものです。他の主要AI企業もそれぞれマルチモーダル・エージェント型の画像ツールを強化しており、画像生成・編集は今四半期、大手AI各社が最も激しく競い合う領域の一つであることを改めて浮き彫りにしています。
