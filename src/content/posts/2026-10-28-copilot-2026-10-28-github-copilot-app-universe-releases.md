---
title: "GitHub Copilot アプリに Projects とコンピューター操作が登場(パブリックプレビュー)"
description: "Universe で、GitHub Copilot アプリに複数リポジトリにまたがる作業用の Projects と、macOS・Windows 向けのコンピューター操作が追加されました。連携ツールの文脈活用とチャット内の画像生成も加わります。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot app, Projects, Computer use, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-copilot-app-universe-releases
draft: false
importance: high
---

GitHub Copilot アプリが、複数リポジトリにまたがる、あるいはリポジトリを使わない作業を一か所にまとめる Projects と、Copilot がデスクトップアプリを操作するコンピューター操作(computer use)に対応しました。どちらもパブリックプレビューです。

## 詳細

- **Projects:** プロジェクトを開始し、目標を書き、リポジトリ、デザインモック、Slack スレッド、会議メモなどの文脈を追加します。モデルとツールを選ぶと、Copilot が必要な数のエージェントをバックグラウンドで動かし、プルリクエストなどの成果物をレビュー用に返します。プロジェクト Automations で、機能リリースごとにプロモ動画を作るといった定型作業も自動化できます。単一リポジトリの作業は従来どおりセッションで開始できます。
- **連携ツール:** Slack や Figma などの文脈を使い、依頼の調査、仕様の下書き、コードと並行したデザイン検討ができます。チャットで画像の生成・編集も可能です。
- **コンピューター操作(macOS、Windows):** Copilot がアプリの内容を読み取り、コントロールをクリックし、テキストを入力・編集し、アプリ間を移動します。API、CLI、MCP 連携のないアプリも対象で、例として経費精算ワークフローが挙げられています。
- **制御:** アプリを操作する前に Copilot が承認を求め、組織は管理設定で無効化できます。有効化は Settings > Computer Use から。macOS ではアクセシビリティと画面収録の権限が必要です。
- **これらの機能のプラン・料金:** 発表では非公開です。

## その後

Projects により、アプリはリポジトリ単位のセッションから、目標単位のオーケストレーションへ広がります。同週に発表された共有 Automations やエージェント機能とも方向が揃っています。コンピューター操作は連携手段のないソフトにも届きますが、権限が広くなるため、GitHub が挙げる承認プロンプトと管理設定での無効化が主な歯止めです。どちらもプレビューであり、挙動や提供範囲は変わる可能性があります。
