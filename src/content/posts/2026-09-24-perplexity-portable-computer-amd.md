---
title: "Perplexity「Portable Computer」がAMD Ryzen AI Max搭載PCに対応"
description: "PerplexityがローカルファーストAIエージェント「Portable Computer」の対応範囲を拡大し、NVIDIA RTX GPUに加えてAMD Ryzen AI Maxシリーズ搭載機(Ryzen AI Halo開発者プラットフォーム含む)でも利用可能に。"
pubDate: 2026-09-24
category: perplexity
type: news
tags: [Perplexity, PortableComputer, AMD, RyzenAIMax, オンデバイスAI, Windows]
source: https://www.perplexity.ai/hub/blog/portable-computer-comes-to-amd-powered-agentic-pcs
draft: false
importance: medium
---

Perplexityは2026年9月24日、ローカル完結型AIエージェント「Portable Computer」の対応ハードウェアをAMDの「Ryzen AI Max」シリーズ搭載PCにも拡大しました。10日前のWindows版ローンチ時点ではNVIDIA RTX GPUのみが要件でしたが、これで2つ目のハードウェア選択肢が加わったことになります。

## 詳細

- **新たなハードウェア対応**: Portable Computerが、既存のNVIDIA RTX/RTX PRO対応に加えて、Ryzen AI Halo開発者プラットフォームを含むAMD Ryzen AI Maxシリーズチップ上でも動作するようになった
- **ハードウェア要件**: グラフィック処理からアクセス可能なメモリ24GB以上が必要で、RTX搭載機に設定されていた基準と同じ
- **一体型のスタック**: Portableはローカルモデル、エージェントハーネス/オーケストレーター、スケジューラー、サンドボックス、機微情報の分類機能を1つのシステムにまとめており、ユーザーが自前で推論サーバーやツール群を構築する必要がない
- **選べるモデル**: ローカルモデルとしてQwen 3.8 27B、およびPerplexity自社の事後学習済みモデル「PPLX 27B」が利用可能
- **クレジット消費なし**: 端末上でローカル実行される推論は、Perplexity Computerのクレジットを消費しない
- **必要に応じたクラウドへのエスカレーション**: 最新情報やより高度な推論が必要なタスクは、Perplexity Searchや15以上のフロンティアモデルを呼び出せるが、端末外へのデータ送信はユーザーの承認があった場合のみ行われる
- **セットアップ方法**: Perplexityアプリの設定内「Local Inference」からワンクリックでモデルをダウンロードすると、推論エンジンと分類機能も同時にインストールされ、その後Portableがアクセスできるフォルダやアプリを選択する
- **想定用途の例**: 請求書と契約書の照合による財務確認、日次の業務ブリーフィング作成、法務契約のコンプライアンス確認、エンジニアリングのプルリクエスト要約
- **提供状況**: Windows 10または11、空き容量約20GBを満たすPro・Maxサブスクライバー向けに提供開始済み

## その後

今回のAMD対応は、9月14日にNVIDIA RTX搭載Windows機でPortable Computerが提供開始された際と同じ「オンデバイスでのプライバシー確保」という訴求をそのまま踏襲し、AMDのRyzen AI Maxシリコンを使うユーザーにもローカル完結の選択肢を広げるものです。Perplexityは今後さらにOEMやシリコンパートナーの追加を見込んでいるとしており、Linux版・Mac版に続き、Windows上で競合する2社のGPUに対応するという、プラットフォームごとの拡大路線が続いています。
