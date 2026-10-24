---
title: "Lovable、ワークスペースのまとめ管理、チャットからのSupabase作成、部署別の利用状況を追加"
description: "Lovableの10月20〜21日の更新で、Enterpriseは複数ワークスペースを組織にまとめられるようになり、チャットからSupabaseプロジェクトを作成でき、LlamaParseとn8nのコネクタ、SCIMなしSSOでの部署別利用状況も加わった。"
pubDate: 2026-10-21
category: lovable
type: news
tags: [Lovable, Enterprise, SSO, Supabase, Connectors]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableの10月20日と21日の更新履歴は、企業向け管理とバックエンド設定が中心だ。Enterpriseの顧客は複数のワークスペースを1つの組織にまとめて管理でき、バックエンドのないアプリにはLovableがSupabaseプロジェクトを作成できる。

## 詳細

- **組織(Enterprise)**: 複数のワークスペースを持つ企業は、まとめて管理できる。SSOは全ワークスペースに対して1回設定すればよく、SCIMがあればIDプロバイダーがメンバーを自動で追加・削除する。各ワークスペースのプロジェクト、メンバー、グループ、請求は個別に維持される。設定はアカウントチーム経由の依頼で行う。
- **SCIMなしでの部署別利用状況**: SSOを使いSCIMを使わないワークスペースでは、BusinessとEnterpriseの管理者・オーナーがInsightsで部署別の利用状況を確認できる。SAMLまたはOIDCアプリで`department`属性をマッピングする必要がある。Lovableはサインインのたびに読み取るため、メンバーが戻るにつれて内訳が埋まる。
- **LovableによるSupabaseプロジェクト作成**: バックエンドのないアプリに対し、組織とリージョンを選ぶとLovableがSupabaseプロジェクトを作成して接続する。内蔵バックエンドが無効な環境でも使える。リージョンは後から変更できず、請求はSupabase側で利用者自身の組織に発生する。
- **新しいアプリ・チャットコネクタ**: LlamaParse Platformとn8n。

## その後

今回の更新は、監査ログ、SSO、公開ポリシーなど、ここ1か月続いたLovableの企業向け管理機能の流れに沿っている。組織機能は複数ワークスペースの管理に、Supabase作成は内蔵バックエンドを無効にしているチームに役立つ。
