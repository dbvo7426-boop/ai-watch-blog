---
title: Mistral AI、形式検証モデル「Leanstral 1.5」を公開──miniF2Fで満点、未知のバグも発見
description: Mistral AIがLean 4向け形式検証モデル「Leanstral 1.5」をApache-2.0で公開。miniF2Fを満点で突破し、オープンソースの実コードから未報告のバグを5件発見しました。
pubDate: 2026-07-02
category: mistral
type: news
tags: [Mistral, Mistral AI, Leanstral, 形式検証, Lean]
source: https://mistral.ai/news/leanstral-1-5/
draft: false
importance: medium
---

Mistral AIが、Lean 4向けの形式検証(コードの数学的な正しさの証明)モデル「Leanstral 1.5」を公開しました。「Proof Abundance for All(すべての人に証明の豊かさを)」を掲げ、Apache-2.0ライセンスの無料モデルとして提供されます。

## 詳細

- **モデル仕様**: 総パラメータ119B・アクティブパラメータ6BのMoE構成。Apache-2.0ライセンスでHugging Faceから重みを公開し、無料APIエンドポイント(`leanstral-1-5`)としても提供
- **ベンチマーク**: miniF2Fのvalidation・testの両方で100%を達成。PutnamBenchでは672問中587問を解き、FATE-H(87%)・FATE-X(34%)でも最高水準を記録。FLTEvalはPass@1が28.9、Pass@8が43.2に向上
- **コスト効率**: PutnamBenchの1問あたりのコストは約4ドルで、競合のSeed-Prover 1.5(高負荷設定でGPU「H20」10日分規模の予算、1問あたり推定300ドル以上)と比べ大幅に低コスト
- **未知のバグ発見**: Rust製コードをLeanに変換するAeneasパイプラインを用いてオープンソースの57リポジトリを検証し、47件の性質違反を検出。うち11件が実際のバグで、5件はGitHub上で未報告だった新規バグ(例: datrs/varintegerでのジグザグデコード時の整数オーバーフローバグ)

## 使ってみるには

- `uv tool install mistral-vibe`でMistral Vibeをインストールし、`/leanstral`コマンドでセットアップ後、`vibe --agent lean`で起動可能
- Lean LSP MCPを追加導入すると、より高度な機能が利用可能
- モデル本体はHugging Face(`mistralai/Leanstral-1.5-119B-A6B`)から重みを入手可能
