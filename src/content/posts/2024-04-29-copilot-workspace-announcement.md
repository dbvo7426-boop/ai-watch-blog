---
title: GitHub Copilot Workspace発表——Issueから計画・コード・PRまで自然言語で
description: GitHubがCopilotネイティブの開発環境「GitHub Copilot Workspace」のテクニカルプレビューを発表。Issueを起点に、実装計画の生成からコード変更、プルリク作成までを自然言語で一気通貫にこなす構想です。
pubDate: 2024-04-29
category: copilot
type: news
tags: [GitHub Copilot, GitHub Copilot Workspace, "AI史"]
source: https://github.blog/news-insights/product-news/github-copilot-workspace/
draft: false
---

GitHubが2024年4月29日、「GitHub Copilot Workspace」のテクニカルプレビューを発表しました。GitHubのリポジトリやIssueを起点に、実装計画の立案からコード変更、動作確認、プルリクエスト作成までを自然言語でこなせる、Copilotネイティブな開発環境という新しいコンセプトです。前年のGitHub Universe 2023で示された構想を、実際に触れる形にしたものでした。

## 詳細

- **ワークフロー**: リポジトリやIssueからワークスペースを起動 → AIがコードベースを理解した上でステップバイステップの実装計画を生成 → 計画とコードはすべて編集可能 → 統合ターミナルで実行・テスト → プルリクエストを作成、リンクでチームに共有
- **AIエージェントの活用**: 単一のチャットではなく、計画立案・コード生成など複数の役割を持つAIエージェントを組み合わせて処理する設計
- **人間による制御**: 生成された計画やコードはすべて編集可能とされ、「開発者の創造性を代替するのではなく増幅する」ことを目指すと説明された
- **提供形態**: 一般提供ではなく、GitHub Nextのプロジェクトページからのテクニカルプレビュー登録制
- **位置づけ**: GitHub Copilot(2022年のコード補完)、GitHub Copilot Chat(2023年の自然言語対話)に続く、GitHubのAI構想の第3段階として紹介された

## その後

Copilot Workspaceは、単発のコード提案から「タスク単位でリポジトリ全体を扱うAI」への転換点となりました。この方向性は後のGitHub Copilotのコーディングエージェント機能や、Issue起点の自動化機能へと引き継がれていきます。
