---
title: "OpenAIのDecisions APIがGPT-6 Lunaで一般提供開始"
description: "Decisions APIは範囲の決まった問いに確率・選択・スコアで素早く答えるAPIで、Responses API経由のGPT-6 Lunaより最大10倍高速、入力100万トークンあたり0.10ドルです。"
pubDate: 2026-10-22
category: chatgpt
type: news
tags: [OpenAI, API, GPT-6 Luna, Decisions API, GPT-Live]
source: https://openai.com/index/decisions-api
draft: false
importance: medium
---

OpenAIはDecisions APIの一般提供を開始しました。GPT-6 Lunaをベースに、分類、振り分け、次の行動の選択といった答えの範囲が決まった問いに特化し、テキスト・画像・構造化入力から、Responses API経由のGPT-6 Lunaより最大10倍高速に結果を返します。

## 詳細

- **使い方:** 開発者が問いと許容される答えを定義し、テキスト、画像、ネイティブJSONで文脈を渡します。
- **回答タイプ:** predicate(条件が真である確率を0〜1で返す)、choice(用意した選択肢から1つ。確率と信頼度も返す)、score(ルーブリックの段階の確率加重平均)。
- **公開ベータからの追加:** 音声向けGPT-Liveとのネイティブ統合、プロンプトキャッシュ、米国・EUでの推論リージョン指定、ネイティブJSON入力、問い指示への画像の挿入、1リクエスト最大400問(従来の2倍)。アジアの複数リージョンで容量も追加されました。
- **料金:** 入力100万トークンあたり0.10ドル、キャッシュ入力は0.01ドル、出力トークンの課金なし。30分・12時間のキャッシュ書き込みは料金ガイド参照です。
- **データ管理:** 米国とEUでのリージョン処理、対象顧客にはZero Data Retention。
- **初期の利用例:** OpenAI社内では取引明細の分類や報道の分類、顧客ではAIコストの帰属や対話的な語学学習に使われています。

## その後

OpenAIは、繰り返し発生する判断を1つ選び、Decisions Playgroundで試すことを勧めています。課金は入力トークンのみのため、コストは文脈の大きさに左右され、繰り返す文脈ではキャッシュが重要です。10倍という速度はOpenAI自身の比較で、第三者のベンチマークは示されていません。
