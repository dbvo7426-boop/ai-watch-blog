---
title: "Anthropic Launches Claude Haiku 5.5, Its Fastest and Cheapest Model Yet"
description: "Anthropic released Claude Haiku 5.5, a small model with up to 90% lower cost than Haiku 4.5 for sub-100k-token requests, major benchmark gains, and adjustable effort settings, available immediately across all major cloud platforms."
pubDate: 2026-10-07
category: claude
type: news
tags: [Anthropic, Claude, Haiku, ModelLaunch, Pricing]
source: https://www.anthropic.com/claude-haiku-5-5
draft: false
importance: high
---

Anthropic launched Claude Haiku 5.5, positioning it as its fastest, cheapest, and most capable small model to date, built for high-volume, cost-sensitive work such as summarization, data compaction, classification, and acting as a subagent alongside larger Claude models.

## Details

- **Pricing**: for requests up to 100k tokens, input is $0.10/million tokens and output $0.50/million — about 90% cheaper than Haiku 4.5 for the roughly 90% of typical usage that falls under 100k tokens; above 100k tokens, pricing is $0.50/$2.50 per million (input/output), roughly 50% cheaper than before. Cache reads cost $0.01–0.05/million and cache writes $0.125–0.625/million
- **Benchmarks**: scored 1,620 Elo on GDPval-AA v2.1 knowledge-work evaluation (vs. 735 for Haiku 4.5), 72.4% on OSWorld 2.1 computer-use tasks, 57.4% on Humanity's Last Exam with tools, 39.2% on Terminal-Bench 4.0 agentic coding, and 46.4% on the Chartography visual-reasoning benchmark without tools
- **Adjustable effort settings**: Low, Medium, High, Xhigh, and Max modes let developers trade off cost against intelligence per request
- **Customer results**: Asana reported over 30% lower latency and up to 2.5x faster inference; HubSpot hit 92.8% on its CRM evaluation suite, beating all competitors tested; AlphaSense saw a statistically significant accuracy jump (0.84 vs. 0.76) across 8 million weekly production queries; Box scored 11 points higher than Haiku 4.5 at roughly half the latency; Cognition's Devin/Fusion reached a 66.2 FrontierCode score using Haiku 5.5 as a coding sidekick
- **Safety**: alignment evaluations show fewer misaligned behaviors and reduced willingness to assist with misuse versus Haiku 4.5; cybersecurity safeguards are tighter than Haiku 4.5 but allow more defensive use than Sonnet 5.5; biology safeguards match the Sonnet and Opus lines
- **Availability**: live immediately on the Claude Platform (model ID `claude-haiku-5-5`), AWS, Google Cloud, and Microsoft Azure
- **Related updates**: Sonnet 5.5 cache-read pricing cut 50% to $0.10/million tokens (roughly 20% lower typical agentic workload cost); Max and Team subscribers now get $100–500 in monthly API credits; Python and TypeScript SDKs gained computer-use and browser-use (beta) support

## What happened next

Haiku 5.5 extends Anthropic's small-model line past the point where "cheap" and "capable" trade off against each other, with early enterprise adopters reporting both lower latency and higher accuracy than the previous generation — a combination that, paired with the Sonnet 5.5 cache-price cut and new API credits, signals Anthropic is pushing hard to make its stack the economical default for high-volume agentic and subagent workloads.
