---
title: "Black Forest Labs Releases FLUX 3 Image Klein: A 5.6B Open-Weight Model That Runs on 8GB GPUs"
description: "Black Forest Labs' FLUX 3 Image Klein is a 5.6B-parameter open-weight model for generation, editing and multi-reference work with native 4K output, running on consumer RTX GPUs and priced from $0.009 per image via API."
pubDate: 2026-10-15
category: flux
type: news
tags: [FLUX, BlackForestLabs, ImageGeneration, OpenWeights, NVIDIA, ComfyUI]
source: https://bfl.ai/blog/flux-3-image-klein
draft: false
importance: high
---

Black Forest Labs (BFL) released FLUX 3 Image Klein on October 15, 2026, the first image model from the FLUX 3 family to ship with open weights. At 5.6 billion parameters, it is compact enough to run on consumer graphics cards, yet BFL says it inherits core features of the full FLUX 3 Image model, including native 4K generation and bounding-box control.

## Details

- **Capabilities**: Text-to-image generation, image editing, and multi-reference generation with up to 10 reference images
- **Variants**: A base model for fine-tuning, a step-distilled model for low-latency generation, and FP8, INT8 and NVFP4 builds developed with NVIDIA
- **Memory**: 11.2GB in BF16 and 5.6GB in FP8; the INT8 build runs on GeForce RTX GPUs with as little as 8GB of VRAM
- **Local speed**: With the distilled INT8 model in ComfyUI, a 1MP image takes about 4 seconds on an RTX 5090 and under 9 seconds on an RTX 4070. On an NVIDIA GB300 in NVFP4, under 0.6 seconds. LoRAs add about 5% to generation time
- **API speed**: Median end-to-end latency at 1MP of 4.54 seconds for text-to-image and 7.18 seconds for editing, the fastest among top-rated models in BFL's comparison
- **Benchmarks (BFL internal)**: Ranks first in text-to-image, multi-reference generation and editing among open models, ahead of larger open models, and rates above the closed Ideogram V4.5 and FLUX.2 [pro]. Compared with FLUX.2 [klein] 9B, it gains 91 Elo in text-to-image and 70 in editing with 38% fewer parameters
- **Pricing**: The distilled model (`flux-3-image-klein`) starts at $0.009 per image on the BFL API
- **Availability**: Open weights on Hugging Face, plus the BFL API, Playground and Hugging Face Spaces. Day-one support in ComfyUI, Diffusers, TensorRT-LLM, SGLang Diffusion and vLLM-Omni
- **License**: FLUX Kommunity License, allowing free commercial use for individuals and companies under $5M in annual revenue, plus research and non-commercial use; larger organizations need a self-hosted license or the API
- **Safety**: BFL says internal red-teaming and an external evaluation by Cinder found substantially fewer vulnerabilities than other popular open-weight models

## What happened next

Klein is the second open-weight release in the FLUX 3 family after the robotics-focused FLUX 3 Action in September, and it fills the gap BFL left when it unveiled FLUX 3 in July with video and action models first and promised the image model and open weights later. By pairing a small, permissively licensed model with NVIDIA-optimized quantizations and immediate ComfyUI support, BFL is aiming squarely at the local, hobbyist and small-studio market that Stable Diffusion once dominated. The benchmark claims are BFL's own and await independent leaderboard confirmation.
