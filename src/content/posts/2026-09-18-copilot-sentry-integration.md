---
title: "GitHub Copilot、「Sentryキャンバス」を追加——クラッシュレポートからアプリ内で修正まで"
description: "GitHubの9月14日週のCopilotまとめの目玉は、Copilotアプリ内でクラッシュやスタックトレースを確認し、Copilotとともに原因調査からプルリクエスト準備までを完結できる新しい「Sentryキャンバス」。ローカルDev Container対応やマージ後のセッション自動クリーンアップも追加された。"
pubDate: 2026-09-18
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Sentry, DevContainers, 開発者ツール]
source: https://github.blog/changelog/2026-09-18-github-copilot-weekly-releases-september-14
draft: false
importance: medium
---

GitHubの9月14日週のCopilotリリースまとめの目玉は、クラッシュレポートを直接Copilotアプリに取り込んで調査・修正できる新しいSentry連携です。

## 詳細

- **Sentryキャンバス**: Copilotアプリ内の新しいキャンバスにより、開発者は「クラッシュレポートからコード修正まで」を一気通貫で行えるように——エラーやスタックトレースを確認し、Copilotとともに根本原因を調査し、修正を検証した上で、アプリを離れることなくプルリクエストを準備できる
- **ローカルDev Container対応**: エージェントがローカルのDev Container内で動作できるようになり、段階的に展開中
- **セッションの自動クリーンアップ**: プルリクエストがマージされると、セッションを自動的にクリーンアップできるようになった(オプトイン方式のプレビュー)
- **Agent HostからのPR作成**: Agent Hostセッションから直接プルリクエストを作成可能に
- **今回のまとめに含まれるその他の項目**: 3段階の自動モデル選択(効率・バランス・知能)、コードレビューの自動解決とシェルツールによる検証、VS Code「Agents」ウィンドウの利用状況メトリクス、カスタムプロパティの値の提案、一般提供開始となった予算増額リクエスト——いずれも今月のGitHub自身のチェンジログで個別に詳しく取り上げられている

## その後

「Sentryキャンバス」により、Copilotの対応範囲はコードの作成・レビューから、本番環境のエラートリアージにまで広がりました。これまでモニタリングダッシュボードとIDEにまたがっていたデバッグのワークフローを1か所で完結できるようになり、隣接する開発者ツールを単にリンクするのではなく、Copilotアプリに直接取り込んでいくというGitHubのいつものパターンを踏襲しています。
