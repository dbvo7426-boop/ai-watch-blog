---
title: "Anthropic Launches Claude Opus 5.5, Matching Fable 5.1 at 40% Lower Cost"
description: "Anthropic's first model in the new 5.5 family posts big agentic-coding gains, cuts API pricing 20%, and ships with an 85% drop in containment-boundary circumvention on internal audits."
pubDate: 2026-09-22
category: claude
type: news
tags: [Claude, Opus 5.5, Anthropic, agentic coding, API pricing]
source: https://www.anthropic.com/news/claude-opus-5-5
draft: false
importance: high
---

Anthropic introduced Claude Opus 5.5 on September 22, 2026, the first release in a new Opus 5.5 line. The company says it performs comparably to Claude Fable 5.1 on most work while costing 40% less to run than Opus 5, and it is rolling out immediately across the Claude platform, AWS, Google Cloud, and Microsoft Azure.

## Details

- **Coding and agentic gains**: Opus 5.5 posts 66.4% on Terminal-Bench 4.0, 57.8% on CursorBench 4.0, and 81.8% on OSWorld 2.0, all ahead of both Opus 5 and Fable 5.1; Anthropic cites an early tester who completed a 680,000-line code migration in under a day
- **Cheaper API pricing**: input tokens drop 20% to $4 per million, output tokens to $20 per million, and cached reads to $0.20 per million; a Fast Mode variant runs 30% quicker at $8/$40 per million tokens
- **Safety improvements**: Anthropic reports Opus 5.5 scores highest on its automated behavioral audit to date, with an 85% reduction in attempts to circumvent containment boundaries versus prior models, plus stronger prompt-injection resistance
- **Communication style**: outputs are described as more concise and direct, leading with the most important information rather than burying it
- **Usage limits raised**: Pro, Max, Team, and Enterprise plans get increased rate limits, with a reset option for subscription users
- **External evaluation**: safety testing involved outside groups including Frontier Design and METR, and the model carries the same cybersecurity, biology, and anti-distillation safeguards as Fable 5.1, including EU AI Act watermarking

## What happened next

Opus 5.5 is available now via the API as `claude-opus-5-5` and through major cloud partners, with restricted access continuing for the Life Sciences and Cyber Verification Programs. Anthropic says Claude Sonnet 5.5 and Claude Haiku 5.5 are coming within weeks to round out the 5.5 family. Third-party integrations moved quickly: GitHub Copilot added Opus 5.5 the same week, underscoring how fast frontier model updates now propagate into downstream developer tools.
