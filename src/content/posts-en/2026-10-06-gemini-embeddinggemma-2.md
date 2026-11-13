---
title: "Google releases EmbeddingGemma 2, an open multimodal embedding model for text, images, audio and video"
description: "EmbeddingGemma 2 has 740 million parameters, an 8K-token context window and an Apache 2.0 license, and maps text, images, audio and video into one embedding space. Quantized text-only weights need about 191MB of RAM on a Pixel 11 Pro."
pubDate: 2026-10-06
category: gemini
type: news
tags: [EmbeddingGemma, Gemma 4, Embeddings, On-device]
source: https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2
draft: false
importance: medium
---

Google DeepMind published EmbeddingGemma 2 on October 6, 2026, in a post by Sahil Dua and Henrique Schechter Vera. Google calls it the most capable model for on-device multimodal embeddings.

## Details

- **Model:** An open model that maps text, images, audio and video into one shared embedding space. It uses the Gemma 4 architecture, has 740 million parameters and is released under the Apache 2.0 license. The original EmbeddingGemma had more than 20 million downloads.
- **Modular size:** Text-only workloads need as little as 270M parameters, with optional vision (170M) and audio (300M) encoders.
- **Context:** An 8K-token window, 4x that of EmbeddingGemma 1. It can process up to 5.5 minutes of audio, 29 images or 58 video frames, or interleaved combinations.
- **Embedding size:** Matryoshka Representation Learning lets developers truncate 768-dimensional vectors to 512, 256 or 128 dimensions, for up to a 6x storage reduction.
- **Benchmarks:** MTEB Code rose from 68.76 to 78.68. Multilingual text performance matches the original. Google says it leads sub-1B multimodal embedders on MTEB Code and the Massive Audio Embedding Benchmark.
- **On-device memory:** Quantized, about 191MB of active RAM for text-only weights and about 567MB for the full multimodal model on a Pixel 11 Pro. It shares its text tokenizer and audio encoder with Gemma 4.

## Availability

Weights are on Hugging Face and Kaggle. Availability in the Gemini Enterprise Agent Platform Model Garden is listed as coming soon. Supported tools include transformers, sentence-transformers, MLX, vLLM, llama.cpp, SGLang, Ollama, LM Studio, MediaPipe, LiteRT, transformers.js and WebGPU.
