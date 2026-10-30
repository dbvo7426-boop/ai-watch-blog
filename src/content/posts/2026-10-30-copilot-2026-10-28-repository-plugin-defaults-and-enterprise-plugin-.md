---
title: "リポジトリのプラグイン既定設定とエンタープライズ向けプラグイン制御が一般提供に"
description: "VS Code、Copilot CLI、GitHub Copilotアプリで、リポジトリが既定プラグインを配布でき、企業は管理設定でプラグインの必須化・ブロック・提供元制限ができるようになった。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [Copilot, プラグイン, エンタープライズ, Copilot CLI, VS Code]
source: https://github.blog/changelog/2026-10-28-repository-plugin-defaults-and-enterprise-plugin-controls-generally-available
draft: false
importance: medium
---

リポジトリのプラグイン既定設定と、企業管理のプラグイン制御が、VS Code、Copilot CLI、GitHub Copilotアプリで一般提供(GA)となりました。リポジトリ側でコントリビューター向けのプラグインを自動設定でき、企業は利用できるプラグインを統制できます。

## 詳細

- **リポジトリの既定設定:** メンテナーはプラグインのマーケットプレイスと既定プラグインを定義でき、コントリビューターがプロジェクトごとに設定を繰り返す必要がなくなります。信頼されたリポジトリでは既定プラグインがインストール・有効化されます。ポリシーが許す場合、コントリビューターは既定を無効にできます。
- **エンタープライズ制御:** 管理者は承認済みマーケットプレイスを指定し、管理設定でプラグインの必須化やブロックができます。必須プラグインは自動でインストール・有効化され、ユーザーは無効化できません。管理設定はリポジトリや個人の選択より優先されます。
- **提供対象:** リポジトリ既定設定は個人のCopilotユーザーとCopilot Business/Enterpriseユーザーが対象。管理制御は、GitHub Enterprise Cloudで、企業またはその組織が発行したCopilot Business/Enterpriseライセンスのユーザーが対象です。
- **対応環境:** VS Code、Copilot CLI、GitHub Copilotアプリ。

## その後

優先順位(管理設定、リポジトリ、個人の順)により、企業はエージェント用ツールを標準化しつつ、チームはリポジトリ経由でプロジェクトの環境を共有できます。プラグインが個人の利便性から、管理者が統制できる仕組みへ広がった形です。管理設定の形式やプラグインの審査方法などは、発表では触れられていません。
