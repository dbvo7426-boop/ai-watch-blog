---
title: "Thinking Machines Lab releases Inkling, a 975B open-weights multimodal model"
description: "Thinking Machines Lab published Inkling, a Mixture-of-Experts model with 975B total and 41B active parameters, with full weights on Hugging Face under Apache 2.0."
pubDate: 2026-07-15
category: thinkingmachines
type: news
tags: [Inkling, OpenWeights, MoE, Tinker]
source: https://thinkingmachines.ai/news/introducing-inkling/
draft: false
importance: high
---

Thinking Machines Lab announced Inkling, which it describes as "a model we trained from scratch with the full weights available." It is the lab's first open-weights foundation model, and it is positioned as a broad, balanced model rather than the strongest model overall.

## Details

- **Size and architecture:** Mixture-of-Experts transformer with 975B total and 41B active parameters, 256 routed experts plus 2 shared experts per layer, 6 routed experts active per token, and a context window of up to 1M tokens.
- **Training:** Pretrained on 45 trillion tokens of text, images, audio and video, on NVIDIA GB300 NVL72 systems, with reinforcement learning scaled to over 30M rollouts. It handles text, images and audio natively.
- **Controllable thinking effort:** Effort can be adjusted (the post sweeps 0.2 to 0.99), including from inside agent harnesses. The post says it matches Nemotron 3 Ultra on Terminal Bench 2.1 with roughly one third of the tokens.
- **Selected benchmarks (effort 0.99, as reported by the lab):** SWEBench Verified 77.6%, GPQA Diamond 87.2%, AIME 2026 97.1%, Terminal Bench 2.1 63.8%, HLE 29.7% text-only and 46.0% with tools.
- **License and weights:** The post says the full weights are on Hugging Face, in the original checkpoint and an NVFP4 checkpoint for NVIDIA Blackwell. The post text does not name the license; the Hugging Face model page for thinkingmachines/Inkling is tagged Apache-2.0.
- **Availability:** Fine-tuning on Tinker (64K and 256K context options, 50% off for a limited time), an Inkling Playground in the Tinker console, and inference partners Together AI, Fireworks, Modal, Databricks and Baseten. SGLang, vLLM, llama.cpp and Hugging Face transformers are supported.
- **Interaction models:** Inkling is designed to act as the background reasoning model in the lab's interaction models system for real-time voice and vision collaboration. The post describes this system, but we did not verify a separate public release of it.

## What happened next

Inkling-Small followed two weeks later with a much smaller footprint, and Tinker's one-year post lists Inkling among the models offered for fine-tuning, with audio support added by Inkling. For readers, the notable shift is that Thinking Machines, previously known mainly for the Tinker fine-tuning API, now ships its own permissively licensed weights. Benchmark figures are the lab's own and were not independently reproduced here.
