---
title: DeepSeek、更新版「DeepSeek-V4-Flash-0731」を公開 ― エージェント関連ベンチマークでV4-Proプレビュー超え
description: DeepSeekが「DeepSeek-V4-Flash」の再学習版「V4-Flash-0731」を公開。アーキテクチャは変更せず再学習のみでエージェント関連ベンチマークが向上し、価格は据え置きです。
pubDate: 2026-07-31
category: deepseek
type: news
tags: [DeepSeek, エージェント, コーディング]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: medium
---

DeepSeekは、コーディング・エージェント向けモデル「DeepSeek-V4-Flash」の更新版「DeepSeek-V4-Flash-0731」を公開しました。モデルの構造・サイズはプレビュー版から変更せず、再学習(re-post-training)のみでエージェント関連のベンチマークスコアを引き上げています。

## 詳細

- **モデル構成**: 総パラメータ2840億・アクティブ130億は「DeepSeek-V4-Flash-Preview」から変更なし。再学習のみを実施した更新版
- **ベンチマーク**: Terminal-Bench 2.1で82.7、NL2Repoで54.2、CyberGymで76.7、DeepSWEで54.4を記録し、いずれもV4-Proプレビュー版を上回る結果
- **API対応**: Responses APIをネイティブサポートし、Codexとの連携にも対応
- **コンテキスト長**: 約104万8576トークン(1Mトークン)、最大出力38万4000トークン
- **価格**: 入力100万トークンあたり0.14ドル、出力100万トークンあたり0.28ドルで、従来から据え置き

## 使ってみるには

- APIのモデル名は引き続き`deepseek-v4-flash`。呼び出し方法に変更はなく、自動的に0731版が使われる
- 旧モデルのdeepseek-chat/deepseek-reasonerは2026年7月24日付で提供終了済みのため、未移行の場合はV4系への切り替えが必要
- V4-Pro側の正式なGA版についてはまだ公式発表がなく、今回のアップデートはV4-Flashのみが対象
