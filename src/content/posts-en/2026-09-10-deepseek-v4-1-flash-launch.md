---
title: "DeepSeek Launches V4.1-Flash, the First Model in a New Native-Vision Architecture Family"
description: "DeepSeek released V4.1-Flash on September 10, 2026, a 552B-parameter model with a new asymmetric encoder-decoder design, native multimodal understanding, and benchmark scores DeepSeek says beat the outgoing V4-Pro at a fraction of the price."
pubDate: 2026-09-10
category: deepseek
type: news
tags: [DeepSeek, V4.1-Flash, LLM, API, Multimodal]
source: https://www.deepseek.com/en/news/deepseek-v4-1-flash/
draft: false
importance: high
---

DeepSeek released DeepSeek-V4.1-Flash on September 10, 2026, calling it the smallest model in a new architecture family built around native visual understanding. The company says the model beats its own outgoing flagship, V4-Pro, on performance, cost, speed, and total completion time — while cutting the price by roughly two-thirds.

## Details

- **New architecture**: a 552B-parameter mixture-of-experts model using an asymmetric "causal encoder-decoder" design with only 8B active parameters for input processing and 16B for output generation
- **Native multimodal understanding**: visual understanding is built into the model rather than bolted on, part of what DeepSeek describes as a family designed for "higher capability ceiling, faster inference, higher throughput, and scaling to larger models"
- **Benchmarks**: GPQA Diamond 90.9, Codeforces rating 3471, Terminal-Bench 2.1 at 90.6, Chartography (with tools) 78.9, and BabyVision (with tools) 89.6
- **Leaner memory footprint**: KV cache requirements cut to roughly 1/4 the HBM and 1/8 the SSD storage of prior-generation models
- **Pricing**: $0.15 per million input tokens and $0.60 per million output tokens, with off-peak rates at 50% of peak — undercutting the outgoing V4-Flash and running at about a third of V4-Pro's price
- **Access**: available under the model id `deepseek-flash`; the legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` now route automatically to V4.1-Flash
- **Ecosystem support**: partners including WorkBuddy, CodeBuddy, and OpenCode already support the new model, with open-source deployment options planned

## What happened next

DeepSeek confirmed that starting September 14, 2026, all `deepseek-v4-pro` API requests will begin routing to V4.1-Flash at V4.1-Flash pricing as part of V4-Pro's phase-out. In response to user demand, DeepSeek said it would keep V4-Pro's API running past that date rather than shutting it down outright, giving existing integrations more time to migrate. The release continues DeepSeek's rapid release cadence for its Flash line, following V4-Flash in July and the V4-Flash-Vision-Exp preview in August.
