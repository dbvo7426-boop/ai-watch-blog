---
title: "GitHub Copilot が JetBrains Air で利用可能に"
description: "JetBrains Air に Agent Client Protocol 経由で GitHub Copilot が追加され、IDE 上のローカルタスクと Copilot プラン課金のクラウドタスクを実行できます。"
pubDate: 2026-11-03
category: copilot
type: news
tags: [Copilot, JetBrains, Air, ACP, クラウドエージェント]
source: https://github.blog/changelog/2026-11-03-github-copilot-is-now-available-in-jetbrains-air
draft: false
importance: medium
---

GitHub Copilot が JetBrains Air で使えるようになりました。既存の Copilot サブスクリプションで、コーディングタスクの委任、実行の誘導、結果のレビューができます。連携には Agent Client Protocol (ACP) を使い、JetBrains IDE 内でもクラウド上でもタスクを実行できます。

## 詳細

- **エージェント選択:** Air のエージェントピッカーで GitHub Copilot を選ぶと、Copilot のサブスクリプションでコーディングタスクを実行できます。GitHub Copilot プラグインと併用できます。
- **並行作業:** 複数のエージェントセッションを追跡し、プロジェクトのコンテキストや IDE ツールを使いながら、コードの横で変更をレビューできます。
- **クラウドタスク:** Air Teams を通じて、IDE またはブラウザから分離されたクラウド環境で Copilot を動かせます。消費されるのは JetBrains AI クレジットではなく Copilot のプランです。
- **クラウドタスクの準備:** Air Teams が有効な法人組織の JetBrains アカウント、Copilot サブスクリプション、Air 管理者による Copilot の有効化が必要です。ブラウザでは Settings > VCS Providers で GitHub を接続し、IDE では環境セレクターで Cloud を選びます。
- **サンドボックス:** クラウドタスクは新規仮想マシン上の Docker コンテナで動作し、通信はすべてプロキシ経由で、タスク間で状態は引き継がれません。

## 制限事項

- タスクごとに個人プランと組織プランのどちらを使うかは選べません。
- Air のガバナンス機能と分析機能には Copilot の利用状況が含まれません。
- Air 管理者はガバナンスポリシーで Copilot を無効化できますが、Air 内で Copilot の利用上限は設定できません。
- サブスクリプションやクレジットの有無はクラウド環境の起動時にしか確認されないことがあり、その時点でタスクが失敗する場合があります。

## その後の展開

Copilot は既存のプラグインに加え、第二の経路で JetBrains ユーザーに届くようになりました。共通の土台は ACP です。既存の Copilot プランを使う以外の料金の詳細は、発表では明らかにされていません。
