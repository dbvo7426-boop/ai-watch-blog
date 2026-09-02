---
title: "GitHub Copilot、複数のTeamプラン組織に所属するユーザーのモデルアクセス方式を変更"
description: "GitHubが、複数のTeamプラン組織に同時に所属するCopilotユーザーのモデルアクセス方式を変更。今後はいずれかの組織が有効化したモデルではなく、利用料金の請求先となっている組織の設定のみが適用される。"
pubDate: 2026-08-31
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Teamプラン, 管理者機能]
source: https://github.blog/changelog/2026-08-31-copilot-model-access-update-for-github-team-plans
draft: false
importance: low
---

GitHubは、GitHub Teamプランの組織に複数所属しているCopilotユーザーに対する、モデルアクセスの決定方式を変更しました。

## 詳細

- **変更点**: これまでは、所属するいずれかの組織が有効化したモデルにアクセスできていたが、今後はCopilot機能ページに表示される「利用料金の請求先」の組織の設定のみが、利用可能なモデルを決定する
- **影響を受けるユーザー**: 複数のTeamプラン組織にCopilotのシートを持つユーザーのみが対象。エンタープライズアカウントまたはその子組織を通じてアクセスしている場合は影響を受けない
- **確認方法**: Copilot設定内の「利用料金の請求先」欄で、自分の請求先組織を確認できる

## その後

今回の変更により、ガバナンスと課金の対応関係が整理され、実際に利用料金を負担していない無関係な組織の設定によって、利用可能なモデルが左右されてしまうという抜け道が塞がれることになります。
