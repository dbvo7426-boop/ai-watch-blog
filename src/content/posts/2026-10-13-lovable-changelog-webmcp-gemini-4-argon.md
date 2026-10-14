---
title: "Lovable、WebMCPによるブラウザエージェント対応とGemini 4 Argon、Postgres拡張機能の制限を追加"
description: "Lovableの10月13日付チェンジログでは、WebMCPによりブラウザ上のAIエージェントが公開アプリを操作できるようになったほか、GoogleのGemini 4 Argonモデルへの対応、チャットコネクタのツール一括承認、対応PostgreSQL拡張機能の明文化、設定項目の検索機能が追加された。"
pubDate: 2026-10-13
category: lovable
type: news
tags: [WebMCP, Gemini4Argon, PostgreSQL, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableの2026年10月13日付チェンジログでは、公開済みアプリをブラウザ上のAIエージェントに開放するWebMCP対応、Googleが新たにリリースしたGemini 4 Argonモデルへのアプリ内AI機能での対応、そしていくつかのワークスペース・データベース管理面の改善が行われた。

## 詳細

- **ブラウザエージェント向けWebMCP**: エージェント連携機能を有効にすると、ブラウザ上で動作するAIエージェントが、ユーザー自身のサインイン済みセッションを使って、開いているページ上で操作を行えるWebMCPツールが追加される。破壊的な操作や決済を伴う操作は要望があった場合のみ追加される
- **Gemini 4 Argonモデルへの対応**: Googleの`google/gemini-4-argon`がアプリのAI機能で利用可能になり、テキスト・画像・音声・動画入力に対応(料金はプレミアム価格)
- **チャットコネクタのツール一括承認**: チームはチャットコネクタの全ツール(今後追加されるものも含む)を常に許可する設定を選べるようになり、Connectors画面から変更可能
- **対応PostgreSQL拡張機能の明文化**: Lovable Cloudが対応する拡張機能は`pg_cron`、`pg_net`、`vector`、`postgis`など決まった一覧に限定され、それ以外の`CREATE EXTENSION`要求は拒否され、Lovableは通常のSQLで代替処理を行う
- **設定項目の検索**: ワークスペース設定サイドバーの検索機能が個別の設定項目まで検索でき、該当箇所を直接開けるようになった

## その後

今回の中で最も影響が大きいのはWebMCP対応だ。これにより、Lovableで作られたアプリはLovableのエディタ内での対話的AIにとどまらず、ユーザーの既存セッションを通じて外部のブラウザ上AIエージェントが公開アプリそのものを操作できるようになる。同日にリリースされたばかりのマルチモーダルモデルGemini 4 Argonへの対応と合わせ、LovableはAI機能のラインナップを最新に保ちつつ、公開アプリをエージェントが操作しやすいウェブへと近づけており、業界全体で進む「エージェントがアクセスできるインターフェース」への流れとも合致している。
