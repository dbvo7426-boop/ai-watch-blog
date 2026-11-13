---
title: "ElevenLabsが音声認識モデル「Scribe v3」と「Scribe v3 Live」を公開"
description: "Scribe v3は録音済み音声向け、Scribe v3 Liveはリアルタイム文字起こし向けです。Scribe v3はFLEURSでScribe v2より単語誤りが27%少ないとされています。同じ更新でElevenAgents向けUnity SDKも加わりました。"
pubDate: 2026-11-09
category: elevenlabs
type: news
tags: [ElevenLabs, Scribe v3, 音声認識, ElevenAgents]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabsは2026年11月9日の変更履歴で、Speech to Text APIに2つのモデルを追加しました。

## Scribe v3とScribe v3 Live

- **Scribe v3:** 録音済み音声向けです。FLEURSベンチマークでScribe v2より単語誤りが27%少ないとされ、`numbers_format`と`secondary_language_codes`のオプションが加わりました。
- **Scribe v3 Live:** リアルタイム文字起こし向けです。ターン予測、多言語モード、最大1万語のキーターム・ライブラリが加わりました。
- **Scribe v2:** どちらもScribe v2系モデルの後継で、Scribe v2系も引き続き利用できます。

## ElevenAgentsの更新

- **Unity SDK:** パッケージ`io.elevenlabs.agents`がv0.1.0で登場しました。デスクトップ、WebGL、Unityエディターに対応し、iOS、Android、XRはベータです。Unity 6.3 LTS以降が必要です。
- **コードでワークフロー構築:** PythonとJavaScriptのSDK(v2.77.0)の`Workflow`ビルダーで、ElevenAgentsのワークフローをコードで作れます。
- **ホスト型MCP:** 24個の新しいツールで、MCPクライアントがエージェントの分析、設定、インサイト、アラート、会話数を確認できます。システムプロンプトや最初のメッセージの検索置換・追記も、ブランチの下書きとして行えます。

そのほか、Speech Engineの`auth.enable_auth`オプション、Studioの3:4と4:3の縦横比、効果音のプラン別同時実行制限などが加わりました。
