---
title: "Repository-Level Copilot Usage Metrics Now Generally Available"
description: "GitHub Copilot's usage metrics API now offers a generally available endpoint for tracking usage at the repository level, letting teams see how much coding agent and code review activity happens in each repository."
pubDate: 2026-07-17
category: copilot
type: news
tags: [Copilot, API, Usage, Enterprise]
source: https://github.blog/changelog/2026-07-17-repository-level-github-copilot-usage-metrics-generally-available
draft: false
importance: low
---

GitHub has made repository-level detailed reporting generally available (GA) in its Copilot usage metrics API. Previously limited to organization- and user-level tracking, admins can now see, per repository and per day, "how many pull requests the Copilot coding agent created and merged" and "how many pull requests Copilot Code Review reviewed."

## Details

- **New endpoint (enterprise)**: `GET /enterprises/{enterprise}/copilot/metrics/reports/repos-1-day?day=YYYY-MM-DD`
- **New endpoint (organization)**: `GET /orgs/{org}/copilot/metrics/reports/repos-1-day?day=YYYY-MM-DD`
- **Available metrics**: Number of pull requests created and merged by the Copilot coding agent, and number of pull requests reviewed by Copilot Code Review, both broken down by repository and by day
- **Purpose**: Provides visibility into Copilot adoption across the codebase, which can help target support toward repositories with lower adoption
- **Who it's for**: Enterprise owners, billing managers, organization owners, and holders of custom roles with "view Copilot metrics" permission

## How to try it

- Requires the Copilot usage metrics policy to be enabled as a prerequisite
- Simply query the endpoints above to retrieve repository-level data through the same API as the existing organization- and user-level metrics
