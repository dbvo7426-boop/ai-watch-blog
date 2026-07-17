---
title: GitHub向け無料コードレビューbot「Gemini Code Assist for GitHub」個人版が完全終了
description: Googleが2025年2月に開始したGitHub向け無料コードレビューbot「Gemini Code Assist for GitHub」の個人版が2026年7月17日に完全終了。Antigravityへの注力に伴う、Gemini関連ツール終了の第2弾となった。
pubDate: 2026-07-17
category: gemini
type: news
tags: [Gemini CLI, Gemini Code Assist, Google, Antigravity CLI]
source: https://developers.google.com/gemini-code-assist/docs/deprecations/consumer-code-review
draft: false
---

Googleが2025年2月に始めたGitHub向けの無料コードレビューbot「Gemini Code Assist for GitHub」の個人(コンシューマー)版が、2026年7月17日をもって完全に終了しました。学生・個人開発者・フリーランス・スタートアップ向けに無料でプルリクエストの自動レビューを提供してきたツールで、約1年5か月の運用に幕を下ろした形です。Gemini CLIの個人向け提供終了(2026年6月18日)に続く、Antigravity注力に伴う関連ツール整理の第2弾となりました。

## 詳細

- **サービス内容**: GitHubリポジトリにインストールするだけで、プルリクエストに対する自動コードレビューを実施。独自のスタイルガイドを設定してレビュー基準をカスタマイズできる点が支持されていた
- **段階的終了**: 2026年6月18日に個人版の新規インストールを停止する「非推奨化」を開始し、2026年7月17日に完全停止。以降はアプリによるコードレビュー活動が一切行われなくなった
- **対象範囲**: 影響を受けるのは無料の個人(コンシューマー)版のみ。Google Cloud経由のエンタープライズ版「Gemini Code Assist for GitHub」は今回の変更の対象外で、従来通り利用可能
- **背景**: GoogleはGemini CLIと同様、開発者向けエージェントツールを「Antigravity」ブランドに集約する方針を進めており、個人向けの無料ツール群を順次整理している
- **開発者の反応**: X上でこの終了を最初に指摘した開発者Artem Russakovskii氏は「実際に恋しくなる。バグや問題を見つけるのがかなり得意だった」とコメントし、「Googleに殺されたサービス」の一つに加えた

## 使ってみるには

- 個人版「Gemini Code Assist for GitHub」は再インストール・利用ともに不可となったため、GitHub上の自動コードレビューが必要な場合は手動レビュー体制に戻すか、他のレビューツールへの切り替えを検討する必要がある
- Google Cloud経由でGemini Code Assist Standard/Enterpriseライセンスを保有する組織は、引き続きGemini Code Assist for GitHubのエンタープライズ版を利用可能
