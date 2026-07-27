---
title: Cognition、脆弱性の検証・修正を自動化する「Devin Security Swarm」を発表
description: Devin開発元のCognitionが、並列AIエージェント群でコードベースの脆弱性を検出・実行検証し、修正PRまで自動生成する「Devin Security Swarm」を発表しました。
pubDate: 2026-07-01
category: devin
type: news
tags: [Devin, Cognition, セキュリティ]
source: https://cognition.com/blog/introducing-devin-security-swarm
draft: false
importance: medium
---

Devin開発元のCognitionが、セキュリティ脆弱性の検出から実行環境での検証、修正プルリクエスト作成までを自動化するエージェント「Devin Security Swarm」を発表しました。AIによるコード生成の急増でセキュリティ知見が積み上がる一方、検証・修正する人手が追いつかないという課題への対応です。

## 詳細

- **仕組み**: 複数の並列エージェント(スウォーム)がコードベースの各セグメントを分担調査し、コードの関連性からビジネスロジックの欠陥や連鎖的な脆弱性を分析
- **検証プロセス**: 検出した脆弱性は隔離されたサンドボックス環境で実際に悪用可能かを検証したうえで、確認できたものについてのみ修正PRを自動生成
- **ベンチマーク結果**: GitHub Security Advisoriesから抽出した14言語・50件の実際の脆弱性を用いたテストで、再現率72%・1件あたり90.23ドルを記録。Claude Security(68%・131.87ドル)、Codex Security(48%・118.20ドル)、Cursor Security(26%・4.60ドル)を再現率で上回り、他ツールが見逃した重大な脆弱性を3件独自に発見
- **付随プログラム**: 企業向けに6週間の「Vulnerability Remediation Program」も提供し、CVEの滞留解消と継続的な修正体制の構築をエンジニアが伴走支援

## 使ってみるには

- Devin Security Swarmは発表時点ですでに利用可能です
- 詳細な料金体系は公式ブログ内では明記されておらず、企業導入は個別相談の形が想定されます
