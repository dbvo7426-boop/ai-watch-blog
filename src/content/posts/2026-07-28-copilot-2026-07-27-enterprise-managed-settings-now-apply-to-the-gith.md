---
title: GitHub Copilotアプリとクラウドエージェントにもエンタープライズ管理設定が適用可能に
description: "GitHub Copilotのエンタープライズ管理設定が、これまでのCLI・VS Codeに加えてCopilotアプリとクラウドエージェントにも対応。プラグイン制限や承認バイパスの可否などを一元的な設定ファイルで統制できるようになりました。"
pubDate: 2026-07-27
category: copilot
type: news
tags: [Copilot, エンタープライズ, ガバナンス, セキュリティ]
source: https://github.blog/changelog/2026-07-27-enterprise-managed-settings-now-apply-to-the-github-copilot-app
draft: false
importance: medium
---

GitHubは2026年7月27日、エンタープライズ管理者が既存の`managed-settings.json`を使って、GitHub CopilotアプリとCopilotクラウドエージェントにも一元的なポリシーを適用できるようになったと発表しました。従来はCopilot CLIとVS Codeのみが対象でしたが、統制対象のクライアントが広がったことで、組織全体で一貫したガバナンスを実現しやすくなります。

## 詳細

- **対象範囲の拡大**: これまでCopilot CLIとVS Codeにのみ適用されていたエンタープライズ管理設定が、Copilotアプリとクラウドエージェントにも拡大
- **統制できる主な項目**: (1) 利用可能なプラグインの制限 (2) 利用できるプラグインマーケットプレイスの制限 (3) コマンド実行・ファイルアクセス・URL取得前の承認プロンプトをバイパスできるかどうかの制御 (4) 新規会話でのモデル自動選択をデフォルトにする設定
- **反映のタイミング**: Copilotアプリは開発者が次回サインインまたはアプリ再起動したタイミングで既存設定を自動的に反映。クラウドエージェントは次のタスク割り当て時に変更を反映
- **既存導入企業への影響**: 既に`managed-settings.json`を運用している企業は追加の設定作業なしでそのまま適用される
- **初めて導入する企業の手順**: エンタープライズ内に`.github-private`リポジトリを作成し、`copilot/managed-settings.json`ファイルにポリシーのキーと値を追加・更新してデフォルトブランチにコミット
- **反映速度**: 設定変更はおよそ1時間以内、またはクライアントの再起動・サインイン時に即時反映

## 使ってみるには

- 既にエンタープライズ管理設定を利用している組織は、追加作業なしで自動的にCopilotアプリ・クラウドエージェントにもポリシーが適用される
- 初めて利用する組織は、エンタープライズオーナー権限で`.github-private`リポジトリ内の`copilot/managed-settings.json`にポリシーを設定する必要がある
- 詳細な設定項目やJSONのキー一覧はGitHub Docsの管理設定ページで確認できる
