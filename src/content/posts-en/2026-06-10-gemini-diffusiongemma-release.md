---
title: Google DeepMind Releases DiffusionGemma, Achieving Up to 4x Faster Text Generation via Diffusion
description: Google DeepMind has released DiffusionGemma, a diffusion-based language model built on Gemma 4, under an Apache 2.0 license. Instead of generating tokens sequentially, it generates and refines a canvas of tokens in parallel, reaching up to 4x the generation speed.
pubDate: 2026-06-10
category: gemini
type: news
tags: [Gemini, Gemma, Open Models, Diffusion Models]
source: https://developers.googleblog.com/diffusiongemma-the-developer-guide/
draft: false
importance: medium
---

On June 10, 2026, Google DeepMind announced DiffusionGemma, a diffusion-based language model built on the Gemma 4 foundation. Unlike traditional autoregressive models that generate tokens left-to-right, it generates and refines a 256-token canvas in parallel, achieving up to 4x faster generation speeds.

## Details

- **Architecture**: A 26B Mixture of Experts (MoE) model that activates only 3.8B parameters during inference
- **Generation approach**: Rather than producing tokens one at a time, it generates a full 256-token canvas at once and iteratively refines it using bidirectional attention — a "diffusion" approach to text generation
- **Speed**: Achieves 700+ tokens/second on an NVIDIA GeForce RTX 5090 and 1,000+ tokens/second on a single NVIDIA H100, up to 4x faster than comparable autoregressive models
- **Memory efficiency**: A quantized version fits within 18 GB of VRAM, making local deployment feasible on consumer-grade GPUs
- **Self-correction**: Bidirectional attention enables real-time error correction and parallel context propagation, making the model well-suited to constraint-solving tasks like Sudoku
- **License**: Model weights are distributed under an Apache 2.0 license via Hugging Face

## How to try it

- Deployable through multiple pathways: Hugging Face Transformers, vLLM (with an OpenAI-compatible API), SGLang, MLX, and Google Cloud's Model Garden
- Fine-tuning recipes are available using Hackable Diffusion, Unsloth, and NVIDIA NeMo
- Quality still trails autoregressive models in some areas, so the model is currently better suited to latency-sensitive and edge deployment use cases than production workloads
