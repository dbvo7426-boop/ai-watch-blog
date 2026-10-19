---
title: "Black Forest Labs、「FLUX 3 Image Klein」を公開 ― 8GBのGPUでも動く56億パラメータのオープンウェイト画像モデル"
description: "Black Forest LabsのFLUX 3 Image Kleinは、生成・編集・複数参照に対応した56億パラメータのオープンウェイトモデル。ネイティブ4K出力に対応し、一般向けRTX GPUで動作、APIでは1枚0.009ドルから利用できる。"
pubDate: 2026-10-15
category: flux
type: news
tags: [FLUX, BlackForestLabs, 画像生成, オープンウェイト, NVIDIA, ComfyUI]
source: https://bfl.ai/blog/flux-3-image-klein
draft: false
importance: high
---

Black Forest Labs(BFL)は2026年10月15日、「FLUX 3 Image Klein」を公開しました。FLUX 3ファミリーの画像モデルとしては初めて重みが公開されたモデルです。パラメータ数は56億と一般向けグラフィックボードでも動かせるコンパクトさながら、ネイティブ4K生成やバウンディングボックスによる配置制御など、フル版FLUX 3 Imageの中核機能を受け継いでいるとしています。

## 詳細

- **機能**: テキストからの画像生成、画像編集、最大10枚の参照画像を使ったマルチリファレンス生成
- **バリエーション**: ファインチューニング用のベースモデル、低遅延生成向けのステップ蒸留モデル、NVIDIAと共同開発したFP8・INT8・NVFP4版
- **必要メモリ**: BF16で11.2GB、FP8で5.6GB。INT8版はVRAM 8GBのGeForce RTX GPUでも動作
- **ローカルでの速度**: ComfyUIで蒸留モデルのINT8版を使うと、1MP画像をRTX 5090で約4秒、RTX 4070で9秒未満で生成。NVIDIA GB300上のNVFP4版では0.6秒未満。LoRA適用時の追加時間は約5%
- **APIでの速度**: 1MP時の中央値レイテンシはテキストからの生成で4.54秒、編集で7.18秒。BFLの比較では上位モデルの中で最速
- **ベンチマーク(BFL社内評価)**: テキストからの生成、マルチリファレンス、編集の各分野でオープンモデル首位とし、より大きなオープンモデルを上回るほか、クローズドモデルのIdeogram V4.5やFLUX.2 [pro]よりも高評価だったという。FLUX.2 [klein] 9Bと比べ、パラメータを38%削減しながらEloはテキストからの生成で91、編集で70向上
- **料金**: BFL APIでは蒸留モデル(`flux-3-image-klein`)が1枚0.009ドルから
- **提供形態**: Hugging Faceでの重み公開に加え、BFL API、Playground、Hugging Face Spacesで利用可能。ComfyUI、Diffusers、TensorRT-LLM、SGLang Diffusion、vLLM-Omniが初日から対応
- **ライセンス**: FLUX Kommunity License。個人および年商500万ドル未満の企業は商用利用が無料で、研究・非商用利用も可能。それ以上の規模の組織はセルフホスト用ライセンスかAPIの利用が必要
- **安全性**: 社内のレッドチーミングと外部パートナーCinderによる評価で、他の人気オープンウェイトモデルより脆弱性が大幅に少なかったとしている

## その後

Kleinは、9月に公開されたロボティクス向けの「FLUX 3 Action」に続く、FLUX 3ファミリー2つ目のオープンウェイトモデルです。7月のFLUX 3発表時には動画・アクションモデルが先行し、画像モデルとオープンウェイト版は「後日」とされていたため、今回でその穴が埋まった形になります。小型で緩やかなライセンスのモデルに、NVIDIA最適化済みの量子化版と初日からのComfyUI対応を組み合わせることで、BFLはかつてStable Diffusionが席巻していたローカル実行・個人クリエイター・小規模スタジオ市場を明確に狙っています。なお、ベンチマーク結果はBFL自身によるもので、第三者リーダーボードでの検証はこれからです。
