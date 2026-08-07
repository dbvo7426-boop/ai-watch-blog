---
title: "Sakana AI Launches Namazu, a Japanese-Specialized LLM API Built on Moonshot's Kimi K2.6"
description: "Sakana AI opened Sakana Namazu, an OpenAI-API-compatible LLM endpoint fine-tuned from Moonshot AI's open Kimi K2.6 on proprietary Japanese data, aimed at market research, customer support, and other Japanese-language business tasks."
pubDate: 2026-08-03
category: sakana
type: news
tags: [Sakana AI, Namazu, LLM API, Japanese language, Kimi K2.6]
source: https://sakana.ai/namazu-api/
draft: false
importance: medium
---

Sakana AI opened access to Sakana Namazu on August 3, 2026, a Japanese-language-specialized LLM API built by fine-tuning Moonshot AI's open-weight Kimi K2.6 on Sakana's own proprietary Japanese data. It's the company's first standalone commercial LLM API product, distinct from the Fugu orchestration line.

## Details

- **Base model and approach**: rather than training from scratch, Sakana took Moonshot AI's open Kimi K2.6 and continued training it on internal data to sharpen performance on Japanese-language tasks and Japanese business context, while keeping the base model's general reasoning ability
- **Drop-in compatibility**: the API is OpenAI-API-compatible, so existing integrations can switch over by changing only the `base_url` — no code rewrite required
- **Built-in tools**: web search and code execution are included out of the box
- **Behavior tuning**: Sakana says it tuned the model to reduce unnecessary refusals and output bias; it cites a jump on the FairPoliticsQA benchmark from 34.10% to 56.30% as evidence of improved handling of Japan-specific political/social nuance
- **Target use cases named by Sakana**: automated market-research report generation via autonomous web search and multi-step workflows; customer-support automation and order-data analysis to cut operating costs; and lighter creative demos, including an autonomous "fish light show" controlled via visual feedback
- **Quote**: "The choice of LLM APIs that can handle real work in Japanese is still limited" — the gap Sakana says Namazu is built to close
- **Availability**: live immediately via Sakana's API Console, with pricing published on a dedicated pricing page; enterprise deployment is available on request

## How to try it

- Sign up through Sakana's API Console at console.sakana.ai and swap in the Namazu `base_url`
- Namazu is Sakana's second commercial product this year, following the Marlin research-agent launch in June 2026, and its first pitched specifically at the Japanese-language business market
- Full announcement: sakana.ai/namazu-api
