---
title: "Anthropic details new defenses that cut distillation data harvesting by 90-99%"
description: "Anthropic reports preserved-thinking limits, a two-stage classifier and stricter account enforcement that sharply reduced reasoning extraction by distillers."
pubDate: 2026-10-12
category: claude
type: news
tags: [Anthropic, Security, Distillation, Safeguards]
source: https://www.anthropic.com/news/distillation-defenses
draft: false
importance: high
---

Anthropic published methods it says reduced the data distillers harvest from Claude by about 90-99% on early evidence, and called on other frontier developers to do the same. The page's stated date is October 12, 2026.

## Details

- **Threat:** proxy networks with hundreds of thousands of fraudulent accounts (over 20,000 at once in one February network). Anthropic alleges Zhipu distilled cyber capabilities for GLM-5.3, and that Kimi requests were secretly forwarded to Claude, including one by a suspected PLA-affiliated user.
- **Controlling reasoning:** for new API accounts created on or after August 31, 2026, prior context cannot be edited (Claude Fable 5.1 and Opus 5.5); on Claude Sonnet 5.5, reasoning transcripts are visible only to the originating organization.
- **Classifier:** a two-stage classifier with under 0.1% false positives runs on Sonnet 5.5, Opus 5 and 5.5, and Fable 5 and 5.1.
- **Enforcement:** stricter limits and bans for repeat extractors; since September 24, requests blocked by safeguards before Claude responds are charged.
- **Results:** extracted reasoning tokens fell 10-100x or more; tens of thousands of accounts banned, often within two hours.
- **Evidence for risk:** a model trained on full Opus 4.8 transcripts scored 80.4% on SWE-bench Verified versus 71.8% with summarized ones.
- **Caveats:** durability unknown, no highly sophisticated persistent attack seen yet, and some integrations needed updates.

## What happened next

Anthropic acknowledges a continuing cat-and-mouse dynamic. It argues API, cloud and inference providers should detect and remove fraudulent accounts, noting that incentives discourage this because distillers are paying customers.
