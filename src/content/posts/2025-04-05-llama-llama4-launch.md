---
title: Meta「Llama 4」発表──初のMoEアーキテクチャ採用、Scout・Maverickをオープン公開
description: MetaがMixture-of-Experts構成を初採用した「Llama 4」シリーズを発表。マルチモーダル対応の「Scout」「Maverick」をオープンウェイトで公開しました。
pubDate: 2025-04-05
category: llama
type: news
tags: [Llama, Meta, "AI史"]
source: https://ai.meta.com/blog/llama-4-multimodal-intelligence/
draft: false
---

Metaが2025年4月5日、新世代モデル「Llama 4」シリーズを発表しました。Llamaファミリーとして初めてMixture-of-Experts(MoE)アーキテクチャを採用し、ネイティブにマルチモーダル対応した「Llama 4 Scout」「Llama 4 Maverick」をオープンウェイトで公開。より大規模な「Behemoth」も予告されました。

## 詳細

- **Llama 4 Scout**: 170億アクティブパラメータ・16エキスパート構成。NVIDIA H100 GPU1基に収まりながら、オープンに入手可能なモデルとして当時最大級の1000万トークンのコンテキストウィンドウを持つ
- **Llama 4 Maverick**: 170億アクティブパラメータ・128エキスパート構成。GPT-4oやGemini 2.0 Flashを幅広いベンチマークで上回るとMetaは主張
- **Behemoth(予告)**: アクティブパラメータ2880億、総パラメータ約2兆というMoEモデル。学習中の「教師モデル」として位置づけられ、この時点では未公開
- **ライセンス**: Meta Llamaライセンスの下で、多くの企業が商用利用可能な形でHugging Face等から公開
- **初のMoE採用**: これまでの密なTransformer構成から転換し、Llamaシリーズとして初めてMoE構成を採用したモデル群となった

## その後

Behemothはその後も学習が続き、2025年を通じて公開が繰り返し延期された。Llama 4は市場の反応がやや鈍かったとも報じられ、Metaは2026年に入り、Llamaとは別系統の新モデル「Muse」シリーズへと軸足を移していくことになる。
