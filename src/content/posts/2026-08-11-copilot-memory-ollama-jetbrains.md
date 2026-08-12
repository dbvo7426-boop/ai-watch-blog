---
title: "GitHub Copilot for JetBrains、メモリ機能とOllama連携に対応"
description: "GitHub Copilot for JetBrainsが「Copilot Memory」でエージェントチャットのセッションをまたいだ文脈保持に対応し、BYOKモデルプロバイダーとしてOllamaもサポート。新たなエンタープライズ向け管理機能も追加された。"
pubDate: 2026-08-11
category: copilot
type: news
tags: [GitHub Copilot, JetBrains, Copilot Memory, Ollama, エンタープライズ]
source: https://github.blog/changelog/2026-08-11-copilot-memory-and-ollama-in-github-copilot-for-jetbrains
draft: false
importance: medium
---

GitHubはGitHub Copilot for JetBrainsに大幅なアップデートを実施した。目玉は新機能「Copilot Memory」と、モデルプロバイダーとしてOllamaをBYOK(自前のキー持ち込み)方式でサポートする点で、エンタープライズ向け管理機能の拡充も併せて行われた。

## 詳細

- **Copilot Memory**: プラグインがエージェントチャットのセッションをまたいで有用な情報を保持・呼び出せるようになり、ユーザーは新しい会話のたびにプロジェクトの文脈を繰り返し伝える必要がなくなる。この機能はCopilotの設定ポータルからオン・オフを切り替えられる
- **BYOKプロバイダーとしてのOllama**: 開発者はOllamaをBYOKモデルプロバイダーとして設定できるようになり、JetBrains環境全体でプロバイダー設定とモデル選択が可能になった
- **エンタープライズ向けサーバーベースの管理機能**: 管理者は、プラグインの利用可否、MCPサーバーへのアクセス、その他の設定を含む、組織全体でのCopilot管理のための新しいサーバーベースの管理機能を利用できるようになった
- **CLIの自動インストール**: プラグインは、macOS、Linux、Windowsの統合ターミナルからCopilot CLIを自動インストールできるようになった
- **Codexワークフローの可視化**: Codexセッションがデバッグログで確認できるようになり、更新された権限設定やカスタマイズにも対応した
- **ユーザビリティの改善**: アカウントの切り替え・削除、モデル選択画面や設定パネルの使い勝手を改善したほか、チャット入力欄でのファイル/フォルダ参照機能を復活させ、カスタマイズボタンとデバッグログボタンの配置を見直した。また、MCP実行の信頼性、ターミナル出力の処理、クラウドエージェントの安定性、差分ベースの編集に関する不具合も修正した

## 使ってみるには

このアップデートはすべてのGitHub Copilot for JetBrainsユーザーに今すぐ提供されている。Copilot MemoryはCopilotの設定ポータルから有効・無効を切り替えられ、Ollamaも同じプロバイダー設定画面からモデルプロバイダーとして追加できる。
