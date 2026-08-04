---
title: GitHub Copilotの自動化、コメント投稿をトリガーに実行可能に
description: GitHub Copilotクラウドエージェントの自動化(Automations)が、Issueやプルリクエストへの特定コメント投稿をトリガーに実行できるようになった。ドキュメント自動生成やエラー調査などのワークフローに活用できる。
pubDate: 2026-08-03
category: copilot
type: news
tags: [Copilot, GitHub, 自動化, クラウドエージェント]
source: https://github.blog/changelog/2026-08-03-trigger-copilot-automations-with-comments
draft: false
importance: low
---

GitHubは、Issueやプルリクエストに特定のコメントが投稿されたことをトリガーに、Copilotクラウドエージェントの自動化(Automations)を実行できる新機能を追加しました。既存のトリガー方式に加え、コメントベースの新しいトリガー種別が使えるようになります。

## 詳細

- **新機能**: Issueやプルリクエストに特定のコメント文言が投稿された際に自動化をトリガーできるよう設定可能になった
- **活用例**: コード変更に対するコメントをきっかけにしたドキュメント自動生成、Issueコメントからのエラー調査ワークフローの起動、技術的負債に対するフォローアップタスクの自動作成など
- **設定方法**: 自動化を設定する際に、トリガーとなる正確なコメント文言を指定する
- **設定場所**: リポジトリの「Agents」タブ内、サイドバーの「Automations」から利用可能
- **提供対象**: Copilot Pro、Pro+、Max、Business、Enterprise の各ユーザーが利用可能。Business・Enterpriseユーザーは、事前に管理者がクラウドエージェントポリシーを有効化しておく必要がある

## 使ってみるには

- リポジトリの「Agents」タブを開き、サイドバーの「Automations」を選択する
- 新しい自動化を作成し、監視対象とする正確なコメント文言でトリガーを設定する
- Business・Enterpriseの管理者は、利用前にクラウドエージェントポリシーが有効になっているか確認する
