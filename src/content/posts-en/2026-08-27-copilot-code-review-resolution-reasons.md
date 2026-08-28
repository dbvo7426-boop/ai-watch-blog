---
title: "GitHub Copilot Code Review Drops File Limits, Adds Resolution Reasons"
description: "GitHub Copilot's code review feature can now review bot-authored and very large pull requests, and lets users explain why they resolved a review comment via a new Addressed/Won't fix/Incorrect dropdown."
pubDate: 2026-08-27
category: copilot
type: news
tags: [GitHubCopilot, CodeReview, GitHub, DeveloperTools]
source: https://github.blog/changelog/2026-08-27-copilot-code-review-resolution-reasons-and-expanded-capabilities/
draft: false
importance: medium
---

GitHub expanded Copilot's code review feature on August 27, 2026, removing coverage gaps around bot-authored and oversized pull requests, while also adding a way for developers to record why they dismissed a given review comment.

## Details

- **Bot-authored PRs now covered**: automatic Copilot code review now runs on pull requests authored by bots, including Copilot's own cloud agent, which were previously skipped
- **No more size limit**: Copilot code review previously capped out around 300 files or 20,000 lines of code; that ceiling is removed, so very large pull requests can now be reviewed
- **Org-level billing for bot reviews**: organizations with the relevant policy enabled can bill bot PR reviews to the organization directly, rather than requiring the reviewing bot to hold its own Copilot license
- **Resolution reasons**: a new dropdown next to the "Resolve conversation" button on any Copilot review comment lets users select "Addressed," "Won't fix," or "Incorrect" when closing it out

## What happened next

By covering bot-generated and very large pull requests, GitHub closes two of the more common complaints about Copilot code review's blind spots, particularly for teams that rely heavily on automated PRs from other bots. The resolution-reason dropdown gives GitHub structured feedback signal on when Copilot's suggestions are actually acted on, which will likely feed back into tuning the review model's accuracy over time.
