---
title: "Perplexity Announces PII-TRACE Benchmark and PII-Tracer Model for On-Device Privacy Detection"
description: "Perplexity unveiled PII-TRACE, a 13-language benchmark for detecting personal data across multi-turn conversations, along with PII-Tracer, a compact 0.6B model designed to catch sensitive information before it leaves a device."
pubDate: 2026-09-01
category: perplexity
type: news
tags: [Perplexity, PII-TRACE, PII-Tracer, Privacy, Benchmark, On-device AI]
source: https://www.perplexity.ai/hub/blog/pii-trace-detecting-personal-data-before-it-leaves-the-device
draft: false
importance: medium
---

Perplexity announced PII-TRACE and PII-Tracer on September 1, 2026 — a new benchmark and a compact model, respectively, aimed at catching personally identifiable information in conversations before it ever leaves a user's device. The release underpins the privacy-gate technology behind Perplexity's newly launched Hybrid Compute on Mac feature.

## Details

- **PII-TRACE benchmark**: A synthetic dataset of 13,148 multilingual user-assistant conversations spanning 13 languages and 10 writing systems, with 37,431 labeled identifier mentions across nine PII types
- **Why multi-turn matters**: Perplexity says consistent detection of recurring identifiers across a conversation is the hard part — "one missed mention is enough for personal information to pass through" — and 28.7% of conversations with PII contain identifiers that recur across turns
- **PII-Tracer model**: A compact 0.6B-parameter bidirectional encoder built on a Qwen3 backbone, using a 4,096-token context window and token-level classification with a BIOES labeling scheme across 37 labels
- **Reported results**: PII-Tracer posted the highest character-level F1 score (0.629) among 12 systems evaluated on PII-TRACE, and found 79.4% of recurring identifiers overall; on external benchmarks it outperformed OpenAI's privacy filter, for example scoring 0.594 vs. 0.350 on the human-labeled TAB ECHR set
- **Multilingual coverage**: Leading character-F1 scores among tested systems in German (0.735), French (0.633), Italian (0.676), and Russian (0.651), with English and Korean close behind the best results
- **Release status**: Perplexity says it plans to release both PII-TRACE and PII-Tracer "soon," alongside a research paper

## What happened next

PII-TRACE and PII-Tracer give a technical basis for the privacy-gate classifier Perplexity built into Hybrid Compute on Mac, also announced September 1. By publishing the benchmark and comparing against outside systems like OpenAI's privacy filter, Perplexity is positioning on-device PII detection as a measurable capability rather than a black-box privacy claim, and inviting outside model builders to benchmark against it once the dataset and model ship.
