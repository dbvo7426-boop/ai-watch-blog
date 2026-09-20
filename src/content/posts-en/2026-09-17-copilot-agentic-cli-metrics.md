---
title: "GitHub Copilot Usage Metrics Now Cover Skills, Custom Agents, MCP Servers, and Plugins"
description: "GitHub expanded its Copilot usage metrics API to track agentic CLI activity across skills, custom agents, MCP servers, slash commands, and plugins, showing which items are used most and by how many distinct users."
pubDate: 2026-09-17
category: copilot
type: news
tags: [GitHubCopilot, GitHub, UsageMetrics, MCP, AdminControls]
source: https://github.blog/changelog/2026-09-17-agentic-cli-customizations-now-in-the-usage-metrics-api
draft: false
importance: low
---

GitHub expanded its Copilot usage metrics API to cover agentic CLI customizations, adding visibility into skills, custom agents, MCP servers, slash commands, and plugins.

## Details

- **What's tracked**: five categories — skills, custom agents, Model Context Protocol (MCP) servers, slash commands, and plugins
- **What the metrics answer**: which items see the most usage, via arrays like `totals_by_skill`, `totals_by_custom_agent`, and `totals_by_mcp` showing the top five items with interaction counts, and how many distinct items are in use via separate count fields
- **How interactions are counted**: `interaction_count` measures invocations for skills and slash commands, plus custom agent starts and MCP server connection attempts
- **Who can access it**: enterprise owners, billing managers, organization owners, and users with a role granting "View Copilot Metrics" permission, provided the Copilot usage metrics policy is enabled

## What happened next

The expansion gives organizations visibility into a part of Copilot usage — CLI-level customizations like MCP servers and custom agents — that previously wasn't broken out from aggregate usage numbers, letting admins see which specific extensions are actually gaining adoption.
