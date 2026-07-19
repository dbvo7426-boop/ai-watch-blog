---
title: Stability AIが「Stable Audio 3.0」公開、6分間のオープンウェイト音楽生成
description: Stable Diffusionの開発元Stability AIが音楽・効果音生成モデル「Stable Audio 3.0」を発表。4モデル中3つがオープンウェイトで無料公開されています。
pubDate: 2026-05-20
category: stablediffusion
type: news
tags: [Stability AI, 音声生成, オープンウェイト]
source: https://stability.ai/news-updates/meet-stable-audio-3-the-model-family-built-for-artistic-experimentation-with-open-weight-models
draft: false
importance: medium
---

Stable Diffusionの開発元Stability AIが、音楽・効果音生成の新モデル「Stable Audio 3.0」を発表しました。4モデルからなるファミリー構成で、うち3モデルはオープンウェイトとして無料公開されています。

## 詳細

- **生成時間の大幅延長**: 従来モデルの11〜47秒から最大6分間の可変長生成に対応
- **オンデバイス作曲**: 最小モデル「3.0 Small」は端末単体で完結する楽曲作成が可能な唯一のモデル
- **編集機能**: インペインティング、複数セグメント編集、楽曲の延長にも対応
- **カスタマイズ**: LoRAによるファインチューニングで自分の音源ライブラリに合わせた調整が可能

### モデルラインナップ

| モデル | 用途 | 最大長 |
| --- | --- | --- |
| 3.0 Small SFX | 効果音(モバイル/ノートPC向け) | オンデバイス |
| 3.0 Small | 楽曲作成 | 2分 |
| 3.0 Medium | 音楽性強化版 | 6分以上 |
| 3.0 Large | プロ向けプラットフォーム | 6分以上 |

- **ライセンス**: 完全にライセンス済みデータで学習。Community Licenseでは生成物の所有権・商用利用権をユーザーが保持。年間売上1億円超の企業向けにはEnterprise License(法的補償付き)も用意

## 使ってみるには

- オープンウェイトモデル(Small SFX / Small / Medium)はHugging Faceから入手可能
- 上位モデル「Large」はStability AI PlatformのAPI経由
- stableaudio.comで試用可能。ComfyUIなど連携プラットフォームでも利用できます
