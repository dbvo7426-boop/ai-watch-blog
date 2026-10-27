---
title: "GitHub Copilot、GitHub Apps向けサーバー間認証をパブリックプレビューで提供"
description: "組織にインストールしたGitHub Appが、ログイン中ユーザーの資格情報ではなくインストールトークンでCopilot SDKを呼び出せるようになった。利用料は組織に課金される。"
pubDate: 2026-10-27
category: copilot
type: news
tags: [Copilot, GitHub Apps, Copilot SDK, 認証]
source: https://github.blog/changelog/2026-10-27-github-copilot-supports-server-to-server-authentication
draft: false
importance: medium
---

GitHubは2026年10月27日、組織にインストールされたGitHub App向けに、GitHub Copilotがサーバー間認証に対応したと発表した。パブリックプレビューとして提供される。GitHub Copilot SDKで作ったエージェントやサービスが、個人ユーザーの資格情報に頼らず、組織としてリクエストを送れる。

## 詳細

- **目的:** 認証と利用状況が個人ではなくワークロードに紐づく。
- **セットアップ:** GitHub Appに読み取り専用の組織権限「Copilot Requests」を付与し、組織にインストールしたうえで、短期のインストールアクセストークンをSDKに渡す。
- **課金と制御:** 利用はインストール元の組織に帰属・課金される。組織のモデルポリシー、予算、支出制御が適用される。
- **管理者の監督:** 組織オーナーはアクセス権を持つアプリを確認でき、AI利用状況CSVレポートの`app_client_id`フィールドでアプリ別の利用を把握できる。アプリの停止またはアンインストールでアクセスを取り消せる。
- **ステータス:** パブリックプレビュー。組織課金以外の料金面は未公開。

## その後

これまで、Copilotを使う自動化エージェントは個人のログインを借りる形になりがちで、責任の所在が曖昧になり、担当者が離れると利用も止まる恐れがあった。アプリ単位のトークンにより、IDがワークロード側に移り、管理者は既存の予算やポリシー制御をそのまま使える。無人のボットやCI型サービスでCopilot SDKを使いやすくなる点も大きい。一般提供への移行時期は未公開。
