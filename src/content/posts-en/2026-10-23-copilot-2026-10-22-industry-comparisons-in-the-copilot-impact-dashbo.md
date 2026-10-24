---
title: "Copilot impact dashboard adds opt-in industry comparisons"
description: "The Copilot impact dashboard now has an Industry comparison section that benchmarks agentic adoption and leverage against aggregated, opt-in peer data."
pubDate: 2026-10-22
category: copilot
type: news
tags: [GitHub Copilot, Impact Dashboard, Benchmarks, Admin]
source: https://github.blog/changelog/2026-10-22-industry-comparisons-in-the-copilot-impact-dashboard
draft: false
importance: medium
---

On October 22, 2026, GitHub added an "Industry comparison" section to the Copilot impact dashboard. Enterprises, and organizations not owned by an enterprise, can compare their Copilot agentic adoption and leverage with aggregated benchmarks from participating peers. Participation is opt-in and disabled by default.

## Details

- **Benchmarks:** The dashboard shows the share of your users who are agent-first or multi-agent, and how the pull request merge rate of agentic users compares with nonagentic users. Once enough businesses opt in, scores are ranked against the peer median and top decile for the 28-day reporting period.
- **Peer groups:** Choose a company size band (such as 1-999, 1,000-4,999 or 5,000+ employees) and one of ten industries, and switch between your industry and all industries. If the industry peer group is too small, the comparison widens to all industries for your size band and the dashboard labels the group used.
- **Opt-in:** Enable it from the dashboard or from enterprise or organization Copilot policies; both use the same policy, so turning it off in either place stops your data contributing and hides comparisons.
- **Data handling:** Comparisons refresh daily. Opting out stops comparisons immediately and your data is excluded from the next daily update. Benchmarks contain no identifying data and are deleted after 30 days. On GitHub Enterprise Cloud with data residency, comparisons are limited to the same region.
- **Limits:** Early on you may see only the median, a broader peer group than selected, or no ranking. No ranking appears if your own score cannot be calculated, for example when all users are already agent-first or multi-agent.
- **Access:** Enterprise owners, and owners of organizations not owned by an enterprise, can opt in and set the peer group. Anyone who can view the dashboard sees the results. The Copilot usage metrics policy must be enabled. Enterprises used only to assign Copilot Business licenses cannot participate.
- **Not in the API:** Industry comparisons appear only in the dashboard, not in the usage metrics API, NDJSON exports or downloads.

## What happened next

Leaders could already measure their own Copilot adoption but not tell whether they were ahead of or behind similar businesses. The comparison supplies that context for setting goals and reporting progress. Its value depends on how many businesses opt in, so expect sparse or broader-than-chosen peer groups shortly after launch.
