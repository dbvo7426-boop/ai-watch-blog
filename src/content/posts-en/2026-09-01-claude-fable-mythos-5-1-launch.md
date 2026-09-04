---
title: "Anthropic Launches Claude Fable 5.1 and Mythos 5.1, Cutting Cache Read Costs 75%"
description: "Anthropic released Claude Fable 5.1, generally available with major gains in agentic coding and scientific research, alongside Mythos 5.1 — a technically identical model with more permissive safeguards restricted to verified cybersecurity and life-sciences researchers."
pubDate: 2026-09-01
category: claude
type: news
tags: [Claude, Anthropic, ClaudeFable, ClaudeMythos, AIforScience]
source: https://www.anthropic.com/claude-fable-and-mythos-5-1
draft: false
importance: high
---

Anthropic launched Claude Fable 5.1 and Claude Mythos 5.1, describing them as its most advanced models yet for coding and knowledge work. The two are technically identical, differing only in safety configuration and who can access them.

## Details

- **Two access tiers, one model**: Fable 5.1 is generally available to everyone through the Claude API, AWS, Google Cloud, Microsoft Azure, Claude Code, and Claude Enterprise; Mythos 5.1 runs with more permissive safeguards for cybersecurity and life-sciences work, restricted to the Cyber Verification Program and Life Sciences Verification Program, initially limited to U.S. organizations with international expansion planned through government coordination
- **Pricing drops sharply**: $10 per million input tokens and $50 per million output tokens, with cache reads cut 75% to $0.25 per million tokens — Anthropic says this brings roughly 25% overall cost savings for typical workloads and up to 45% for complex coding tasks
- **Benchmark gains over Fable 5**: agentic scientific research jumped from 24.7% to 52.6%; agentic coding rose from 42.0% to 55.8% (60.9% on Mythos); OSWorld 2.0 computer-use scores improved to 77.9%/41.7% (partial/strict) from 72.9%/36.1%; business workflow performance rose from 17.1% to 31.4%
- **Scientific research results**: molecular designs with 10x higher binding affinities than competition entries, a 50% hit rate on protein design targets versus a typical 10-15%, high-resolution Venus elevation mapping built from 30-year-old NASA data, and a 2.5x speedup on deep learning models through GPU kernel optimization
- **Customer feedback**: Jane Street Capital's Head of Quantitative Research said Fable 5.1 "solves more of our coding problems than Fable 5 or Opus 5" and "remains readable over long, multi-step tasks," while Millennium reported it identified previously unexplained system crashes
- **Safety improvements alongside the capability jump**: cybersecurity safeguards cut false-positive interventions by 60%, biology safeguards fire 85% less often on benign medical queries, and new API accounts can no longer manually edit prior context while preserving thinking transcripts — closing a documented model-extraction technique
- **Additional features**: invisible watermarking for EU AI Act compliance with a detection API for regulators, integration with the newly launched Enterprise Frontier Safeguards for zero-data-retention deployments, and support for the Model Hardware Standard letting Claude safely operate lab equipment

## What happened next

The launch pairs a substantial capability jump — particularly in scientific research and long-running coding tasks — with a parallel set of safety tightenings, continuing the pattern Anthropic set with its Hugging Face-incident response and Enterprise Frontier Safeguards: shipping more capable models only alongside proportionally stronger guardrails and narrower access for the most sensitive use cases.
