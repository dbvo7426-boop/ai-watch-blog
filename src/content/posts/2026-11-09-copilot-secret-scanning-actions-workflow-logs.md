---
title: "GitHubのシークレットスキャン、Actionsのワークフローログも検出対象に(パブリックプレビュー)"
description: "ワークフローの実行が完了すると、GitHubがログをプロバイダーのパターンでスキャンし、検出結果を他のシークレットスキャンのアラートと並べて表示します。GitHub Enterprise CloudでSecret ProtectionまたはAdvanced Securityを使う企業が対象です。"
pubDate: 2026-11-09
category: copilot
type: news
tags: [GitHub, シークレットスキャン, GitHub Actions, セキュリティ]
source: https://github.blog/changelog/2026-11-09-secret-scanning-detects-secrets-in-github-actions-workflow-logs
draft: false
importance: low
---

GitHubのシークレットスキャンが、Issue、Wiki、ディスカッション、プルリクエストに加えて、GitHub Actionsのワークフローログ内のシークレットも検出できるようになりました。機能はパブリックプレビューです。

## 詳細

- **仕組み:** ワークフローの実行が完了すると、GitHubがログをプロバイダーのパターンでスキャンします。検出結果はリポジトリのシークレットスキャンのアラート一覧に、ログへのリンク付きで表示されます。対応するシークレットの種類では有効性の確認が行われ、ログを削除してもアラートは残ります。
- **対象:** GHE.comのデータレジデンシーを含め、GitHub Enterprise CloudでGitHub Secret ProtectionまたはGitHub Advanced Securityを使う企業です。
- **有効化:** Enterpriseのオーナーが、Enterprise設定のPolicies、Advanced Securityで、All repositoriesを「Enabled」にして「Secret scanning for Actions workflow logs」を有効にします。既定は無効で、シークレットスキャンが有効なリポジトリにのみ適用されます。
- **プレビューの制限:** 有効化した後に完了した実行だけがスキャンされ、過去のログはさかのぼりません。汎用パターン、カスタムパターン、AIが検出するシークレット、Actionsですでにマスクされたシークレットは検出されません。プレビュー中は、ワークフローログのアラートで通知は送られません。
