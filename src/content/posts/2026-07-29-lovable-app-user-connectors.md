---
title: Lovable、アプリ利用者ごとに外部ツールを接続できる「App User Connectors」を発表
description: Lovableが、アプリの利用者一人ひとりが自分のGoogleやSlack、Salesforceなどの外部ツールを自分の権限のまま接続できる新機能「App User Connectors」を発表しました。認証情報はゲートウェイが仲介し、アプリやブラウザには渡らない設計です。
pubDate: 2026-07-29
category: lovable
type: news
tags: [Lovable, 連携機能, セキュリティ]
source: https://lovable.dev/blog/app-user-connectors
draft: false
importance: medium
---

Lovableが、Lovable製アプリの利用者ごとに外部ツールを接続できる新機能「App User Connectors」を発表しました。チームや顧客に共有するアプリの各利用者が、自分自身のGoogleやSlack、Salesforceなどのアカウントを自分の権限のまま接続できるようになり、開発者側で集中管理する認証の仕組みを別途構築する必要がなくなります。

## 詳細

- **解決する課題**: これまでLovableアプリを複数人で使う場合、外部サービスへのアクセス権をアプリ側で一元管理する必要があったが、App User Connectorsにより利用者本人が自分の既存の権限のまま外部ツールに接続できるようになる
- **仕組み**: 「コネクタゲートウェイ」が認証情報をリクエスト中だけ一時的に保持する設計で、認証情報がアプリ本体やブラウザに渡ることはない。各利用者は接続先ツールの認証画面で直接ログインするOAuth方式で、既存の権限体系をそのまま尊重する(Lovable側で新たな権限システムを作るわけではない)
- **対応ツール**: Google Workspace、Microsoft、Slack、Salesforce、HubSpot、Snowflake、Linear、Miro、Granolaなどが例として挙げられている
- **想定される使い方**: 通話録音と連携したCRMダッシュボードを作る営業チーム、ATS(採用管理システム)と連携した面接準備ツールを作るリクルーター、権限を意識したカスタムツールを作るサポートチームなどの事例が紹介されている
- **公開済みの事例**: Lumoo(ファッション)、Backchannel(採用)、Fire Fairness(保険)、Plinq(バックグラウンドチェック)、NHS向け医療アプリなどが既にこの仕組みを利用しているという

## 使ってみるには

- 開発者は接続したい外部プラットフォームにアプリを登録して認証情報を取得し、Lovableのワークスペースに追加するだけで、あとは通常通り開発を進められる
- サインインフロー・トークン管理・更新サイクルはLovable側が自動的に処理する
- 詳細はLovable公式ブログ(lovable.dev/blog/app-user-connectors)を参照
