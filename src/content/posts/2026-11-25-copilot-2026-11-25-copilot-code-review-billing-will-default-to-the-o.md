---
title: "Copilotコードレビューの課金先、2026年12月30日から既定が組織に変更"
description: "Copilot BusinessまたはEnterpriseの組織・エンタープライズで課金先を選んでいない場合、メンバーのレビューが組織に課金されるようになる。"
pubDate: 2026-11-25
category: copilot
type: news
tags: [GitHub Copilot, コードレビュー, 課金, Copilot Business, Copilot Enterprise, AIクレジット]
source: https://github.blog/changelog/2026-11-25-copilot-code-review-billing-will-default-to-the-organization
draft: false
importance: high
---

GitHubは、2026年12月30日から、Copilotライセンスを持つメンバーによるCopilotコードレビューの課金先について、選択が保存されていない場合の既定を組織にすると発表しました。対象はCopilot BusinessまたはCopilot Enterpriseを利用する組織とエンタープライズです。

**変更内容**

- 現在は、選択が未保存の場合、有料Copilotライセンスを持つメンバーのレビューにはそのメンバー自身のCopilot利用枠が使われます。
- 2026年12月30日以降は、これらのレビューがリポジトリを所有する組織に課金されます。
- AIクレジットの従量課金が有効でない、課金ロックがある、または課金対象の顧客がいないアカウントは、代わりに**Member**に設定されます。
- すでに**Member**または**Organization**を選んでいる場合は、その選択が維持されます。
- Copilotライセンスを持たないメンバー向けの別設定は変わりません。

**メンバー課金を維持する方法**

変更までの間、未設定の項目は注意書き付きで**Default (Member)**と表示されます。メンバーのCopilot利用枠を使い続けたい場合は、12月30日までに、エンタープライズまたは組織のCopilotポリシー設定で**Member**を選択してください。この選択は既定が変わった後も維持されます。エンタープライズがこの設定を管理している場合は、エンタープライズオーナーが選択します。

**費用面の注意:** 組織への課金にはAIクレジットの従量課金が必要で、組織の支出が増える可能性があります。具体的な料金は発表では明らかにされていません。

詳細はGitHubのドキュメント「Configuring code review by GitHub Copilot」を参照してください。
