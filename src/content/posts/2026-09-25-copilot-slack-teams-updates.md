---
title: "GitHub CopilotのSlack/Teams連携、より広いコンテキスト認識と重複課題チェックに対応"
description: "GitHub CopilotのSlack・Microsoft Teams連携が、より多くの会話コンテキスト(ファイル・メッセージリンク・チャンネル/スレッド履歴)を活用可能に。会話途中でのモデル切り替えの記憶や、新規課題作成前の重複チェックにも対応。Business/Enterprise向けにパブリックプレビュー中。"
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Slack, MicrosoftTeams, 開発者ツール]
source: https://github.blog/changelog/2026-09-25-updates-to-github-copilot-for-slack-and-microsoft-teams
draft: false
importance: medium
---

GitHubは、CopilotのSlack・Microsoft Teams連携を更新し、より広いコンテキスト認識、モデル制御の強化、会話からアクションまでの追跡性向上を実現しました。

## 詳細

- **より広いコンテキスト**: Slackでは、対応するファイル・添付ファイル・メッセージリンクを処理できるようになり、Teamsではインライン画像、転送されたメッセージのコンテキスト、チャンネル/スレッド履歴を活用可能に
- **モデル制御**: 次のメッセージからモデルを切り替え、その選択を会話の残りの間保持できるようになった。Slackユーザーはデフォルトのオーナーとリポジトリも設定可能
- **会話からアクションへの追跡性**: 新規課題を作成する前に重複がないか確認し、生成された作業への直接リンクを埋め込み、元となった会話へのリンクも保持する
- **信頼性の修正**: 長時間実行タスクにおけるステータスの可視性と中断処理の改善に加え、Teams向けにはチャンネル/スレッドの保持や画像処理の改善、Slack向けにはリポジトリ切り替えの安全性と復旧処理の改善
- **提供状況**: Copilot Business/Enterpriseプラン加入者向けにパブリックプレビュー中

## その後

今回の更新は、チャットベースでのCopilot利用を、単発のコマンド実行ではなく、モデルの好みを引き継ぎ重複作業を避け、SlackやTeamsでの会話と実際にGitHub上で生成された作業との間に明確なリンクを保つ、継続的で追跡可能なワークフローへと近づけることに重点を置いています。
