---
title: "OpenAI Improves GPT-6 Prompt Caching With Up to 90% Savings and New Diagnostics"
description: "OpenAI upgraded prompt caching for GPT-6 models with cache discounts for shared prefixes reused within a 30-minute window, up to 90% savings on cached input tokens, a new caching dashboard, explicit cache breakpoints, and mid-conversation reasoning-effort changes that preserve the cache."
pubDate: 2026-09-22
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, GPT6, PromptCaching, API]
source: https://openai.com/index/better-prompt-caching-for-gpt-6
draft: false
importance: medium
---

OpenAI improved prompt caching for GPT-6 models, adding higher default hit rates, new diagnostic tools, and finer developer controls aimed at long-running, persistent agents.

## Details

- **Higher hit rates**: cache discounts now apply to eligible shared prefixes reused within a 30-minute window, delivering up to 90% savings on cached input tokens by default
- **New diagnostics**: a Prompt Caching Dashboard shows hit rates and token composition, alongside a diagnostics tool that compares requests against recent responses to explain why cache misses occur
- **Explicit cache breakpoints**: developers can specify exactly which parts of a prompt should be reused across requests
- **Mid-conversation flexibility**: reasoning effort can now be adjusted mid-conversation via `configuration_update` without invalidating the cache
- **Tool management**: keeping tool definitions stable while using `allowed_tools` to control availability preserves the cache rather than forcing a rebuild
- **Cache prewarming**: applications can prepare context during startup to cut user-facing latency

## What happened next

The improvements target the same workloads GPT-6 Sol and Luna are built for — high-volume, cost-sensitive, and long-running agentic tasks — giving developers more precise control over caching behavior rather than relying solely on default heuristics.
