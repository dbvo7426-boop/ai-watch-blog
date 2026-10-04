---
title: "Meta、独自のMuseハードウェアを作れるSDK「Muse Gadgets」をオープンソース化"
description: "Meta Superintelligence LabsがオープンソースのESP32ファームウェアとLinux SDK「Muse Gadgets」を公開。開発者が自作ハードウェアをAIエージェント「Muse」に接続できるようになり、無償のUSB-Cスマートホームハブ「Muse Home Link」も合わせて登場した。"
pubDate: 2026-10-02
category: llama
type: news
tags: [Meta, Muse, オープンソース, SDK, スマートホーム, ハードウェア]
source: https://gadgets.muse.ai
draft: false
importance: medium
---

Meta Superintelligence Labsは2026年10月2日、オープンソースのESP32ファームウェアとLinux SDK「Muse Gadgets」を公開しました。これにより開発者は、MetaのパーソナルAIエージェント「Muse」と連携する自作ハードウェアを構築できるようになります。発表したのはMeta Superintelligence Labsでプロダクトを統括するNat Friedman氏で、本人は「サイドプロジェクト」だと述べていますが、MetaのチーフAIオフィサーであるAlexandr Wang氏はこれを「Museエコシステム」の始まりだとして後押ししています。

## 詳細

- **公開内容**: Apache 2.0ライセンスのESP32デバイスSDKとLinuxデバイスSDKをGitHub（`facebookincubator/muse-gadget-sdk`）で公開。マイコンボード向けファームウェアと、Raspberry Piなどのlinux機器をMuseガジェットに変える仕組みの両方を含む
- **対応する入出力**: 画面、音声入出力、ボタン、センサー、アクチュエーターをSDK経由でMuseに接続可能
- **始め方**: 開発者はgadgets.muse.aiでSDKトークンを取得し、注目のスターター企画を選ぶ（あるいは独自に開発）ことができ、コーディングエージェントにGitHubリポジトリを参照させることもできる
- **紹介されているハードウェア例**: Waveshareの丸型AMOLEDタッチスクリーン、Seeedのe-inkディスプレイ「reTerminal E1002」、M5Stackの「StickS3」、卓上コンパニオン機器「AiPi Lite」、Raspberry Pi 5でのHome Assistant連携など。テレビ向けHDMIスティックは近日公開予定
- **Muse Home Link**: USB-C給電のリファレンスデバイスで、Museを家庭内ネットワークに接続し、スマートホーム機器やHTTP対応システムを制御できるようにするもの。Metaは5,000台を製造し、米国内のMuse有料会員に1人1台まで無償提供（数量限定）、数週間以内に発送予定
- **コミュニティ支援**: SDKを使ったプロジェクト共有やサポートのためのDiscordサーバーをMetaが運営

## その後

Muse Gadgetsは、2026年9月にモバイルアプリとして登場したMuseを、単なるスマホ上のアシスタントではなく日常のあらゆる機器を制御するレイヤーへと押し上げようとするMetaの取り組みの延長線上にある。自社でガジェット製品ラインを展開するのではなく、ファームウェアとSDKをオープンソース化することで、Metaは初期のスマートスピーカーやホームオートメーションのコミュニティに似た、ホビイスト・メイカー層のエコシステムに賭け、自社では想定しきれないハードウェアの使い道を引き出そうとしている。Muse Home Linkはその参照実装として、開発者が目指すべき一例を示す役割を果たしている。
