---
title: "Google DeepMind、「Gemini Omni 1.1 Flash」を正式公開 ― 最大40秒のシーン延長、始点・終点フレーム補間、4K出力に対応"
description: "Google DeepMindは2026年8月27日、動画生成・編集モデル「Gemini Omni 1.1 Flash」を一般提供開始。最大40秒までのシーン延長、始点・終点フレーム間の補間、低コストな360pドラフト、4Kアップスケールを追加した。Veo 3.1と並ぶ、Googleの動画生成ラインナップの最新モデルだ。"
pubDate: 2026-08-27
category: veo
type: news
tags: [Google, GoogleDeepMind, GeminiOmni, Veo, GeminiAPI, Flow, 動画生成]
source: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
draft: false
importance: high
---

Google DeepMindは2026年8月27日、Google I/O 2026で発表した動画生成・編集モデルの正式版(GA)「Gemini Omni 1.1 Flash」をリリースしました。Veoの公式ページでは今もVeo 3.1が「最先端の動画生成モデル」と紹介されていますが、Googleの新しい動画機能はいまやOmniの系列に投入されるようになっています。1.1 Flashでは、長めの動画をより細かくコントロールできることに重点が置かれています。

## 詳細

- **モデルID**: `gemini-omni-1.1-flash`。Google AI StudioのGemini API(Interactions API)から利用でき、企業向けにはGemini Enterprise Agent Platformでも提供
- **シーン延長**: 直前の最大10秒分の映像を文脈として解析(従来は最後の1秒のみ)。10秒単位で延長でき、累計で最大40秒まで伸ばせる
- **始点・終点フレーム補間**: `image_to_video`タスクで2枚のキーフレーム間をつなぐ連続した動画を生成。カメラの回り込み、ズームトランジション、シームレスなループ映像などの用途を想定
- **360pドラフト**: 720pより最大60%速く生成でき、コストは約3分の1。絵コンテ作りや素早い試行錯誤向け
- **解像度指定**: 新しい`resolution`パラメータで360p/720p(デフォルト)/1080p/4Kを選択可能。1080pと4Kはアップスケールによる出力
- **動画リファレンス**: 最大3秒の動画をマルチモーダル入力として渡し、映像の文脈やキャラクターの一貫性を保てる
- **一般ユーザー向け提供**: 同日からGoogle Flowで、Google AI Plus/Pro/Ultraの契約者に全世界で提供開始。シーン延長は同じプランのGeminiアプリでも利用可能に
- **プレビュー版の終了**: 従来の`gemini-omni-flash-preview`エンドポイントは2026年9月30日に廃止予定とされた
- **パートナー**: AdobeがAdobe FireflyにGemini Omni Flashを統合済み。Figma Weave、GMI Cloud、Runwayも利用企業として紹介されている
- **Veoとの関係**: 発表ではVeoへの言及は一切なし。GoogleはVeo 4を発表しておらず、Veo 3.1ファミリー(Veo 3.1 Liteを含む)はGemini APIで引き続き提供されている

## その後

Gemini Omni 1.1 Flashは、2026年のGoogleの動画生成の主軸がどこにあるのかをはっきり示しました。「Veo 4」ではなく、会話による編集、複数回の延長、キーフレーム補間といった新機能はGemini Omniの名前で投入され、Veo 3.1は実績のあるテキスト/画像→動画モデルとして並走する形です。Soraが提供終了となったいま、Googleは尺の長さと制御性をめぐって快手のKling 4.0(1回で30秒生成)やByteDanceのSeedanceと競うことになります。最大40秒のシーン延長と安価な360pドラフトはそれに対するGoogleの回答であり、Adobe Fireflyへの統合は、このモデルがGoogle自社アプリの外のクリエイティブツールにも広がりつつあることを示しています。今後GoogleがVeoブランドをOmniに統合・整理していくのかどうかが注目点です。
