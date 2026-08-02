---
title: Alibaba通義研究院、音声認識モデル「Qwen-Audio-3.0-ASR」シリーズを公開──中国方言7種・30言語対応、ストリーミングと長尺文字起こしを両立
description: Alibabaの通義研究院(Tongyi Lab)が新しい音声認識(ASR)モデル「Qwen-Audio-3.0-ASR」シリーズをAPI提供開始。ストリーミング向けとファイル文字起こし向けを用意し、中国語方言7大方言区・20以上の訛りと30言語をカバーします。
pubDate: 2026-07-30
category: qwen
type: news
tags: [Qwen, Alibaba, ASR, 音声認識]
source: https://docs.qwencloud.com/changelog/models
draft: false
importance: medium
---

Alibabaの通義研究院(Tongyi Lab)が2026年7月30日、新しい音声認識(ASR)モデル「Qwen-Audio-3.0-ASR」シリーズを公開しました。同月20日に発表した音声合成モデル「Qwen-Audio-3.0-TTS」に続く、Qwen-Audio 3.0世代の音声認識版という位置づけです。リアルタイム配信向けの「streaming」、ファイル文字起こし向けの「filetrans」、標準版の「flash」の3モデルを用意し、中国語の7大方言区と20以上の地域訛り、あわせて30言語をカバーします。

## 詳細

- **3つのバリエーション**: リアルタイムのストリーミング認識向け`qwen-audio-3.0-asr-flash-streaming`、長時間音声ファイルの非同期文字起こし向け`qwen-audio-3.0-asr-flash-filetrans`、汎用の`qwen-audio-3.0-asr-flash`を用意
- **中国語方言への対応**: 官話(Mandarin)・呉語(Wu)・湘語(Xiang)・贛語(Gan)・客家語(Hakka)・閩語(Min)・粤語(Yue)の7大方言区に加え、20以上の地域訛りを認識
- **対応言語数**: 中国語・英語・日本語・韓国語を含む30言語をサポート
- **専門認識機能**: 古典詩詞(漢詩)の認識精度を最適化したほか、数字・日付などのテキスト正規化(ITN)機能を強化
- **無料枠**: 一部報道によれば10時間分の無料利用枠が提供されている
- **提供元**: Alibaba Cloud Model Studio(DashScope)およびQianwen AIプラットフォーム経由のホスト型APIとして提供

## 使ってみるには

- Alibaba Cloud Model StudioのDashScope SDK経由でAPIを呼び出し可能
- オープンウェイトでの公開は発表されておらず、現時点ではホスト型API経由での利用が前提となる
