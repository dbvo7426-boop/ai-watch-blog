---
title: "CopilotにSupabase、Box、Calendlyなど8つのコネクターが追加(パブリックプレビュー)"
description: "GitHub検証済みのMCPコネクター8つが、既存の25以上に加わりました。すべてのCopilotプランで利用できます。"
pubDate: 2026-11-18
category: copilot
type: news
tags: [GitHub Copilot, コネクター, MCP]
source: https://github.blog/changelog/2026-11-18-connect-supabase-box-calendly-and-more-to-copilot
draft: false
importance: low
---

GitHubは2026年11月18日、Copilotに8つのコネクターを追加しました。いずれもGitHub検証済みのMCPサーバーを使います。Slack、Figma、Sentryなど25以上の既存コネクターに加わり、接続したサービスはCopilot全体で使えます。

- Box: コンテンツの検索と管理、Box AIの利用
- Buildkite: パイプラインとビルドの操作
- Calendly: スケジュールと会議の管理
- ClickUp: タスクとプロジェクトの追跡
- Mixpanel: プロダクト分析の探索
- Supabase: プロジェクトとデータベースの操作
- Webflow: サイトとコンテンツの管理
- Wix: サイトとビジネスツールの管理

**状況と対象プラン:** パブリックプレビューで、すべてのCopilotプランで利用できます。BusinessとEnterpriseでは、管理者がEditor preview featuresポリシーを有効にする必要があります。コネクターを個別に(ワイルドカードではなく)列挙しているエンタープライズの許可リストでは、新しいコネクターを追加する必要があります。また、BoxのMCPアクセスなど、サービス側で管理者がアクセスを有効にする必要があるものもあります。

**設定:** CopilotアプリではCustomizeからConnect。Copilot CLIでは/mcpを実行し、ConnectorsタブでConnect。VS CodeではAgentsウィンドウのCustomizations。github.comではCopilotのカスタマイズページから行います。
