---
title: "GitHub Copilot's Experimental HydraFusion Multi-Model Orchestrator Expands to VS Code and the Copilot App"
description: "GitHub expanded its experimental HydraFusion feature, which coordinates multiple models within a single turn rather than just picking one, from Copilot CLI-only access to VS Code and the GitHub Copilot app, adding real-time progress notifications."
pubDate: 2026-09-30
category: copilot
type: news
tags: [GitHubCopilot, HydraFusion, DeveloperTools, VSCode]
source: https://github.blog/changelog/2026-09-30-hydrafusion-in-vs-code-and-the-github-copilot-app
draft: false
importance: low
---

GitHub expanded its experimental HydraFusion feature from Copilot CLI-only access to VS Code and the GitHub Copilot app, adding real-time progress notifications and clearer status indicators for long-running tasks.

## Details

- **What HydraFusion does**: treats workflow selection as an optimization problem, choosing between having one model solve a task directly, using an efficient model that escalates to a stronger one when needed, or running a critique pattern where independent reviewers suggest improvements
- **Vs. Auto**: Auto picks which single model handles each request, while HydraFusion selects a workflow and coordinates multiple models within a single turn
- **What's new**: expansion beyond Copilot CLI to VS Code and the GitHub Copilot app, plus enhanced transparency through real-time progress notifications and status indicators during extended tasks
- **Availability**: experimental feature available to Copilot Pro, Pro+, Business, and Enterprise subscribers

## What happened next

HydraFusion was first previewed as a Copilot CLI-only experiment in GitHub's September 7 weekly release notes; this expansion to VS Code and the Copilot app brings multi-model orchestration to GitHub's primary developer surfaces for the first time, alongside the same week's rollout of GPT-6.1 Sol.
