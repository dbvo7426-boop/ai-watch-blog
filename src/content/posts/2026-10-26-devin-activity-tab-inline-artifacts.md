---
title: "Devin、ProgressとShellを統合したActivityタブとインラインアーティファクトを追加"
description: "Devinの2026年10月26日のリリースノートでは、ProgressとShellタブを検索可能な1つのActivityビューに統合し、HTMLアーティファクトをメッセージ内に直接表示できるようになりました。Devin ReviewのPRカードやOncall向けTerraformリソースも追加されています。"
pubDate: 2026-10-26
category: devin
type: news
tags: [Devin, Activity, Artifacts, Devin Review, Terraform]
source: https://docs.devin.ai/release-notes
draft: false
importance: medium
---

Devinの2026年10月26日付リリースノートでは、セッション画面が刷新されました。ProgressタブとShellタブが1つのActivityビューに統合され、DevinのHTMLアーティファクトをメッセージ内に直接埋め込めるようになっています。

## 詳細

- **Activityタブ:** ProgressとShellを統合し、検索、種別フィルタ、固定可能な詳細ドロワーを備えます。各行は対応するユーザーメッセージの下に折りたたまれます。
- **インラインアーティファクト:** レポート、ダッシュボード、表、グラフなどのHTMLアーティファクトが、アプリのデザインシステムに合わせた新しいコンポーネントキットで表示され、メッセージ内に埋め込めます。
- **トランスクリプトとコンポーザー:** ブロックされたプロンプトには理由を示すカードが表示されます。長いシェルコマンドはプレビュー表示になり、クリックで展開できます。機能ピッカーでデフォルトモードにスターを付けたり、レールメニューからDevinのリンクをコピーしたり、セッション再開中にDevinをスリープさせないようにできます。
- **録画:** セッション録画ビューアは、デフォルトで動画を開きます。
- **Slack:** 編集されたSlackメッセージに「(edited)」フッターが付き、「Channel for repository updates」のドロップダウンが検索可能になりました。
- **Devin Review:** PRリンクにホバーするとPRカードが表示され、閲覧可能なセッションに紐づかないPRでも使えます。セッションヘッダーのPRチップは参照中のPRを一覧表示し、PRピルは状態ごとに色分けされます。
- **Terraform:** プロバイダに `devin_oncall_responder` リソースと `devin_oncall_schemas` データソースが追加されました。
- **提供範囲・料金:** リリースノートでは明らかにされていません。

## その後

今回のリリースは主にインターフェースの整理で、エージェントの作業内容を1か所で追えるようにし、リッチな出力を会話内に表示できるようにしたものです。Terraformの追加は、10月19日のDevin Oncall一般提供に続き、レスポンダーをコードとして管理できるようにします。利用データや展開時期は情報源に記載がありません。
