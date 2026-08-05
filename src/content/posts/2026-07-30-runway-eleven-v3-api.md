---
title: "Runway API、表現力豊かな音声合成「Eleven v3」(ElevenLabs)を追加"
description: "Runwayの開発者向けAPIに、ElevenLabsの音声モデル「Eleven v3」がText-to-Speechエンドポイント経由で追加されました。[laughs]や[whispers]といったタグをスクリプトに直接書き込むことで表現豊かな音声を生成でき、同日にはGen-3 Alpha TurboとGen-4 Alephの提供終了も発表されています。"
pubDate: 2026-07-30
category: runway
type: news
tags: [Runway, Runway Dev, ElevenLabs, 音声合成, API]
source: https://docs.dev.runwayml.com/api-details/api_changelog/
draft: false
importance: medium
---

Runwayが開発者向けAPIにElevenLabsの音声モデル「Eleven v3」を追加しました。Runway Dev利用者は、別途ElevenLabsとの連携を組まなくても、Runway自身のText-to-Speechエンドポイントを通じて表現力豊かな音声合成にアクセスできるようになります。

## 詳細

- **今回の追加内容**: Eleven v3がRunway APIのText-to-Speechエンドポイントから利用可能になり、ElevenLabsの中でも最も表現力に優れた音声モデルが、Runwayの統合的なメディア生成基盤に組み込まれた
- **表現豊かな読み上げ**: スクリプト内に`[laughs]`（笑い）や`[whispers]`（ささやき）といったオーディオタグを直接書き込むことで、別パラメータを用意しなくても口調や話し方を指示できる
- **音声プリセット**: Eleven v3は、従来のMultilingual v2で使えていたものと同じプリセット音声ライブラリを使用するため、既存の音声選択をそのまま引き継げる
- **料金**: Runwayでの課金は入力テキスト50文字につき1クレジット、リクエストごとの最低料金は1クレジット
- **同日に行われたモデル終了**: 2026年7月30日の同じアップデートで、RunwayはGen-3 Alpha Turbo（`gen3a_turbo`）とGen-4 Aleph（`gen4_aleph`）のAPI提供を終了。動画生成はGen-4.5またはGen-4 Turboへ、動画編集はAleph 2.0への移行が案内されている
- **背景**: 2026年7月23日に発表されたRunway Media Routerでは、ElevenLabsはすでに音声リクエストのルーティング先となるサードパーティモデルの一つとして挙げられていた。今回の対応により、Eleven v3はルーター経由だけでなく、直接呼び出し可能な単独のエンドポイントとして一級市民の扱いを受けることになる

## その後

- 開発者はRunway Dev（dev.runwayml.com）上で、既存のAPIクレデンシャルを使ってすぐにText-to-Speechエンドポイント経由でEleven v3を呼び出せる
- リクエストパラメータやオーディオタグの記法など技術的な詳細は、RunwayのAPIチェンジログおよび開発者ドキュメントで公開されている
- Runwayのエンドポイントを利用する限り、別途ElevenLabsのアカウントやAPIキーは不要
