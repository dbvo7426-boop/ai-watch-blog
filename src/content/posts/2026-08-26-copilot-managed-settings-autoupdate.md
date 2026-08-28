---
title: "GitHub Copilotの企業向け管理設定、プラグインマーケットプレイスの自動更新に対応"
description: "GitHubが企業向け管理設定に「autoUpdate」フラグを追加。管理者はプラグインマーケットプレイスごとに自動更新を有効化でき、Copilotアプリ・Copilot CLI・VS Codeに反映される。"
pubDate: 2026-08-26
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 企業向け設定, プラグイン, 開発者ツール]
source: https://github.blog/changelog/2026-08-26-enterprise-managed-settings-now-support-autoupdate-for-plugin-marketplaces
draft: false
importance: low
---

GitHubは、GitHub Copilotの企業向け管理設定に新たに「autoUpdate: true」オプションを追加しました。これにより管理者は、プラグインマーケットプレイスごとにプラグインの自動更新を有効にできるようになります。

## 詳細

- **設定方法**: 組織の管理設定(`.github-private/copilot`リポジトリに保存)内の`extraKnownMarketplaces`のエントリーに`autoUpdate: true`を設定するだけ
- **効果**: 対応するクライアントが自動的にマーケットプレイスをチェックし、そこから導入したプラグインを自動更新するようになり、手動での更新管理が不要になる
- **許可リストは維持**: マーケットプレイス自体は引き続き`strictKnownMarketplaces`による許可リストの制約を受ける。自動更新機能は、そもそも信頼するマーケットプレイスの範囲を広げるものではない
- **適用範囲**: Copilot BusinessまたはCopilot Enterpriseプランの組織を対象に、GitHub Copilotアプリ・Copilot CLI・Visual Studio Codeに適用
- **ステータス**: 2026年8月26日付で一般提供開始

## その後

今回の追加は、GitHubがCopilot向けに拡充を続けている企業向け管理設定機能の一つで、小規模ながら実用的な改善です。信頼するマーケットプレイスの範囲を緩めることなく、組織内で承認済みプラグインを最新の状態に保つ手間を減らすことを狙っています。
