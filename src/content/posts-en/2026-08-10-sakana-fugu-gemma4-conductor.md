---
title: "Sakana AI Verifies Fugu's Conductor Model Runs on Gemma 4"
description: "Sakana AI showed that swapping the base model behind Fugu's orchestration 'conductor' from Qwen to Google's Gemma 4 preserves accuracy and cost efficiency, validating a base-model-agnostic approach to its multi-agent system."
pubDate: 2026-08-10
category: sakana
type: news
tags: [Sakana AI, Fugu, Gemma 4, Multi-Agent, Orchestration]
source: https://sakana.ai/fugu-gemma4/
draft: false
importance: medium
---

Sakana AI published results showing that the "conductor" model at the core of its Fugu multi-agent orchestration system can be trained on Google's Gemma 4 instead of its original Qwen base, while keeping accuracy and cost efficiency comparable — validating that Fugu's architecture is not tied to a single base model.

## Details

- **What Fugu's conductor does**: Fugu operates as a two-layer multi-agent system where a small "conductor" model doesn't try to hold all knowledge itself, but instead decides how to route each request among a pool of larger, specialized models
- **What changed**: Sakana AI retrained the conductor using Gemma 4 E2B, Google's Apache 2.0-licensed small model, in place of the Qwen-based conductor used in earlier Fugu releases
- **How it was tested**: The company evaluated the new Gemma 4-based conductor against a proprietary test set covering knowledge questions, code correction, code generation, and graduate-level science questions
- **Results**: The Gemma 4-based conductor achieved accuracy roughly on par with the existing Qwen-based conductor, at comparable cost, while the pool of larger models it routes to remains independently configurable regardless of provider
- **Why a small conductor helps**: Because the conductor itself can stay small, Sakana AI says it can be retrained and re-validated repeatedly at realistic cost when swapping in a different base model — something that would be far more expensive with a large monolithic model

## What happened next

Sakana AI frames the result as evidence that Fugu's orchestration layer can support "sovereignty" requirements in different markets by swapping in locally trained or open-weight base models — including, potentially, Japanese-developed models — without rebuilding the whole system. The announcement follows Sakana AI's launch of the Namazu Japanese-language LLM API on August 3 and its Daiwa Securities wealth-management partnership on August 5, continuing a run of releases aimed at demonstrating flexible, provider-agnostic infrastructure for enterprise and sovereign AI customers.
