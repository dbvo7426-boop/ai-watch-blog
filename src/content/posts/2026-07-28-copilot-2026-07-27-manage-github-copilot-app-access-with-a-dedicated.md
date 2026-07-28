---
title: GitHub Copilotアプリのアクセス権限を専用ポリシーで一元管理可能に
description: "GitHub Copilotアプリに、Copilot CLIとは独立した専用のアクセス管理ポリシーが追加。エンタープライズ・組織単位で「全社有効化」「全社無効化」「組織に委任」を選択できるようになりました。"
pubDate: 2026-07-27
category: copilot
type: news
tags: [Copilot, エンタープライズ, ガバナンス, アクセス管理]
source: https://github.blog/changelog/2026-07-27-manage-github-copilot-app-access-with-a-dedicated-policy
draft: false
importance: low
---

GitHubは2026年7月27日、GitHub Copilotアプリへのアクセスを、Copilot CLIとは切り離して専用のポリシーで管理できるようになったと発表しました。顧客からの「クライアントごとに個別管理したい」という要望を受けた対応で、エンタープライズ・組織それぞれの単位でアクセス可否を設定できます。

## 詳細

- **背景**: これまでCopilotアプリはCopilot CLIと同じ設定でまとめて管理されていたが、顧客からクライアントごとに独立して管理したいという要望があり、専用ポリシーとして分離
- **管理レベル**: エンタープライズ単位・組織単位の両方でポリシーを設定可能。管理者は自ら方針を決めるか、組織側の判断に委ねるかを選べる
- **設定できる選択肢**: 「全社で有効化(Enabled everywhere)」「全社で無効化(Disabled everywhere)」「組織に判断を委任(Let organizations decide)」の3択
- **デフォルト設定**: 「全社で有効化」がデフォルトのため、特に変更が不要な組織は何もしなくてよい
- **設定手順**: エンタープライズまたは組織の設定画面から「AI Controls」タブを開き、「Copilot Clients」セクション内でCopilotアプリのポリシーを選択
- **既存機能との連携**: Copilotアプリは既存のエンタープライズ管理設定とも連携しており、プラグイン制限などの開発者向けガードレールを他のCopilotクライアント(CLI、VS Codeなど)と一貫して適用できる

## 使ってみるには

- エンタープライズまたは組織の設定画面から「AI Controls」→「Copilot Clients」→Copilotアプリのポリシーを選択するだけで設定可能
- デフォルトは「全社で有効化」のため、現状維持でよい組織は対応不要
- アクセスを制限したい、または組織ごとに判断を委ねたい場合は、管理者権限を持つユーザーが設定を変更する
