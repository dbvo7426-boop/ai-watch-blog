---
title: "Copilot usage metrics API names custom skills, agents and MCP servers, and counts tools like OpenCode"
description: "GitHub's Copilot usage metrics now report the configured names of customer-defined skills, custom agents and MCP servers, and a new totals_by_client array captures model usage from tools such as OpenCode."
pubDate: 2026-10-22
category: copilot
type: news
tags: [GitHub Copilot, Usage Metrics, MCP, Admin]
source: https://github.blog/changelog/2026-10-22-custom-skills-agents-and-mcp-servers-in-usage-metrics-api
draft: false
importance: medium
---

GitHub shipped two related improvements to the Copilot usage metrics API on October 22 and 23, 2026. Reports now show the actual names of the customizations an organization creates, and a new per-client breakdown captures model usage from tools that were previously invisible, including OpenCode.

## Details

- **Named customizations (Oct 22):** In enterprise and organization reports, the skill, custom agent, MCP server, slash command and plugin lists show the configured name of each customer-defined item instead of grouping them under "other" or "custom".
- **More entries:** Each list now holds up to 25 entries per record, up from five. Remaining activity is combined into a trailing "other" entry. Interaction and distinct-use counts are calculated as before.
- **Coverage:** Names come from Copilot CLI (interactive and prompt mode), the GitHub Copilot app, ACP integrations such as JetBrains, and the Copilot SDK. Prompt mode, the app and ACP integrations need Copilot CLI 1.0.97 or later; the SDK needs v1.0.21 or later. Names are not reported from an IDE's built-in chat telemetry.
- **Naming rules:** Names are reported as configured, trimmed and capped at 128 characters. Names that look like file paths stay grouped under "other" or "custom". Names appear only for report days processed after the release.
- **New totals_by_client (Oct 23):** A new array appears in the enterprise, organization, enterprise-user and organization-user reports, in 1-day and 28-day versions. Each entry has `client` (for example opencode, claude_code, codex, vscode, jetbrains; unrecognized clients are `other`), `request_count`, `session_count`, `token_usage` and a per-model `totals_by_model` with a `model_selection_mode`.
- **Caveats:** Request counts measure model calls, not prompts, so one prompt can produce several. Clients are identified by the integration ID sent with each request, so treat the grouping as best effort. Data comes from client telemetry and can undercount. The change is additive; `totals_by_client` is an empty array when there is no usage.
- **Access:** Enterprise owners, billing managers, organization owners and users with a custom role granting "View Copilot Metrics" can view reports, and the Copilot usage metrics policy must be enabled.

## What happened next

Both changes address the same gap: admins could see that Copilot was being used but not which internal customizations or which outside tools were driving it. Named skills, agents and MCP servers let teams track adoption after rolling out an internal tool and target enablement. The client breakdown matters because many tools outside the IDE do not send editor telemetry, so they were missing from `totals_by_ide`. Counting on the server side makes comparisons of request and token volume across tools possible, though the caveats on telemetry and client identification mean the numbers suit trend analysis rather than exact accounting.
