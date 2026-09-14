---
title: "Cognition Launches SWE-2, a Coding Model Built on Kimi K3 That Undercuts GPT-6 Astra on Price"
description: "Cognition released SWE-2, a new coding model trained on top of the 2.8-trillion-parameter Kimi K3 base, claiming comparable performance to Fable 5.1 at 64% lower cost and a quarter of GPT-6 Astra's price, rolling out now in Devin Desktop, CLI, Web, and Fusion."
pubDate: 2026-09-10
category: devin
type: news
tags: [Devin, Cognition, SWE-2, CodingModel, KimiK3]
source: https://cognition.com/blog/swe-2
draft: false
importance: high
---

Cognition released SWE-2 on September 10, 2026, its newest coding model and the successor to SWE-1.7. The model is built on top of Moonshot AI's 2.8-trillion-parameter Kimi K3 base and is aimed squarely at the cost-performance tradeoff in agentic software engineering, rather than chasing raw benchmark scores alone.

## Details

- **Base model and training**: SWE-2 is trained on Kimi K3, with Cognition describing it as the first time RL training has been scaled to a multi-trillion-parameter regime using a single, unified effort-level training run
- **Performance gain over the base**: SWE-2 adds roughly 5-6 points over the untuned Kimi K3 base across many benchmarks
- **Benchmark results**: on FrontierCode 1.1 Main, SWE-2 scores 50.0% versus Kimi K3's 44.2%, Fable 5.1's 50.9%, and GPT-6 Astra's 53.3%; on DeepSWE 1.1 it hits 73.0%; on Terminal-Bench 2.1 it leads the comparison set at 92.8%
- **Pricing**: Cognition says SWE-2 is 64% cheaper than Fable 5.1 while matching it on FrontierCode 1.1 Main, and costs about one-quarter of GPT-6 Astra's price
- **Efficiency**: at medium effort level, SWE-2 uses 58% fewer turns than SWE-1.7 while cutting cost by 81%, thanks to a linear cost-penalty tuned per effort level to the local Pareto curve slope
- **Behavior improvements**: Cognition highlights better test coverage, more resourcefulness when stuck, and stronger verification discipline before marking work done
- **Inference stack**: SWE-2 runs on NVFP4/FP8 kernels with quantization-aware training for higher throughput
- **Availability**: live starting September 10 in Devin Desktop and CLI, with rollout to Devin Web and the newly announced Fusion harness following

## What happened next

SWE-2 slots in as Devin's default cost-efficient model option, sitting alongside frontier models like Fable 5.1 and GPT-6 Astra rather than replacing them. Cognition positions it as the model to reach for when a task doesn't need top-tier reasoning but still benefits from an agentic coding-tuned model — a role it's designed to fill inside Fusion, the dual-agent harness Cognition introduced the following day, where SWE-2 is the recommended "sidekick" model pairing with a frontier lead model. Full benchmark methodology and pricing details are on Cognition's blog at cognition.com/blog/swe-2.
