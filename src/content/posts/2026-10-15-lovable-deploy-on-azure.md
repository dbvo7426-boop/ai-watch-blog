---
title: "Lovable、顧客自身のAzureサブスクリプションへのデプロイをプライベートプレビューで開始"
description: "Lovableの新機能「Deploy on Azure」は、専用AKSデータプレーン・Azure Database for PostgreSQL・Key Vaultを使ったBYOK暗号化を備え、エンタープライズ顧客自身のAzureサブスクリプション内でアプリを稼働させながら、制作はLovableの通常エディタで続けられる仕組み。前日公開のAWS版BYOCに続く施策となる。"
pubDate: 2026-10-15
category: lovable
type: news
tags: [BYOC, Azure, Enterprise, Security, ProductUpdate]
source: https://lovable.dev/blog/deploy-on-azure
draft: false
importance: medium
---

Lovableは、一部のエンタープライズ顧客向けに、自社のLovableアプリを完全に自分たちのAzureサブスクリプション内で稼働させられる「Deploy on Azure」をプライベートプレビューとして公開した。制作自体はLovableの通常のエディタで続けられる。前日に公開したAWS向けのBYOCオプションと同じ考え方を踏襲している。

## 詳細

- **対象顧客**: アプリとデータを自社のAzure環境内に留めることを求めるセキュリティ規定を持つ組織、特にMicrosoft Entra ID・Microsoft 365・Fabric・Azureを既に利用している企業
- **専用データプレーン**: ビルドが実行されるプレビュー用サンドボックスを含むLovableのデータプレーンは、顧客サブスクリプション内の専用VNet(仮想ネットワーク)内にあるAzure Kubernetes Service(AKS)上で稼働する
- **公開アプリの構成**: 静的ファイルはAzure Blob Storageで配信し、動的リクエストはAzure Functionsが処理
- **アプリ用データベースとストレージ**: データベースはAzure Database for PostgreSQLを使用し、アプリのファイルストレージはAzure Blob Storageに保存。ログはBlob StorageまたはLog Analyticsワークスペースに送ることができる
- **コネクタゲートウェイと連携用シークレット**は顧客の環境内で稼働し、VNetピアリングによりアプリはデータウェアハウスやCRMなどの社内システムにパブリックインターネットを経由せずアクセスできる
- **セットアップ手順**: 管理者がエンタープライズワークスペースを作成してAzureホスティングを選択すると、Lovableが生成したAzure Resource Managerテンプレートが実行される。Lovableのコンテナイメージは顧客自身のAzure Container Registryにコピーされ、顧客側のパイプラインでスキャン可能。VNet内のVM上で動く「Lovable runner」がデータプレーンをプロビジョニング・管理する
- **セキュリティ**: 顧客サブスクリプション内の各コンポーネントは、アウトバウンドのみかつmTLS暗号化された接続でLovable側に接続し、インバウンドアクセスは不要。Entra ID経由のSSO・SCIM、公開はワークスペースメンバーに限定、ビルドごとのセキュリティスキャン、監査ログといった既存のエンタープライズ統制機能はそのまま適用される。チャット・プロジェクト履歴は保存時に暗号化され、顧客は自前のAzure Key Vaultの鍵を使ってBYOK(自己管理鍵)を適用し、いつでもLovableのアクセス権を取り消せる
- **中央集約されたまま残る要素**: エディタ本体、エージェント、チャット・プロジェクト履歴、ワークスペース設定、ID管理、課金はLovableのマルチテナントサービス側に残り、制作中のAIモデルへのリクエストも引き続きLovable自身のAIサービスが処理する
- **関連するMicrosoft向け選択肢**: Copilot Managed Runtime(Business/Enterprise向けパブリックプレビュー)はMicrosoftテナント内でアプリをホストする一方、Microsoftコネクタを使ってLovable上でホストする方式ではアプリをLovable側に置きつつMicrosoft 365・Entra・Azure・Fabricのデータに接続できる
- **制限事項と提供状況**: Lovableの標準ホスティングで使える一部機能はDeploy on Azureではまだ利用できず、Lovableは機能の完全一致を目指して開発を継続中。一部のエンタープライズ顧客向けのみ、担当アカウントチームまたはbyoc@lovable.devへの問い合わせで提供される

## その後

「Deploy on Azure」は、Lovableがわずか前日にAWS向けに導入したBYOC(Bring Your Own Cloud)方式を拡張するもので、Microsoft中心のエンタープライズ企業にも同じ価値提案を提供する。すなわち、制作体験はLovableのホスト型エディタに残しつつ、実行環境・データ・シークレットは企業が既に所有・管理するインフラ内に留めるという考え方だ。24時間以内に2つのBYOCオプションを相次いで公開したことは、Lovableがエンタープライズのデータ常駐要件への対応を、フルホスト型の競合に対する重要な競争軸として優先していることを示している。
