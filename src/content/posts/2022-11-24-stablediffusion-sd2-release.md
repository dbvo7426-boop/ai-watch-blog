---
title: Stable Diffusion 2.0公開──性能向上の一方でコミュニティから賛否
description: Stability AIがStable Diffusion 2.0を公開。テキストエンコーダーの刷新や安全性フィルタの強化で品質は向上したものの、既存プロンプトとの非互換や表現制限を巡り議論を呼びました。
pubDate: 2022-11-24
category: stablediffusion
type: news
tags: [StableDiffusion, StabilityAI, "AI史"]
source: https://stability.ai/news-updates/stable-diffusion-v2-release
draft: false
---

Stability AIが、Stable Diffusionの大型アップデート「2.0」を公開しました。テキストエンコーダーをOpenCLIPに刷新するなど技術的な進化がある一方、NSFWフィルタの強化によって人物表現の質が落ちたとの声がコミュニティから上がり、公開直後から賛否が分かれる展開になりました。

## 詳細

- **テキストエンコーダー刷新**: 従来のCLIPからLAIONが訓練したオープンソース版OpenCLIPへ変更し、v1.x向けのプロンプトやLoRAの多くが非互換に
- **安全性フィルタ強化**: LAIONの安全性分類器による厳格なNSFWフィルタリングを学習データに適用
- **コミュニティの反発**: 人物描写の品質低下や表現の幅が狭まったとの批判が広がり、v1系を使い続けるユーザーも多く残った
- **迅速な軌道修正**: 公開からわずか2週間後にはフィードバックを反映した2.1がリリースされた

## その後

SD2.0を巡る論争は、オープンソースモデルにおける「安全性」と「表現の自由度」のバランスがどれだけ敏感な問題かを浮き彫りにしました。この経験はStability AIのその後のモデル設計にも影響を与え、翌年のSDXLではより幅広いユーザー層を意識した設計判断につながっています。
