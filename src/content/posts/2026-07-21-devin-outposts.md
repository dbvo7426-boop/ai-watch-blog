---
title: Cognition、Devinを自社インフラ上で動かせる「Devin Outposts」を発表
description: Devin開発元のCognitionが、Devinのクラウドセッションを自社のマシンやプライベートネットワーク上で実行できる「Devin Outposts」を発表しました。
pubDate: 2026-07-21
category: devin
type: news
tags: [Devin, Cognition, インフラ]
source: https://devin.ai/blog/introducing-devin-outposts
draft: false
importance: medium
---

Devin開発元のCognitionが、新機能「Devin Outposts」を発表しました。Devinのエージェントループ(推論・計画)はCognitionのクラウド上で動かしたまま、コマンド実行やファイル編集、リポジトリアクセスといった実作業をユーザー自身が管理するマシン上で行えるようにする仕組みです。

## 詳細

- **仕組み**: 「Outpost」と呼ぶ名前付きキューを介して、Devinのクラウドセッションとユーザーが運用するマシン群を接続。セッション開始時にキューへ入り、稼働中のワーカーが処理を引き受ける
- **対応環境**: Mac mini、研究室のGPUサーバー、プライベートネットワーク内の仮想マシン、Kubernetesクラスターなど、Mac miniからKubernetesまで幅広いインフラに対応
- **連携パートナー**: Cloudflare、Daytona、E2B、Modal、Namespace、NVIDIA Brevとデプロイ用テンプレート・ガイドを共同で整備
- **想定用途**: 学習が失敗した際に元のGPUハードウェア上でデバッグする、プライベートネットワーク内限定のサービスにアクセスする、iOS/macOSアプリのクロスプラットフォーム開発を行うなど
- **セットアップ**: Devin CLIでOutpost上にワーカーを追加するだけで、数秒で利用開始できるとされる

## 使ってみるには

- docs.devin.ai のドキュメントから最初のOutpostを作成可能
- Devinクラウド上でOutpostを作成し、対象マシンにDevin CLI経由でワーカーを追加することで利用開始
