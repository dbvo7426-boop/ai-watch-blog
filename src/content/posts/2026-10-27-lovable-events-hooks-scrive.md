---
title: "Lovable、BusinessとEnterprise向けにワークスペースのEvents & Hooksを追加、Scriveコネクターも提供"
description: "Lovableの10月27日のチェンジログでは、管理者が自社のHTTPSエンドポイントで通知や可否判定を行えるEvents & Hooksと、電子署名・eID用のScriveコネクターが追加された。"
pubDate: 2026-10-27
category: lovable
type: news
tags: [Lovable, Events, Hooks, Scrive, エンタープライズ]
source: https://docs.lovable.dev/changelog
draft: false
importance: low
---

Lovableの2026年10月27日付チェンジログでは、ワークスペース向けのEvents & HooksとScriveコネクターが追加された。サイドバーの刷新も含まれる。

## 詳細

- **Events & Hooks:** BusinessおよびEnterpriseプランのワークスペース管理者・オーナーは、自社サービスでワークスペースを拡張できる。Eventsは、プロジェクトの作成、公開、別ワークスペースへの移管、削除の際にHTTPSエンドポイントへ通知する。Hooksは、先にエンドポイントが操作を許可またはブロックできる仕組みで、たとえばLovableが処理する前に、チャットのメッセージに機密情報がないか確認できる。設定はワークスペース設定から行う。
- **Scriveコネクター:** アプリをScrive eSign(署名依頼と状況追跡)や、BankIDやMitIDなどの国民eIDでユーザーを確認するScrive eID Hubに接続できる。コネクター画面から、またはプロジェクト内でLovableに依頼して追加する。
- **サイドバー:** プロジェクトとチャットが、Pinned、Projects、Recent chatsの3区分に整理された。PinnedはStarredに代わるもの。
- **名称変更:** ワークスペースとプロジェクトの設定で、KnowledgeがInstructionsに改名された。動作の変更はない。

## その後

操作をブロックできるHooksにより、セキュリティ担当者はコンテンツがLovableに届く前にデータポリシーを適用できる。10月前半の監査ログのエクスポートやSSOの追加を補完する機能といえる。リクエストのスキーマや制限は、チェンジログの項目には記載されていない。
