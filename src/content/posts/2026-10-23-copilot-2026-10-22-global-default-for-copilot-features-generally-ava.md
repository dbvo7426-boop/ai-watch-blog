---
title: "GitHub、Copilot一般提供機能のグローバル既定ポリシーの適用を開始"
description: "GitHubは、BusinessおよびEnterpriseプランのCopilot一般提供機能に対するグローバル既定ポリシーの適用を段階的に開始し、2026年10月26日まで展開する。"
pubDate: 2026-10-22
category: copilot
type: news
tags: [GitHub Copilot, 管理者, ポリシー, Enterprise]
source: https://github.blog/changelog/2026-10-22-global-default-for-copilot-features-generally-available
draft: false
importance: medium
---

GitHubは2026年10月22日、9月にCopilot BusinessとCopilot Enterprise向けに発表した、一般提供（GA）機能のグローバル既定ポリシーの適用が始まったと明らかにした。

## 詳細

- **展開:** 適用は段階的に行われ10月26日まで続くため、エンタープライズや組織ごとに反映のタイミングが異なる。
- **対象:** 管理者が未設定のままの対象機能とクライアント機能が、グローバル既定（有効、無効、または「組織に任せる」）に従う。対象は「Features & clients」と「MCP servers in Copilot」の設定。
- **一度きりの適用:** 後から既定を変更しても、すでに適用されたポリシーは変わらない。
- **明示的な選択は維持:** 管理者がすでに有効・無効にした機能は、その設定のまま。
- **プレビュー機能:** 引き続きオプトイン。後にGAとなったプレビュー機能をオプトインしていた場合はその選択が維持され、そうでなければ対象になった時点で既定が適用される。
- **確認場所:** AI Controls、Copilot、「Default policy for new features」の順。対象条件や例外は、GitHubの既定の提供範囲に関するドキュメントに記載されている。

## その後

管理者にとっての実務は、今すぐ既定値を確認することだ。未設定の機能は展開期間中に既定を引き継ぐ。既定は一度適用されると後から遡って変わらないため、10月26日より前に、「有効」や「組織に任せる」が意図に合っているかを確認しておくのが安全だろう。機能ごとの明示的な設定は、いつでも行える。
