---
title: "GitHub Copilot Lets Admins Set an Expiration Date on Individual User Budgets"
description: "GitHub added an optional expiration date for individual Copilot user budgets on Business and Enterprise plans, automatically reverting a user to their default budget tier without manual cleanup."
pubDate: 2026-09-01
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Billing, AdminControls]
source: https://github.blog/changelog/2026-09-01-set-an-expiration-date-for-individual-user-budgets
draft: false
importance: low
---

GitHub added the ability to set an expiration date on an individual user's Copilot budget, automatically removing the temporary override once it expires instead of requiring an admin to delete it manually.

## Details

- **Three expiration options**: no expiration (the default), expiration at the start of the next billing cycle, or expiration on a specific date
- **How to set it**: configurable when creating or editing an individual user budget through billing settings, or via the `expires_at` field in the Budgets REST API
- **Who it's for**: organizations on Copilot Business or Copilot Enterprise plans, particularly those managing many temporary budget adjustments at scale

## What happened next

The feature removes a small but recurring admin chore — manually tracking and revoking temporary budget increases — for organizations that regularly grant short-term overrides to individual users.
