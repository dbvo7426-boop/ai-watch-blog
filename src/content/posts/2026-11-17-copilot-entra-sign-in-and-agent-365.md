---
title: "Copilot CLIがMicrosoft Entraサインインに対応、CopilotのアクティビティをAgent 365へ連携"
description: "Microsoft Ignite週の企業向け2件。Copilot CLIのEntraサインイン(パブリックプレビュー)と、Copilotエージェント活動のMicrosoft Agent 365へのストリーミングです。"
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, Microsoft Entra, Agent 365, エンタープライズ]
source: https://github.blog/changelog/2026-11-17-github-copilot-cli-adds-microsoft-entra-sign-in-as-a-preview
draft: false
importance: medium
---

GitHubは2026年11月17日、Microsoftとの企業向け連携を2件発表しました。

## Copilot CLI: Microsoft Entraサインイン(パブリックプレビュー)

EntraアカウントでCopilot CLIにサインインし、リンクされたGitHub Enterprise Managed User(EMU)アカウントへのサイレント認証、Microsoft 365 Copilotライセンスの利用、またはその両方ができます(組織の権限による)。WindowsとmacOSで利用でき、Linuxは対応予定です。

- **EMUユーザー(GitHub推論):** OIDCでEMUを使う企業は、別途GitHubにサインインせずにサイレントSSOできます。Copilot BusinessまたはEnterpriseのライセンスが必要で、組織がCopilot CLIポリシーを有効にする必要があります。このSSOはCopilot CLIとVS Codeでのみ動作します。GitHub Enterprise CloudでEnterprise Managed Authorizationの有効化が必要です。
- **Microsoft 365 Copilot(Microsoft推論):** 使用量ベース課金のMicrosoft 365 Copilotライセンスを持つFrontier参加組織は、GitHubアカウントなしでターミナルからMicrosoft Copilot経由のモデルを利用できます。モデルへのアクセスや利用上限はMicrosoft 365 Copilotの設定で管理し、Work IQ MCPサーバーでMicrosoft 365の業務データをコンテキストとして使えます。

Copilot CLI 1.0.113以降が必要です(`copilot update`)。

## CopilotのアクティビティをMicrosoft Agent 365へ

GitHub Enterprise CloudでEnterprise Managed Usersを使う企業は、CopilotエージェントのアクティビティをMicrosoft Agent 365へストリーミングできます。管理者は、GitHub.com上のクラウドエージェント、Copilot CLI、VS Code、Visual Studio、JetBrainsやEclipseなどのパートナーIDEにまたがる活動を確認し、プロンプト、応答、ツール呼び出しを含むユーザーセッションを確認し、利用傾向を把握し、Microsoft PurviewとDefenderで追加のリスク情報を得られます。設定は「Streaming the audit log for your enterprise」ガイドに従います。料金と展開時期は公開されていません。
