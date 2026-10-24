---
title: "Visual Studio向けGitHub Copilot 9月アップデート、PR探索・BYOMプレビュー・NuGet脆弱性修正が追加"
description: "2026年9月のVisual Studioアップデートで、GitエージェントによるPR要約、新Agent（Preview）上でのBYOMプレビュー、NuGet脆弱性警告へのCopilot修正アクションが加わった。"
pubDate: 2026-10-22
category: copilot
type: news
tags: [GitHub Copilot, Visual Studio, BYOM, NuGet]
source: https://github.blog/changelog/2026-10-22-github-copilot-in-visual-studio-september-update-2
draft: false
importance: medium
---

GitHubは2026年10月22日、Visual Studio向けGitHub Copilotの2026年9月アップデートを公開した。チャット内でのプルリクエスト探索、Bring Your Own Model（BYOM）のプレビュー、脆弱なNuGetパッケージのCopilotによる修正が中心となる。

## 詳細

- **プルリクエスト探索:** Copilot ChatでGitエージェントを選び、Gitリポジトリウィンドウからプルリクエストを添付すると、関連コメントやファイルへのリンク付きの要約が返る。利用にはGitプロバイダーのMCPサーバーの接続が必要で、GitHubとAzure DevOpsに対応する。
- **BYOM（プレビュー）:** GitHub Copilot経由、または自前のデプロイを通じて、GitHubにサインインしているかどうかにかかわらずチーム好みのモデルを使える。Community、Professional、Enterpriseの各エディションで既定で有効。対応プロバイダーはMicrosoft Foundry、OpenAI、Anthropic、Ollama。
- **破壊的変更:** BYOMには、GitHub Copilot SDKベースのハーネスで動く新しいAgent（Preview）が必須になった。従来のAskモードとAgentモードではBYOMは使えず、以前設定したOllamaモデルはアップデート後に再追加が必要。
- **NuGet脆弱性の修正:** エラー一覧のNuGet Audit警告に修正アクションが追加された。実行するとCopilot Chatがエージェントモードで開き、NuGet MCPサーバーを使って脆弱なパッケージの修正をCopilotに依頼する。GitHub Copilotへのサインインと、Copilot ChatのツールメニューでのNuGet MCPサーバー有効化が必要。
- **提供プラン:** Free、Student、Pro、Pro+、Max、Business、Enterpriseのすべて。

## その後

今回のアップデートは、Visual Studio版CopilotがMCPサーバーとCopilot SDKを土台にしたエージェント型ワークフローへ移行する流れを引き継いでいる。注目は、BYOMが新Agent（Preview）に移った点だ。モデルの選択肢が広がる一方、自前モデルやOllamaをAsk／Agentモードで使っていた場合は、モードの切り替えと再設定が必要になる。詳細はVisual Studioブログとリリースノートが案内されている。
