---
title: "Cursor Adds Subscriptions, /goal Command, and VM-Isolated Subagents to Cloud Agents"
description: "Cursor upgraded Cloud Agents and its agent harness with event-driven subscriptions to PRs and Slack threads, a /goal command for long-lived objectives, subagents that run on their own isolated virtual machines, and smoother mid-task steering."
pubDate: 2026-08-19
category: cursor
type: news
tags: [Cursor, Anysphere, Cloud Agents, agent harness, developer tools]
source: https://cursor.com/changelog/08-19-26
draft: false
importance: medium
---

Cursor has rolled out a set of upgrades to Cloud Agents and its underlying agent harness aimed at letting agents operate as an ongoing system rather than a single request-response loop — picking up work automatically, holding a goal until it's actually met, and running isolated subagents in parallel.

## Details

- **Subscriptions**: Cloud agents can now subscribe to pull requests and Slack threads, or run on a schedule, waking up automatically when relevant events occur. Agents automatically subscribe to PRs they create and keep working to fix CI failures or address bot feedback — for example, `@cursor check back in an hour and keep going until that feedback is in`
- **`/goal` command**: Gives an agent a long-lived objective to work toward until it's fully complete, such as `fix all flaky tests and make CI green`; it can be combined with custom modes or `/loop` for recurring sessions
- **Custom modes**: Any skill can now be pinned as an "always on" custom mode via `/`, selecting a skill, and pressing Option+Enter (Mac) or Alt+Enter (Windows)
- **Subagents on their own machines**: Subagents now run on isolated virtual machines with their own clean project copies, so they can test a parent agent's changes independently or swarm on separate fixes without colliding with each other
- **Steering improvements**: Users can send a message to redirect an agent mid-task without interrupting it — follow-up messages wait for the agent's next tool call instead of cutting off the current action
- **Availability**: Subscriptions are currently available for cloud agents only

## What happened next

- The update is live now for Cursor users with access to Cloud Agents
- Combined with the Origin code hosting launch two days earlier, it signals Cursor pushing further toward agents that operate continuously across a codebase rather than only inside single chat sessions
- Full details are on Cursor's official changelog at cursor.com/changelog/08-19-26
