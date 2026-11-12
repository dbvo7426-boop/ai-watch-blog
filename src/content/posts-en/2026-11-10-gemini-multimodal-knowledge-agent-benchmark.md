---
title: "Google and Artificial Analysis introduce the Multimodal Knowledge Agent benchmark"
description: "A 200-task benchmark of multi-step, visually complex professional work across 10 verticals. Gemini 4 Carbon ranks second in quality at about 6x lower average cost per task than the top model."
pubDate: 2026-11-10
category: gemini
type: news
tags: [Google, Benchmark, Artificial Analysis, Multimodal, Agents]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/multimodal-knowledge-agent-benchmark/
draft: false
importance: medium
---

Google introduced the Multimodal Knowledge Agent (MKA) benchmark on November 10, 2026, developed with Artificial Analysis. It tests how AI agents handle visually complex files in real-world knowledge work.

## Design

- **Experts:** domain experts from 10 verticals and 83 occupations helped build it. The verticals are Business, Construction, Education, Engineering, Finance, Healthcare, Law and government, Logistics and mapping, Science, and Software and data.
- **Tasks:** 200 tasks, each a multi-step project a skilled professional would take three to eight hours to complete. Each has a realistic prompt, a set of multimodal input files and an expert-written rubric of about 70 yes/no checks, weighted 75% on factual accuracy and 25% on visual design.
- **Evaluation:** all models run in the same open-source harness, Stirrup, with the same tools, sandbox and turn budget. An agentic autorater built on a non-Google model grades each deliverable, and domain experts agreed with it 96% of the time.

## Access

Artificial Analysis runs the 200-task set privately to prevent leakage into training data or search. Ten public tasks are on Hugging Face, anyone can evaluate their own models on Artificial Analysis, and a technical report covers methodology and full results.

## Findings

- Models differ widely in efficiency, averaging between 30 and 130 turns per task.
- Strong perception is necessary: when vision is removed, models try to compensate but often fail.
- Gemini 4 Carbon ranks #2 in quality and costs about 6x less per task on average than the top-scoring model, placing it on the quality-price Pareto frontier. It is available through the Gemini API in Google AI Studio.
