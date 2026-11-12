---
title: "Google launches Gemini 4 Hydrogen, a fast model for everyday coding and agentic work"
description: "Gemini 4 Hydrogen is priced at $1.50 input and $7.50 output per million tokens with a 1M-token context, and is rolling out in the Gemini API, the Gemini app, Search and Antigravity from November 12, 2026."
pubDate: 2026-11-12
category: gemini
type: news
tags: [Gemini, Gemini 4 Hydrogen, Google Search, Antigravity, Gemini API]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/
draft: false
importance: high
---

Google announced Gemini 4 Hydrogen on November 12, 2026. It is built for fast execution in everyday coding and agentic workflows, while Gemini 4 Carbon and Gemini 4 Argon remain the frontier models for deep, long-horizon reasoning.

## Features

- **Four thinking levels:** low, medium, high (default) and a new xhigh tier.
- **Multi-model use in Antigravity:** the Orchestrator can switch between Carbon and Hydrogen within a session, for example Carbon coordinating while Hydrogen runs worker and verifier agents.
- **Coding:** focused edits, batched parallel file reads and searches, and debugging.
- **Multimodal work:** combines PDFs, spreadsheets, charts, audio and video into cited reports.
- **Apps:** better instruction following and tool calling in the Gemini app. Search gets improved intent understanding, more visual responses and a wider range of links through upgraded query fan-out. Google says Sheets outputs are generated over 30% faster than with previous models.

## Google-reported results

- Artificial Analysis Intelligence Index: 51 at high thinking (Argon: 50) and 54 at xhigh.
- Versus Gemini 3.8 Flash: 2.5x faster at the default setting, fabricated claims reduced by more than 5x, and Terminal-Bench 4.1 at 57% versus 18.2%.
- Partner tests on complex graph, SQL and data-heavy enterprise workflows: 2x to 2.8x faster with 12% to 23% lower token usage.
- Terminal-Bench 4.0 with the Orchestrator: near-Carbon task success, with 24% less quota consumed and 19% faster completion on average.
- HLE-Diamond 58.8%, Vals Tax Agent Bench 52.3% (ranked first), Vals Legal Research Bench 55.8% (tied first), Multimodal Knowledge Agent benchmark 53.4%, Agents' Last Exam v1.1 71.6%, and fifth on Agent Arena.

## Safety and reliability (Google-reported)

- Overreach in agentic tasks reduced by up to 81% and under-service by up to 79%; misaligned actions cut 12x across tool-use and coding evaluations.
- Up to 2x less likely to bypass permission boundaries; 96.7% on an internal agent honesty evaluation.
- More than 2.3x more resilient on the Gray Swan IPI prompt-injection benchmark; false refusals on HealthBench Pro under 0.4%.
- A model card is linked from the announcement.

## Pricing and availability

- **Pricing:** $1.50 per million input tokens and $7.50 per million output tokens, flat across the full 1M-token context window, with up to 1M output tokens.
- **Developers:** Gemini API and Google AI Studio, Android Studio, and Google Antigravity for paid Google AI Pro and Ultra subscribers.
- **Business:** Gemini for business, Antigravity, and Gemini in Google Sheets for eligible subscriptions.
- **Consumers:** the Gemini app model dropdown, with free users reaching it through automatic model selection when it fits the prompt; Google Search for all users; Gemini in Google Sheets starting with AI Pro and Ultra.
- Rolling out globally from November 12, 2026. API model IDs are not given in the announcement.
