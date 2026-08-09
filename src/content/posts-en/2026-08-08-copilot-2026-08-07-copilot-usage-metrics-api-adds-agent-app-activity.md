---
title: "Copilot Usage Metrics API Now Reports Agent App Activity (Claude, Codex)"
description: "GitHub's Copilot usage metrics API adds an optional totals_by_3rd_party_agent array that reports interaction and session counts for agent apps like Claude and Codex running inside GitHub."
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, API, Metrics, Agent Apps, Claude, Codex]
source: https://github.blog/changelog/2026-08-07-copilot-usage-metrics-api-adds-agent-app-activity
draft: false
importance: medium
---

GitHub's Copilot usage metrics API now tracks activity from third-party agent apps, such as Claude and Codex, that run directly inside GitHub as agent apps. The addition comes through a new optional `totals_by_3rd_party_agent` array in the API response.

## Details

- **New data per agent**: Each entry in `totals_by_3rd_party_agent` includes `agent_name`, a stable `agent_id` for tracking across reporting periods, `user_initiated_interaction_count`, and `session_count`
- **Partners covered**: Claude and Codex are named as agent app partners whose activity now shows up in the metrics
- **Report coverage**: Available across enterprise, organization, enterprise-user, and organization-user report types, and across both 1-day and 28-day reporting periods
- **Access**: Enterprise owners and billing managers, organization owners, and users with a custom role granting "View Copilot Metrics" permission can see this data; the Copilot usage metrics policy must be enabled
- **Backward compatible**: Existing API fields are unchanged; multiple apps tied to the same agent collapse into a single entry, and activity from unidentified agents is omitted entirely

## How to try it

- Query the Copilot usage metrics API and look for the new `totals_by_3rd_party_agent` array in enterprise, organization, enterprise-user, or organization-user reports
- Ensure the Copilot usage metrics policy is enabled for your enterprise or organization
- Use the stable `agent_id` field to track a given agent app's usage across multiple reporting periods
