---
title: "Lovable製アプリ、Copilot Managed Runtime経由で企業のMicrosoftテナント内で直接稼働可能に"
description: "LovableはMicrosoftと提携し、Lovableで作成したアプリを顧客企業のMicrosoft Entraテナントへ直接デプロイできるようにしました。Entraサインイン、IT側のガバナンス管理、Outlook・Teams・SharePointなどMicrosoft 365各サービスとのネイティブ連携に対応します。"
pubDate: 2026-09-28
category: lovable
type: news
tags: [Lovable, Microsoft, Entra, エンタープライズ, 連携]
source: https://lovable.dev/blog/microsoft-partnership
draft: false
importance: medium
---

Lovableは2026年9月28日、Microsoftとの提携を発表しました。これにより、Lovableで構築したアプリケーションを、別途ホスティング環境を用意することなく、企業自身のMicrosoftテナント内でMicrosoftのID管理・ガバナンス基盤を使って直接稼働させられるようになります。

## 詳細

- **仕組み**: ユーザーがアプリの内容を説明し、Lovableが通常通り構築する。完成したアプリはMicrosoftの「Copilot Managed Runtime」を通じてパッケージ化され、顧客のMicrosoft Entraテナントへ直接デプロイされる。従業員は既存の業務用アカウントでサインインでき、IT部門は他のMicrosoft製アプリと同様に管理できる
- **データはMicrosoftのエコシステム内に留まる**: Lovable製アプリはOutlook、Teams、Excel、SharePoint、OneDrive、Word、PowerPoint、OneNote、Microsoft Fabric、Dataverse、SQLと連携可能で、データは外部にエクスポートされずMicrosoftのシステム内に留まる
- **認証とガバナンス**: サインインはMicrosoft Entra IDを通じて行われ、管理者はディレクトリメンバーシップに基づいてアクセスを制御できる。公開したアプリはテナントのアプリ一覧に表示され、既存のデータ損失防止(DLP)ポリシーやコネクタポリシーが実行時に適用され、操作ログはMicrosoft側の監査ログにも記録される
- **プラン別の対応範囲**: Microsoft 365コネクタとMicrosoft Fabric連携はLovableの全プランで利用可能。一方、Entra ID経由のワークスペースサインイン、SSO、SCIM、セキュリティスキャン、監査ログはBusinessおよびEnterpriseプランに含まれる
- **提供状況**: Copilot Managed Runtimeは現在パブリックプレビュー中。Microsoftによれば、テナント管理者による初回セットアップ(Lovableアプリへの同意付与と外部製アプリの許可)には約20分かかるという

## その後

今回の統合は、Lovableがこれまでで最も踏み込んだエンタープライズ向けガバナンス施策と言えます。Microsoft中心のコンプライアンスやデータ所在地ポリシーに合わないという理由でAI製アプリの導入を拒んできたIT部門に対して、直接アプローチする狙いです。アプリ一覧、サインイン、DLPポリシー、監査ログといった要素を、IT部門が既に運用しているインフラの上に載せることで、Lovableは機能追加そのものよりも、こうしたガバナンス上の摩擦を取り除くことこそが、AI生成アプリの全社的な導入を後押しする鍵になると見ているようです。
