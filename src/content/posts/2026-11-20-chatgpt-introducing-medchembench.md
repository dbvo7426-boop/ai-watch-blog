---
title: "OpenAI、創薬化学の推論力を測るベンチマーク「MedChemBench」を公開"
description: "117本の論文・特許から作った99問のベンチマークで、GPT-6.2 Astraは84.5%でした。"
pubDate: 2026-11-20
category: chatgpt
type: news
tags: [OpenAI, ベンチマーク, 科学, 化学, GPT-6.2]
source: https://openai.com/index/introducing-medchembench
draft: false
importance: medium
---

OpenAIは、分子構造と実験的証拠を結び付け、結果を説明し、化合物を比較し、性質を予測できるかを測るベンチマーク「MedChemBench」を公開しました。

- **規模:** 117本の論文・特許から99問、761種の分子構造。モデルには、研究計画の選ばれた時点で得られる文脈が多くの場合与えられます。
- **採点項目:** 分子構造、科学的な推論、ランク付けと選択、性質の予測。
- **結果(xhigh推論、獲得可能な点数に対する割合):** GPT-6.2 Astra 84.5%、GPT-6 Astra 83.3%、GPT-6.1 Sol 82.0%、GPT-6.1 Terra 75.1%、GPT-5.6 Sol 58.2%。
- **強みと弱み:** Astraは構造の配点の95.4%を獲得した一方、化合物の選択と数値的な性質の予測では配点の約半分にとどまりました。
- **OpenAIが示す限界:** 新薬を発見できるかや研究室の判断を改善できるかは、この結果からは分かりません。公開資料に事前に触れていた可能性は排除できず、各回答はツールやフィードバックなしの1回限りの試行です。
