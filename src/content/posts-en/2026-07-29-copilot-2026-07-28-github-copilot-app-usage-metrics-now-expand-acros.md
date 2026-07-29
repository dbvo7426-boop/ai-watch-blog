---
title: "GitHub Copilot App Usage Now Reflected in Per-User Metrics API Report Rollups"
description: "GitHub Copilot's usage metrics API now surfaces Copilot app activity in per-user breakdowns and standard report rollups, instead of only as an enterprise-wide total."
pubDate: 2026-07-28
category: copilot
type: news
tags: [Copilot, GitHub, Usage Metrics, API, Enterprise]
source: https://github.blog/changelog/2026-07-28-github-copilot-app-usage-metrics-now-expand-across-report-rollups
draft: false
importance: low
---

GitHub has expanded how Copilot app usage is represented in the Copilot usage metrics API. Previously visible only as an enterprise-wide total, Copilot app activity is now integrated into per-user breakdowns and standard report rollups.

## Details

- **What changed**: Copilot app usage used to appear only as an enterprise-level aggregate total; it's now folded into per-user breakdowns and existing report rollups
- **Key fields and metrics added**:
  - `used_copilot_app`: a flag indicating whether a user was active in the Copilot app on a given day
  - `totals_by_copilot_app`: per-user metrics including session count, request count, prompt count, and token usage
  - A new `copilot_app` value now appears in feature, model, and language rollups
  - Code generation and lines-of-code metrics now factor in Copilot app activity
  - `daily_active_users` counts now include users who were active only through the Copilot app
- **Report types affected**: enterprise-user, organization-user, enterprise, organization, and user reports, across both 1-day and 28-day windows
- **Access requirements**: Enterprise owners, billing managers, organization owners, and custom role holders with "View Copilot Metrics" permission. The Copilot usage metrics policy must be enabled
- **Compatibility**: Entities with no Copilot app activity simply omit the new fields, so existing integrations and data structures remain unaffected

## How to try it

- Administrators who meet the access requirements above will see the expanded breakdown automatically in existing Copilot usage metrics API calls — no configuration changes are needed
- See GitHub's official Changelog post for full field definitions and the complete list of affected reports
