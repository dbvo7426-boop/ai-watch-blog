---
title: "OpenAI: Two Settings Tripled GPT-5.6's ARC-AGI-3 Scores — Retained Reasoning and Context Compaction Explained"
description: "OpenAI published a technical breakdown showing that changing just two API settings raised GPT-5.6's ARC-AGI-3 score from 13.3% to 38.3% on the public task set, while cutting output tokens by a factor of six."
pubDate: 2026-07-29
category: chatgpt
type: news
tags: [ChatGPT, GPT-5.6, ARC-AGI, Benchmarks, API]
source: https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores
draft: false
importance: medium
---

OpenAI has published a technical follow-up to its GPT-5.6 launch, showing that changing just two API settings raised the model's ARC-AGI-3 score on the public task set from 13.3% to 38.3% — while also cutting output token usage by a factor of six.

## Details

- **Background**: The original test harness had two weaknesses. First, the model's private reasoning was discarded after every turn, forcing it to "figure out the game anew" each time. Second, once conversation history hit a 175,000-character limit, the harness used "rolling truncation," simply dropping older messages
- **The two settings changed**: (1) Retained reasoning — preserving the model's internal reasoning across turns instead of discarding it, and (2) compaction — replacing rolling truncation with a context-summarization approach that condenses older context instead of dropping it. Both are enabled automatically when using OpenAI's Responses API
- **Score change**: GPT-5.6 Sol's score on the public task set rose from 13.3% to 38.3%, roughly tripling
- **Efficiency change**: Output tokens dropped six-fold. Retaining reasoning reduced the amount of "re-thinking" needed per action, letting the model build more coherent strategies over time
- **Reference point**: Human performance on the official harness is roughly 48%, meaning this improvement brings the model noticeably closer to human-level results
- **Takeaway**: Harness design choices — how reasoning is retained and how context is managed — can have as much impact on benchmark scores as the underlying model itself

## How to try it

- Retained reasoning and compaction are enabled by default when using OpenAI's Responses API, so developers running custom harnesses should check whether their setup behaves the same way
- Developers building their own agent harnesses may see similar gains by checking whether they discard reasoning across turns or compact context via simple truncation
- Full implementation details and configuration examples are available in OpenAI's original post
