---
title: "GitHub Flags IDE Update Needed to Restore Accurate Agent Activity in Copilot Usage Metrics"
description: "GitHub identified an undercounting bug in Copilot usage metrics caused by IDEs migrating agent sessions to the Copilot SDK without IDE identification, and is asking admins to update to corrected IDE versions since historical data cannot be recovered."
pubDate: 2026-10-06
category: copilot
type: news
tags: [GitHubCopilot, UsageMetrics, DeveloperTools]
source: https://github.blog/changelog/2026-10-06-update-your-ide-to-restore-agent-activity-in-copilot-usage-metrics
draft: false
importance: low
---

GitHub identified a reporting bug that undercounts Copilot agent activity in usage metrics and is asking organizations to update their IDEs to fix it.

## Details

- **The problem**: several IDEs recently migrated Copilot agent sessions to the Copilot SDK, but those sessions didn't identify which IDE they came from, causing agent activity to be undercounted in usage reports and some activity to be misattributed to Copilot CLI instead
- **Billing unaffected**: only metric attribution was impacted, not billing
- **No retroactive fix**: activity from affected IDE versions can't be attributed after the fact, so historical data gaps cannot be recovered
- **Required updates**: Visual Studio Code 1.139.0+ (available now), Visual Studio 18.12 (expected October 2026), and JetBrains/Eclipse/Xcode plugin updates (expected by November 2026)
- **Guidance**: organization administrators managing centralized IDE deployments should prioritize rolling out the fix, since metrics won't be restored retroactively

## What happened next

This is a routine operational fix rather than a new feature, but it matters for enterprise Copilot admins tracking adoption and ROI through usage dashboards — particularly relevant as GitHub continues pushing agent-based workflows (Dynamic Workflows, computer use) that this same metrics pipeline is meant to measure.
