---
title: xAI open-sources Grok-1's model weights — a 314-billion-parameter MoE model
description: xAI has open-sourced the weights and architecture of Grok-1's foundation model under the Apache 2.0 license. As a 314-billion-parameter Mixture-of-Experts model, developers are now free to inspect and modify it.
pubDate: 2024-03-17
category: grok
type: news
tags: [Grok, xAI, "AI History"]
source: https://x.ai/news/grok-os
draft: false
importance: medium
---

xAI has open-sourced the model weights and network architecture of "Grok-1," the foundation model behind the "Grok" chatbot, under the Apache 2.0 license. Releasing such a large-scale 314-billion-parameter Mixture-of-Experts model under a permissive license that allows commercial use drew significant attention.

## Details

- **Model scale**: A 314-billion-parameter Mixture-of-Experts model designed so that roughly 25% of the total weights are activated per token
- **Training infrastructure**: Built using a custom training stack based on JAX and Rust
- **Scope of release**: A raw checkpoint from the pretraining phase completed in October 2023 — an unadjusted base model that has not been fine-tuned for chat or other applications
- **License**: Released under the Apache 2.0 license, allowing free modification and redistribution, including for commercial use
- **Distribution**: Implementation guides and related resources were published on GitHub (xai-org/grok)

## What happened next

Open-sourcing Grok-1 signaled that xAI cared not just about its own commercial service but also about contributing to the research community. Shortly after this release, in late March 2024, "Grok-1.5," with improved conversational performance, was announced, and xAI's pace of model development accelerated further.
