---
title: "Copilot Usage Metrics API Now Covers 'Copilot App' Usage"
description: "New fields have been added to GitHub Copilot's usage metrics API to show usage data for the standalone Copilot app. Existing aggregation methods are unaffected."
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, API, Usage]
source: https://github.blog/changelog/2026-07-17-github-copilot-app-now-available-in-the-usage-metrics-api
draft: false
importance: low
---

GitHub has added new fields to its Copilot usage metrics API to show usage data for the standalone "Copilot app." Enterprise and organization admins can now view usage of the Copilot app on its own, through the same API that already reports on IDE, chat, and code review metrics.

## Details

- **`daily_active_copilot_app_users`**: A new field returning the number of unique users who used the Copilot app on a given day
- **`totals_by_copilot_app`**: A new independent section summarizing Copilot app usage details, including session counts, request counts, prompt counts, and token usage
- **Supported reports**: Available in both the 1-day and 28-day reports for enterprises and organizations
- **No impact on existing functionality**: When there is no Copilot app usage, the relevant fields simply return `null`, so existing aggregations and dashboards are unaffected

## How to try it

- Admins already using the usage metrics API can view the new fields with no additional setup required
- See GitHub's official [Copilot usage metrics API documentation](https://docs.github.com/rest/copilot/copilot-usage-metrics) for detailed specifications
