---
title: GitHub Copilot for JetBrainsがOpenTelemetry設定とモデル管理機能を強化、MCPサーバー連携にも対応
description: "JetBrains向けGitHub Copilotに、エージェントワークフローのOpenTelemetry出力設定や、BYOKのトークン上限・モデル有効/無効を管理する機能が追加。MCPサーバーやカスタムエージェントの利用にも対応しました。"
pubDate: 2026-07-28
category: copilot
type: news
tags: [Copilot, JetBrains, OpenTelemetry, MCP]
source: https://github.blog/changelog/2026-07-27-github-copilot-for-jetbrains-adds-improvved-opentelemetry-configuration-and-model-management
draft: false
importance: low
---

GitHubは2026年7月27日、JetBrains向けGitHub Copilotに新しい設定機能を追加したと発表しました。エージェントワークフローのOpenTelemetry出力設定と、モデル管理まわりの機能強化が中心で、組織の可観測性要件への対応やコスト管理がしやすくなります。

## 詳細

- **OpenTelemetry出力設定**: 「Settings > Tools > GitHub Copilot > Chat」からエージェントワークフローのOpenTelemetryエクスポート設定を構成可能になり、組織の可観測性要件にプラグインの挙動を合わせやすくなった
- **トークン上限の設定**: BYOK(自前モデル持ち込み)およびカスタムエンドポイントに対して、`maxInputToken`・`maxOutputToken`のデフォルト上限を設定可能になり、コスト管理・ガバナンスを強化
- **モデルの有効/無効管理**: Copilot組み込みモデルをまとめて無効化・有効化できる管理機能が追加され、柔軟性が向上
- **MCPサーバー・カスタムエージェント連携**: MCPサーバーやカスタムエージェントをエージェントフロー内で直接利用できるようになり、チーム独自のツールや指示、ワークフローをIDE内で一貫して使えるように
- **その他の改善**: Copilot CLIのフォークサポートや`/rubber-duck`コマンドの追加、チャット・モデル選択のUX改善、MCP診断機能の強化によるトラブルシューティングの迅速化なども同時に行われた

## 使ってみるには

- JetBrains系IDE(IntelliJ IDEAなど)向けのGitHub Copilotプラグインを最新版に更新することで利用可能
- OpenTelemetry設定は「Settings > Tools > GitHub Copilot > Chat」から構成
- BYOKのトークン上限設定やモデルの有効/無効管理は、組織のガバナンス方針に応じて管理者・開発者が個別に設定する
