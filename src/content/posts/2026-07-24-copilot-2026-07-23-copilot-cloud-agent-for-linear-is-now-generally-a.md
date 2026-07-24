---
title: Copilotクラウドエージェントの「Linear連携」が一般提供開始
description: "GitHubがLinearのIssueをCopilotクラウドエージェントに直接アサインできる連携機能を一般提供開始。非同期・自律型のバックグラウンドエージェントが独立環境でタスクを分析し、ドラフトPRを作成してLinearのタイムラインに進捗を反映する。"
pubDate: 2026-07-23
category: copilot
type: news
tags: [Copilot, GitHub, Linear, クラウドエージェント]
source: https://github.blog/changelog/2026-07-23-copilot-cloud-agent-for-linear-is-now-generally-available
draft: false
importance: medium
---

GitHubは、Linearのissueを直接Copilotクラウドエージェントにアサインできる連携機能を一般提供(GA)開始したと発表した。Copilotクラウドエージェントは非同期・自律型のバックグラウンドエージェントで、GitHub Actionsが提供する独立した使い捨て開発環境の中でissueの内容を分析し、人手を介さずタスクを進める。

## 詳細

- **動作の流れ**: Linearのissueをアサインすると、エージェントが内容を解析し、独立した開発環境内でドラフトプルリクエストを作成する
- **進捗共有**: 作業の進捗をLinearのアクティビティタイムラインにストリーミングで反映
- **完了時の動作**: 作業完了後にプルリクエストのレビューを依頼
- **チーム向け制御**: タスクごとに使用するモデルを選択可能、リポジトリからカスタムエージェントをデプロイ可能、対象ブランチ・作業ブランチを指定可能、コメントでリアルタイムに指示を追加・修正可能
- **対応プラン**: Copilot Pro、Pro+、Business、Enterprise
- **提供開始日**: 2026年7月23日

## 使ってみるには

- GitHub Marketplaceから「GitHub Copilot for Linear」アプリをインストールする(GitHub組織オーナー権限とLinearワークスペース管理者権限が必要)
- Linear側のエージェント設定ドキュメントに従って設定を行う
