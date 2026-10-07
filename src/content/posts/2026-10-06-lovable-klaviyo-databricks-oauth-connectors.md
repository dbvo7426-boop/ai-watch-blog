---
title: "Lovable、Klaviyo・Excalidraw+連携とDatabricksの個人アカウントOAuthを追加"
description: "Lovableの10月6日のchangelogでは、メール/SMSマーケティング向けのKlaviyo連携、チャット連携としてのExcalidraw+、Databricksの個人アカウントOAuth対応、AIモデル選択画面の刷新、Gemini 3.6 Flash廃止予告が追加された。"
pubDate: 2026-10-06
category: lovable
type: news
tags: [Lovable, Klaviyo, Databricks, Excalidraw, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableは2026年10月6日のchangelogで、KlaviyoとExcalidraw+という2つの新しい連携を追加しました。あわせてDatabricksの個人アカウントOAuth対応、組み込みAIコネクタのモデル選択画面刷新、Gemini 3.6 Flashの廃止予告も発表されています。

## 詳細

- **Klaviyo連携**: アプリから顧客プロフィールの管理、メール/SMS同意に基づくリスト購読の処理、申込・購入などのイベント記録、キャンペーンやフローへのアクセスが可能に。ニュースレターフォームやSMSオプトイン、社内マーケティングダッシュボードなどの用途を想定している
- **Excalidraw+チャット連携**: 事前構築済みチャット連携カタログに追加され、ユーザーのExcalidraw+ワークスペース内の図やプレゼンテーション(シーン)をLovableから直接管理できるようになった
- **DatabricksのUser OAuth対応**: 既存のDatabricks連携が、共有のサービスプリンシパルではなく個人のDatabricksアカウントでの認証に対応。クエリはユーザー個人の権限で実行され、誰がどのクエリを実行したかを示す監査ログも記録される
- **AIコネクタのモデル一覧刷新**: 組み込みAIコネクタで、利用可能な全モデルがプロバイダー情報と機能説明付きのカード形式で表示されるようになり、名前・プロバイダー・機能で検索できる
- **Gemini 3.6 Flashの廃止予告**: Googleが`google/gemini-3.6-flash`の提供を終了予定で、サポートは2026年11月19日まで。Lovableはユーザーに対し、同じ入力を同一価格で利用できるGemini 3.8 Flashへの移行を案内している

## その後

今回のリリースも、Lovableがほぼ毎日のペースで連携を拡張してきた流れを引き継ぐもので、新たなマーケティング・作図系連携に加え、Databricksの個人単位OAuthのようなアカウントレベルのセキュリティ機能も同時に強化されています。Gemini 3.6 Flashの廃止予告により、アプリ開発者はモデルが停止されるまでおよそ6週間の猶予を得て、同一価格で代替となるGemini 3.8 Flashへの移行を進めることになります。
