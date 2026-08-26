---
title: "Alibaba Ships Qwen3.8-Flash-Next, an Open-Weight Preview of the Qwen4 Architecture"
description: "Alibaba's Qwen team open-sourced Qwen3.8-Flash-Next, a 125B-parameter multimodal MoE model that previews Qwen4's architecture with hybrid attention and N-gram embeddings, activating just 6B parameters per token."
pubDate: 2026-08-26
category: qwen
type: news
tags: [Qwen, Alibaba, open weights, Qwen4, MoE]
source: https://github.com/QwenLM/Qwen3.8-Flash-Next
draft: false
importance: medium
---

Alibaba's Qwen team open-sourced Qwen3.8-Flash-Next on August 26, 2026, releasing weights on Hugging Face and ModelScope alongside an FP8 build. The model is explicitly framed as an early architecture preview of the upcoming Qwen4, aimed at what the team calls "ultimate cost efficiency" rather than topping benchmark leaderboards outright.

## Details

- **Architecture**: a multimodal Mixture-of-Experts model with 125 billion total parameters but only 6 billion activated per token, plus a separate 51-billion-parameter N-gram embedding layer that stores common word/phrase groups and can run in ordinary system RAM instead of on the GPU
- **Four systematic upgrades**: the Qwen team describes changes across "attention, residual, embedding and optimization" — combining Gated DeltaNet with Qwen Sparse Attention (QSA) for long-context efficiency, a Gated Residual structure that widens the residual stream into four dynamically-gated branches, the N-gram embedding for cheap capacity gains, and a refined Muon optimizer
- **Context window**: 262,144 tokens natively, extensible to 1 million tokens via YaRN
- **Performance claims**: Qwen says the model beats its own Qwen3.7-Plus at roughly one-ninth the training cost, with the largest gains in coding and office-task benchmarks
- **Production version**: a hosted variant, Qwen3.8-Flash, is served via the QwenCloud API at $0.16 per million input tokens and $0.47 per million output tokens, with OpenAI- and Anthropic-compatible interfaces and support in Claude Code, Codex, and Qwen Code
- **Availability**: open weights (including an FP8 quantized build) on Hugging Face and ModelScope; deployable via Transformers, llama.cpp, vLLM, SGLang, or Unsloth

## How to try it

Download the weights from `Qwen/Qwen3.8-Flash-Next` on Hugging Face or ModelScope, or call the hosted `qwen3.8-flash` model through the QwenCloud API using its OpenAI-compatible endpoint.

## What happened next

- Reporting frames the release as a public preview of Qwen4's architecture rather than a flagship model launch — Alibaba has not given a release date for Qwen4 itself
- It follows Qwen3.8-Max's August 13 open-weight release under a bespoke revenue-sharing license; Qwen3.8-Flash-Next ships as a more conventional open release aimed at efficiency-focused deployment rather than frontier capability
