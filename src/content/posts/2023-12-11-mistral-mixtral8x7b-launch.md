---
title: Mistral AI「Mixtral 8x7B」公開──MoE構成でGPT-3.5に迫るオープンモデル
description: Mistral AIが混合エキスパート(MoE)構成の「Mixtral 8x7B」を公開。Llama 2 70Bを上回りつつ6倍高速な推論を実現し、GPT-3.5に匹敵する性能をオープンウェイトで示しました。
pubDate: 2023-12-11
category: mistral
type: news
tags: [Mistral, Mistral AI, "AI史"]
source: https://mistral.ai/news/mixtral-of-experts/
draft: false
---

Mistral AIが2023年12月11日、混合エキスパート(Sparse Mixture-of-Experts)構成のモデル「Mixtral 8x7B」を公開しました。Llama 2 70Bをほとんどのベンチマークで上回りながら推論速度は6倍、標準的なベンチマークではGPT-3.5と同等かそれ以上という性能を、Apache 2.0ライセンスのオープンウェイトで実現したことが大きな衝撃を与えました。

## 詳細

- **アーキテクチャ**: 各層に8つのエキスパートネットワークを持つデコーダ専用Transformer。トークンごとに2つのエキスパートのみが活性化し、総パラメータ467億のうちアクティブなのは129億
- **性能**: Llama 2 70Bをほとんどのベンチマークで上回り、6倍高速な推論を実現。GPT-3.5と同等かそれ以上の性能を標準ベンチマークで記録
- **コンテキスト長**: 32Kトークンのコンテキストを扱え、英語・フランス語・イタリア語・ドイツ語・スペイン語に対応
- **ライセンス**: Apache 2.0ライセンスでオープンウェイト公開
- **Instruct版も同時公開**: 教師ありファインチューニングと直接選好最適化(DPO)で指示追従性を高めた「Mixtral 8x7B Instruct」も同時にリリース

## その後

Mixtral 8x7Bは「MoE構成でもオープンウェイトで高性能を実現できる」ことを示し、業界にMoEブームを巻き起こす一因となった。この技術路線は2024年2月のクローズドモデル「Mistral Large」、さらに2024年7月の「Mistral Large 2」へと発展していく。
