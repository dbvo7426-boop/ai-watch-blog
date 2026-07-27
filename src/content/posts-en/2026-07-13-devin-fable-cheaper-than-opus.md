---
title: Cognition Says Pairing Fable with Its "Fusion" Sidekick Setup Beats Opus on Cost and Score
description: Devin maker Cognition has published results showing that combining its multi-agent "Fusion" setup with Anthropic's Fable 5 costs less and scores higher than running Opus 4.8, based on 3,000 evaluation sessions.
pubDate: 2026-07-13
category: devin
type: news
tags: [Devin, Cognition, Fable, Opus, FrontierCode]
source: https://cognition.com/blog/making-fable-cheaper-than-opus
draft: false
importance: low
---

Cognition, maker of the autonomous AI software engineer Devin, has published results showing that pairing its multi-agent "Fusion" configuration with Anthropic's Fable 5 costs less and scores higher than running Opus 4.8 alone. The analysis is based on 3,000 evaluation sessions run on FrontierCode 1.1.

## Details

- **Score and cost comparison**: "Fable + Fusion" (a sidekick setup) costs $1.86 per run with a score of 60.7, versus "Opus + Fusion" at $2.04 per run with a score of 54.6 — Fable comes out both cheaper and higher-scoring
- **Versus plain Fable**: Using Fable in the sidekick configuration cuts cost by 54% versus running Fable alone, while maintaining performance
- **Behavioral difference**: Cognition describes it as "Opus behaves like a micromanager with an intern; Fable is a manager with a capable engineer" — Fable delegates early with clear constraints, while Opus tends to delegate only after expensive exploratory work
- **Scale of testing**: The analysis draws on 3,000 evaluation sessions run on the FrontierCode 1.1 benchmark

## How to try it

- This post is a technical analysis of model-routing strategy inside Devin, not a standalone new feature or product
- Full methodology and data are published on Cognition's official blog
