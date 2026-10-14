---
title: "Cursor、「Origin」アプリマーケットプレイスを一般公開 外部連携20以上を追加"
description: "Cursorの「Origin」プラットフォームが、デプロイ・CI・コードレビュー・セキュリティ・モニタリング向けの20以上の開発者ツールと連携可能に。Cloudflare、Linear、Sentry、Socket Securityなどが参加し、マーケットプレイスへのアプリ申請も一般の開発チームに開放された。"
pubDate: 2026-10-13
category: cursor
type: news
tags: [Origin, Marketplace, Integrations, DeveloperTools, ProductUpdate]
source: https://cursor.com/changelog
draft: false
importance: medium
---

Cursorは10月13日付のチェンジログで、「Origin」プラットフォーム向けの一般公開アプリマーケットプレイスを発表した。デプロイ・CI・コードレビュー・セキュリティ・モニタリングの各分野で20以上の開発者ツールと接続できるようになり、申請窓口も開発者ツールを作るあらゆるチームに開放された。

## 詳細

- **本日から利用可能な20以上の連携先**をカテゴリ別に整理:
  - デプロイ: Cloudflare、Netlify、Render、Spacelift、Vercel
  - CI: Buildkite、CircleCI、CloudBees、Depot、EngFlow、Namespace、RWX
  - コードレビュー: CodeRabbit、Greptile、Tenki
  - セキュリティ: Artemis Security、Semgrep、Socket Security、Upwind
  - モニタリング: Sentry
  - プロジェクト管理: Linear
- **一般申請を開放**: ローンチパートナーに限らず、開発者ツールを作るあらゆるチームがマーケットプレイスへアプリを申請できるようになった
- **公開の流れ**: 開発者はまず自分の名前空間でアプリを作成(開発中は非公開)。Origin APIを使い、アプリJWTとインストールアクセストークンでWebhook受信やチェックラン・PRコメント・レビューの書き込みを実装したうえで、アプリを公開設定にし、スラッグ・推奨タグ・インストール/アンインストールと主要フローを示すデモ動画を添えて申請する
- **審査プロセス**: Cursorが各申請を審査し、承認されたアプリをマーケットプレイスに掲載する
- **開発者向けツール**: 公開ガイド、Origin APIリファレンス、そしてライブAPIドキュメントを参照しながら質問に答え、既存アプリをOriginへ移植する計画を手伝う「Origin Apps」プラグインを用意

## その後

Originを一般申請に開放したことで、Cursorは同プラットフォームを限られたローンチパートナーの集まりではなく、開発者ツール全般の統合拠点として位置づけようとしていることがうかがえる。初期のパートナー陣容はすでにソフトウェア配信パイプラインに必要な主要分野(デプロイ・CI・レビュー・セキュリティ・モニタリング・計画管理)を一通り網羅しており、ドキュメント化されたAPIに基づくセルフサービス型の公開フローは、今後より多くの開発者ツールベンダーがOrigin向けのネイティブ連携を作り、カタログが急速に拡大していくことをCursorが見込んでいる表れだろう。
