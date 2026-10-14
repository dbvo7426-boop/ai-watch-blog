---
title: "xAIが「Grok Voice 3.0」を発表、音声対話ベンチマークで首位を主張"
description: "xAIは音声対話モデル「Grok Voice 3.0」をリリース。独立系ベンチマークでOpenAIやGoogleの最新モデルを上回ると主張しており、Voice Agent APIで提供開始、Grok Botの音声モードにも採用、価格は据え置き。"
pubDate: 2026-10-14
category: grok
type: news
tags: [Grok, xAI, 音声, GrokBot, AIモデル]
source: https://x.ai/news/grok-voice-3
draft: false
importance: medium
---

xAIは、新しい音声対話モデル「Grok Voice 3.0」をリリースしました。同社は「世界で最も高性能な音声対話モデル」と位置付けており、現在Voice Agent APIで利用可能なほか、Grok Botの音声モードにも採用されています。

## 詳細

- **ベンチマーク結果(Artificial Analysis、2026年10月13日)**: Grok Voice 3.0は音声対話インデックスで86.9を記録し首位。Grok Voice 2.0(81.3)、OpenAIのGPT-Live-1/Astra Medium(83.2)、GoogleのGemini 3.8 Live Extended Thinking High(82.6)を上回った
- **その他のベンチマーク**: Big Bench Audioの音声推論では98.5%(同3モデルは97.2%・90.1%・97.7%)、Speech Agent Arenaの人間による評価では1070 Elo(同1011・1048・990)、タスク成功率は94.8%(同94.6%・87.4%・89.1%)、会話の間合いや割り込み対応を測るFull Duplex Benchでは97.0%を記録。雑音・訛り・割り込みを含むサポート通話を想定したτ-Voiceでは71.6%で、GPT-Live-1の74.5%に匹敵し、Gemini 3.8 Liveの68.6%を上回った。応答速度はGPT-Live-1よりも約40%高速
- **レイテンシとコスト**: 初回音声応答までの時間は1秒未満。Big Bench Audioにおけるタスクあたりの平均コストは0.025ドルで、GPT-Live-1/Astra Mediumの0.030ドル、GPT-Realtime-2.1 Highの0.055ドルを下回る
- **エンタープライズ向けベンチマーク**: ServiceNowのEVA-Benchで、正解率74%と、正解率・顧客体験の総合スコアの両方で首位を獲得
- **実運用での採用事例(同社発表)**: Teslaの車両では1日あたり数百万件の音声対話を処理しており、ドライバーはGrok Botを通じてハンズフリーでカレンダー確認やConnectors経由のメール閲覧、コーヒーの注文やディナー予約が可能。Starlinkのコールセンターでは複数言語で1日約2万件の顧客対応を処理し、約70%を人手を介さずに解決、販売目的の通話では約4件に1件が成約に至っている。本人確認・トラブルシューティング・クレジット発行・交換機器の発送までを単一のエージェントが対応
- **価格と提供状況**: Voice Agent APIで提供開始、価格は1分あたり0.08ドル(1時間あたり4.80ドル)でGrok Voice 2.0から据え置き。`grok-voice-latest`エイリアスを利用しているエージェントは、コード変更不要で自動的に切り替わる

## その後

今回のリリースにより、xAIの音声モデルはおおむね四半期ごとのアップグレードペースを維持しています。OpenAIやGoogleの最新音声モデルとの第三者ベンチマーク比較を前面に押し出すことで優位性を主張する一方、TeslaやStarlinkでの大規模な実運用データを示すことで、ベンチマークの数値にとどまらない具体的な裏付けを添えた発表となっています。
