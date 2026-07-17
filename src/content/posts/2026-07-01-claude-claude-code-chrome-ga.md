---
title: Claude Codeがブラウザを操作可能に──「Claude in Chrome」が正式提供開始、サブエージェントは既定でバックグラウンド実行
description: Claude Codeの拡張機能「Claude in Chrome」がプレビューを終え正式提供に。ブラウザ操作がターミナル作業と地続きになったほか、サブエージェントは既定でバックグラウンド実行されるようになりました。
pubDate: 2026-07-01
category: claude
type: news
tags: [Claude Code, Anthropic, Claude in Chrome, サブエージェント]
source: https://code.claude.com/docs/en/whats-new/2026-w27
draft: false
---

Anthropicが2026年7月1日付のClaude Codeアップデート(v2.1.198)で、ブラウザ拡張機能「Claude in Chrome」を正式提供(GA)へ移行しました。Claude Codeが直接Chromeを操作してタブを開き、クリックやフォーム入力、コンソールログの確認までこなせるようになり、あわせてサブエージェントは既定でバックグラウンド実行される仕様に変更されています。

## 詳細

- **Claude in Chromeが正式提供に**: Anthropicの直接プランを契約する全ユーザーがプレビューなしで利用可能に。Claude Codeが拡張機能経由でブラウザを操作し、タブを開く・ページ内をクリックして進む・フォームに入力する・コンソールログを読む、といった作業をこなせる
- **狙い**: GitHub上のPRレビュー、社内ドキュメントの参照、Datadogのトレース調査、Jiraチケットの確認、Sentryのエラー調査など、エンジニアの作業の多くがブラウザ上で行われている実態に対応。ターミナルに閉じていたClaude Codeのコンテキストがブラウザ作業にも持ち越せるようになった
- **ログイン状態の共有**: ユーザーのログイン状態を共有した状態で動作するため、自分が構築したアプリを実際にテストする際にコンテキストを切り替える必要がなくなる
- **サブエージェントが既定でバックグラウンド実行に**: これまで対話を止めてサブエージェントの完了を待っていたが、以後はClaudeが作業を続けながらサブエージェントの結果を後で受け取る仕様に変更。結果が続行に必須な場合は引き続きフォアグラウンドで実行され、バックグラウンド中でも権限確認は必ずメインセッションに表示される。frontmatterの `background` フィールドで挙動を固定することも可能
- **Claude Sonnet 5が既定モデルに**: 同時期のアップデートでSonnet 5がPro・Team Standard・Enterprise向けの既定モデルとなり、ネイティブ100万トークンのコンテキストウィンドウを利用可能に
- **その他**: Claude Desktopがベータ版としてLinux(Ubuntu 22.04+、Debian 12+)にも対応

## 使ってみるには

- **Claude in Chrome**: Anthropicの直接プラン契約者であれば、Chromeウェブストアから拡張機能を追加するだけで利用可能
- **サブエージェントのバックグラウンド実行**: 特に設定は不要で、アップデート後は自動的に有効。特定のサブエージェントを常にフォアグラウンドで動かしたい場合はfrontmatterで指定する
- 詳細は Claude Code ドキュメントの [Chromeとの連携ページ](https://code.claude.com/docs/en/chrome) と [サブエージェントのフォアグラウンド/バックグラウンド実行ページ](https://code.claude.com/docs/en/sub-agents#run-subagents-in-foreground-or-background) を参照
