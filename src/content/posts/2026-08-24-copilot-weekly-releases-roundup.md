---
title: "GitHub Copilot週次アップデート、Slack/Teamsのエージェントセッション共有・Customizeタブ正式化・Visual Studioのモデル制御強化"
description: "GitHubの8月24日週のCopilotリリースノートでは、SlackとMicrosoft Teamsでのエージェントセッション共有、Copilotアプリ「Customize」タブの一般提供開始、Rust製CLIによる高速化、Visual Studioでのモデル固定・推論強度設定などが発表された。"
pubDate: 2026-08-24
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Slack, MicrosoftTeams, VisualStudio, 開発者ツール]
source: https://github.blog/changelog/2026-08-28-github-copilot-weekly-releases-august-24
draft: false
importance: medium
---

GitHubは8月24日週のCopilotリリースノートを公開しました。Slack、Microsoft Teams、Copilotアプリ、CLI、JetBrains、VS Code、Visual Studioと、ほぼ全ての利用面にまたがる更新内容です。

## 詳細

- **SlackとMicrosoft Teams**: チームのグループ会話で「@GitHub」とメンションするだけで、その場を共有エージェントセッションに変換可能に。複数人がチャット上から同じエージェント主導のコード変更に共同で取り組めるようになった
- **Copilotアプリ**: 「Customize」タブが一般提供開始となり、MCPサーバー・プラグイン・スキル・キャンバスを1か所に集約。Azure DevOps連携により課題やPRをCopilotセッションに変換できるほか、実験的なWSL対応やタブ管理の改善も追加
- **CLI**: `defaultMode`と`defaultPermissionMode`の新設定でセッションの好みを事前に指定可能に。プラグイン・MCP・スキルの管理コマンドも整理され、中断されたセッションを復元できるようになったほか、ネイティブRustランタイムにより高速化を実現
- **JetBrains**: プラグイン・MCPサーバー・テレメトリ・エージェント権限を対象とした企業向け管理機能を追加
- **VS Code 1.135**: アプリをまたいだセッションの継続性、モデルの横並び比較、シンプルな単一ペインのエージェントレイアウト、モデル別の詳細なチャット利用状況トラッキングを追加
- **Visual Studio**: モデルの固定・比較機能、推論強度(Low/Medium/High)の調整、組織全体でのカスタムエージェント共有、Copilotプランの消費状況の可視化、そしてPRを作成する前に未コミットの変更やコミット内容をレビューする「Gitエージェント」を追加

## その後

チャットプラットフォーム・IDE・CLIにまたがるこの1週間分だけの更新量の多さは、GitHubのCopilot開発サイクルが、たまに行われる大型リリースではなく、ほぼ継続的な週次ペースへと移行していることを示しています。多くの機能はFreeからEnterpriseまでの全プランに同時展開されています。
