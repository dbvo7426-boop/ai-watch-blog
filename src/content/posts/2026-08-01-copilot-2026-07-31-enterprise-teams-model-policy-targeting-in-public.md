---
title: "GitHub、Enterprise向け「ユーザー単位モデルポリシー」をパブリックプレビューで提供開始"
description: "GitHubが、GitHub Enterprise・Copilot Business/Enterprise向けに、チーム単位でモデル利用を制御できる「ユーザー単位モデルポリシー」機能をパブリックプレビューで公開した。"
pubDate: 2026-08-01
category: copilot
type: news
tags: [Copilot, GitHub, Enterprise, 管理機能]
source: https://github.blog/changelog/2026-07-31-enterprise-teams-model-policy-targeting-in-public-preview
draft: false
importance: low
---

GitHubは、GitHub Enterprise顧客(Copilot Business/Enterprise契約)向けに、「ユーザー単位モデルポリシーターゲティング」機能をパブリックプレビューで公開した。これまで組織単位だったモデルアクセス制御を、エンタープライズチーム単位で細かく設定できるようになる。

## 詳細

- **概要**: エンタープライズ全体のベースラインとなるモデルを設定した上で、特定のエンタープライズチームにのみ追加のモデルを付与できるようにする機能
- **設定方法**: エンタープライズ管理者はモデルごとに「Enabled(全メンバーが利用可能)」「Disabled(誰も利用不可)」「Optional(特定チームへの割り当てが可能)」の3段階で設定できる
- **有効化の手順**: Copilot Modelsの設定ページで「Enterprise teams mode」を切り替えることで有効化する。システムは「最も制限の緩い設定を優先する」方式を採用しており、いずれかのエンタープライズチーム経由でモデルへのアクセス権を得たユーザーは、どこからでもそのモデルを利用できる
- **準備期間**: Enterprise teams modeを有効にする前に、あらかじめチームを作成し、Optionalモデルの割り当てを済ませておくことが可能
- **ロールバック**: プレビュー期間中は、管理者が以前の設定に戻すことも可能
- **複数エンタープライズにまたがる場合**: 複数のエンタープライズのCopilotライセンスを持つユーザーには、ライセンスを発行しているエンタープライズのポリシーのみが適用される
- **提供時期**: ほとんどのエンタープライズ顧客は8月3日からプレビューにアクセス可能
- **位置づけ**: チーム単位でのガバナンス強化に向けた最初のステップと位置づけられている

## 使ってみるには

- GitHub Enterprise管理者は、Copilot Modelsの設定ページで「Enterprise teams mode」を確認する
- 有効化前に、必要なエンタープライズチームを作成し、Optionalに設定したいモデルを割り当てておく
- 8月3日以降、順次プレビューへのアクセスが有効になるため、管理コンソールを確認する
- 問題があればプレビュー期間中はいつでも以前の設定にロールバック可能
