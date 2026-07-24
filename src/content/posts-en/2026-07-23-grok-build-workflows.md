---
title: Grok Build Adds "Workflows" for Running Complex Tasks Across Parallel Agents
description: xAI has added a "Workflows" feature to Grok Build that lets users describe a complex task in plain language and have it fanned out across up to 1,024 parallel agents, then saved as a reusable slash command.
pubDate: 2026-07-23
category: grok
type: news
tags: [Grok, xAI, Grok Build, Agents, Developer Tools]
source: https://x.ai/news/workflows
draft: false
importance: medium
---

xAI has added "Workflows" to Grok Build, its coding agent tool. The feature lets users describe a complex task in plain language, and the system fans the work out across multiple parallel agents to execute it.

## Details

- **Parallel processing**: Tasks are fanned out across hundreds of parallel agents, with budgets of up to 1,024 agents for large jobs
- **Automatic planning**: Grok creates and smoke-tests a task script before execution, eliminating the need for manual scripting
- **Progress tracking**: Use the `/workflows` command to monitor execution, viewing each phase and per-agent token counts
- **Reusable workflows**: Saved workflows become custom slash commands (like `/pr-review 5137`) that can be shared team-wide or kept personal
- **Built-in tool**: `/deep-research` ships pre-configured for parallel investigation with source verification

## How to try it

- Describe a multi-faceted task in Grok Build — such as a PR review, triaging 100+ issues, or a codebase vulnerability audit — in plain language to get started
- Save resulting workflows and share them with your team
