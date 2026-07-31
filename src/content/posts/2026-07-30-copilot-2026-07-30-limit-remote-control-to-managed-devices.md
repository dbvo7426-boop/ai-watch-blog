---
title: "GitHub Copilotのリモートコントロール、管理対象デバイスのみに制限できる新設定が追加"
description: "GitHubが、Copilotのリモートコントロールセッションをホストできるデバイスをエンタープライズ管理者が制限できる新しい管理設定`remoteControl`を追加。組織のセキュリティポリシーに応じて柔軟な制御が可能になった。"
pubDate: 2026-07-30
category: copilot
type: news
tags: [Copilot, GitHub, セキュリティ, エンタープライズ, IT管理]
source: https://github.blog/changelog/2026-07-30-limit-remote-control-to-managed-devices
draft: false
importance: low
---

GitHubは、モバイルやWeb、VS Codeなど複数のプラットフォームからCopilotセッションを操作できる「リモートコントロール」機能について、セッションをホストできるデバイスを管理者が制限できる新しいエンタープライズ管理設定`remoteControl`を追加した。

## 詳細

- **背景**: リモートコントロールは、モバイル・Web・VS Codeなど複数のプラットフォームを横断してCopilotセッションを操作できる機能
- **新設定`remoteControl`**: エンタープライズ管理者が、どのデバイスをリモートコントロールセッションのホストとして許可するかを細かく定義できる新しい管理対象設定
- **設定できる3つのモード**:
  - `requireSSO` ― シングルサインオン(SSO)による認可を必須にする
  - `disabled` ― リモートコントロールを完全に無効化する
  - `enabled` ― 制限なくアクセスを許可する
- **設定方法**: `.github-private`リポジトリ経由のサーバー管理設定、モバイルデバイス管理(MDM)ソリューション、ファイルベースの設定(`copilot-settings.json`へのキー追加)という3通りの方法で導入可能
- **既存ポリシーとの関係**: 既存のリモートコントロール関連ポリシーと組み合わせて利用でき、「組織全体への広いアクセス許可」から「デバイス単位の細かい制限」まで段階的に制御できる
- **提供範囲**: エンタープライズおよび組織向けの管理機能
- **公開日**: 2026年7月30日

## 使ってみるには

- エンタープライズ/組織の管理者権限で、`.github-private`リポジトリ、MDMソリューション、または`copilot-settings.json`のいずれかから`remoteControl`設定を追加する
- セキュリティポリシーに応じて`requireSSO`・`disabled`・`enabled`のいずれかのモードを選択する
- 既存のリモートコントロールポリシーと組み合わせて、組織全体からデバイス単位まで段階的なアクセス制御を設計する
