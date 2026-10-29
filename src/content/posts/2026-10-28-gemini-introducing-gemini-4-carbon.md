---
title: "Google、サイバーセキュリティに強いフロンティアモデル「Gemini 4 Carbon」を発表、まずサイバー防御担当者に限定提供"
description: "Gemini 4 CarbonはArtificial Analysis Intelligence Index v5.0で1位となり、サイバーセキュリティ系ベンチマークで最高水準を記録。提供はまず一部のサイバー防御担当者から始まり、一般提供の時期は未公表。"
pubDate: 2026-10-28
category: gemini
type: news
tags: [Gemini 4, Gemini 4 Carbon, Google DeepMind, サイバーセキュリティ, フロンティアモデル]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
draft: false
importance: high
---

Googleは2026年10月28日、最強モデルと位置づける「Gemini 4 Carbon」を発表しました。最先端のサイバーセキュリティ能力と長時間タスク能力が特長で、2週間前のGemini 4 Argonに続くリリースです。現時点では広く公開されておらず、今週から一部のサイバー防御担当者に提供が始まります。

## 詳細

- **ランキング:** 更新されたArtificial Analysis Intelligence Index v5.0で1位(スコア59)。
- **サイバー系ベンチマーク(ガードレールなしで評価):** SEC-bench Pro 88.2%(脆弱性発見)、ExploitGym 54.8%(悪用検証)、CWE-bench 71.0%(修正パッチ生成)。
- **セキュアなコード生成:** 社内ベンチマークでArgon比2倍超の成功率向上。GoogleによればChromeチームは、他社の大型フロンティアモデルと比べ高品質なパッチ生成で10倍超優れていたと報告。
- **長時間タスク:** 社内では、大規模コードベースや低レイヤーシステムの微妙なバグの原因特定と修正といった複数ステップの作業を、数日間にわたり継続して実行した例がある。
- **WebDev Arena:** 89 Elo上昇し4位(1768)。
- **アライメント:** Terminal-Bench 4.0での不正成功は0.0%(試行0.4%)、社内ライブコーディングでの重大なミスアライメント警告は約80%減、根拠のない主張はArgon比で約半減、行き過ぎは26%減、対応不足は29%減。
- **プロンプトインジェクション:** Gray SwanのIndirect Prompt Injectionベンチマークで攻撃成功率0.0%(Argonは0.7%)。
- **提供方法:** 今週から一部のサイバー防御担当者に提供し、Fairwind Programを通じて信頼できるパートナーへ段階的に拡大。米政府の任意の公開前モデルテストにも参加しているとしています。
- **価格:** Argonと同じ導入価格で、入力100万トークンあたり$2、出力$10、キャッシュ入力は95%引き。開発者・企業・一般ユーザー向けの提供時期は未公表(「できるだけ早く」)。

## その後

セキュリティ担当パートナーから段階的に公開する方式は、サイバー能力の高いモデルを信頼済みプログラム経由に限定する流れに沿ったものです。開発者にとって重要なのはAPIやGeminiアプリへの展開時期ですが、Googleは日付を示していません。数値はGoogle自身の報告(一部は社内ベンチマーク)のため、特にサイバー系の結果は第三者による検証が待たれます。
