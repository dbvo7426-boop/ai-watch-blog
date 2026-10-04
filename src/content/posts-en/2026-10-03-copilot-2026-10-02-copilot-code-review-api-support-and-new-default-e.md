---
title: "GitHub Copilot Code Review Adds REST/GraphQL API Support, Switches Default Effort Level to 'Balanced'"
description: "GitHub Copilot code review can now be triggered via REST and GraphQL APIs for custom integrations, and the 'Default' review effort level now uses 'Balanced' for new and existing repositories, configurable at enterprise, org, repo, or personal level."
pubDate: 2026-10-02
category: copilot
type: news
tags: [GitHubCopilot, CodeReview, API, DeveloperTools]
source: https://github.blog/changelog/2026-10-02-copilot-code-review-api-support-and-new-default-effort-level
draft: false
importance: low
---

GitHub added API support for triggering Copilot code reviews and changed the default review effort level from "Default" to "Balanced."

## Details

- **API support**: developers can now request a Copilot code review through the REST and GraphQL APIs, enabling integration into custom scripts, workflows, and internal tools, with an optional review effort level set per request
- **New default**: the "Default" review effort level now uses "Balanced" for both new and existing repositories; organizations that had previously selected "Lite" keep that preference
- **Configuration**: effort levels can be set at the enterprise, organization, repository, or personal settings level, with each tier able to override a higher-level default
- **Availability**: generally available across Copilot Pro, Pro+, Max, Business, and Enterprise

## What happened next

The API support brings Copilot code review in line with GitHub's broader push this week to make Copilot features scriptable and embeddable (alongside the Copilot SDK's dynamic workflows), while the effort-level change is a routine tuning update to the review feature introduced earlier this year.
