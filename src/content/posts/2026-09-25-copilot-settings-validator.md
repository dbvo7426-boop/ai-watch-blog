---
title: "GitHub、Copilotエンタープライズ管理設定向けのアプリ内バリデーターを追加"
description: "GitHubが、Copilotのエンタープライズ管理設定について、不正な形式のJSON・非対応の設定・無効なチーム対応付けなどをポリシー適用の失敗前に検出できる、アプリ内バリデーターを追加。メインの設定ファイルとチーム固有の設定ファイルの両方を対象とする。"
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, 管理者機能, ガバナンス]
source: https://github.blog/changelog/2026-09-25-enterprise-managed-settings-in-product-validator
draft: false
importance: low
---

GitHubは、Copilotのエンタープライズ管理設定向けにアプリ内バリデーターを追加しました。設定ミスがポリシーの適用失敗につながる前に、管理者がそれを検出できるようにするものです。

## 詳細

- **検出する内容**: 不正な形式のJSON、非対応の設定、無効なチーム対応付けなどのエラーで、メインの設定ファイルとチーム固有の設定ファイルの両方を検証する
- **監視対象**: `copilot/managed-settings.json`と`copilot/team-mappings.json`、および参照されているチーム設定ファイル
- **使い方**: エンタープライズのAI管理コンソールにある「Copilot settings validation」セクションを開き、問題のある具体的なファイルとJSONパスを示すエラーメッセージを確認。`.github-private`リポジトリ内のファイルを修正し、デフォルトブランチにコミットした上で、バリデーターを再読み込み・再チェックする

## その後

このバリデーターにより、これまで気づかれにくかった障害モード——不正な形式の設定ファイルが静かに反映されないまま放置される問題——を、管理者がポリシーの穴が生じる前に事前に検出・修正できるようになります。
