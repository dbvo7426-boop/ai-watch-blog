---
title: "Lovable、GitLab API連携とFirebaseプッシュ通知を新たにコネクター群に追加"
description: "Lovableが同日に2つの新連携機能を追加。リポジトリ・課題・マージリクエストを管理できるGitLab APIコネクターと、Lovable製アプリからプッシュ通知やブラウザ通知を送れるFirebase Cloud Messaging対応が同時にリリースされた。"
pubDate: 2026-08-28
category: lovable
type: news
tags: [Lovable, GitLab, Firebase, 連携機能, コネクター]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovableの変更履歴に2026年8月28日、2件の新しい連携機能が記録されました。リポジトリ・コミット・課題・マージリクエストを管理できるGitLab APIコネクターと、プッシュ通知を送信できるFirebase Cloud Messaging(FCM)対応です。これまでカスタムコードなしでは手が届かなかったDevOps領域やエンドユーザーへの通知機能へと、Lovableのアプリ構築プラットフォームがさらに踏み込んだ形です。

## 詳細

- **GitLab APIコネクター**: Lovableで構築したアプリから、GitLab.com・GitLab Self-Managed・GitLab Dedicatedのいずれの環境でも、プロジェクト・ブランチ・コミット・リポジトリファイル・課題・マージリクエストを管理できるようになった
- **ユーザーごとのGitLabアクセス**: このコネクターはユーザー単位の認証に対応しており、チーム共通の認証情報を使い回すのではなく、アプリの利用者各自が自分のGitLabアカウントを接続できる
- **Firebase Cloud Messaging**: Lovable製アプリから、モバイル・デスクトップ端末へのプッシュ通知送信、トピック単位での一斉配信、ブラウザプッシュ通知の配信が可能になった
- **想定用途**: Lovableは注文追跡、予約リマインダー、運用アラートなどをFCMの代表的な用途として挙げている
- **同日のプレビュー改善**: 同じく8月28日、Lovableはプレビューの安定性改善もリリースし、編集中にプレビュー全体が再読み込みされることなく、現在の画面表示や選択中の要素が編集間で維持されるようになった
- 両コネクターは、Supabaseや7月に導入されたユーザー単位のアプリ連携など、Lovableが拡充を続けるワンクリック連携ライブラリに加わる形となる

## その後

GitLabとFirebaseの追加は、Lovableが今年一貫して続けてきた方針——あらゆる機能を自前で構築するのではなく、最小限の設定でアプリに組み込める外部サービスの選択肢を広げ続ける——を体現するものです。7月末に展開されたユーザー単位のコネクターモデルと組み合わせることで、Lovable上で開発するエンジニアは、GitLabや通知権限の管理を共有アカウント経由に頼らず、エンドユーザー自身に直接委ねられるようになりました。
