---
title: "Copilotのカスタマイズの取得元をプラグインに限定可能に(エンタープライズ管理者向け)"
description: "新設定strictPluginOnlyCustomizationで、Copilot BusinessおよびEnterpriseのメンバーによる個別のユーザー/プロジェクト設定を禁止できます。"
pubDate: 2026-11-16
category: copilot
type: news
tags: [GitHub Copilot, エンタープライズ, プラグイン, 管理者]
source: https://github.blog/changelog/2026-11-16-control-where-github-copilot-customizations-come-from
draft: false
importance: medium
---

GitHubは2026年11月16日、エンタープライズ管理者が、選択したGitHub Copilotのカスタマイズを、単独のユーザー設定やプロジェクト設定ではなく、プラグインまたは管理設定から提供されるものに限定できるようにしました。これにより、承認済みのMCPツールやキャンバスを共有のプラグインライブラリで配布できます。

**対象:** GitHub Enterprise Cloudの管理者。エンタープライズまたはその組織が発行したCopilot BusinessまたはCopilot Enterpriseのライセンスを持つメンバーに適用されます。

**設定:** strictPluginOnlyCustomizationは、ユーザーやプロジェクト由来の単独のカスタマイズをブロックし、対象のプラグインと管理設定は(他のポリシーに従って)引き続き許可します。対象は、スキル、カスタムエージェント、フック、MCPサーバー、実行可能なCopilot拡張機能(VS Code Marketplaceの拡張機能ではなく、実行可能なキャンバスプロバイダー)の5カテゴリーです。すべてを制限することも、一部だけ(例: MCPサーバーと拡張機能は制限し、スキル、エージェント、フックは自由にする)制限することもできます。

**マーケットプレイス:** プラグイン専用モードはマーケットプレイスの許可リストではありません。対象のマーケットプレイスを絞るには、strictKnownMarketplacesと組み合わせます。既存の管理設定でも、マーケットプレイスの定義や特定プラグインの必須化・ブロックが可能です。展開スケジュールと料金は公開されていません。
