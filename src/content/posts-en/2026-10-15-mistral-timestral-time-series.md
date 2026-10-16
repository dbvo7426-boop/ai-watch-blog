---
title: "Mistral Launches Timestral, Its First Time-Series Foundation Model Family"
description: "Mistral AI introduced Timestral, a family of four probabilistic, multivariate time-series forecasting models (5M-209M parameters) that top the GIFT-Eval, TIME, and fev-bench leaderboards and run on CPU without a GPU."
pubDate: 2026-10-15
category: mistral
type: news
tags: [Mistral, Timestral, time-series forecasting, foundation models, Mistral Forge, open weights]
source: https://mistral.ai/news/timestral/
draft: false
importance: medium
---

Mistral AI announced Timestral on October 15, 2026, its first family of time-series foundation models for probabilistic, multivariate forecasting. The company says every size in the family sits on the Pareto front of accuracy versus model size, outperforming larger specialist forecasting models while running entirely on CPU.

## Details

- **Four model sizes**: 5M, 28M, 123M, and 209M parameters, all sharing one architecture and training recipe
- **Benchmark results**: the 209M model ranks first on the three main public forecasting benchmarks — GIFT-Eval, TIME, and fev-bench — from a single checkpoint with no ensembling; the 28M model reportedly beats Chronos-2 (about four times larger) on GIFT-Eval and TIME, and the 209M model reportedly beats TimesFM-3 and Falcon-2.0 with fewer parameters
- **No GPU required**: on a standard 8-thread CPU server, forecasting one day ahead from three weeks of 15-minute history takes about 10ms with the 5M model and 140ms with the 209M model
- **Core features**: outputs probabilistic forecasts as 21 quantiles, models multiple related series jointly, and supports categorical, past-only, and known-future covariates (such as schedules or weather forecasts), with a context length of 32,768 time steps
- **Technical approach**: introduces "Decoupled Horizon Forecasting," which keeps full history in-sequence using learned forecast tokens, plus covariate-aware attention that keeps targets causal so future information can't leak into forecasts; training relies mostly on synthetic data in a two-stage pre-training/post-training pipeline
- **Availability**: open weights via a Hugging Face collection and a GitHub repo under a "Modified MIT" license, with zero-shot inference, fine-tuning, and architectural customization available through Mistral Forge; deployable on-premises, in a VPC, or air-gapped; no pricing disclosed
- **Use case framing**: Mistral pitches an industrial scenario where Timestral monitors sensor streams for anomalies and hands off to agentic workflows (paired with Mistral's language models) for root-cause analysis and diagnosis

## What happened next

Timestral marks Mistral's entry into a forecasting-model niche so far dominated by specialist players like Amazon's Chronos and Google's TimesFM, rather than general-purpose LLM vendors. By open-sourcing the weights and emphasizing CPU-only inference, Mistral is positioning the family for latency- and cost-sensitive industrial and enterprise deployments — sensor monitoring, demand forecasting, and similar operational use cases — that sit alongside, rather than replace, its language-model lineup. A full technical report was promised for later but had not been published at launch.
