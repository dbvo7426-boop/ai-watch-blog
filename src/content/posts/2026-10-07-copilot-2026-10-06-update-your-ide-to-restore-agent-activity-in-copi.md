---
title: "GitHub、Copilot利用状況メトリクスのエージェント活動を正しく計測するためIDE更新を呼びかけ"
description: "GitHubが、CopilotエージェントセッションをCopilot SDKへ移行したIDEでIDE識別情報が欠落し、利用状況メトリクスでエージェント活動が過少カウントされる不具合を特定。過去データは復元できないため、管理者に修正済みIDEバージョンへの更新を呼びかけている。"
pubDate: 2026-10-06
category: copilot
type: news
tags: [GitHubCopilot, 利用状況メトリクス, 開発者ツール]
source: https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics
draft: false
importance: low
---

GitHubは、Copilotの利用状況メトリクスでエージェント活動が過少にカウントされる不具合を特定し、組織に対して修正のためIDEの更新を呼びかけています。

## 詳細

- **問題の内容**: 複数のIDEが最近CopilotエージェントセッションをCopilot SDKへ移行したが、それらのセッションがどのIDEに由来するかを識別できていなかったため、利用状況レポートでエージェント活動が過少にカウントされ、一部の活動が誤ってCopilot CLIに帰属していた
- **課金への影響なし**: 影響を受けたのはメトリクスの帰属のみで、課金には影響しない
- **遡及的な修正は不可能**: 影響を受けたIDEバージョンからの活動は事後に帰属先を特定できないため、過去のデータの欠落は復元できない
- **必要な更新**: Visual Studio Code 1.139.0以降(提供開始済み)、Visual Studio 18.12(2026年10月予定)、JetBrains・Eclipse・Xcodeのプラグイン更新(2026年11月までに予定)
- **推奨事項**: 集中管理でIDEを展開している組織の管理者は、メトリクスが遡って復元されないため、修正版への更新を優先すべきとされている

## その後

これは新機能ではなく通常の運用上の修正ですが、利用状況ダッシュボードを通じて導入状況やROIを追跡するエンタープライズのCopilot管理者にとっては重要な意味を持ちます。GitHubがDynamic Workflowsやコンピュータ操作といったエージェントベースのワークフローを推し進め続ける中、まさにこの計測基盤がその活動を測定する役割を担っているだけに、なおさら重要です。
