---
title: "Copilot Code Review's Lite and Balanced Effort Levels Reach GA"
description: "GitHub Copilot code review's Lite and Balanced effort levels — renamed from the preview's Low and Medium — are now generally available, letting teams match review depth to pull request complexity."
pubDate: 2026-08-07
category: copilot
type: news
tags: [GitHub Copilot, Code Review, GA]
source: https://github.blog/changelog/2026-08-07-copilot-code-review-effort-levels-are-generally-available
draft: false
importance: medium
---

GitHub has moved Copilot code review's configurable effort levels, Lite and Balanced, from public preview to general availability. The feature lets teams choose how much scrutiny Copilot applies to a given pull request instead of getting one-size-fits-all review depth.

## Details

- **What each level does**: Lite gives "feedback on straightforward changes," while Balanced offers "deeper analysis from a higher-reasoning model" for complex or sensitive code. As GitHub puts it, "not every pull request needs the same scrutiny — documentation updates and small fixes may only need focused feedback"
- **Renamed from preview**: The Low and Medium effort levels introduced during public preview are now called Lite and Balanced; any prior configuration automatically carries over under the new names
- **Two ways to set it**: Choose an effort level for an individual review without changing any defaults, or have organization admins set an org-wide default under organization settings → Copilot → Copilot code review, which repositories inherit unless they override it
- **Visibility**: Review timelines and pull request overview comments now show which effort level was used for a given review, so teams can audit review depth across repositories
- **Availability**: Generally available for Copilot Pro, Pro+, Max, Business, and Enterprise plans

## How to try it

- Pick Lite or Balanced when requesting a Copilot code review on an individual pull request
- Organization admins can set a default under organization settings → Copilot → Copilot code review
- Check the pull request overview or review timeline to see which effort level was applied
