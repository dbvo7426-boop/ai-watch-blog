---
title: "GitHub Copilotアプリ、エージェント監視向けにOpenTelemetryへ対応"
description: "GitHub CopilotアプリがOpenTelemetryに対応し、企業向け管理設定を通じて利用可能に。管理者は、エージェントセッションの流れ・モデル/ツールの利用状況・ステップごとの実行トレースを、開発者ごとではなく一元的に自社の監視ツールへエクスポートできる。"
pubDate: 2026-09-22
category: copilot
type: news
tags: [GitHubCopilot, GitHub, OpenTelemetry, 可観測性, 管理者機能]
source: https://github.blog/changelog/2026-09-22-opentelemetry-in-the-github-copilot-app
draft: false
importance: low
---

GitHub CopilotアプリがOpenTelemetry(OTel)に対応し、組織がエージェントの活動データを対応する監視ツールへエクスポートできるようになりました。

## 詳細

- **監視できる内容**: AIモデルへのリクエストやツール利用を含むエージェントセッションの流れ、想定外の挙動を特定するためのステップごとの実行トレース、開発者ごとではなくチーム全体に一貫して適用される一元的なテレメトリ
- **設定方法**: 管理者はエンタープライズの`managed-settings.json`内で`telemetry`プロパティを設定し、データエクスポートの有効化と送信先エンドポイントを指定する
- **デフォルトのプライバシー設定**: プロンプトとレスポンスの内容はデフォルトで除外されるが、有効化する前に組織のコンテンツキャプチャ設定を確認することが推奨される

## その後

今回の追加により、企業はCopilotのエージェント活動を、ベンダーに依存しない標準的な方法で既存の可観測性(オブザーバビリティ)基盤に組み込めるようになります。アプリケーションのパフォーマンスをすでに監視しているのと同じように、エージェントの挙動も監視対象として扱えるようになります。
