---
title: "Lovable、WhatsApp Business・Power BI連携と新GPT Image 2.5モデルを追加"
description: "Lovableの9月15日付changelogで、顧客対応向けのWhatsApp Business連携、DAXでセマンティックモデルを問い合わせられるPower BI連携、そしてOpenAIの新画像モデル「GPT Image 2.5 Flare/Sunburst」を追加。ワークスペース単位の学習利用設定も廃止された。"
pubDate: 2026-09-15
category: lovable
type: news
tags: [Lovable, プロダクトアップデート, WhatsApp, PowerBI, GPTImage]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableの2026年9月15日付changelogでは、2つの業務ツール連携が新たに追加され、OpenAIの最新画像モデルもアプリに組み込まれました。コードを書かずにLovableプロジェクトへ接続できる範囲がさらに広がっています。

## 詳細

- **WhatsApp Business連携**: LovableアプリからWhatsApp Businessに接続し、顧客からのメッセージ受信、テンプレート通知の送信、配信状況のトラッキングができるようになった。カスタマーサポートや予約リマインダー用途を想定
- **Power BI連携**: DAXを使ってPower BIのセマンティックモデルを問い合わせられるようになり、公式レポートと一致した数値をアプリ内に表示可能に。ユーザーごとのサインインに対応した個別アクセス制御もサポート
- **GPT Image 2.5モデル**: OpenAIの新しい画像モデルを2種類追加。素早いプレビュー向けの「GPT Image 2.5 Flare」と、高品質な最終アセット向けの「GPT Image 2.5 Sunburst」で、いずれも透過PNG/WebP出力に対応
- **スキップ動作の変更**: Lovableからの確認質問をスキップした場合、元のリクエストのデフォルト設定のみで処理が続行されるようになり、以前のように追加の提案作業まで承認されることはなくなった
- **ワークスペース単位の学習利用設定を廃止**: BusinessおよびEnterpriseプランのデータはデフォルトで学習利用の対象外となっているため、ワークスペース単位の「モデル学習にワークスペースのコンテンツを使用する」設定は廃止された

## その後

WhatsAppとPower BIの連携により、Lovableが得意としてきたWebアプリ・データベース構築の枠を超え、業務運用やレポーティングの領域まで活用範囲が広がりました。あわせて実施されたGPT Image 2.5への更新で、Lovable内蔵の画像生成機能もOpenAIの最新リリースに追随しています。今回のスキップ動作の修正も含め、サポート・分析・デザインといった複数の作業を同一プロジェクト内でこなす開発者にとって、Lovableの挙動をより予測しやすくする方向のアップデートといえます。changelogの全項目はdocs.lovable.dev/changelogで確認できます。
