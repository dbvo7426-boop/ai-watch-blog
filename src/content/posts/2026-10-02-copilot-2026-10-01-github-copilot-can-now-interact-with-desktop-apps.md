---
title: "GitHub Copilot、「コンピュータ操作」機能を獲得——macOS・Windowsのデスクトップアプリを直接制御"
description: "GitHubが、Copilot CLIとGitHub CopilotアプリでPC操作機能のパブリックプレビューを開始。Copilotがデスクトップアプリを直接読み取り・クリック・入力・スクロール・操作できるようになり、APIを持たないレガシーソフトやGUI専用ツールへの対応を広げる。"
pubDate: 2026-10-01
category: copilot
type: news
tags: [GitHubCopilot, コンピュータ操作, 開発者ツール, エージェント]
source: https://github.blog/changelog/2026-10-01-github-copilot-can-now-interact-with-desktop-apps
draft: false
importance: high
---

GitHubは、GitHub Copilotがデスクトップアプリケーションと直接やり取りできる「コンピュータ操作」機能のパブリックプレビューを開始しました。macOSとWindowsの両方に対応しています。

## 詳細

- **できること**: Copilotが自律的にコンテンツを読み取り、コントロールをクリックし、テキストを入力し、スクロールし、デスクトップアプリケーション間を操作。APIやコマンドラインインターフェースを持たないレガシーソフトやGUI専用プログラムにも対応範囲を広げる
- **承認モデル**: アプリを操作する前にCopilotがユーザーの承認を求め、常に許可するよう設定したアプリの権限を確認・リセット可能。組織は管理設定からこの機能を完全に無効化できる
- **macOSでの設定**: 必要なアクセシビリティおよび画面収録の権限設定をシステムがガイド
- **提供状況**: Copilot CLIおよびmacOS・Windows両方のGitHub Copilotアプリでパブリックプレビュー提供
- **利用開始方法**: CLIでは`/computer on`で有効化(`/computer show`で状態確認、`/computer off`で無効化)、アプリでは設定→コンピュータ操作から有効化
- **活用例**: ブラウザの通知の要約、プレゼンテーション内容の更新、デスクトップアプリケーション内でのワークフローを通じた情報の移動

## その後

この機能により、GitHub Copilotは、OpenAIがGPT-6 Astraに組み込み「dots」エージェントにも拡張したのと同種の自律的なデスクトップ・コンピュータ操作能力を獲得しました。コンピュータ操作エージェントが特定ベンダーの差別化要因ではなく、主要AIプラットフォーム全体の標準的な機能階層になりつつあることを示しており、Copilotの新機能「Dynamic Workflows」と同日に発表されました。
