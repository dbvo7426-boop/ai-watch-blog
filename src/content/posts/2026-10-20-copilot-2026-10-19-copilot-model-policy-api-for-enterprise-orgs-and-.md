---
title: "GitHub、企業・組織・チーム向けCopilotモデルポリシーREST APIを追加"
description: "企業、エンタープライズチーム、エージェントアプリ、組織の各レベルでCopilotモデルポリシーを取得・更新するGET/PATCHエンドポイントが一般提供となった。"
pubDate: 2026-10-19
category: copilot
type: news
tags: [GitHub Copilot, API, エンタープライズ, 管理]
source: https://github.blog/changelog/2026-10-19-copilot-model-policy-api-for-enterprise-orgs-and-teams
draft: false
importance: low
---

GitHubは、管理者がREST APIを使って、企業、エンタープライズチーム、エージェントアプリ、組織のCopilotモデルポリシーを取得・更新できるようになったと発表しました。

## 詳細

- **エンドポイント:** `/enterprises/{enterprise}/copilot/model-policies`、`/enterprises/{enterprise}/teams/{team_slug}/copilot/model-policies`、`/enterprises/{enterprise}/copilot/apps/model-policies`、`/orgs/{org}/copilot/model-policies` でGETとPATCHが一般提供。
- **委任モード:** 企業ポリシーはモデル管理を個別の組織へ(organization mode)、またはチームとアプリへ(enterprise teams mode)委任できます。
- **ドキュメント:** REST APIリファレンスのenterprise-adminのAIコントロール項に掲載されています。

## その後

モデルの追加・廃止に合わせ、大規模企業がモデル可用性を自動管理できます(10月19日の廃止対応など)。レート制限や権限の詳細は変更履歴では明らかにされていません。
