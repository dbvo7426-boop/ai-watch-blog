---
title: "ElevenLabs、エージェント向け高速LLMティア、v4音声のクローン強度、有効期限付きAPIキーを追加"
description: "10月26日のElevenLabs更新で、ElevenAgents向けの高速サービスティア、v4プロフェッショナルボイスクローンのclone_strength、ナレッジベースのクロール除外、有効期限付きサービスアカウントAPIキーが追加された。"
pubDate: 2026-10-26
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, Text to Speech, API, ボイスクローン]
source: https://elevenlabs.io/docs/changelog/2026/10/26
draft: false
importance: medium
---

ElevenLabsは10月26日、開発者向けの変更を複数公開しました。ElevenAgentsで使える高速だが割増料金のLLMサービスティア、v4プロフェッショナルボイスクローンが学習サンプルにどれだけ忠実かを調整する新設定、エージェントのナレッジベースにおけるサイトクロールの除外、有効期限付きのサービスアカウントAPIキーです。

## 詳細

- **高速LLMサービスティア:** ElevenAgentsは、対応するLLMを`fast`ティアで実行できます。トークン単価の割増と引き換えに、スループット向上と低遅延が得られます。Update agentのプロンプト設定で`service_tier`を`fast`にします。List LLMsの`available_service_tiers`でモデルごとの対応ティアを確認できます。既定は`standard`で、LLM使用量計算機も`service_tier`を受け付け、コスト差を見積もれます。割増率は変更履歴に記載がありません。
- **v4音声のクローン強度:** Text to SpeechとText to Dialogueが、v4モデル向けにファインチューニングしたプロフェッショナルボイスクローン用に`clone_strength`(0〜1)を受け付けます。`voice_settings`または`settings`で指定し、多くの用途で推奨値は0です。Text to Dialogueでは、v4のPVCをPVCとIVCのどちらで動かすかをこの値が決め、`use_pvc_as_ivc`は非推奨になりました。
- **有効期限付きAPIキー:** サービスアカウントのAPIキーは、作成・更新時に`expires_at_unix`を渡すか、ダッシュボードで「Expire after」を選ぶと期限を設定できます。期限は15分〜90日先で、省略すると無期限です。
- **ナレッジベースのクロール除外:** Create crawl jobに最大50件の`exclude_patterns`を渡せます。クロール対象パターンに一致しても、除外パターンに一致するURLはスキップされます。
- **その他:** Slack、Telegram、Custom Channel、Intercom連携がアルファから脱却。Slackエージェントはスレッドで返信を続けられます。`claude-sonnet-5-5`を分析用LLMに選択可能。Voice Changerは`/v1/voice-changer/{voice_id}`に移行し、旧speech-to-speechパスは非推奨。リアルタイムSpeech to Textは約0.19秒までの無音しきい値に対応。旧`/v1/dubbing`エンドポイントは非推奨。現行料金のBusinessプランは画像・動画秒あたりのクレジットが約17%減少。

## その後

高速ティアは、遅延を有料オプションとして売る流れの一例で、応答遅れが体感に直結する音声エージェントでは意味があります。有効期限付きキーとPVC/IVCの制御は、本番運用向けの堅牢化と品質調整の手段です。Voice Changerのパス、旧ダビングAPI、`use_pvc_as_ivc`などの非推奨があるため、API利用者は連携の確認が必要です。削除時期は公表されていません。
