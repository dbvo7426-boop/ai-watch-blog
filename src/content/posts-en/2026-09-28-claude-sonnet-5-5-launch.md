---
title: "Anthropic Launches Claude Sonnet 5.5, 30% Faster and Up to 30% Cheaper Than Sonnet 5"
description: "Anthropic introduced Claude Sonnet 5.5, jumping from 10.3% to 70.6% on Terminal-Bench 4.0 and scoring just two points below Opus 5.5 on the GDPval-AA real-world occupational benchmark, while running over 30% faster and up to 30% cheaper per task at identical per-token pricing."
pubDate: 2026-09-28
category: claude
type: news
tags: [Claude, Anthropic, ClaudeSonnet, Sonnet5.5, AIModels]
source: https://www.anthropic.com/claude-sonnet-5-5
draft: false
importance: high
---

Anthropic launched Claude Sonnet 5.5, the second model in its 5.5 family, positioned as a faster and cheaper alternative to Opus 5.5 for everyday work, bug fixing, and document creation.

## Details

- **Major benchmark jump**: Terminal-Bench 4.0 score rose from 10.3% (Sonnet 5) to 70.6% — Sonnet 5.5 also became the first Sonnet model to beat Pokémon Red using only screenshots, and scores just two points below Opus 5.5 on GDPval-AA, a real-world occupational assessment spanning 44 occupations and nine industries
- **Other benchmarks**: 46.2% on FrontierCode 1.1 (vs. 42.4% for Sonnet 5, 54.4% for Opus 5.5), 55.5% on CursorBench 4.0, and 64.5% on Humanity's Last Exam (vs. 54.9% for Sonnet 5)
- **Speed and cost**: generates outputs over 30% faster than Sonnet 5, and despite identical per-token pricing ($2/million input, $10/million output), typically costs up to 30% less per task due to improved token efficiency — on FrontierCode at High effort, it scores 10 points above Sonnet 5 at roughly one-fifteenth the cost per task
- **Early tester feedback**: Epic Games said it "cleared the same quality bar you'd expect from a higher-tier model" on a system design audit; Slack reported better outcomes without prompt adjustments and 14% fewer output tokens
- **Safety measures**: matches or exceeds Sonnet 5 on automated behavioral audits across roughly 1,850 scenarios and shows the lowest inclination among Claude models to probe container limits; given improved cyber capabilities, it uses Opus 5.5-level cybersecurity safeguards with fallback to Sonnet 5 for high-risk tasks, and is the first Sonnet model with safety classifiers preventing reasoning extraction and expanded protection against capability theft via multi-account attacks
- **Availability**: live now on the Claude Platform, AWS, Google Cloud, and Microsoft Azure with zero data retention support; Claude Haiku 5.5 is coming soon for high-volume, cost-sensitive use cases

## What happened next

Anthropic frames the 5.5 family around a clear division of labor — Opus 5.5 for complex, open-ended work requiring sustained judgment, Sonnet 5.5 for well-defined routine tasks, and Haiku 5.5 still to come for high-volume workloads — continuing the industry-wide September pattern of shipping mid-cycle "efficiency" upgrades (alongside GPT-6 Sol/Luna and Grok 4.7) that hold or improve quality while cutting cost per task.
