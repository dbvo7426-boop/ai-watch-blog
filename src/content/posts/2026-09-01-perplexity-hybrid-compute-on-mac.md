---
title: "Perplexity、Mac向け「Hybrid Compute」を発表 クラウドとデバイスでAI処理を分担"
description: "PerplexityがMac向けにHybrid Computeを発表。機密データはApple Silicon上のローカルモデルで処理し、それ以外はクラウドに任せる仕組みで、端末外への情報送信をプライバシーゲートが制御する。"
pubDate: 2026-09-01
category: perplexity
type: news
tags: [Perplexity, Hybrid Compute, Apple Silicon, プライバシー, オンデバイスAI, Mac]
source: https://www.perplexity.ai/hub/blog/introducing-hybrid-compute-on-mac
draft: false
importance: high
---

Perplexityは2026年9月1日、Mac向けの新機能「Hybrid Compute」を発表した。AIタスクをクラウド処理とデバイス上のローカルモデルに自動的に振り分ける仕組みで、機密ファイルや情報を端末の外に出すことなく扱えるようにする。

## 詳細

- **概要**: Hybrid Computeは各タスクをクラウドとローカルモデルに分担させることで、端末の外に出してはいけないデータをAIで扱えるようにする仕組み
- **プライバシーゲート**: 氏名・住所・口座番号・機密情報といったセンシティブな情報を識別する分類器を内蔵し、プライバシーゲートが端末外への送信可否を制御。該当箇所をマスクするか、送信自体を拒否する
- **搭載されるローカルモデル**: Gemma 4 E4B、Qwen3.6 35B-A3B、Perplexity独自モデルの3種類を同時にリリース。モデルのダウンロードと切り替えはワンクリックで可能
- **ローカル推論エンジン**: 併せて公開された技術解説記事では、Apple Silicon上でQwen3.6-35B-A3Bを動かすために自社開発した推論エンジン「Lily」を紹介。M5 Max環境でMLX-LM比、プレフィル速度1.23倍・デコード速度1.35倍を実現しているという
- **動作要件**: macOS 15以降を搭載し、ユニファイドメモリ24GB以上を持つApple Silicon搭載Macであれば利用可能
- **リモートアクセス**: iPhoneから専用のMac miniをリモート操作することにも対応
- **エンタープライズ向け管理機能**: 管理者が組織全体のデータ取り扱いルールを設定し、情報の送信履歴を監査できる
- **提供状況**: Perplexity Pro、Max、Enterpriseの加入者向けに順次展開中

## その後

Hybrid Computeは、8月末にNVIDIA DGX Spark向けに投入した「Portable Computer」で示したローカルファースト路線を継承しつつ、専用のAIワークステーションではなく一般的なMacハードウェアへとオンデバイス処理を広げるものだ。あわせて公開されたローカル推論エンジン「Lily」は、MLX-LMのような既存フレームワークに頼るだけでなく、Perplexityが自社のローカル実行基盤を継続的に最適化していく方針であることを示しており、オンデバイスのプライバシー保護を製品ライン全体を通じた差別化要因として位置づけていく狙いがうかがえる。
