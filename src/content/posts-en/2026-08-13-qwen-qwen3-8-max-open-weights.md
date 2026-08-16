---
title: "Qwen3.8-Max Open Weights Ship — Under a New Revenue-Sharing License, Not Apache 2.0"
description: "Alibaba released the open weights of Qwen3.8-Max, its first Max-class model to be open-sourced, on Hugging Face and ModelScope — but under a bespoke license requiring large commercial users to obtain a separate agreement, breaking from Qwen's usual Apache 2.0 terms."
pubDate: 2026-08-13
category: qwen
type: news
tags: [Qwen, Alibaba, open weights, licensing]
source: https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B
draft: false
importance: high
---

Alibaba shipped the open weights of Qwen3.8-Max on August 13, 2026, following through on the "next week" timeline it set when the model reached general availability on August 3. The release, published as `Qwen/Qwen3.8-2.4T-A95B` on Hugging Face and ModelScope, marks the first time Alibaba has open-sourced a Max-class Qwen model — but it ships under a new bespoke license rather than the permissive Apache 2.0 terms of earlier Qwen generations.

## Details

- **Architecture**: 2.4 trillion total parameters with 95 billion active (Mixture-of-Experts, 512 experts total), built on the Qwen 3.5 foundation
- **Context window**: 262,144 tokens natively, extensible to roughly 1,010,000 tokens
- **Text-only**: unlike the full Qwen3.8-Max API, which is multimodal with a default 1M context, the open-weight release is text-only and always runs in thinking mode
- **License**: listed on Hugging Face as a bespoke "qwen3.8-max" license rather than Apache 2.0; reporting indicates a revenue-sharing requirement for large commercial users — businesses running a Model-as-a-Service or AI work-assistant business with trailing 12-month revenue above roughly $50 million must obtain a separate commercial license before use
- **Companion model**: the smaller Qwen3.8-27B, promised alongside Qwen3.8-Max, followed on August 13-14 and shipped under the standard Apache 2.0 license
- **How to run it**: available via Docker, the Transformers library, or quantized builds through llama.cpp/Ollama; also served through SGLang, vLLM, or Qwen Cloud's OpenAI-compatible Chat Completions API, and through HuggingChat

## What happened next

- The revenue-sharing threshold and exact percentage were still being finalized as of the release, according to reporting on the license terms
- The move breaks from Qwen's reputation as a fully permissive open-weight lab, shifting its flagship release toward a freemium model similar to source-available licensing used elsewhere in the industry
