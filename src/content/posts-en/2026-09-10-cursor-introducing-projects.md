---
title: "Cursor Launches 'Projects': A Coordinator Agent That Runs Thousands of Subagents in the Cloud"
description: "Cursor's new Projects feature adds a persistent coordinator agent that delegates work across subagents, keeps shared context over months-long initiatives, and can act on Slack messages, PRs, or schedules without a developer prompting it."
pubDate: 2026-09-10
category: cursor
type: news
tags: [Cursor, Projects, AIAgent, CloudAgents, DeveloperTools]
source: https://cursor.com/blog/projects
draft: false
importance: high
---

Cursor launched Projects on September 10, 2026, a new way to manage large, long-running engineering work through a "coordinator" agent that plans tasks and delegates implementation to subagents rather than writing code itself. The feature began rolling out in beta to all users the same day.

## Details

- **Coordinator architecture**: the coordinator agent stays responsive and never blocked because it directs other agents' work instead of doing the coding directly
- **Runs in the cloud, persists past your laptop**: "A Project runs on its own computer in the cloud, so closing your laptop doesn't stop it," with local agents spinning up only when machine-specific testing is needed
- **Shared, accumulating context**: Project files sync across cloud and local agents, so the system builds up institutional knowledge about a codebase and a team's preferred workflows over time
- **Event-driven, not just prompt-driven**: coordinators can subscribe to Slack channels, track pull request activity, and run on schedules, then act automatically when they detect a relevant signal
- **Three flagship use cases**: feature development (parallel research and implementation with iterative preference learning), large-scale migrations (applying an established approach across hundreds of PRs with decreasing oversight), and ongoing "gardening" maintenance (one example Project processes 20–100 PRs a day extracting components and adding lint rules)
- **Internal metrics Cursor cites**: new users of Projects merge 30% more PRs, and its most active users merge six times as many PRs as before

## What happened next

Cursor framed Projects as moving developers "up a level of abstraction," away from managing individual agents and toward directing outcomes, calling it a step toward agents capable of running "thousands" in parallel on a single initiative. The beta is accessible now from Cursor's left-hand navigation, arriving about a week after Cursor opened up self-hosted cloud-agent machines, and continuing the company's rapid buildout of always-on, autonomous agent infrastructure through the fall.
