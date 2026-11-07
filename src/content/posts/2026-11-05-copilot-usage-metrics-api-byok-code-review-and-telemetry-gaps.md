---
title: "Copilot 利用状況メトリクス API に BYOK、コードレビュー対応率、テレメトリ欠落のフィールドが追加"
description: "Copilot 利用状況メトリクス API の 3 つの更新により、BYOK とカスタムモデルの利用を分離し、Copilot コードレビューのコメントへの対応状況を追跡し、テレメトリ欠落や古いクライアントのユーザーを特定できます。"
pubDate: 2026-11-05
category: copilot
type: news
tags: [Copilot, 利用状況メトリクスAPI, BYOK, コードレビュー, エンタープライズ]
source: https://github.blog/changelog/2026-11-03-byok-and-enterprise-custom-models-in-the-copilot-usage-api
draft: false
importance: medium
---

GitHub は 11 月 3 日から 5 日にかけて、Copilot 利用状況メトリクス API に 3 つの機能を追加しました。bring your own key (BYOK) の利用の把握、Copilot コードレビューの指摘が実際に対応されたかの測定、レポートが不完全なユーザーの特定に役立ちます。

## BYOK とエンタープライズカスタムモデル（11 月 3 日）

- **ローカル BYOK:** 開発者が設定した独自キーやローカルモデル（Ollama、Foundry Local、LM Studio、llama-server など）を Copilot CLI や Copilot アプリから使う場合です。`used_local_byok`、`totals_by_local_byok`（`byok_kind` と `surface` で内訳）、日次・週次・月次のアクティブなローカル BYOK ユーザー数が追加されました。
- **エンタープライズカスタムモデル:** 管理者が設定し、GitHub 経由でルーティングされるモデルです。`totals_by_client[].totals_by_model[]` の各エントリにブール値 `is_custom_enterprise_model` が加わり、IDE を含むすべてのクライアントを対象にします。
- **対象範囲:** エンタープライズおよび組織のレポート（ユーザー単位と集計、1 日と 28 日）。既存の合計値は変わらず、過去分の遡及はありません。
- **注意点:** ローカル BYOK はクライアントのテレメトリに依存するため下限値です。トークン数を報告しないローカルプロバイダーもあります。認識できないカスタムモデル名は `unknown` と表示されます。

## コードレビューの詳細と対応率（11 月 5 日）

- リポジトリ単位レポートの `repos-1-day` 各行に、新しい `copilot_code_review` オブジェクトが加わります。
- `total_comments_evaluated` と `total_comments_addressed` から、リポジトリごとの対応率を算出できます。提案を適用した、Copilot に修正を依頼した、コードを編集した、後続の PR で直すと返信した場合に「対応済み」と数えます。
- 重大度、レビュー階層（`lite`、`balanced`、`max`）、コメント種別（`bug`、`security`、`custom` など）、カスタマイズ（カスタム指示、スキル、MCP サーバー、なし）別の内訳があります。
- `total_merged_no_human_change_request_after_review` は、Copilot がレビューしてマージされた PR のうち、その後に人から変更依頼がなかった数です。
- コメントは PR のマージ時に評価され、ボットが作成した PR のコメントは通常評価されません。

## テレメトリとバージョンの欠落（11 月 5 日）

- ユーザー単位の `client_telemetry_present` と `usage_metrics_requirements`（各 IDE や拡張機能を最低バージョンに対して `met`、`unmet`、`unknown` で表示）。
- 日次の `missing_client_telemetry_user_count` と `below_usage_metrics_minimum_user_count`。両者は重複しうるため、合算してはいけません。
- テレメトリのないユーザーもアクティブとして数えられますが、コード行数やモデル別内訳などの詳細は欠けます。主な原因は古いエディタ、IDE テレメトリの無効化、プロキシやファイアウォールです。

## アクセス権

エンタープライズオーナー、エンタープライズ請求マネージャー、組織オーナー、View Copilot Metrics 権限を持つカスタムロールの保持者が対象で、Copilot 利用状況メトリクスのポリシーが有効である必要があります。
