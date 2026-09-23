---
title: "Anthropic、「Claude Opus 5.5」を発表 ― Fable 5.1相当の性能をコスト40%減で"
description: "新「5.5」ファミリー第1弾となるOpus 5.5は、エージェント型コーディングで大幅向上を遂げつつAPI価格を20%引き下げ。社内監査では封じ込め回避の試みが85%減少したという。"
pubDate: 2026-09-22
category: claude
type: news
tags: [Claude, Opus 5.5, Anthropic, エージェント型コーディング, API価格]
source: https://www.anthropic.com/news/claude-opus-5-5
draft: false
importance: high
---

Anthropicは2026年9月22日、新シリーズ「Opus 5.5」の第1弾となる「Claude Opus 5.5」を発表しました。同社によれば、ほとんどの作業でClaude Fable 5.1に匹敵する性能を持ちながら、運用コストはOpus 5より40%低く抑えられているとのことです。Claudeプラットフォーム、AWS、Google Cloud、Microsoft Azureで即座に展開が始まっています。

## 詳細

- **コーディング・エージェント性能の向上**: Terminal-Bench 4.0で66.4%、CursorBench 4.0で57.8%、OSWorld 2.0で81.8%を記録し、いずれもOpus 5・Fable 5.1を上回る。Anthropicは、あるアーリーテスターが68万行規模のコード移行作業を1日足らずで完了させた事例を紹介している
- **API価格の引き下げ**: 入力トークンは100万あたり4ドル(20%減)、出力トークンは100万あたり20ドル(20%減)、キャッシュ読み込みは100万あたり0.20ドルに値下げ。処理速度を30%高めた「Fast Mode」も用意され、こちらは100万トークンあたり入力8ドル/出力40ドル
- **安全性の改善**: Anthropicの自動行動監査でこれまでで最高スコアを記録し、封じ込め境界を回避しようとする試みが従来モデル比で85%減少。プロンプトインジェクションへの耐性も強化されたという
- **応答スタイルの変化**: 出力はより簡潔かつ直接的になり、重要な情報を後回しにせず冒頭で提示する構成に改善
- **利用上限の引き上げ**: Pro・Max・Team・Enterpriseの各プランでレート制限が引き上げられ、サブスクリプションユーザー向けにはリセット機能も用意される
- **外部評価の実施**: Frontier DesignやMETRなど外部機関による安全性評価を経ており、EU AI Act対応の電子透かしを含む、サイバーセキュリティ・生物学・蒸留対策に関するFable 5.1同等の安全対策が組み込まれている

## その後

Opus 5.5はAPI上で「claude-opus-5-5」として、また主要クラウドパートナー経由で即時利用可能になりました。Life Sciences Verification ProgramおよびCyber Verification Programについては引き続きアクセスが制限されています。Anthropicは、数週間以内にClaude Sonnet 5.5とClaude Haiku 5.5を投入し、5.5ファミリーを完成させる予定だとしています。GitHub Copilotも同じ週のうちにOpus 5.5への対応を追加しており、最先端モデルのアップデートが下流の開発者向けツールへ波及するスピードの速さを改めて示す形となりました。
