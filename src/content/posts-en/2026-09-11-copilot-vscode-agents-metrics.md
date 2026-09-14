---
title: "GitHub Copilot Usage Metrics Now Track VS Code Agents Window Activity"
description: "GitHub added four new optional fields to Copilot usage metrics reports covering VS Code Agents window activity — daily active users, session and message totals, and per-user participation — for enterprise and organization admins."
pubDate: 2026-09-11
category: copilot
type: news
tags: [GitHubCopilot, GitHub, VSCode, UsageMetrics, AdminControls]
source: https://github.blog/changelog/2026-09-11-add-vs-code-agents-to-copilot-usage-metrics
draft: false
importance: low
---

GitHub added new metrics fields tracking activity in VS Code's Agents window to its Copilot usage reports.

## Details

- **New fields**: `daily_active_vscode_agent_users` counts unique daily users of the Agents window; `totals_by_vscode_agent` aggregates session counts and user messages; `used_vscode_agent` flags individual user participation; and a per-user variant of `totals_by_vscode_agent` tracks sessions and messages per person
- **What it shows**: how many people use the VS Code Agents window and how they engage with it, letting organizations identify adoption patterns and compare usage across teams at both aggregate and individual levels
- **Who can access it**: enterprise owners, billing managers, organization owners, and custom roles with "View Copilot Metrics" permission, provided the Copilot usage metrics policy is enabled on the account

## What happened next

The addition extends GitHub's usage-reporting coverage to a Copilot surface — the dedicated Agents window — that previously lacked its own visibility in admin-facing metrics, giving organizations a clearer picture of agent-mode adoption specifically rather than only aggregate Copilot usage.
