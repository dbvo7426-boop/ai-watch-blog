---
title: "ElevenAgents、並列ツール呼び出し・Slack通知・gpt-6-astraオプションを追加"
description: "ElevenLabsの9月21日付チェンジログで、ElevenAgentsが1ターン内での並列ツール実行に対応し、PagerDuty・Webhookに加えてSlackチャンネルへのアラート通知が可能に。エージェントLLMにgpt-6-astraも追加された。"
pubDate: 2026-09-21
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, 音声AI, Slack, エージェントツール]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: low
---

ElevenLabsは2026年9月21日、音声エージェント基盤ElevenAgentsに3つの変更を加えました。狙いは本番環境でのエージェントをより高速に、より監視しやすくすることです。並列ツール実行、新しい通知チャンネル、そして追加のLLMオプションが導入されました。

## 詳細

- **並列ツール呼び出し**: 対応モデルを使うエージェントは、1回の会話ターン内で複数のツールを順番にではなく並列に実行できるようになった。新しいブール値パラメータ`enable_parallel_tool_calls`(デフォルトは`true`)で制御する
- **gpt-6-astraを追加**: 既存の選択肢に加えて、gpt-6-astraがエージェントLLMとして選択可能になった
- **Slack通知**: エージェントのアラート機能が、既存のPagerDuty・汎用Webhookに加えてSlackチャンネルへの通知にも対応
- **電話番号検索**: プロバイダー、アウトバウンド対応可否、割り当てエージェント、ブランチ、ラベルで絞り込める、カーソルページネーション対応の新しいエンドポイントを追加

## その後

今回の変更はElevenAgents単体の大型リリースというより、既存のツール呼び出し・運用機能に対する漸進的な改善ですが、大規模にエージェントを運用するチームにとっては意味のある内容です。並列ツール呼び出しにより、複数の検索やアクションが必要なターンのレイテンシーが短縮されることが見込まれ、Slack通知は多くのサポート・運用チームがPagerDutyと並んで日常的にチェックしているチャンネルにエージェント監視を組み込みます。この更新は、ElevenLabsがSpeech Engineのリトライタイムアウトやターン境界マーカーも改訂した同じ週に行われたもので、9月を通じて続いているインフラレベルのチェンジログ更新の一環です。
