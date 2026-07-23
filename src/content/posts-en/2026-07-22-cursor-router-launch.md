---
title: Cursor Introduces "Cursor Router" — Intelligent Model Routing That Auto-Assigns the Best Model to Every Task
description: Cursor has unveiled Cursor Router, a new engine behind Auto mode that uses a classifier trained on over 600,000 live requests to automatically route each request to the optimal model, cutting costs while preserving quality.
pubDate: 2026-07-22
category: cursor
type: news
tags: [Cursor, Anysphere, Router, Auto mode, LLM routing]
source: https://cursor.com/blog/router
draft: false
importance: medium
---

Cursor has announced Cursor Router, a new core engine powering Auto mode. A classifier trained on more than 600,000 live requests analyzes each request's task type, complexity, and domain characteristics, then automatically routes it to the most suitable model — from frontier models to cost-efficient alternatives.

## Details

- **How it works**: A per-request classifier analyzes task type, complexity, and context, routing demanding work to frontier models, UI-heavy tasks to models with strong design sensibility, and complex reasoning problems to advanced models. The system was evaluated across millions of live A/B-tested requests and factors in cache-miss costs when making routing decisions
- **Three optimization modes**: "Intelligence" (frontier-model-level quality at roughly 60% lower cost), "Balance" (quality comparable to the models developers typically use daily at roughly 36% savings), and "Cost" (prioritizes token efficiency while maintaining good quality)
- **Demonstrated cost savings**: Early-access customers with thousands of users achieved 30-50% cost reductions compared to using Opus 4.8 exclusively. Cost per commit came to $6.76 for Intelligence mode and $4.63 for Balance mode, versus $12.69 for Fable and $7.34 for Opus 4.8 alone
- **Availability**: Live immediately across desktop, web, iOS, CLI, and SDKs. Offered on Teams and Enterprise plans, with Enterprise admins enabling it through the admin dashboard
- **Admin controls**: Admins can enable/disable the router per team or group, restrict which optimization modes are available, set defaults, and maintain model allow/block lists

## How to try it

Cursor Router powers Auto mode and is off by default on Teams plans, while Enterprise admins can turn it on from the admin dashboard. Full details are available on Cursor's official blog (cursor.com/blog/router).
