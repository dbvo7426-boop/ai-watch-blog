---
title: "GitHub intelligence: Copilot Memory が GA、dreaming はプレビュー、リポジトリ横断コード検索"
description: "GitHub のデータグラフを基にエージェント向けの文脈・学習レイヤーを提供。Copilot Memory は一般提供、dreaming はパブリックプレビュー、Copilot はリポジトリをまたいだコード検索が可能になります。"
pubDate: 2026-10-28
category: copilot
type: news
tags: [GitHub Copilot, Copilot Memory, Dreaming, Code search, GitHub Universe]
source: https://github.blog/changelog/2026-10-28-github-intelligence-puts-your-code-context-and-history-to-work
draft: false
importance: high
---

GitHub は GitHub intelligence を発表しました。GitHub のデータグラフを基にした文脈・学習レイヤーで、エージェントが利用者の作業方法を記憶し、その指針を最新に保ち、関連するコードや開発履歴を見つけられるようにします。Memory、Dreaming、Code Search の 3 機能で構成されます。

## 詳細

- **Copilot Memory(一般提供、有料プラン):** 個人の好みやリポジトリの規約を、セッションやクライアントをまたいで記憶します。Copilot アプリ、CLI、VS Code、クラウドエージェント、コードレビュー、Slack、Teams、GitHub Mobile で作成できます。セッションが自動的にメモリを生成・整理します。個人のメモリは Copilot 設定で管理できます。
- **GitHub 報告の成果:** パブリックプレビュー中にレビューされた、メモリが使われた Copilot CLI セッションのうち、93% で開発者の好みへの追従が改善し、42% でワークフローが効率化したとされています。
- **Dreaming(パブリックプレビュー、オプトイン):** 過去の作業を振り返ります。種類は 3 つで、個人メモリの整理、リポジトリのカスタマイズ(リポジトリのメモリ管理と、スキルやカスタム指示ファイルの改善提案)、コードレビューのカスタマイズ(繰り返し採用されたレビュー指摘をガイダンス化)です。メモリの追加・更新・削除が可能で、チェックイン済みのスキルや指示への変更はプルリクエストで提案されます。個人は設定で有効化し、組織・エンタープライズでは管理者が Copilot ポリシーで有効化したうえで、ユーザー自身も有効化が必要です。Dream の実行は AI クレジットを消費します。
- **Code Search:** Copilot がローカルにクローンせずに、GitHub コード検索でリポジトリ横断の検索を行えます。完全一致のテキストやシンボル、正規表現、リポジトリ・パス・言語での絞り込み、コードの内容に基づくセマンティック検索が使えます。`/research` を使った例として、移行計画、サービス横断のバグ調査、組織標準に沿った変更が挙げられています。
- **提供状況:** 提供範囲と設定は機能ごとに異なります。Code Search の対象プランは非公開です。

## その後

GitHub の強みは、エージェントが必要とするリポジトリ、レビュー、履歴のデータを自社で持っている点だという主張です。Memory は成熟した機能で、Dreaming は共有の指針を書き換える点でより野心的ですが、変更をプルリクエスト経由にすることで人間の確認を残しています。93% と 42% の数値は GitHub 自身によるプレビューセッションのレビュー結果で、手法はここでは示されていません。
