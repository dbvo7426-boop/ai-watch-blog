---
title: "OpenAI Reveals Jalapeño, Its First Custom Inference Chip, With Up to 4.1x Performance Gains"
description: "OpenAI has shared first benchmark results for Jalapeño, its first in-house inference chip, claiming up to 1.9x more throughput per watt and up to 4.1x higher performance on interactive workloads versus commercial systems."
pubDate: 2026-08-25
category: chatgpt
type: news
tags: [OpenAI, Jalapeño, Inference Chip, Hardware, AI Infrastructure]
source: https://openai.com/index/jalapeno-first-results
draft: false
importance: high
---

OpenAI has revealed the first measured performance results for Jalapeño, its first custom-designed chip built specifically to serve AI model inference. Tested against commercial comparison systems across three open-weight model families, Jalapeño delivered up to 1.9x more throughput per watt and up to 4.1x higher performance on latency-sensitive, interactive workloads — the clearest sign yet that OpenAI is moving to build its own inference silicon rather than relying solely on third-party accelerators.

## Details

- **What Jalapeño is**: Jalapeño is OpenAI's first custom inference chip — silicon designed in-house specifically to run trained models efficiently at serving time, as distinct from chips used for training. OpenAI frames it as the first generation of what it describes as a multigenerational chip platform, with a second generation already deep in development and a third taking shape. The announcement does not disclose manufacturing partners or low-level architectural specifics
- **Why it matters**: Owning inference silicon gives OpenAI direct control over the economics of serving its models — power efficiency, latency, and throughput per dollar — and establishes an independent hardware path that reduces reliance on GPU suppliers for the inference workloads that increasingly dominate OpenAI's compute usage as ChatGPT and Codex traffic scales
- **Benchmark setup**: OpenAI measured Jalapeño against commercial comparison systems on three open-weight models of increasing size: GPT-OSS 120B, DeepSeek R1 (670B parameters), and Kimi K2.5 (1T parameters)
- **Efficiency results**: Across the tested models, Jalapeño delivered 1.5x–1.9x more AI work per watt at peak throughput, and 1.7x–3.6x lower end-to-end latency than the comparison systems. On the largest model tested, Kimi K2.5, it achieved roughly 1.5x higher peak performance per watt and 3.4x lower end-to-end latency
- **Model-by-model breakdown**: On GPT-OSS 120B, Jalapeño reached about 1.9x peak mixed throughput per kilowatt and 1.7x lower latency; on DeepSeek R1, about 1.7x peak throughput per kilowatt and 3.6x lower latency; on Kimi K2.5, about 1.5x peak throughput per kilowatt and 3.4x lower latency
- **Interactive workloads**: On workloads that are especially latency-sensitive — the kind that matter for responsive, real-time chat and agentic use — OpenAI reported 2.1x–4.1x higher performance versus the comparison systems
- **Power envelope**: Jalapeño is rated for up to 700 watts, but in testing, sustained power draw stayed at or below 550 watts, suggesting headroom relative to its rated ceiling
- **Rollout timeline**: OpenAI says it plans to begin deploying Jalapeño within its own compute infrastructure by the end of 2026, with a second-generation chip already well into development and a third generation in early planning

## What happened next

- This is presented as OpenAI's first public disclosure of measured (not simulated) performance data for in-house inference silicon, following earlier reporting that OpenAI was developing custom chips with hardware partners
- Deployment is expected to begin internally within OpenAI's own infrastructure before any broader availability; OpenAI has not indicated plans to sell or license Jalapeño externally
- Full benchmark details are available at https://openai.com/index/jalapeno-first-results
