---
title: "KiroがEnterprise Managementをプレビュー公開、IDE・CLI・Web・Crew LTSに1つのポリシーを適用"
description: "管理者がAWSコンソールで書いた1つのポリシーをKiro全体に適用できます。同日にIDE 1.4.154で権限モード「Approve for me」が加わり、Grok 4.7も実験的に利用可能になりました。"
pubDate: 2026-11-10
category: kiro
type: news
tags: [Kiro, エンタープライズ, ポリシー, Crew LTS]
source: https://kiro.dev/changelog/general/enterprise-management-preview/
draft: false
importance: medium
---

Kiroは2026年11月10日、Enterprise Managementのプレビューを公開しました。

## Enterprise Management(プレビュー)

- **対象:** 米国東部(バージニア北部)`us-east-1`で新規作成するプロファイルが対象です。既存プロファイルと欧州のプロファイルは後日対応します。
- **1つのポリシー:** 管理者がAWSコンソールで1つのポリシーを書くと、Kiro IDE、CLI、Web、Crew LTSに適用されます。クライアントはIDE 1.4.154以降、CLI 3.1.0以降が必要です。
- **ルール:** モデルの使用、シェルコマンドの実行、ファイルの読み書き、Web検索、MCPツールの呼び出しの前に、許可・拒否・確認を求めるルールを設定できます。ポリシーでは既定モデル、プロンプトのログ、利用レポートも設定でき、ステアリングファイル、Skills、Powersを開発者に配布することもできます。
- **範囲と認証:** ルールはプロファイル全体、1つのグループ、1人のユーザーに適用でき、IAM Identity Center、Okta、Microsoft Entra IDを認証元にできます。
- **既定の動作:** モデル、APIキー、Crewのメッセージとネットワークアクセスは、ルールで許可するまで拒否されます。

## Kiro Crew LTS 0.1.0

Enterprise Managementを使う組織向けのCrew版です。共通ポリシーとCrew固有の制御を適用し、通常のCrewアプリと並べてインストールでき、専用の`lts`チャンネルからのみ更新されます。Kiro CLI経由のSSOサインインが必要です。

## 同日のその他の更新

- **IDE 1.4.154:** SupervisedとAccept file changesに加え、権限モード「Approve for me」が追加されました。Kiroが定型的な操作は承認し、危険な操作はブロックし、判断に迷うときは確認します。ユーザーの拒否・確認・許可ルールが先に評価されます。
- **Grok 4.7:** Pro、Pro+、Pro Max、Powerの顧客向けに実験的に対応しました。コンテキストウィンドウは500Kトークンで、200Kトークンまでのリクエストはクレジット2.7倍、それを超えると5.4倍です。
- **CLI 3.2.0:** 横に広いMermaid図のフルスクリーン表示と、Client ID Metadata Documentsに対応するサーバーでのMCPサインインが加わりました。
- **クレジットプーリング:** IAM Identity Centerに加え、OktaとMicrosoft Entra IDでも使えるようになりました。
