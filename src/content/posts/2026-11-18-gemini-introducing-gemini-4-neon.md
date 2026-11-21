---
title: "Google、Gemini 4 Neonを発表 CarbonとHydrogenの中間に位置する入力3ドル・出力15ドルのフロンティアモデル"
description: "Gemini 4 Neonは100万トークンのコンテキストで、料金は100万トークンあたり入力3ドル・出力15ドル。GoogleはArtificial AnalysisのCoding Agent Indexで1位、タスクあたりのコストはCarbonより32%低いとしています。"
pubDate: 2026-11-18
category: gemini
type: news
tags: [Gemini, Gemini 4 Neon, Gemini API, Antigravity, コーディング]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
draft: false
importance: high
---

Googleは2026年11月18日にGemini 4 Neonを発表しました。ソフトウェア開発、ナレッジワーク、科学向けに、フロンティア級の知能と素早いタスク完遂を両立するモデルとしています。最難関の長期プロジェクト向けのGemini 4 Carbonと、日常的な高速実行向けのGemini 4 Hydrogenの中間に位置します。

## 料金と仕様

- 100万トークンあたり入力3ドル、キャッシュ入力0.15ドル(95%割引)、出力15ドル。
- コンテキストウィンドウは100万トークン。

## 提供状況

- **開発者:** Gemini APIの有料枠で、Google AI StudioとAndroid Studioから利用可能。ProとUltraの加入者はAI Studioでも使えます。
- **企業:** Gemini for business(APIまたはモデルのドロップダウン)とGoogle Antigravity。
- **一般ユーザー:** Geminiアプリ(Google AI ProとUltraの加入者)。
- **サイバー防御担当者:** 対象のFairwind Programメンバーには、今後数日かけて提供されます。

## ベンチマーク(Google公表値)

- Artificial Analysis Intelligence Index: xhigh思考で61、総合3位。Coding Agent Indexは1位(58.6)。
- Terminal-Bench 4.1: 65.2%、Terminal-Bench Science: 70.5%、HLE-Diamond: 71.3%、RiemannBench: 84.0%。
- AutomationBench: 1位(56.3%)、Vending-Bench 2: 1位(16,843ドル)。
- サイバーセキュリティ: AutoBaxBench(難関層)76%、WebExploitBench v1.2 51.26%、SEC-bench Pro 90.5%、CWE-bench v2 70.7%。

## コストと安全性

- 高思考設定でのタスクあたりコストは、GoogleによるとCarbonより32%低く、主要な競合フロンティアモデルより約50〜80%低いとのことです。
- GoogleはTerminal-Bench 4.0での不正0.0%、エージェント安全性評価での不整合行動率0.09%、最高思考レベルでのGray Swan間接プロンプトインジェクションの攻撃成功率0.0%を報告しています。

これらはGoogle自身の数値で、本記事では独自に検証していません。
