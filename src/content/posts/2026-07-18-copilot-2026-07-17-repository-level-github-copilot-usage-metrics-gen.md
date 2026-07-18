---
title: "リポジトリ単位のCopilot利用状況メトリクスが正式提供開始"
description: "GitHub Copilotの利用状況メトリクスAPIに、リポジトリ単位で活用状況を追跡できる新エンドポイントが正式公開されました。コーディングエージェントとコードレビューの活用度をリポジトリごとに把握できます。"
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, API, 利用状況, エンタープライズ]
source: https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available
draft: false
---

GitHubが、Copilotの利用状況メトリクスAPIにリポジトリ単位の詳細レポート機能を正式公開(GA)しました。これまで組織・ユーザー単位までだった追跡範囲が広がり、「Copilotコーディングエージェントが作成・マージしたプルリクエスト数」「Copilot Code Reviewがレビューしたプルリクエスト数」を、リポジトリごとに日単位で把握できるようになります。

## 詳細

- **新エンドポイント(エンタープライズ)**: `GET /enterprises/{enterprise}/copilot/metrics/reports/repos-1-day?day=YYYY-MM-DD`
- **新エンドポイント(組織)**: `GET /orgs/{org}/copilot/metrics/reports/repos-1-day?day=YYYY-MM-DD`
- **取得できる指標**: Copilotコーディングエージェントによるプルリクエストの作成・マージ数、Copilot Code Reviewによるレビュー実施数を、リポジトリ単位・日単位で取得可能
- **狙い**: コードベース全体でのCopilot活用状況を可視化し、導入が進んでいないリポジトリへの支援などに活用できる
- **対象者**: エンタープライズオーナー、課金管理者、組織オーナー、および「Copilotメトリクスの表示」権限を持つカスタムロール保有者

## 使ってみるには

- 利用にはCopilot利用状況メトリクスポリシーの有効化が前提条件となる
- 上記エンドポイントへリクエストするだけで、既存の組織・ユーザー単位のメトリクスと同じAPIからリポジトリ単位のデータを取得できる
