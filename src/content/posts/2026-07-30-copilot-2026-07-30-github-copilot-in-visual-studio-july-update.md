---
title: "GitHub Copilot for Visual Studio、7月アップデートで新エージェントと.NET/Azureチーム監修の内蔵スキルを追加"
description: "GitHubがVisual Studio向けGitHub Copilotの7月アップデートを公開。Copilot SDKベースの新エージェント(プレビュー)、.NET/Azureチーム監修の内蔵スキル、コードレビュー機能などが追加された。"
pubDate: 2026-07-30
category: copilot
type: news
tags: [Copilot, Visual Studio, GitHub, .NET, Azure]
source: https://github.blog/changelog/2026-07-30-github-copilot-in-visual-studio-july-update
draft: false
importance: medium
---

GitHubは、Visual Studio向けGitHub Copilotの2026年7月アップデートを公開した。GitHub Copilot CLIと同じCopilot SDKを基盤とする新エージェント(プレビュー)に加え、.NETやAzureチームの専門知識を組み込んだ内蔵スキル、コードレビュー機能の強化などが追加されている。

## 詳細

- **Copilot SDKベースの新エージェント(プレビュー)**: GitHub Copilot CLIを支えるのと同じCopilot SDK上に構築された新しいエージェント。「一度でより多くのタスクを正しくこなし、やり取りの往復を減らす」ことを目指しており、応答も「短く読みやすい」内容になるよう設計されている。Copilot Chatウインドウ下部のエージェント選択メニューから切り替え可能
- **.NET/Azureチーム監修の内蔵スキル**: .NETおよびAzureチームの専門家があらかじめ作成したスキルをVisual Studioに標準搭載。該当するワークロードがインストールされている場合、ツールピッカーの「Built-in」カテゴリに表示される。ただしデフォルトでは無効化されており、開発者は自分のワークフローに合ったものだけを選んで有効化できる
- **選択範囲のコードレビュー**: コードを選択して右クリックし、「Copilot Actions」→「Review Selection」を選ぶと、GitHub Copilotのコードレビュー機能によるインラインコメントと具体的な改善提案を受け取れる
- **組織単位のカスタム指示**: 組織オーナーが組織内の全リポジトリに適用されるカスタム指示を設定できるようになり、開発者ごとに個別設定する手間が不要に
- **提供範囲**: 新エージェント、内蔵スキル、コードレビュー機能はCopilotの全プランで利用可能。組織単位のカスタム指示はGitHub Copilot BusinessまたはEnterpriseが必要

## 使ってみるには

- Visual Studioを最新版に更新し、Copilot Chatウインドウ下部のエージェント選択メニューから新エージェント(プレビュー)を選ぶ
- .NETやAzure関連のワークロードを導入済みなら、ツールピッカーの「Built-in」カテゴリから必要なスキルを有効化する
- コードを選択して右クリックし、「Copilot Actions」→「Review Selection」でその場でコードレビューを受けられる
- 組織全体にカスタム指示を適用したい場合は、Copilot Business/Enterpriseの管理者権限で設定を行う
