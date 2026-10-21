---
title: "Mistral、音声モデル「Voxtral 3」とリアルタイム音声エージェントSDKを発表"
description: "Mistral AIが音声認識・音声合成モデルのファミリー「Voxtral 3」と、聞く・考える・話す・行動するを1本のストリーミングで実行する音声エージェントSDKを公開しました。"
pubDate: 2026-10-20
category: mistral
type: news
tags: [Mistral, Voxtral, 音声認識, 音声合成, 音声エージェント]
source: https://mistral.ai/news/voxtral-3
draft: false
importance: high
---

2026年10月20日、Mistral AIは音声認識(STT)と音声合成(TTS)の新モデルファミリー「Voxtral 3」と、音声エージェントSDKを発表しました。聞く、考える、話す、複数ステップで行動するエージェントをリアルタイムで構築でき、EU内ホスティングや自社インフラでのソブリン運用も選べます。

## 詳細

- **Voxtral Small Transcribe 3**: EU公用語24言語を含む50以上の言語に対応する音声認識。話者分離、コンテキストバイアス、発話終了検出に対応。Mistralは自社ベンチマークでWhisper、Scribe v2、Gemini 3.5 Transcribeを上回ると説明しています。
- **Voxtral Mini Transcribe 3**: 4Bパラメータの軽量版で、料金は1分あたり0.0035ドル。
- **Voxtral Realtime Transcribe 3**: 35以上の言語で500ミリ秒未満の遅延を実現するストリーミング文字起こし。話者分離とコンテキストバイアスにも対応。
- **Voxtral Mini TTS 3**: 35以上の言語、50以上の方言に対応する音声合成。感情・速度・強調を制御でき、料金は100万文字あたり13ドル。30分以上の音声からのボイスクローン、プロ向けの「Pro Voice」適応も提供。
- **音声エージェントSDK**: LiveKit上に構築され、文字起こし、汎用LLM(例: Mistral Small)、TTSを1本のストリーミングパイプラインで連結。Mistralによると1ターンは1秒未満で完了し、関数呼び出し、Web検索、検索拡張、SIP電話、WebRTCに対応。
- **提供状況**: Mistral API(欧州・米国・グローバルのエンドポイント)で本日から利用可能。自社環境へのデプロイも可能で、Studioのプレイグラウンドで試せます。

## その後

Voxtral 3により、Mistralは単体の音声モデルから、コンタクトセンターやサービスデスク、アシスタント向けの音声エージェント一式へと踏み込みました。EUホスティングと自社運用、LLM・音声・言語を差し替えられる構成は、米国系音声AIベンダーに対するソブリンな選択肢として位置づけられます。ベンチマークはMistral自身の発表で、第三者による検証はまだありません。オープンウェイトでの公開有無は発表では明記されていません。
