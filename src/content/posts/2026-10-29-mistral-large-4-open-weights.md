---
title: "Mistral、Mistral Large 4(Le Chonk)のオープンウェイトを公開"
description: "Mistralは、10月上旬のパブリックプレビューに続き、1兆パラメータのマルチモーダル旗艦モデルMistral Large 4のオープンウェイトを公開しました。コーディングとエージェント系のベンチマークが改善しています。"
pubDate: 2026-10-29
category: mistral
type: news
tags: [Mistral, オープンウェイト, コーディング, Mistral Large 4]
source: https://mistral.ai/news/mistral-large-4-oss/
draft: false
importance: high
---

Mistralは2026年10月29日、通称Le ChonkのMistral Large 4のオープンウェイトを公開しました。今月初めのパブリックプレビューに続くものです。欧州のインフラでゼロから学習した1兆パラメータのネイティブマルチモーダルモデルで、Mistralは「コーディングで最良のオープンウェイトモデル」としています。

## 詳細

- **コーディング:** CognitionのプライベートなFrontierCode 2.0で19.7%、Artificial AnalysisのCoding Agent Indexで48%(GLM-5.3とほぼ同等で、タスクあたりのトークンは47%少ない)、Terminal-Bench 4.0で41%(プレビューから13ポイント向上)。Surge Codeのブラインド評価ではClaude Opus 5.5に次ぐ2位でした。
- **推論モード:** Low、Medium、High(既定)の3段階。
- **エージェントと業務:** FinWorkBenchで73.3%(オープンモデルではKimi K3に次ぐ2位)、BrowseCompで84.5%、B3 Agent Security Benchmarkで攻撃の97.1%に耐性があります。
- **サイバーセキュリティ:** Artificial AnalysisのCyber Indexで51%、悪意あるサイバー関連の依頼を平均96.6%拒否します。実際の攻撃への上積みの可能性が見られたため、ガードレールを修正中とのことです。ペネトレーションテスト向けの派生モデルは、Orange Cyberdefenseなどのパートナーに限定プレビューされています。
- **ライセンス:** 修正MITライセンスのMistral Ecosystem Open-Weight license。MaaS事業者は別途商用ライセンスが必要です。
- **提供先:** Mistral Studio、Mistral API、OpenRouter、Hugging Face(Mistral-Large-4-1T-A52B、vLLM/SGLang対応)、NVIDIAのエンドポイントとNIM、Microsoft Foundry、Vibe Code。
- **価格:** 入力100万トークンあたり0.70ドル、キャッシュ入力0.07ドル、出力2.10ドル。
- **技術レポート:** 近日公開とされています。

## その後

重み公開により、10月のプレビュー版が自社ホストやファインチューニングできる形になりました。追加3週間のRLが改善に寄与したとされます。Mistralは、Large 4をより専門的なモデルの土台にすると述べています。数値はいずれもベンダー報告で、技術レポートはまだ公開されていません。
