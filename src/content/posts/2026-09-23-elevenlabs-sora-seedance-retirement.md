---
title: "ElevenLabs、OpenAIのSora API終了でSora 2を喪失 ― Seedance 1.5 Proの廃止時期も判明"
description: "ElevenLabsは、OpenAIがSora APIを終了することを受け、Image & VideoのモデルからSora 2とSora 2 Proを削除。あわせてByteDance製「Seedance 1.5 Pro」の11月11日終了も告知した。"
pubDate: 2026-09-23
category: elevenlabs
type: news
tags: [ElevenLabs, Sora2, OpenAI, Seedance, ByteDance, 動画生成]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabsの公式チェンジログが2026年9月23日に伝えたところによると、OpenAIが9月24日にSora APIを終了することに伴い、ElevenLabsは「Image & Video」ツールからSora 2とSora 2 Proを削除しました。同じ更新の中で、ByteDance製「Seedance 1.5 Pro」の終了時期も発表されています。

## 詳細

- **Sora 2 / Sora 2 Proの提供終了**: OpenAIが2026年9月24日にSora APIを停止するのに合わせ、両モデルはElevenLabsのImage & Videoのモデル選択肢から削除され、生成もできなくなる
- **既存の生成物は保持**: Sora系ノードで既に生成済みの成果物は履歴から引き続き閲覧可能。ただし、Sora系ノードを使用しているFlowsやテンプレートは、再実行する前に別の動画モデル(ElevenLabsはGemini Omni 1.1 Flashへの切り替えを案内)へ変更する必要がある
- **Seedance 1.5 Proの廃止**: ByteDanceが2026年11月11日にこのモデルを終了する予定。新規生成向けの提供はすでに終了しており、当日以降は完全に動作しなくなる
- **移行先の案内**: ElevenLabsは、サービス終了に先立ちSeedance 1.5 Proのユーザーに対しSeedance 2.0系モデルへの移行を案内している

## その後

いずれの変更も、ElevenLabs自身の判断ではなく、OpenAIやByteDanceといった基盤モデル提供元側の決定に起因するものです。この点は、ElevenLabsのImage & Videoツールが単一の自社パイプラインではなく、50以上ものサードパーティ・パートナーモデルを束ねるルーティング層であることを改めて浮き彫りにしています。Soraノードを使ったFlowsやテンプレートを持つユーザーは、このチェンジログ公開の翌日には動かなくなるため直ちに移行が必要です。一方でSeedance 1.5 Proのユーザーには、同じ運命をたどるまで11月中旬までの猶予があります。
