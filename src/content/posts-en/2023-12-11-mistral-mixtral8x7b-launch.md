---
title: Mistral AI releases "Mixtral 8x7B" — an open MoE model rivaling GPT-3.5
description: Mistral AI has released "Mixtral 8x7B," a mixture-of-experts model that outperforms Llama 2 70B while running six times faster, delivering GPT-3.5-level performance with open weights.
pubDate: 2023-12-11
category: mistral
type: news
tags: [Mistral, Mistral AI, "AI History"]
source: https://mistral.ai/news/mixtral-of-experts/
draft: false
importance: high
---

On December 11, 2023, Mistral AI released "Mixtral 8x7B," a sparse mixture-of-experts model. It sent shockwaves through the industry by outperforming Llama 2 70B on nearly every benchmark while running six times faster, and matching or exceeding GPT-3.5 on standard benchmarks — all with open weights under the Apache 2.0 license.

## Details

- **Architecture**: A decoder-only Transformer with 8 expert networks per layer. Only 2 experts are activated per token, so of the 46.7 billion total parameters, only 12.9 billion are active at once
- **Performance**: Outperformed Llama 2 70B on nearly every benchmark while running six times faster, matching or exceeding GPT-3.5 on standard benchmarks
- **Context length**: Handles a 32K-token context and supports English, French, Italian, German, and Spanish
- **License**: Released with open weights under the Apache 2.0 license
- **Instruct version released simultaneously**: "Mixtral 8x7B Instruct," fine-tuned with supervised learning and direct preference optimization (DPO) for stronger instruction-following, was released at the same time

## What happened next

Mixtral 8x7B demonstrated that high performance with open weights was achievable even with a mixture-of-experts architecture, helping spark an industry-wide MoE boom. This technical direction would go on to inform the closed model "Mistral Large" in February 2024, and later "Mistral Large 2" in July 2024.
