---
title: "Meta Open-Sources Muse Glimmer, a 30B Model Built for On-Device Agents"
description: "Meta Superintelligence Labs released Muse Glimmer, a 30-billion-parameter Apache 2.0 model designed to run local, always-on agents on a single consumer GPU or Mac, with speculative decoding and multimodal input support."
pubDate: 2026-08-10
category: llama
type: news
tags: [Meta, Muse Glimmer, open source, AI agent, on-device AI]
source: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
draft: false
importance: high
---

Meta Superintelligence Labs released Muse Glimmer on August 10, 2026, an open-weight, 30-billion-parameter model designed specifically for running AI agents locally on personal devices without cloud dependency. Meta describes it as "built for agents that don't stop," with reliable tool-calling, persistent state across restarts, and self-managed memory.

## Details

- **Size and footprint**: 30B parameters, runs on a single consumer GPU or Mac, with a memory footprint under 20GB when quantized
- **License**: open-sourced under the permissive Apache 2.0 license, with weights available on Hugging Face
- **Multimodal**: supports text and image input, and was trained on more than 100 languages
- **Built for agentic work**: tuned for end-to-end agentic task completion, reliable tool use and function calling, multi-step reasoning across extended workflows, and failure recovery/error diagnosis
- **Benchmarks**: Meta says Muse Glimmer outperforms comparably sized models, including Gemma4-31B and Qwen3.6-27B, on agentic, coding, multimodal, safety, and reasoning benchmarks, with strong results on DeepSearch QA, MCP-Atlas, τ-Bench, and SWE-Bench
- **Speed**: speculative decoding delivers up to 3.1x faster generation on an RTX 5090, 1.8x on an M5 Max, and 1.5x on an M4 Max
- **Training approach**: distilled from Meta's larger Muse Spark via logit distillation during pretraining, then put through long-context and agent-focused training, supervised fine-tuning, reinforcement learning, and further distillation

## How to try it

- Download the weights now from Hugging Face
- Runs today with vLLM, Ollama, LM Studio, SGLang, and llama.cpp; native llama.cpp, MLX, and ExecuTorch integrations are rolling out within days
- Also available through Fireworks and OpenRouter
- Full announcement: research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
