---
title: "GitHub Copilotアプリの利用状況、メトリクスAPIのユーザー別レポート集計にも反映へ"
description: "GitHub Copilot利用状況メトリクスAPIで、これまでエンタープライズ全体の合計値のみだったCopilotアプリの利用実績が、ユーザー単位の内訳やフィーチャー・モデル・言語別のレポート集計にも反映されるようになった。"
pubDate: 2026-07-28
category: copilot
type: news
tags: [Copilot, GitHub, 利用状況分析, API, エンタープライズ]
source: https://github.blog/changelog/2026-07-28-github-copilot-app-usage-metrics-now-expand-across-report-rollups
draft: false
importance: low
---

GitHubは、Copilot利用状況メトリクスAPIにおけるCopilotアプリの利用実績の扱いを拡張したと発表した。これまではエンタープライズ全体の合計値としてしか表示されていなかったCopilotアプリの利用データが、ユーザー単位の内訳や標準的なレポート集計にも組み込まれるようになる。

## 詳細

- **変更点**: 従来Copilotアプリの利用状況はエンタープライズ全体の合計値としてのみ確認できたが、今回の更新でユーザー単位の内訳や既存のレポート集計に統合された
- **追加された主なフィールド・指標**:
  - `used_copilot_app`: ユーザーがその日にCopilotアプリを利用したかどうかを示すフラグ
  - `totals_by_copilot_app`: セッション数・リクエスト数・プロンプト数・トークン使用量など、ユーザー単位のCopilotアプリ利用指標
  - フィーチャー別・モデル別・言語別のロールアップに `copilot_app` という値が新たに登場
  - コード生成数・コード行数の指標にもCopilotアプリでの活動が反映されるように
  - `daily_active_users` の集計が、Copilotアプリのみを利用したユーザーもカウントするよう更新
- **対象レポート**: enterprise-user、organization-user、enterprise、organization、userの各レポート。1日単位・28日単位の両方のウィンドウで反映
- **アクセス条件**: エンタープライズオーナー、請求管理者、組織オーナー、または「View Copilot Metrics」権限を持つカスタムロール保持者が対象。Copilot利用状況メトリクスのポリシーが有効になっている必要がある
- **互換性**: Copilotアプリの利用実績がないエンティティでは新しいフィールドが単純に省略されるため、既存のデータ構造やインテグレーションはそのまま維持される

## 使ってみるには

- 上記の条件を満たす管理者であれば、既存のCopilot利用状況メトリクスAPI呼び出しに対して自動的に拡張された内訳データが返るようになる。特別な設定変更は不要
- フィールドの詳細な定義や対象レポートの一覧は、GitHub Changelogの一次情報を参照
