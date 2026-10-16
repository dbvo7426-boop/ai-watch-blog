---
title: "Lovable changelog: 監査ログのSIEM連携エクスポート、Claude経由のSSOアクセス、GPT-6.1 Sol対応"
description: "Lovableの2026年10月15日付changelogでは、監査ログをSplunkやクラウドストレージへ定期エクスポートする機能、Claude内からLovableのMCPサーバーを使うためのエンタープライズSSO、アプリのAI機能で使えるGPT-6.1 Solモデル対応、チャット・ファイル管理の細かな改善が追加された。"
pubDate: 2026-10-15
category: lovable
type: news
tags: [Changelog, Enterprise, SSO, Audit Logs, GPT-6.1 Sol, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableは2026年10月15日付のchangelogで、エンタープライズ向け機能と細かなワークフロー改善をまとめて公開した。中心となるのは、監査ログを外部セキュリティツールへエクスポートする機能と、Claude内からLovableのMCPサーバーへアクセスするためのエンタープライズSSOだ。

## 詳細

- **監査ログのSIEM連携エクスポート**: エンタープライズワークスペースの管理者・オーナーは、監査ログをAmazon S3・Google Cloud Storage・Azure Blob Storage・Splunk・Azure Log Analyticsへ、1時間ごとまたは3時間ごとに定期エクスポートするよう設定できる。Lovable側はエクスポート自体に料金を課さないが、送信先プロバイダーのストレージ・取り込み料金は別途発生する
- **自社SSO経由でClaudeからLovableを利用**: Business・Enterpriseプランの管理者は、エンタープライズ管理の認証を有効化することで、メンバーがOktaのIDを使ってClaude内からLovableのMCPサーバーを利用できるようにできる。既存のLovable権限はそのまま維持される。利用にはClaudeのTeamまたはEnterpriseプランが必要
- **ログインページで「Sign in with Lovable」が既定に**: Lovable Cloud上のアプリ向けに作られたログインページには、メール/パスワードやGoogleに加えて「Sign in with Lovable」が既定で含まれるようになった。このログイン方式はクレジットを消費せず、プロンプトで別の方式を指定すれば変更できる
- **アプリのAI機能でGPT-6.1 Solが利用可能に**: モデル`openai/gpt-6.1-sol`が、Lovableで構築されたアプリ内の複雑なコーディングや専門的な作業向けに利用できるようになった。テキストと画像の入力を受け付け、テキストを出力する
- **チャット内でのドキュメントプレビュー**: チャットの返信で参照されたドキュメントは、ファイル種別アイコン付きのリスト表示になった。プレビュー可能な単一ドキュメント(PDFやMarkdownなど)は、より大きなプレビューカードとして表示される
- **ファイル選択・並べ替えの高速化**: Filesタブでチェックボックスによる複数選択ができるようになり、チャットやコレクションへの追加、ダウンロード、削除が可能になった。コレクション内では更新日時・名前・サイズで並べ替えができ、リスト表示にはファイル種別アイコンが表示される

## その後

今回の変更は、目立つ新機能というよりエンタープライズの運用面に重点を置いたものだ。セキュリティチームは既存のSIEM環境へ監査データを流し込む定常的な仕組みを得て、IT管理者は別々の認証情報を管理せずにClaude経由でLovableへのアクセスを統制できるようになり、ビルダーは利用できる基盤モデルの選択肢が一つ増え、チャットとファイルのUIも細かく改善された。同日に公開されたAIモデル群の追加やAzure BYOCプレビューと合わせて見ると、10月15日はLovableのエンタープライズ・プラットフォーム戦略における発表が集中した一日だったといえる。
