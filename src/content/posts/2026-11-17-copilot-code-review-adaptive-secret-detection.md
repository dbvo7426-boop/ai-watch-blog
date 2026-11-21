---
title: "Copilotコードレビューに適応型エフォート、シークレット検出、レビュー結果の分析が登場"
description: "パブリックプレビュー機能3つ、レビュー結果を見るRepository insightsページ、そしてAzure DevOps向けコードレビューの一般提供開始です。"
pubDate: 2026-11-17
category: copilot
type: news
tags: [GitHub Copilot, コードレビュー, シークレット検出, Azure DevOps]
source: https://github.blog/changelog/2026-11-17-copilot-code-review-adaptive-effort-secret-detection-and-more
draft: false
importance: medium
---

GitHubは2026年11月17日、Copilotコードレビューの複数の更新を発表しました。適応型エフォート、リポジトリ横断のコンテキスト、シークレット検出は、Copilot Pro、Pro+、Max、Business、Enterpriseでパブリックプレビューとして提供され、変更される可能性があります。

- **適応型レビューエフォート:** Copilotがプルリクエストごとに複雑さとリスクを判断し、Lite、Balanced、Maxのいずれかでレビューして、選ばれたレベルを表示します。単一のPRならReviewersバーからAdaptiveを選び、個人、リポジトリ、組織、エンタープライズの設定で既定にすることもできます。既定はBalancedのままで、Adaptiveはエンタープライズ、組織、リポジトリに設定された最大エフォートレベルを超えません。
- **リポジトリ横断のコンテキスト:** レビュー中に関連リポジトリを読み、変更に依存するコードや、そこにあるドキュメント、カスタム指示、スキルを参照します。対象はパブリックリポジトリのみです。
- **シークレット検出:** 露出したシークレットをレビューコメントで指摘し、マージ前に取り除けます。既知の形式(150以上のシークレットスキャンパートナーによる500種類以上)は正規表現などの決定的な手法で、形式のないシークレットはLLMとGitHubの専用シークレットモデルで検出します。リポジトリまたは組織の設定 > Copilot > Code reviewで有効にします。
- **Repository insightsでのレビュー結果:** リポジトリのInsightsタブの先頭にある新ページで、対応済みコメント、重大度の高い対応済みコメント、その後に人間の変更要求がなかったPR、Copilotレビューなしでマージされたプルリクエストを確認できます。トレンドや内訳付きの対応率、コメントのカテゴリーも見られます。同じ指標は、Copilot使用量メトリクスAPIのエンタープライズ/組織向けrepos-1-dayレポートにも含まれます。ページは読み取り権限があれば閲覧でき、APIレポートにはView Copilot Metrics権限が必要で、Copilot使用量メトリクスのポリシーを有効にしておく必要があります。
- **Azure DevOps(Azure Repos)が一般提供に:** パブリックプレビューからGAになりました。管理者が組織、プロジェクト、リポジトリの各レベルで有効にし、ブランチポリシーで自動的にレビューを依頼するか、Reviewersリストからユーザーがリクエストします。既定のLiteまたはBalancedのエフォート、カスタム指示、エージェントスキル、提案の適用とコミット、監査ログイベントに対応します。利用料はAzure DevOps組織にリンクされたAzureサブスクリプションに、GitHub AIクレジットで課金されます。
