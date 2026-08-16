---
title: "Cursor Speeds Up Cloud Agents 3x with New \"Builds\" Feature"
description: "Cursor introduced pre-configured environment builds for Cloud Agents, cutting internal environment boot time by 10x and time-to-first-token by 3x, with automatic resilience and a new Builds dashboard for status, logs, and commit history."
pubDate: 2026-08-13
category: cursor
type: news
tags: [Cursor, Anysphere, Cloud Agents, performance, developer tools]
source: https://cursor.com/changelog/08-13-26
draft: false
importance: medium
---

Cursor has introduced "builds" for Cloud Agents — pre-configured development environments prepared in advance — cutting internal environment boot times by 10x and time-to-first-token by 3x compared to agents setting up from scratch each session.

## Details

- **How it works**: Instead of cloning the repository, installing dependencies, and running setup scripts fresh every time, Cloud Agents now boot into ready-to-use warm environment copies, with builds refreshed on a regular basis
- **Performance**: Cursor reports internal environments now boot 10x faster, with 3x faster time to first token for agents starting a task
- **Resilience**: If a code change breaks an environment, agents automatically continue using the last known-good build while the issue is resolved, rather than failing outright
- **Visibility**: A new Builds tab in the Cloud Agents dashboard shows build status, logs, commit SHAs, and which build each agent run used
- **Controls**: Users can trigger builds manually and configure install/start commands and refresh thresholds
- **Availability**: Builds are enabled automatically for new environments at no additional cost; existing environments can turn the feature on from the Cloud Agents dashboard

## What happened next

- The feature is live now for Cloud Agents users on Cursor
- Existing environments require manual activation via the dashboard to start benefiting from builds
- Full details are available on Cursor's official changelog at cursor.com/changelog/08-13-26
