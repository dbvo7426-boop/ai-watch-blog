---
title: "DeepSeek Open-Sources Its Training Stack for Huawei Ascend Chips"
description: "DeepSeek published new Ascend-NPU ports of its core training and inference infrastructure — including DeepGEMM-Ascend and DeepEP-Ascend — on September 29-30, 2026, extending its NVIDIA-built software stack to Huawei hardware."
pubDate: 2026-09-30
category: deepseek
type: news
tags: [DeepSeek, Huawei Ascend, Open Source, TileLang, DeepGEMM, GitHub]
source: https://github.com/deepseek-ai/DeepGEMM-Ascend
draft: false
importance: high
---

DeepSeek open-sourced a set of core infrastructure libraries ported to Huawei's Ascend NPUs on September 29-30, 2026, extending the same low-level software stack it built for NVIDIA GPUs to Chinese domestic hardware. The release landed on DeepSeek's own GitHub organization as two brand-new repositories plus Ascend-specific updates to three existing projects.

## Details

- **New repositories**: DeepGEMM-Ascend, a port of DeepSeek's matrix-multiplication kernel library to Ascend, and DeepEP-Ascend, a high-performance expert-parallel communication library for mixture-of-experts dispatch and combine operations
- **Updated projects**: Ascend-targeted support was also added to TileKernels, DeepSelect, and FlashMLA — projects that previously targeted NVIDIA hardware only
- **Hardware target**: the libraries are validated on Huawei's Ascend 950 series (950DT), requiring the CANN 9.20 toolkit and the torch_npu package
- **API compatibility**: DeepGEMM-Ascend is fully API-compatible with the original NVIDIA-targeted DeepGEMM, supporting BF16, FP8, and FP4 GEMM, MQA logits, MegaMoE, and HC Prenorm GEMM
- **Performance figures DeepSeek published**: dense BF16 GEMM hardware utilization up to 99.8%; FP4×FP4 throughput of 1,701 TFLOPS and BF16×BF16 of 431 TFLOPS at a 4096x7168x16384 shape; DeepEP-Ascend dispatch/combine bandwidth of 373-375 GB/s and 345-347 GB/s respectively at EP8 on Ascend 950DT with CANN 9.2.0
- **Kernel language**: the stack continues to rely on TileLang, a CUDA-alternative tile-based DSL for writing AI kernels, which DeepSeek has used across its NVIDIA toolchain
- **License**: released under the MIT license

## What happened next

The release is widely read as part of DeepSeek's push to reduce its dependence on NVIDIA's CUDA ecosystem and to make its training and inference stack portable to domestic Chinese accelerators. By shipping API-compatible Ascend ports rather than a separate codebase, DeepSeek keeps the same kernel interfaces its partners already integrate with on NVIDIA hardware, lowering the switching cost for teams that want to run DeepSeek-style infrastructure on Huawei silicon. It follows DeepSeek's V4.1-Flash model launch earlier in September and continues a pattern of DeepSeek open-sourcing its internal infrastructure tooling alongside model releases.
