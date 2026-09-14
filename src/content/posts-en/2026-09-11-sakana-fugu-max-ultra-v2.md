---
title: "Sakana AI Ships Fugu Max and Fugu Ultra v2 for Opposite Ends of the Cost-Performance Curve"
description: "Sakana AI released two new orchestration models on September 11, 2026: Fugu Max, tuned for frontier-level output at minimal cost, and Fugu Ultra v2, tuned for maximum capability on hard reasoning and coding tasks."
pubDate: 2026-09-11
category: sakana
type: news
tags: [Sakana AI, Fugu, Model Orchestration, Benchmarks, API]
source: https://sakana.ai/fugu-max-release/
draft: false
importance: high
---

Sakana AI released two new models in its Fugu orchestration line on September 11, 2026: Fugu Max, built for frontier-quality output at minimal cost, and Fugu Ultra v2, built for maximum capability on complex reasoning, research, and coding work. Both share the same core orchestration architecture, just tuned toward opposite ends of the cost-performance spectrum.

## Details

- **How it works**: rather than running every request through one large model, both products route each task to the leanest model in an expanded pool of open-weight and specialized models — including NVIDIA's Nemotron family — capable of solving it
- **Fugu Max**: posts the best overall scores on six benchmarks (Terminal Bench 2.1, GPQA Diamond, AA-LCR, GDP.pdf, AutomationBench, and SWEFish); priced at $2 per million input tokens and $6 per million output tokens, which Sakana says is 40-60% cheaper on output than comparable frontier models like Sonnet 5, GPT-5.6 Terra, and Kimi K3; pushes the cost-performance Pareto frontier forward on seven of ten benchmarks tested
- **Fugu Ultra v2**: best or joint-best on five of eight benchmarks and top-two on seven of eight; scores 48.3 on Chartography versus Opus 5's 27.3, and 74.3 on DeepSWE while reportedly beating models that cost three to five times more to run; deliberately excludes proprietary frontier models such as Fable 5, Fable 5.1, and GPT-6-Astra from its routing pool
- **Company framing**: Sakana argues "a system that deploys a multi-trillion-parameter model to execute a simple data lookup is not intelligent, but wasteful," positioning orchestration itself as the differentiator rather than any single underlying model
- **Migration**: existing Fugu users can switch to either new version with a single-line parameter change, with no other migration work required

## What happened next

Both models are available immediately through Sakana's OpenAI-compatible API via the product page or console.sakana.ai. The release extends Sakana's Fugu line, which started with Fugu conducting Gemma models in August, and reinforces the company's bet that multi-model orchestration — rather than scaling one proprietary frontier model — is the more cost-efficient path to state-of-the-art results.
