---
title: Cognition、コーディング評価ベンチマーク「FrontierCode 1.1」を公開
description: Devin開発元のCognitionが、自社のコード品質評価ベンチマークを改訂した「FrontierCode 1.1」を公開。採点基準の緩和やネット利用の適正化に加え、Sonnet 5とFable 5の最新スコアも公開しました。
pubDate: 2026-07-07
category: devin
type: news
tags: [Devin, Cognition, FrontierCode, ベンチマーク]
source: https://cognition.com/blog/frontier-code-1.1
draft: false
importance: low
---

Devin開発元のCognitionが、自社のコード品質評価ベンチマーク「FrontierCode」を改訂し、「FrontierCode 1.1」を公開しました。モデルのインターネット利用に関する判定方法の見直しや、行き過ぎた採点基準の緩和などを行い、ベンチマークとしての実態把握精度を高めています。

## 詳細

- **ネット利用の判定改善**: ドキュメント参照のような正当なインターネット利用と、解答コードへの直接アクセスといった「不正なショートカット」を区別する手法を精緻化
- **採点基準の緩和**: 誤って不合格(false negative)を出していた過度に厳格な採点基準75件を緩和
- **Diamondサブセットの廃止**: ベンチマークの現実性・成熟度向上に伴い、従来のDiamondサブセットを廃止
- **新スコア公開**: Sonnet 5の新規スコアと、Fable 5の更新済みスコアを公開
- **背景**: フロンティアモデルの情報検索能力が急速に向上する中、ベンチマークの公正性と現実の開発環境との整合性を両立させる狙い

## 使ってみるには

- FrontierCode 1.1は主にCognition社内でのモデル評価に使われるベンチマークで、Devin自体のユーザー向け新機能ではありません
- 個別のスコアやベンチマーク手法の詳細は公式ブログで公開されています
