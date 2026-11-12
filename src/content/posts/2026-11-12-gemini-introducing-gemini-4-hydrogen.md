---
title: "Google、日常的なコーディングとエージェント作業向けの高速モデル Gemini 4 Hydrogen を発表"
description: "Gemini 4 Hydrogenは入力100万トークンあたり1.50ドル、出力7.50ドル、100万トークンのコンテキストで、2026年11月12日からGemini API、Geminiアプリ、検索、Antigravityで順次提供されます。"
pubDate: 2026-11-12
category: gemini
type: news
tags: [Gemini, Gemini 4 Hydrogen, Google検索, Antigravity, Gemini API]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
draft: false
importance: high
---

Googleは2026年11月12日にGemini 4 Hydrogenを発表しました。日常的なコーディングとエージェント型ワークフローを素早く実行するためのモデルで、深く長期的な推論はこれまでどおりフロンティアモデルのGemini 4 CarbonとGemini 4 Argonが担います。

## 特徴

- **4段階の思考レベル:** low、medium、high(既定)、そして新しいxhighです。
- **Antigravityでの併用:** Orchestratorがセッション内でCarbonとHydrogenを切り替えられます。たとえばCarbonが全体を調整し、Hydrogenが作業用・検証用のエージェントを動かす使い方です。
- **コーディング:** 的を絞った編集、ファイル読み込みと検索の並列バッチ処理、デバッグに対応します。
- **マルチモーダル:** PDF、スプレッドシート、グラフ、音声、動画をまとめ、出典付きのレポートにします。
- **アプリへの反映:** Geminiアプリで指示追従とツール呼び出しが改善されます。検索では意図の理解、視覚的な回答、アップグレードされたクエリファンアウトによる幅広いリンクが強化されます。GoogleによるとSheetsでの出力生成は従来モデルより30%以上速くなります。

## Google発表の結果

- Artificial Analysis Intelligence Index: highで51(Argonは50)、xhighで54。
- Gemini 3.8 Flashとの比較: 既定設定で2.5倍高速、事実と異なる主張が5倍以上減少、Terminal-Bench 4.1は57%(3.8 Flashは18.2%)。
- 複雑なグラフ、SQL、データ量の多い企業ワークフローでのパートナー検証: 2倍から2.8倍高速で、トークン使用量は12%から23%減。
- OrchestratorでのTerminal-Bench 4.0: Carbonに近いタスク成功率で、クォータ消費は24%減、完了は平均19%高速。
- HLE-Diamond 58.8%、Vals Tax Agent Bench 52.3%(1位)、Vals Legal Research Bench 55.8%(1位タイ)、Multimodal Knowledge Agentベンチマーク 53.4%、Agents' Last Exam v1.1 71.6%、Agent Arenaは5位です。

## 安全性と信頼性(Google発表)

- エージェント作業での行き過ぎは最大81%、対応不足は最大79%減少し、ツール利用とコーディングの評価で不整合な行動は12分の1になりました。
- 権限の境界を回避する可能性は最大2分の1。社内のエージェント誠実性評価で96.7%です。
- プロンプトインジェクションのGray Swan IPIベンチマークで2.3倍以上の耐性があり、HealthBench Proでの誤った拒否は0.4%未満です。
- 発表ページにモデルカードへのリンクがあります。

## 料金と提供状況

- **料金:** 入力100万トークンあたり1.50ドル、出力100万トークンあたり7.50ドル。100万トークンのコンテキスト全体で一律で、出力は最大100万トークンです。
- **開発者:** Gemini APIとGoogle AI Studio、Android Studio、有料のGoogle AI ProおよびUltra向けのGoogle Antigravity。
- **ビジネス:** Gemini for business、Antigravity、対象プランのGoogleスプレッドシート上のGemini。
- **一般ユーザー:** Geminiアプリのモデル選択。無料ユーザーはプロンプトに合う場合の自動モデル選択で利用できます。Google検索は全ユーザー、Googleスプレッドシート上のGeminiはAI ProとUltraから開始です。
- 2026年11月12日から世界で順次提供されます。APIのモデルIDは発表では示されていません(未公開)。
