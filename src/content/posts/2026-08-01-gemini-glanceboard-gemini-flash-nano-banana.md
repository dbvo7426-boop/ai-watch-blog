---
title: "Google社員が「バイブコーディング」で開発した朝の予定確認アプリ「Glanceboard」、Gemini Flash・Nano Bananaで実現"
description: "Googleの社員がGemini 3.6 FlashとNano Banana(画像生成モデル)を使い、電子ペーパー端末に家族の予定と天気に応じた服装を表示する自作アプリ「Glanceboard」を開発した。コードはGitHubで公開されている。"
pubDate: 2026-07-31
category: gemini
type: news
tags: [Gemini, Nano Banana, バイブコーディング, 電子ペーパー, ガジェット]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/glanceboard-gemini-flash-nano-banana/
draft: false
importance: low
---

Googleのクリエイティブテクノロジストが、Gemini 3.6 FlashとNano Banana(画像生成モデル)を使い、朝の身支度を助ける自作アプリ「Glanceboard」を開発した。電子ペーパー端末に家族の予定と天気に合わせた服装のイラストを表示する仕組みで、コードはGitHubで公開されている。

## 詳細

- **開発の背景**: Googleのクリエイティブテクノロジスト、Raph氏が、まぶしい画面を見ずに朝の予定を確認できる仕組みを目指して開発した
- **使用モデル**: 処理・ロジック部分にGemini 3.6 Flashを、子どもたちがその日の天気に応じた服装をしているイラストの生成にNano Banana(画像生成モデル)を使用
- **主な機能**: 家族のGoogleカレンダーの予定と地域の天気情報を自動でチェックし、電子ペーパー端末にその日の予定・天気に応じた服装の提案・持ち物リストを表示する
- **動作環境**: クラウドアカウント不要の軽量なローカルサーバー構成で動作し、インターネット接続がなくても利用可能。明るい画面を見ずに済む静かな朝を実現することを重視した設計になっている
- **公開状況**: コードはGitHubでオープンソース公開されており、必要なハードウェア仕様も含めて誰でも自作できる

## 使ってみるには

- GitHubで公開されているGlanceboardのソースコードを入手する
- 電子ペーパー端末やGemini APIキーなど、必要なハードウェア・環境を用意する
- 自分の家族のGoogleカレンダーと地域の天気情報を設定し、朝の予定確認を自動化してみる
