---
title: "GitHub Copilot、個別ユーザー予算に有効期限を設定できるように"
description: "GitHubが、Business/Enterpriseプランの個別ユーザー向けCopilot予算に任意の有効期限を設定できる機能を追加。期限が来ると手動削除の手間なく自動的にデフォルトの予算に戻る。"
pubDate: 2026-09-01
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 課金, 管理者機能]
source: https://github.blog/changelog/2026-09-01-set-an-expiration-date-for-individual-user-budgets
draft: false
importance: low
---

GitHubは、個々のユーザーのCopilot予算に有効期限を設定できる機能を追加しました。期限が来ると、管理者が手動で削除しなくても一時的な上書き設定が自動的に取り除かれます。

## 詳細

- **3種類の有効期限オプション**: 期限なし(デフォルト)、次の請求サイクル開始時に期限切れ、特定の日付に期限切れ、から選択可能
- **設定方法**: 課金設定画面から個別ユーザー予算を作成・編集する際に設定できるほか、Budgets REST APIの`expires_at`フィールドからも設定可能
- **対象**: Copilot BusinessまたはCopilot Enterpriseプランの組織、特に多数の一時的な予算調整を大規模に管理している組織向け

## その後

この機能により、個々のユーザーに付与した一時的な予算増額を手動で追跡・取り消すという、小さいながらも繰り返し発生していた管理者の手間が解消されます。
