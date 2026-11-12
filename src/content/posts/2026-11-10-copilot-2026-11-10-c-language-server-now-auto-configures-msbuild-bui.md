---
title: "Copilot CLI向けMicrosoft C++ Language Server、MSBuildプロジェクトを自動で構成"
description: "言語サーバーがMSBuild用のコンパイルコマンド抽出ツールを同梱し、プロジェクトを開くときに自動実行します。エージェントが別の構成スキルを探して実行する必要はなくなりました。"
pubDate: 2026-11-10
category: copilot
type: news
tags: [GitHub Copilot, Copilot CLI, C++, MSBuild]
source: https://github.blog/changelog/2026-11-10-c-language-server-now-auto-configures-msbuild-builds
draft: false
importance: low
---

GitHub Copilot CLI向けのMicrosoft C++ Language Serverが、MSBuild用のコンパイルコマンド抽出ツールを同梱し、自動で実行するようになりました。

## 変更点

- **従来:** 定義へ移動や参照の検索といった機能には、ユーザーが用意するcompile_commands.jsonか、Copilotが探して実行する構成スキルが必要で、セットアップの時間とトークンを消費していました。
- **現在:** 抽出ツールが言語サーバーに同梱され、プロジェクトを開いて言語サーバーが起動するときにCopilotが実行します。MSBuildプロジェクトのコンパイルデータベースの生成は決定的で、セットアップ時のトークン消費が減ります。

## ほかのビルドシステム

- 自分で用意したcompile_commands.jsonを使えます。
- CMakeプロジェクトでは、以前のリリースにある生成スキルを、Copilot CLIに「プロジェクトを読み込む」よう依頼することで使えます。
- 独自のビルドシステムについては、カスタム抽出スキルの作り方を説明したガイドがあります。

## 使い始めるには

リポジトリのC++ Language Serverのクイックスタートに従って、プラグインをインストールし、EULAに同意します。有効なGitHub Copilotのサブスクリプションが必要です。
