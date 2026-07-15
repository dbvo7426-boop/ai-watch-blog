---
title: GitHub Copilotに「/security-review」コマンド、変更中コードを即座に脆弱性チェック
description: GitHub Copilotアプリで「/security-review」スラッシュコマンドがパブリックプレビュー公開。作業中のコード変更をその場でAIが脆弱性スキャンし、修正案まで提示します。
pubDate: 2026-07-15
category: copilot
type: howto
tags: [Copilot, セキュリティ, GitHub]
source: https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app
draft: false
---

GitHubがCopilotアプリに「/security-review」スラッシュコマンドをパブリックプレビューとして追加しました。作業中のコード変更をAIがその場でスキャンし、重要度・確信度付きの脆弱性検出と修正提案を行います。

## 詳細

- **検出対象**: インジェクション、クロスサイトスクリプティング、安全でないデータ処理、パストラバーサル、脆弱な暗号処理など、影響の大きい代表的な脆弱性を優先的に検出
- **表示内容**: 重要度・確信度でスコア付けされた高確度の検出結果と、Copilotから離れずに適用できる修正提案
- **使い方**: Copilotアプリでプロジェクトを開き、コードを変更した後に`/security-review`を実行するとチャット上に結果が表示される
- **既存機能との関係**: コードスキャン・Dependabot・シークレットスキャンを補完する、ローカル変更に対する軽量なオンデマンドチェックという位置づけ

## 使ってみるには

- 2026年7月14日よりパブリックプレビューとして提供開始
- Copilot Free・Pro・Business・Enterpriseの全プランで利用可能
- Copilotアプリでコード変更後に`/security-review`と入力するだけで実行できます
