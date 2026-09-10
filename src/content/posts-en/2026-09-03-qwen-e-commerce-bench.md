---
title: "Qwen Releases E-Commerce Bench, a Year-Long Simulation for Testing Agent Endurance"
description: "Alibaba's Qwen team, working with Taobao and Tmall, open-sourced E-Commerce Bench, a benchmark that has 18 frontier models run online stores for a simulated 365 days, scoring them on profit, negotiation, fraud avoidance, and long-term learning rather than single-task completion."
pubDate: 2026-09-03
category: qwen
type: news
tags: [Qwen, Benchmark, AIAgents, OpenSource, Alibaba]
source: https://qwen.ai/blog?id=e-commerce-bench
draft: false
importance: medium
---

The Qwen team released E-Commerce Bench on September 3, 2026, a new open-source benchmark built with Alibaba's Taobao and Tmall Group that measures how well AI agents can run an online business over a simulated full year, rather than just complete a single bounded task.

## Details

- **Setup**: agents start with ¥100,000 in capital and run one or more online stores over a simulated 365-day year with a 600-minute daily time budget, using real market data covering 6,886 products across 60 categories, 576 suppliers, and 12 store types
- **Realistic mechanics**: the simulation includes a three-account settlement system mirroring real payment delays, storage fees, shipping options, a returns process, and a reputation system
- **Seven scoring dimensions**: total year-end assets, negotiation quality, fraud avoidance, cash-flow management, operational efficiency, execution quality, and long-horizon learning — not just final profit
- **18 models tested**: including GPT-5.6 Sol, Claude Opus 4.7, several Qwen models (including Qwen3.8-Max-Preview), and Kimi K2.6, each run across five full episodes
- **Wide performance spread**: top performers achieved 14-16x returns on starting capital while ten of the episodes across all models ended in bankruptcy, often from early overstocking that couldn't be liquidated
- **Fraud-avoidance gap**: the share of procurement spend going to fraudulent suppliers varied more than 160-fold between models, from 0.12% for Claude Opus 4.7 to 20.11% for Qwen3.5-Plus — and the top earner, GPT-5.6 Sol, ranked only 16th of 18 on this metric
- **Little genuine learning**: only Qwen3.8-Max-Preview showed real improvement in negotiation outcomes over the simulated year; 15 of the 18 models actually got statistically worse at repeat-purchase pricing than random ordering

## What happened next

Qwen has open-sourced the benchmark's code, and the team frames its deterministic negotiation kernel — which separates the underlying economic logic from the dialogue layer — as a reusable method for building agent benchmarks that are hard to game while still reproducible. The results themselves are also a pointed finding: no model excelled across all seven dimensions, and the model that made the most money was far from the safest or most efficient operator, underscoring how differently "success" can look depending on which axis of a long-running agentic task is measured.
