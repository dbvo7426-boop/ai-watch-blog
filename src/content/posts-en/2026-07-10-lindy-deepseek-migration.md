---
title: Lindy Fully Migrates from Claude to DeepSeek v4 — Cuts Inference Costs by About 90%
description: Lindy officially announced it has migrated nearly all of its managed agent traffic from Anthropic's Claude to DeepSeek v4, cutting inference costs by about 90% while maintaining or improving performance.
pubDate: 2026-07-10
category: lindy
type: news
tags: [Lindy, DeepSeek, Anthropic]
source: https://www.lindy.ai/blog/migrating-from-claude-to-deepseek
draft: false
importance: medium
---

Lindy announced on its official blog that it has migrated the bulk of its model traffic for managed agents away from Anthropic's Claude/Sonnet and Google's Gemini, over to "DeepSeek v4 Flash" hosted on Atlas Cloud. The company says inference costs on the migrated traffic have dropped by about 90%.

## Details

- **What changed**: The majority of managed agent traffic was switched to DeepSeek v4 Flash. Sonnet remains available for cases requiring higher performance or when explicitly selected by the user
- **Cost savings**: Inference costs on the migrated traffic dropped by about 90%. Founder Flo Crivello said on X (formerly Twitter) that it amounts to "millions of dollars in savings, and performance actually improved on many key use cases"
- **How the migration was carried out**: The team compared several candidate models — including GLM 5.1, Kimi K2.6, and DeepSeek v4 Flash — through offline evaluation, testing across multiple inference providers. After optimizing prompts, rolling out gradually to internal users, and confirming results through online evaluation and retention metrics, the team moved to a full rollout
- **Background**: Lindy's business model depends on inference costs falling faster than product capability improves, and for the 25-person company, AI-related costs had grown to exceed payroll — becoming, in the company's words, "an existential issue for the business"
- **A memorable line**: "You don't need a god [top-tier model] to write an email." "Users shouldn't need to care which model wrote it — all that matters is that Lindy still feels like Lindy"

## How to try it

This change has been applied automatically on the backend of Lindy's existing plans, with no extra configuration needed on the user's part. For tasks that need higher performance, users can still choose to use Sonnet or other top-tier models.
