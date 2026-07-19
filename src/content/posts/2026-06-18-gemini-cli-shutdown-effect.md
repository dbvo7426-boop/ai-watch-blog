---
title: 「Gemini CLI」個人向け提供が実際に停止、CI/CDパイプラインに障害相次ぐ
description: 予告通り2026年6月18日、Gemini CLIの無料・個人向けAPIアクセスが停止。認証はHTTP 410エラーとなり、後継Antigravity CLIとの設定差異でCI/CDパイプラインが次々と機能停止した。
pubDate: 2026-06-18
category: gemini
type: news
tags: [Gemini CLI, Google, Antigravity CLI, オープンソース]
source: https://www.techtimes.com/articles/318660/20260618/gemini-cli-shutdown-takes-effect-ci-cd-pipelines-break-go-based-antigravity-cli-arrives.htm
draft: false
importance: high
---

2026年5月19日の予告通り、Gemini CLIの無料・Google AI Pro/Ultra個人ユーザー向け提供が2026年6月18日に実際に停止しました。認証エンドポイントはHTTP 410(Gone)を返すようになり、GitHub Actionsやcronジョブ、Dockerコンテナなど、`gemini`コマンドに依存していた自動化基盤が各所で機能停止に陥っています。

## 詳細

- **即日停止**: 無料ユーザーだけでなくGoogle AI Pro・Ultraの個人契約者も対象に、猶予期間なしでAPIアクセスが停止
- **CI/CD障害**: GitHub Actionsのワークフロー、Dockerコンテナ、cronジョブ、Makefileターゲットなど、Gemini CLIを組み込んでいた自動化の仕組みが軒並み停止。数時間のうちにビルド失敗や自動化ジョブの失敗が複数チームから報告された
- **サイレントな設定崩壊**: 後継のAntigravity CLIはMCP設定の項目名を`url`から`serverUrl`に変更しており、エラーメッセージを出さないまま設定が無効になる「サイレント障害」も発生
- **無料枠の大幅縮小**: Gemini CLI時代の1日約1,000リクエストという無料枠は、Antigravity CLIでは1日20リクエスト程度に縮小(約98%減)されたと報告されている
- **プロジェクトの実績**: 稼働期間約12か月でGitHubスター10万5,000、コミュニティからのマージ済みプルリクエスト6,000件という実績を積んだ末の幕引きとなった
- **開発者の声**: 貢献者のAndrea Alberti氏は「結局、企業だけが使うコードベースのために無償で働いていたということか」とコメント。別の貢献者は「オープンソースのGemini CLIに貢献させておいて、クローズドソースのプロジェクトに移行させた」と批判した

## 使ってみるには

- 個人でGemini CLIを利用していた場合、後継の「Antigravity CLI」への移行が必須。ただしMCPサーバー設定など一部項目の書式が変わっているため、既存のスクリプトやCI設定は個別に見直す必要がある
- Gemini Code Assist Standard/Enterpriseライセンスを持つ組織や、Google Cloud経由でGemini Code Assist for GitHubを利用する組織は、引き続き旧来のGemini CLIを利用可能
