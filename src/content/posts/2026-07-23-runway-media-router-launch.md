---
title: "Runway、生成AIメディア向け初のモデルルーター「Runway Media Router」を発表"
description: "Runwayが、動画・画像・音声の各生成モデルからリクエストごとに最適なものを自動選択する「Runway Media Router」をRunway Dev上で発表。コスト・品質・速度の優先設定に応じてRunway自社モデルとサードパーティモデルを横断的にルーティングします。"
pubDate: 2026-07-23
category: runway
type: news
tags: [Runway, Runway Dev, モデルルーティング, API]
source: https://runway.com/news/company-news/introducing-runway-media-router
draft: false
importance: medium
---

Runwayが、開発者向けプラットフォーム「Runway Dev」の新機能として「Runway Media Router」を発表しました。生成AIメディア(動画・画像・音声)向けとしては初のモデルルーターと位置づけられており、リクエストごとに最適なモデルを自動選択します。

## 詳細

- **概要**: コスト・品質・レイテンシーの優先設定に応じて、リクエストを最適なモデルへ自動的に振り分ける仕組み。LLM分野では一般的だったモデルルーティングを、生成メディア分野に初めて持ち込んだとしている
- **仕組み**: 開発者はRunway Devのポータルで価格上限(動画は秒あたり、画像は1枚あたりのUSD)、許可/拒否するプロバイダーやモデルのリスト、コスト・品質・速度の優先度などを1度設定するだけでよく、以降は単一の「Model Router」エンドポイントにリクエストを送るだけで済む
- **対応モデル**: 自社モデルのGen-4.5、Aleph 2.0、Act-Twoに加え、Seedance、GPT Image 2、ElevenLabsなどサードパーティモデルも横断的にルーティング対象となる
- **地域選好への対応**: 米国製モデルを優先するなど、モデルの提供元(地域)による選好設定も可能
- **CPO Anthony Maggio氏のコメント**: 「多くの開発者は、各モデルの能力を本当に理解するための時間を割けていない」と述べ、乱立する生成メディアモデルの評価コストを下げる狙いを説明
- **導入企業**: Adobe、Cloudflare、ElevenLabs、Expedia、Shutterstock、Quoraなどが利用しているとされる

## 使ってみるには

- dev.runwayml.com のRunway Dev経由で、動画・画像・音声モデルを対象にすでに提供開始
- 具体的な料金体系は発表時点では公開されておらず、詳細は公式サイトで要確認
- 2026年7月8日発表の開発者向けプラットフォーム「Runway Dev」上に構築された機能で、Runway Dev自体の利用が前提となる
