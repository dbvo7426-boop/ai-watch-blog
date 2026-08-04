---
title: "Gemini API's Managed Agents Add Gemini 3.6 Flash, Environment Hooks, and Free-Tier Access"
description: "Google expanded Managed Agents in the Gemini API with Gemini 3.6 Flash as the new default model, pre/post-execution environment hooks, budget controls, scheduled triggers, and free-tier availability."
pubDate: 2026-07-28
category: gemini
type: news
tags: [Gemini, Gemini API, Managed Agents, Developers]
source: https://blog.google/innovation-and-ai/technology/developers-tools/expanding-managed-agents-gemini-api-3-6-flash-hooks/
draft: false
importance: medium
---

Google announced a round of upgrades to Managed Agents in the Gemini API, aimed at helping developers build more capable and controllable autonomous agents. The update makes Gemini 3.6 Flash the new default model and adds environment hooks, budget controls, scheduled triggers, and free-tier access.

## Details

- **New default model**: Managed Agents now default to Gemini 3.6 Flash, which is tuned for coding, reasoning, multimodal analysis, and repeated tool use, completing agentic workflows with fewer reasoning steps, tool calls, and debugging loops than Gemini 3.5 Flash. Developers can still choose Gemini 3.5 Flash or 3.5 Flash-Lite for cost optimization
- **Environment hooks**: Developers can run custom scripts before or after an agent's tool calls. Pre-execution hooks can inspect and block actions such as running code or writing files; post-execution hooks can automatically lint generated code, audit outputs, verify files, or send results to an external endpoint
- **Budget controls**: A new `max_total_tokens` setting prevents runaway tasks — when the limit is reached, execution safely pauses and the interaction returns `status: "incomplete"`
- **Scheduled triggers**: Agents can now run recurring tasks on cron schedules, with persistent sandbox environments preserved across executions
- **Free-tier access**: Managed Agents are now available to developers using free-tier Gemini API keys, lowering the barrier to experimentation
- **Environments API**: A new API lets developers programmatically list, inspect, and delete sandbox sessions

## How to try it

- Available now through the Gemini API for Managed Agents
- Free-tier API key holders can start experimenting with Managed Agents without a paid plan
- Developers can configure environment hooks, `max_total_tokens` budgets, and cron-based scheduled triggers directly in their agent configuration
