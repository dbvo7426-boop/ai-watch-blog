---
title: "DeepSeek-V4-Pro Reaches General Availability, With Peak/Off-Peak Pricing to Follow"
description: "DeepSeek shipped DeepSeek-V4-Pro to general availability across its app, web, and API on August 13, 2026, with stronger agent benchmarks, three thinking-effort levels, and native OpenAI Responses API support — ahead of a peak/off-peak price increase taking effect August 16."
pubDate: 2026-08-13
category: deepseek
type: news
tags: [DeepSeek, DeepSeek-V4-Pro, AI agent, API, pricing]
source: https://api-docs.deepseek.com/updates/
draft: false
importance: high
---

DeepSeek moved DeepSeek-V4-Pro to general availability on August 13, 2026, making it accessible across the company's app, web interface, and API by setting the model parameter to `deepseek-v4-pro`. The model had been running in preview since April; the GA release, designated DeepSeek-V4-Pro-0813, emphasizes agent capabilities for tasks where the model uses tools, executes code, and completes multi-step workflows with less human intervention.

## Details

- **Agent benchmarks**: DeepSeek reports HLE at 42.7 without tools and 60.0 with tools, Terminal Bench 2.1 at 87.9, NL2Repo at 61.5, Cybergym at 83.3, DeepSWE at 62.7, DSBench-FullStack at 71.1, and DSBench-Hard at 67.2
- **Context and output length**: up to a 1 million token context window, with outputs as long as 384,000 tokens
- **Three thinking-effort levels**: V4-Pro and V4-Flash now support low, high, and max thinking effort settings, letting developers trade off latency and cost against reasoning depth
- **Native OpenAI Responses API support**: the API now natively supports the OpenAI Responses API format, with configuration specifically adapted for Codex
- **Follows V4-Flash's July beta**: V4-Flash entered public beta on July 31, 2026 with lower agent scores (Terminal Bench 2.1 at 82.7, DSBench-Hard at 59.6); V4-Pro was unchanged until this GA release

## What happened next

- A price increase takes effect August 16, 2026 at 16:00 UTC: DeepSeek is introducing peak/off-peak billing, with V4-Pro output tokens rising to $3.96 per million at peak hours from the current flat rate of $0.87 per million, while off-peak rates are set at half the peak-hour price
- DeepSeek had signaled a "significant" price increase was coming as early as August 6, without disclosing exact figures at the time
