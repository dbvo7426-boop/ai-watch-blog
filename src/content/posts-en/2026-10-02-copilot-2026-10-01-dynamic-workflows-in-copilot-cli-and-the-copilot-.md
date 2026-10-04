---
title: "GitHub Copilot Introduces Dynamic Workflows for Multi-Step, Agent-Coordinated Tasks"
description: "GitHub launched dynamic workflows in Copilot CLI, the Copilot app, and the Copilot SDK — code-based programs that combine automated steps with agent work, supporting parallel execution, checkpoints, and human review gates for complex repeatable processes."
pubDate: 2026-10-01
category: copilot
type: news
tags: [GitHubCopilot, DynamicWorkflows, DeveloperTools, Agents]
source: https://github.blog/changelog/2026-10-01-dynamic-workflows-in-copilot-cli-and-the-copilot-app
draft: false
importance: medium
---

GitHub launched dynamic workflows across Copilot CLI, the GitHub Copilot app, and the Copilot SDK — code-based programs that orchestrate multi-step tasks by combining automated operations with AI agent involvement.

## Details

- **What they are**: a program that defines how a task is carried out, combining automated steps with the work of one or more agents, living inside a GitHub Copilot extension and built on Copilot's extensibility APIs
- **Capabilities**: running commands, tools, or external services; executing independent tasks in parallel or sequentially; passing structured data between stages; incorporating agent verification and human input; and pausing at checkpoints for review before resuming
- **Vs. `/fleet`**: unlike `/fleet`, which delegates work to subagents dynamically, dynamic workflows execute a predetermined process structure
- **Use cases**: multi-stage release validation with human review gates, parallel analysis of pull request changes, pattern detection across large codebases, research-to-implementation sequences, and long-running operations needing pause/resume support
- **Availability**: public preview across all Copilot subscription tiers — enabled by default in the GitHub Copilot app, available via the `--experimental` flag or `/experimental on` in Copilot CLI, and included in the Copilot SDK

## What happened next

Dynamic workflows land alongside GitHub's new desktop "computer use" feature and continue Copilot's push from single-shot code suggestions toward structured, auditable multi-step automation — complementing rather than replacing the more freeform multi-model orchestration GitHub has been previewing with HydraFusion.
