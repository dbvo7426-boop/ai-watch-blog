---
title: "Thinking Machines Lab releases Inkling-Small, matching Inkling at a quarter of the size"
description: "Inkling-Small is a 276B-total, 12B-active open-weights MoE model that the lab says surpasses Inkling on reasoning and agentic coding."
pubDate: 2026-07-30
category: thinkingmachines
type: news
tags: [Inkling, InklingSmall, OpenWeights, Tinker]
source: https://thinkingmachines.ai/news/inkling-small/
draft: false
importance: high
---

Thinking Machines Lab introduced Inkling-Small, a smaller Mixture-of-Experts model it says delivers "comparable performance to Inkling at a quarter of its size." The official post is dated July 30, 2026 (earlier reports gave July 31).

## Details

- **Size:** 276B total and 12B active parameters, versus 975B and 41B for Inkling. Context is up to 1M tokens with variable thinking effort.
- **Multimodal design:** Natively multimodal and encoder-free. Audio is represented as dMel spectrograms, and images are split into 40x40-pixel patches processed by a four-layer hMLP.
- **Training:** An adjusted pretraining data mix and recipe. Post-training started from an earlier Inkling-Small (preview) checkpoint trained by on-policy distillation with Inkling as teacher, followed by two weeks of scaled agentic coding RL.
- **Benchmarks vs Inkling (lab-reported):** SWEBench Verified 80.2% vs 77.6%, Terminal Bench 2.1 64.7% vs 63.8%, GPQA Diamond 89.5% vs 87.2%, HLE text-only 31.6% vs 29.7%. Inkling is ahead on AIME 2026 (97.1% vs 95.5%) and SimpleQA Verified (43.9% vs 20.6%), so the post says Inkling keeps its edge on knowledge and factuality.
- **Availability:** Full weights on Hugging Face (the model page is tagged Apache-2.0; the post text does not name the license), fine-tuning on Tinker, and chat with text, image and audio in the Tinker Playground. Both models carry a limited-time Tinker discount.
- **Evaluation notes:** Most evals ran at effort 0.99; Terminal Bench 2.1 used an internal harness and zeroed solutions contaminated by web search.

## What happened next

The release makes a frontier-style open model far cheaper to serve and fine-tune, and Tinker's one-year post (October 15) lists Inkling among supported models. The trade-off the lab itself reports is weaker factual recall. All benchmark numbers are first-party and unverified independently.
