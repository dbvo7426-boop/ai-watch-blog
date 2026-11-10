---
title: "GitHub Copilotで Claude Fable 5.2 が一般提供に"
description: "Fable 5.2はCopilot Pro+、Max、Business、Enterpriseの10の画面で使えます。既定でデータ保持が必要で、管理者によるポリシーの有効化が要ります。"
pubDate: 2026-11-09
category: copilot
type: news
tags: [GitHub Copilot, Claude, Anthropic, Fable 5.2]
source: https://github.blog/changelog/2026-11-09-claude-fable-5-2-in-github-copilot
draft: false
importance: medium
---

GitHubは、Anthropicの最新のFableモデルであるClaude Fable 5.2を、GitHub Copilotで一般提供にしました。大規模なコードベースにまたがる複雑で多段階のコーディング作業向けです。GitHubによると、初期のテストではFable 5.2はFable 5.1より多くのタスクを、少ないステップとツール呼び出しで解きました。

## 詳細

- **対象:** Copilot Pro+、Max、Business、Enterpriseのユーザーです。提供は段階的に進みます。
- **利用できる場所:** Visual Studio Code、Visual Studio、Copilot CLI、Copilot coding agent、GitHub Copilotアプリ、github.com、GitHub Mobile(iOSとAndroid)、JetBrains IDE、Xcode、Eclipseのモデルピッカーです。
- **管理者ポリシー:** Copilot EnterpriseとBusinessの管理者は、Copilotの設定でClaude Fable 5.2のポリシーを有効にする必要があります。既定はオフで、有効にするとデータ保持の要件を了承したものとみなされます。
- **データ保持:** Fable 5.2は、Anthropicが安全性の分類器を動かすため、既定でデータ保持が必要です。Anthropicはプロンプトと出力を保持しますが、保持したデータはモデルの学習には使わないとしています。Fable 5、5.1、5.2以外のClaudeモデルは引き続きゼロデータ保持で動作します。
- **ゼロデータ保持:** 対象となる企業は、AnthropicがEnterprise Frontier Safeguards(EFS)を展開するまでの期間限定の例外として、暦年末までFable 5.2、5.1、5をゼロデータ保持で使えます。その後も使い続けるにはEFSが必要です。対象かどうかの判断はGitHubのアカウントチームが行い、GitHubサポートでは判断できません。承認されてもモデルは自動では有効になりません。
- **料金:** 従量課金のもとで、提供元の定価で請求されます。
