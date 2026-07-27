---
title: Mistral AI Releases Leanstral 1.5, a Formal Verification Model That Saturates miniF2F and Finds Unknown Bugs
description: Mistral AI has released Leanstral 1.5, a Lean 4 formal verification model, under Apache-2.0. It saturates the miniF2F benchmark and discovered five previously unreported bugs in real open-source code.
pubDate: 2026-07-02
category: mistral
type: news
tags: [Mistral, Mistral AI, Leanstral, formal verification, Lean]
source: https://mistral.ai/news/leanstral-1-5/
draft: false
importance: medium
---

Mistral AI has released Leanstral 1.5, a formal verification model for the Lean 4 proof language, under the banner "Proof Abundance for All." The model is free and open-source under an Apache-2.0 license.

## Details

- **Model specs**: A mixture-of-experts model with 119B total parameters and 6B active parameters, released under Apache-2.0 with weights on Hugging Face and also available as a free API endpoint (`leanstral-1-5`)
- **Benchmarks**: Achieves 100% on both the validation and test splits of miniF2F, solves 587 of 672 problems on PutnamBench, and posts state-of-the-art results on FATE-H (87%) and FATE-X (34%); FLTEval scores improved to Pass@1 28.9 and Pass@8 43.2
- **Cost efficiency**: Solves PutnamBench problems for roughly $4 each, versus an estimated $300+ per problem for competitor Seed-Prover 1.5 at its high-compute setting (around 10 H20-GPU-days per problem)
- **Finding real bugs**: Using an Aeneas-based pipeline that translates Rust code into Lean, Mistral scanned 57 open-source repositories and found 47 violated properties, 11 of which were genuine bugs — 5 previously unreported on GitHub, including an integer-overflow bug in zigzag decoding at MAX values in datrs/varinteger

## How to try it

- Install Mistral Vibe with `uv tool install mistral-vibe`, run the `/leanstral` setup command, then launch with `vibe --agent lean`
- Optionally install the Lean LSP MCP for enhanced functionality
- Model weights are available on Hugging Face at `mistralai/Leanstral-1.5-119B-A6B`
