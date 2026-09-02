---
title: "GitHub Copilot Changes How Model Access Works for Users in Multiple Team Plans"
description: "GitHub updated Copilot model access so users with seats in multiple Team-plan organizations now get models based solely on their billing organization's settings, instead of any organization that had enabled a model."
pubDate: 2026-08-31
category: copilot
type: news
tags: [GitHubCopilot, GitHub, TeamPlans, AdminControls]
source: https://github.blog/changelog/2026-08-31-copilot-model-access-update-for-github-team-plans
draft: false
importance: low
---

GitHub changed how model access is determined for Copilot users who hold seats in more than one organization on a GitHub Team plan.

## Details

- **What changed**: previously, a user could access any model enabled by any of their organizations; now, the organization billed for that user's usage — shown as "Usage billed to" on the Copilot features page — solely determines which models they can access
- **Who's affected**: only users with Copilot seats across multiple Team-plan organizations; users whose access comes entirely through an enterprise account or its child organizations see no change
- **How to check**: users can find their billing organization under "Usage billed to" in Copilot settings

## What happened next

The change aligns governance with billing, closing a gap where a user's available models could depend on unrelated organizations rather than the one actually paying for their usage.
