---
title: Gemini APIの「Managed Agents」、「Gemini 3.6 Flash」対応や環境フック、無料枠利用に対応
description: Googleが、Gemini APIの「Managed Agents」を拡充。新たなデフォルトモデルとして「Gemini 3.6 Flash」を採用したほか、実行前後のフック機能、予算制御、スケジュール実行、無料枠での利用を追加した。
pubDate: 2026-07-28
category: gemini
type: news
tags: [Gemini, Gemini API, Managed Agents, 開発者向け]
source: https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/
draft: false
importance: medium
---

Googleは、Gemini APIの自律エージェント機能「Managed Agents」に一連の機能強化を発表しました。開発者がより高性能で制御しやすい自律エージェントを構築できるようにする狙いで、デフォルトモデルを「Gemini 3.6 Flash」に刷新したほか、環境フック・予算制御・スケジュール実行・無料枠での利用対応を追加しています。

## 詳細

- **新デフォルトモデル**: Managed Agentsのデフォルトが「Gemini 3.6 Flash」に変更された。コーディング・推論・マルチモーダル解析・繰り返しのツール利用に最適化されており、「Gemini 3.5 Flash」よりも少ない推論ステップ・ツール呼び出し・デバッグの往復でエージェントタスクを完了できる。コスト最適化を重視する場合は引き続き「Gemini 3.5 Flash」や「3.5 Flash-Lite」も選択可能
- **環境フック**: エージェントのツール呼び出しの前後にカスタムスクリプトを実行できる機能。実行前フックはコード実行やファイル書き込みといった操作を検査・ブロックでき、実行後フックは生成されたコードの自動リント、出力の監査、ファイルの検証、外部エンドポイントへの結果送信などを自動化できる
- **予算制御**: 新設定「max_total_tokens」により、暴走したタスクを防止。上限に達すると処理は安全に一時停止し、`status: "incomplete"`が返される
- **スケジュール実行**: cron形式のスケジュールで定期タスクを実行できるようになり、実行間でサンドボックス環境の状態も保持される
- **無料枠での利用**: Managed Agentsが無料枠のGemini APIキーでも利用可能になり、試用のハードルが下がった
- **Environments API**: サンドボックスセッションをプログラムから一覧表示・検査・削除できる新しいAPIも追加

## 使ってみるには

- Gemini APIのManaged Agentsから今すぐ利用可能
- 無料枠のAPIキーを持つ開発者は、有料プランなしでManaged Agentsを試すことができる
- 環境フック、`max_total_tokens`による予算設定、cronベースのスケジュール実行は、いずれもエージェント設定内から直接構成できる
