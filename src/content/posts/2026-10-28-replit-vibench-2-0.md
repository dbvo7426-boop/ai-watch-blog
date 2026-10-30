---
title: "Replit、ソフトウェア製品を丸ごと構築させる長期ベンチマーク「ViBench 2.0」を公開"
description: "Replitは、空のプロジェクトから機能を1つずつ追加して製品を作らせるベンチマーク「ViBench 2.0」を公開した。最高性能のモデルでも、全テストプランに合格するのはビルドの49〜65%にとどまる。"
pubDate: 2026-10-28
category: replit
type: news
tags: [Replit, ベンチマーク, ViBench, コーディングエージェント]
source: https://replit.com/blog/vibench-2-long-horizon-software-benchmark
draft: false
importance: low
---

Replitは2026年10月28日、長期的なソフトウェア開発を測るベンチマーク「ViBench 2.0」を公開した。推論パートナーであるFireworksのSpecialized Intelligence Index(SII)に加わる。

## 詳細

- **設定:** エージェントは空のプロジェクトから始め、短い仕様から初版を作り、自分のコードの上に最大18の機能を追加していく。題材はUber、GitHub、Google Docsのような製品。
- **規模:** 17製品、241件の機能要求、544件のテストプラン。8製品はHarbor形式でGitHubに公開され、9製品は非公開。
- **結果:** GPT-6.1 Sol、GPT-6 Astra、Opus 5.5が全テストプランに合格するのは、ビルドの49〜65%のみ。
- **採点:** 採点エージェントが実ブラウザーでテストプランを実行する。採点役にはミスが最も少なかったOpus 5.5を採用。仕込んだ34件のバグでは一度も合格させず、GPT-6.1 Solによる477件の再採点では99.2%が正しいと確認された。
- **公式実行:** Fireworksが、モデルごとに各製品を4回ビルドし、effortは中、temperatureは1.0で実行。結果はOpenHandsベースのハーネスのリリースv2.0.6から1コマンドで再現できる。

## その後

ViBench 2.0は、ViBench 1.0で示された、自分のコードに機能を足すとスコアが下がる「Vibe-on-Vibe」設定をさらに拡張したもの。ベンチマークの作成者も採点モデルも商業的な当事者であるため、独立した標準というよりReplit独自の手法による数値として読むのが妥当だ。
