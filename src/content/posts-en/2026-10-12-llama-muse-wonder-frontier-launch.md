---
title: "Meta Launches Muse Wonder and Muse Wonder Full, Its First True Frontier Models"
description: "Meta's Superintelligence Lab shipped Muse Wonder and Muse Wonder Full, its most capable models yet, with new Active Memory and Active Focus features aimed at long-running agentic work in law, finance, health, and coding."
pubDate: 2026-10-12
category: llama
type: news
tags: [Meta, Muse, Muse Wonder, Superintelligence Lab, AI agent, frontier model]
source: https://research.meta.ai/blog/muse-wonder
draft: false
importance: high
---

Meta's Superintelligence Lab launched Muse Wonder and Muse Wonder Full on October 12, 2026, calling them the company's "most capable models" to date and its first genuine entry into the frontier-model race alongside Anthropic, OpenAI, and Google DeepMind.

## Details

- **Two models**: Muse Wonder is available through the Meta Model API and Muse Code; Muse Wonder Full is reserved for Muse Code subscribers
- **New capabilities**: Meta highlights two features — Active Memory, which carries important context about a user across conversations and retrieves relevant details for the current task, and Active Focus, which keeps a model working toward difficult goals by trying alternative approaches, working through blockers, adapting to new information, and checking in with the user before consequential actions
- **Target domains**: Meta emphasizes domain expertise in law, finance, and health (e.g., understanding a lease or financial/health documents) plus frontier coding ability, from small apps to complex software projects
- **Named benchmarks**: Meta points to results on FocusBench (sustained focus), SWE-Marathon (long-running software projects), and Harvey's Legal Agent Benchmark (LAB), with full scores published in a separate model card rather than the blog post itself
- **Independent scoring**: Third-party tracker Artificial Analysis put Muse Wonder Full's Intelligence Index at 56 (ahead of GPT-6 Astra, behind Claude Opus 5.5's 58) and Muse Wonder at 52, with Muse Wonder Full gaining roughly 8 points over Muse Spark 1.3 across ten evaluations
- **Safety claims**: Meta describes Muse Wonder Full as its "most aligned model to date," claiming stronger safeguards against CBRN and cyber misuse while preserving defensive cyber capability; a fuller safety report is promised "soon"
- **Training infrastructure**: both models were trained at Meta's gigawatt-scale Prometheus data center
- **Rollout to consumers**: the consumer Muse app still runs on the older Muse Spark 1.3 model; Meta says Wonder will "soon" power parts of Muse, starting with paying subscribers before any broader rollout
- **Undisclosed**: Meta's blog post does not state pricing or context-window size; third-party reporting has cited an API price around $4 per million input tokens and $20 per million output tokens, and a maximum context window of about one million tokens, though neither figure appears in Meta's own materials

## What happened next

The launch marks a sharp pivot for Meta's AI effort, which had spent most of 2026 shipping consumer-facing Muse Spark updates, hardware SDKs, and retail integrations rather than contesting the frontier-model leaderboard directly. Independent benchmarks suggest Muse Wonder Full now sits close to, but still behind, Anthropic's top model, putting real pressure on OpenAI and Google DeepMind rather than redefining the top of the field. The gap between the confident framing in Meta's announcement and the absence of hard numbers for context window and price in its own post — numbers only available via secondary reporting — mirrors the scrutiny Meta's consumer Muse product has faced in recent weeks over data retention, giving outside observers reason to wait for Meta's promised full safety report before taking the "most aligned model to date" claim at face value.
