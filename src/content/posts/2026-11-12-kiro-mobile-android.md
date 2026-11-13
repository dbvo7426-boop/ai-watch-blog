---
title: "KiroのAndroidアプリ「Kiro Mobile」が登場、スマホからクラウドセッションを確認・レビュー"
description: "Kiro MobileがGoogle Playで公開されました。Pro、Pro+、Pro Max、Powerプランで利用でき、クラウドセッションの開始・継続、エージェントへの指示、差分とプルリクエスト状況の確認をスマホで行えます。"
pubDate: 2026-11-12
category: kiro
type: news
tags: [Kiro, Android, モバイル, クラウドセッション]
source: https://kiro.dev/changelog/mobile/kiro-mobile-for-android/
draft: false
importance: medium
---

Kiroは2026年11月12日、Android向けのKiro Mobileを公開しました。アプリはGoogle Playで入手でき、Pro、Pro+、Pro Max、Powerのいずれかのプランが必要です。

## 詳細

- **サインイン:** Kiroアカウントでサインインします。セッション、接続済みリポジトリ、モデルの選択が引き継がれ、ノートPCを起動したままにしておく必要はありません。
- **セッション:** クラウドセッションを新しく始めるか、Kiro Web・IDE・CLIで始めたセッションを続けられます。リポジトリとモデルを選び、先に計画を立てるBuild with specも選べます。
- **実行中:** 返信やツールの動きをリアルタイムで追い、画像を添付し、エージェントの質問に答え、実行を止めることができます。
- **レビュー:** 編集された各ファイルはスマホ向けの差分カードで表示され、各セッションにプルリクエストの状況が出ます。レビューとマージはこれまでどおりGitプロバイダー側で行います。

## 同日の更新

CLI 3.3.0では、`/copy N`と`/copy last N`の追加、自動コンパクションのコンテキスト使用量しきい値の設定、サブエージェントのタスクのエージェントモニター表示が加わりました。また、KiroサービスのMCPツール呼び出しが、`us-east-1`と`eu-central-1`のプロファイルでAWS CloudTrailに記録されるようになりました。引数は伏せられ、結果は記録されません。
