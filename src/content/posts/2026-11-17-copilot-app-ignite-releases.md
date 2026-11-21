---
title: "GitHub CopilotアプリがAzure DevOps対応とブラウザー操作(パブリックプレビュー)を追加"
description: "Microsoft Ignite向けのCopilotアプリ更新。Azure DevOpsリポジトリとブラウザー操作がパブリックプレビューに、GitHub Enterprise Server対応が一般提供になりました。"
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Copilotアプリ, Azure DevOps, ブラウザー操作]
source: https://github.blog/changelog/2026-11-17-github-copilot-app-microsoft-ignite-releases
draft: false
importance: medium
---

GitHubは2026年11月17日、GitHub Copilotアプリに3つの更新を出しました。

**Azure DevOpsリポジトリ(パブリックプレビュー):** Azure DevOpsのリポジトリをクローンし、エージェントにブランチ作成、変更、プルリクエスト作成をさせられます。サイドバーで状況を追跡でき、レビューコメントの「Fix」をクリックするとエージェントが対応します。エージェントマージを有効にすると、CIの失敗を修正し、チェックとポリシーを満たした時点でPRを完了させます。設定はSettings > ExperimentalでAzure DevOps integrationをオンにし、Accountsでアカウントを追加してMicrosoftアカウントでサインインします。Azure DevOpsリポジトリではクラウドセッションは使えません。

**ブラウザー操作(パブリックプレビュー):** サインイン済みのブラウザーで、Copilotがフォーム入力、Webページからの情報取得、開発中のWebアプリのテストやデバッグを行えます。GitHub Copilot Chrome拡張機能を通じて、Google ChromeやMicrosoft EdgeなどのChromium系ブラウザーで、分離されたタブグループ内で動作し、コンピューター操作と併用できます。既定ではオフで、拡張機能をインストールしたうえで、Settings > Computer UseでEnable Computer UseとEnable Browser Useの両方を有効にします。権限レベルは拡張機能の設定で管理します。ブラウザー操作はCopilot CLI、VS Code、JetBrains IDEでも利用できます。

**GitHub Enterprise Server(一般提供):** GHESアカウントのリモートリポジトリ、Issue、プルリクエストを扱えます。オプトインのプレビューからGAになりました。Copilotアプリ1.2.0以降が必要で、GitHub.comまたはGHE.comのアカウントでサインインし、Settings > AccountsでGitHub Enterprise Serverを追加します。GHESではクラウドセッションは使えません。
