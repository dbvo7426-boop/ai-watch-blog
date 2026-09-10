---
title: "ElevenLabs、Agentsプラットフォームに会話トリアージチケットとTwilio留守電検知を追加"
description: "ElevenLabsの9月7日アップデートで、ElevenAgentsにワークスペース横断の会話トリアージチケット、動的フィルター、発信通話向けのTwilio留守電検知機能が追加。SDK・CLIも更新。"
pubDate: 2026-09-07
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, 音声AI, Twilio, 開発者ツール]
source: https://elevenlabs.io/docs/changelog/2026/9/7
draft: false
importance: medium
---

ElevenLabsは2026年9月7日、AIボイスエージェント基盤「ElevenAgents」向けに一連のアップデートを実施しました。会話トリアージ機能、動的フィルタリング、発信通話向けの留守番電話検知を追加し、大規模なカスタマーサポートや発信業務でAIボイスエージェントを運用するチームを直接の対象としています。

## 詳細

- **会話トリアージチケット**: アカウント内の全エージェントを横断してトリアージチケットを取得できる新エンドポイントを追加。ステータスや担当者でのフィルタリング、1ページ最大100件のカーソルベースページネーションに対応
- **動的変数フィルター**: 会話一覧とメッセージ検索で、`name:op:value` 形式の繰り返し指定可能なフィルターに対応。数値には等価・比較演算子(`eq`、`gt`、`gte`、`lt`、`lte`)を使用できる
- **TwilioによるAnswering Machine Detection**: 発信通話で留守番電話検知を2モードで有効化可能に。即座に判定を返す`enable`モードと、留守電の応答メッセージ終了を待つ`detect_message_end`モードがあり、結果は新設のWebhookイベントで通知される
- **エージェントメタデータ・ナレッジベースの更新**: ブランチのレスポンスにドラフト作成日時とバージョン管理情報を追加。RAGのクエリチャンクには`source_url`フィールドが必須化。WebSocketの`agent_response`イベントでは、URL・名前・MIMEタイプを含む任意の添付ファイルに対応
- **データ収集の仕様変更**: プロパティは動的変数を参照する`allowed_values`フィールドを使用する形に変更され、旧フィールド名は非推奨に
- **SDK・CLIの更新**: JavaScript・Python・CLIの各SDKが動的変数対応と型定義の再生成を伴うバージョンアップ。CLIには`elevenlabs say`コマンドが追加され、デフォルトのTTSモデルが`eleven_v3`に変更

## その後

これらのアップデートはElevenLabsのAPI・SDK・CLI全体で既に反映されており、変更履歴として公開されています。特にAnswering Machine Detectionは、発信型ボイスエージェント運用における長年の課題であった「生身の応答者と留守番電話の判別」に対応するものです。新設のチケット機能やフィルタリング機能と合わせて見ると、ElevenLabsがElevenAgentsを単なる会話AIのデモ的な機能にとどめず、エンタープライズ向けコンタクトセンター領域へさらに押し進めようとしていることがうかがえます。
