---
title: "Qwen-Image-2.1 Brings Native Transparent-Image Generation to a 7B Open Model"
description: "Qwen open-sourced Qwen-Image-2.1, a 7B-parameter image model that unifies text-to-image generation and editing, natively outputs transparent RGBA images, and accepts up to 10 reference images at once."
pubDate: 2026-09-20
category: qwen
type: news
tags: [Qwen, Alibaba, Image generation, Open weights, Qwen-Image]
source: https://qwen.ai/blog?id=qwen-image-2.1
draft: false
importance: medium
---

Qwen open-sourced Qwen-Image-2.1 on September 20, 2026, a compact image model that unifies text-to-image generation and image editing in a single 7-billion-parameter architecture, shrinking down from the 20B generator in its predecessor, Qwen-Image-2512.

## Details

- **Compact but competitive**: built on 32 single-stream DiT layers with 7B parameters in the generator, scoring 60.28 on Qwen's own Qwen-Image-Bench — ahead of every other model with downloadable weights, including Google's Nano Banana 2.0 (59.82), though still behind Qwen's own closed Qwen Image 3 Pro (62.36)
- **Native transparency**: generates RGBA images with alpha channels directly from text prompts, and can lift a subject out of an ordinary photo as a clean transparent cut-out — a task that previously needed a separate model
- **Multi-reference editing**: accepts up to 10 reference images in a single edit, supporting composites such as merging multiple portraits or product photos, guided by colored-circle selection, painted regions, or masks
- **Efficiency architecture**: uses mixed-granularity attention — token-level causal masking for text, chunk-level masking for images — plus KV cache reuse to cut redundant computation on repeated inputs and instructions
- **Quality improvements**: better typography rendering and more natural portrait lighting compared to the prior generation
- **Licensing change**: released under the Qwen Research License Agreement for non-commercial use only, requiring a separate commercial license from Alibaba — a shift from the Apache 2.0 terms used on several earlier Qwen releases
- **Availability**: weights published on Hugging Face, ModelScope, and GitHub as Qwen/Qwen-Image-2.1

## What happened next

Qwen-Image-2.1 closes out a three-model release burst from Alibaba's Qwen team in three days, following Qwen3.8-Omni-Flash and Qwen3.8-LiveTranslate. The more restrictive non-commercial license is a notable departure for a team that built much of its open-source reputation on permissive terms, and it will likely shape how quickly the model gets adopted outside research settings.
