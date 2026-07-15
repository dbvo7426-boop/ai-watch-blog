---
title: DeepSeek-V2公開──破格の低価格APIで中国AI業界に「価格戦争」を引き起こす
description: DeepSeekがMoEモデルDeepSeek-V2を公開。トークン単価が競合の数十分の一という価格設定で、Alibaba・Baiduなど中国の大手AI企業を巻き込む値下げ競争を引き起こしました。
pubDate: 2024-05-06
category: deepseek
type: news
tags: [DeepSeek, "AI史"]
source: https://github.com/deepseek-ai/DeepSeek-V2
draft: false
---

DeepSeekが、Mixture-of-Experts構成の新モデル「DeepSeek-V2」を公開しました。性能面の進化もさることながら、破格に安いAPI価格設定によって中国のAI業界全体を巻き込む「価格戦争」を引き起こしたことで大きな注目を集めた出来事です。

## 詳細

- **モデル構成**: 総パラメータ236B、うち21Bがトークンごとに活性化するMixture-of-Expertsモデル。MLA(Multi-head Latent Attention)とDeepSeekMoEという独自アーキテクチャを採用
- **効率性**: 前モデル比で学習コストを42.5%削減、推論に必要なKVキャッシュを93.3%削減
- **価格破壊**: 入力トークン100万あたり約1元(約0.14ドル)という価格で提供し、GPT-4 Turboの約70分の1、Llama3 70Bの約7分の1という安さを実現
- **業界への影響**: Alibaba・Baiduなど中国大手が自社モデルの価格を95%以上引き下げるなど、業界全体の値下げ競争を誘発
- **軽量版**: 5月16日には16BパラメータのDeepSeek-V2-Liteも追加公開

## その後

DeepSeek-V2が引き起こした価格戦争は、DeepSeekが「低コストで高性能」という評判を確立する決定的な転機になりました。この路線は同年12月のDeepSeek-V3、そして2025年1月のDeepSeek-R1でさらに大きな形で世界に衝撃を与えることになります。
