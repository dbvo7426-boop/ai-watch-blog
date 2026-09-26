---
title: "GitHub Copilot、新機能向けのグローバルデフォルトポリシーを追加"
description: "GitHubが、新しく未設定のCopilot機能をデフォルトで有効化・無効化・各組織の判断に委ねるかをエンタープライズ管理者が一括選択できる統一ポリシーを導入。28日間の設定期間を経て10月22日から適用される。"
pubDate: 2026-09-24
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 管理者機能, ガバナンス]
source: https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise
draft: false
importance: medium
---

GitHubは、Business/Enterpriseアカウント全体で、新しく未設定のCopilot機能がどう振る舞うかを統一的に管理する、グローバルなデフォルトポリシーを導入しました。

## 詳細

- **対象範囲**: エンタープライズの「Features & clients」ページで管理される一般提供済みのCopilot機能が対象で、Agentsページの「Copilot Code Review policy」やCopilotの「MCP servers」ポリシーも含まれる
- **管理者が選べる3つの選択肢**: 「有効化」(現在および今後対象となる機能をデフォルトでユーザーに提供)、「無効化」(今後の機能は明示的な承認が必要、現行機能も引き続き利用不可)、「各組織の判断に委ねる」(個々の組織が自らの設定を選択)
- **変わらない点**: 未設定の機能は選択したデフォルトに自動的に従うが、これまで明示的に有効化・無効化していた選択はそのまま維持される。プレビュー機能は引き続きオプトイン方式で、後に一般提供へ移行した場合も以前の選択が引き継がれる
- **スケジュール**: 28日間の設定期間を設けており、2026年10月22日にポリシーが適用される前に管理者が設定を調整できる

## その後

今回のポリシーにより、大規模組織はCopilotの新機能をリリースのたびに個別に設定する必要がなくなり、新機能の迅速な導入をデフォルトとするか、承認を挟んだより慎重な展開をデフォルトとするかを、単一の設定で一括制御できるようになります。
