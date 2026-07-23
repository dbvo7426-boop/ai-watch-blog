---
title: "Manage AI Credit Pools for Cost Centers Directly in the Billing UI"
description: "GitHub now lets organizations create and edit AI credit pools for cost centers right in the billing UI, without needing the REST API — including automatic limit calculation and optional overage allowances."
pubDate: 2026-07-20
category: copilot
type: news
tags: [Copilot, AI Credits, Billing, Cost Centers]
source: https://github.blog/changelog/2026-07-20-ai-credit-pools-for-cost-centers-in-the-billing-ui
draft: false
importance: low
---

GitHub has made it possible to create and edit an "AI credit pool" for a cost center directly in the organization's billing UI. Previously this was only configurable via the REST API, so administrators can now enable and adjust pools entirely through the interface, without calling the API.

## Details

- **What it does**: Just toggle on the AI credit pool when creating or editing a cost center to set it up
- **Automatic limit calculation**: The pool limit is calculated automatically by GitHub based on the number of Copilot licenses assigned to that cost center, and adjusts dynamically as licenses are added or removed — there's no need to enter a number manually
- **Choice of overage behavior**: Organizations can choose to block usage once the limit is reached, or allow overages if permitted at the enterprise level
- **Different from cost center budgets**: A "budget" caps metered charges after the pool is exhausted, a separate mechanism that can be configured alongside the AI credit pool at the same time
- **Who it's for**: Copilot Business and Copilot Enterprise customers on GitHub Enterprise Cloud

## How to try it

- Administrators of eligible organizations can enable this by simply toggling on the AI credit pool option from the cost center creation or edit screen
- See GitHub Docs' "Control GitHub costs at scale" for more on how this fits into overall cost management
