---
title: "Ideogram 4.0 Goes Open-Weight: A 9.3B Text-to-Image Model Built for Design and Typography"
description: "Ideogram released Ideogram 4.0 as an open-weight 9.3B-parameter Diffusion Transformer trained from scratch on structured JSON captions, with weights on Hugging Face and fp8/nf4 checkpoints that fit on a single 24GB GPU."
pubDate: 2026-06-03
category: ideogram
type: news
tags: [Ideogram, ImageGeneration, OpenWeights, HuggingFace, Typography]
source: https://ideogram.ai/blog/ideogram-4.0/
draft: false
importance: high
---

On June 3, 2026, Ideogram released Ideogram 4.0 and, for the first time, published the model's weights. The 9.3-billion-parameter text-to-image model was trained from scratch and is aimed squarely at design work: layout control, color palettes and, Ideogram's long-standing specialty, accurate text rendering inside images.

## Details

- **Open release**: Weights are on Hugging Face (the `ideogram-ai/ideogram-4` collection); inference code, a prompting guide and the license are on GitHub (`ideogram-oss/ideogram-4`). fp8 and nf4 checkpoints are provided, and the nf4 variant fits on a single 24GB GPU
- **Architecture**: A 34-layer single-stream Diffusion Transformer in which text and image tokens share one sequence (embedding dimension 4608, 18 attention heads, SwiGLU MLP, AdaLN modulation, QK-RMSNorm, 3D multimodal RoPE)
- **Components**: Qwen3-VL-8B-Instruct as the text encoder (text-only mode, hidden states from 13 intermediate layers), and a frozen Flux VAE with 8x spatial compression
- **Sampling**: Euler flow-matching sampler with asymmetric classifier-free guidance; presets of 12, 20 or 48 steps; up to 2,048 text tokens; 256–2,048px per side
- **JSON-only prompting**: The model was trained exclusively on structured JSON captions. Prompts can specify bounding boxes (0–1000 normalized coordinates), up to 16 hex colors per image (5 per element), and typed text elements
- **Vendor-reported benchmarks**: 0.97 on X-Omni English OCR (text rendering), 0.69 mIoU on 7Bench (layout), 0.76 on SpatialGenEval, 0.89 on Prism-bench alignment
- **Designer preference arena**: Across 4,366 votes and nine pipelines, Ideogram 4.0 ranked #2 overall (Elo 1062) behind GPT Image 2 (1141), and first among open-weight models
- **Safety**: NSFW-filtered pretraining data, safety post-training, and Hive moderation in the reference pipeline; redistributors are required to apply equivalent or stronger filtering

## What happened next

The open release made Ideogram one of the few frontier-quality design-focused image models anyone can run locally, a notable shift for a company that had previously been API- and app-only. Ideogram followed with prompting guides for 4.0's JSON format in June, and on September 30 shipped Ideogram 4.5, a hosted (non-open) successor focused on precise multi-turn editing. Notably, Black Forest Labs' October FLUX 3 Image Klein release also cited Ideogram's models as a comparison point, a sign of how central Ideogram has become in the image-model competitive set.
