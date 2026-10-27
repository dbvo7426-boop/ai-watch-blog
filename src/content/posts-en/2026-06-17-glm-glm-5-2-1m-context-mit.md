---
title: "Z.ai Releases GLM-5.2 With a 1M-Token Context and MIT License"
description: "Z.ai introduced GLM-5.2, a 753B open-weight model for long-horizon coding with a 1M-token context, IndexShare attention and an MIT license."
pubDate: 2026-06-17
category: glm
type: news
tags: [GLM, Z.ai, Open Weights, Coding]
source: https://z.ai/blog/glm-5.2
draft: false
importance: high
---

Z.ai (Zhipu AI) introduced GLM-5.2 as its flagship model for long-horizon tasks, the first in the line to deliver what it calls a solid 1M-token context. The model is released under an MIT license. The Z.ai docs say it reached GLM Coding Plan users before the official release, and the Hugging Face card dates the blog post to June 17, 2026. Secondary reports of June 13 refer to that early access; no primary source we could open confirms that date.

## Details

- **Context and output:** 1M-token context; the docs list a 128K maximum output, with text input and output only.
- **Size and license:** 753B parameters on the Hugging Face card (zai-org/GLM-5.2, plus an FP8 variant), MIT license, which Z.ai describes as having no regional limits.
- **Architecture:** IndexShare reuses one indexer across every four sparse-attention layers, cutting per-token FLOPs by 2.9x at 1M context; the MTP layer for speculative decoding is improved, raising acceptance length by up to 20%.
- **Effort control:** Multiple thinking effort levels, including a Max level.
- **Benchmarks (Z.ai reported):** Terminal-Bench 2.1 81.0 vs 63.5 for GLM-5.1; SWE-bench Pro 62.1 vs 58.4; GPQA-Diamond 91.2; HLE 40.5 (54.7 with tools). Z.ai says it is the highest-ranked open model on FrontierSWE, PostTrainBench and SWE-Marathon, trailing Claude Opus 4.8 on the first and third. These are vendor-run numbers.
- **API:** The docs list thinking modes, streaming, function calling, context caching, structured output and MCP. The BytePlus ModelArk pricing page lists glm-5-2-260617 at $1.4 input and $4.4 output per million tokens.

## What happened next

GLM-5.2 became the base for the GLM-5.3 release in October, which keeps the same base model and changes only post-training (see the separate article). The notable point of 5.2 is the combination of 1M context, coding scores close to the closed frontier and a permissive license. Some secondary reports gave 744B parameters; the model card says 753B.
