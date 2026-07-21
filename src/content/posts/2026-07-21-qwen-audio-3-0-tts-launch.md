---
title: Alibaba通義研究院、音声合成モデル「Qwen-Audio-3.0-TTS」を発表──ElevenLabsの1/3の価格でリーダーボード首位を主張
description: Alibabaの通義研究院(Tongyi Lab)が新TTSモデル「Qwen-Audio-3.0-TTS」をFlash/Plusの2グレードでAPI提供開始。16言語対応でArtificial Analysisのリーダーボード首位を主張し、価格はElevenLabsなど競合の約1/3としています。
pubDate: 2026-07-20
category: qwen
type: news
tags: [Qwen, Alibaba, TTS, 音声合成]
source: https://www.marktechpost.com/2026/07/20/alibabas-tongyi-lab-releases-qwen-audio-3-0-tts-a-hosted-text-to-speech-model-in-flash-and-plus-tiers-across-16-languages/
draft: false
importance: medium
---

Alibabaの通義研究院(Tongyi Lab)が2026年7月20日、新しい音声合成(TTS)モデル「Qwen-Audio-3.0-TTS」を発表しました。オープンウェイトでの公開ではなく、Alibaba Cloud Model Studio経由のホスト型APIとして「Flash」「Plus」の2グレードで提供され、16言語をカバーします。ベンチマークサイトArtificial Analysisの音声合成リーダーボードでPlusグレードが首位を獲得したと報じられており、価格はElevenLabsなど競合の約1/3に設定されています。

## 詳細

- **2つのグレード**: リアルタイム会話向けに初回パケットのレイテンシを300ミリ秒台に抑えた「Flash」(モデルID: `qwen-audio-3.0-tts-flash`)と、速度より自然さ・音色の忠実性を優先する「Plus」(`qwen-audio-3.0-tts-plus`)を用意
- **価格**: 100万文字あたり27.59ドルで、ElevenLabsやMiniMaxなど競合の約1/3の水準
- **対応言語**: アラビア語・中国語・英語・フランス語・ドイツ語・インドネシア語・イタリア語・日本語・韓国語・マレー語・ポルトガル語・ロシア語・スペイン語・タガログ語・タイ語・ベトナム語の16言語に加え、中国国内20地域の方言にも対応
- **ベンチマーク実績**: Artificial AnalysisのText-to-Speechリーダーボードで「Plus」がElo評価約1,236で首位。16言語中10言語で最良の単語/文字誤り率(WER/CER)を記録し、平均WER/CERはFlashが3.87、Plusが3.96
- **話者類似度**: 全言語平均でPlusが82.75、Flashが80.44と高い再現性を主張
- **生成速度の課題**: PlusはBenchmark上で毎秒約16文字の生成速度にとどまり、Simba 3.2(30.2文字/秒)やGemini 3.1 Flash TTS(27文字/秒)、Sonic 3.5(120文字/秒)と比べると見劣りする面もある
- **提供形態**: オープンウェイトではなくAPI限定。シンガポール・北京リージョンでダブルストリーミング(WebSocket)配信に対応

## 使ってみるには

- Alibaba Cloud Model StudioのDashScope SDK経由でAPIを呼び出し可能。Python・Java・Go・C#・PHP・Node.jsのサンプルコードが提供されている
- 現時点ではオープンウェイトの公開予定は明らかにされておらず、API経由での利用が前提となる
