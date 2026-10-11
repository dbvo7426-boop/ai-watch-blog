---
title: "GitHub Copilot Code Review Adds Organization Billing and Authorized-Requester Controls"
description: "GitHub added a setting letting organizations pay for Copilot code reviews instead of charging individual members' quotas, plus a control restricting who can trigger reviews to users with an organization- or enterprise-provided Copilot license."
pubDate: 2026-10-08
category: copilot
type: news
tags: [GitHubCopilot, CodeReview, Billing, Admin]
source: https://github.blog/changelog/2026-10-08-copilot-code-review-new-organization-billing-options-and-controls
draft: false
importance: low
---

GitHub added new billing and license controls for GitHub Copilot code review administrators.

## Details

- **Billing choice**: a new "Choose how members with a Copilot license are billed" setting lets organization owners decide who pays for reviews; the default "Member" option charges the member's own Copilot entitlement (and the review fails if that quota runs out), while the "Organization" option charges the organization owning the repository instead, preserving member quotas — this requires AI Credits paid usage to be enabled, with an optional budget cap, found under organization settings in Copilot > Policies
- **Authorized requesters**: organization owners and repository admins can enable "Only allow Copilot code review to be triggered by authorized users," restricting review requests to users with an organization- or enterprise-provided Copilot license, blocking personal licenses from being used; once an organization owner enables it, repository admins cannot turn it off

## What happened next

These are incremental admin controls refining the Copilot code review feature GitHub has been building out since earlier this year, giving organizations finer-grained cost and access management as AI-assisted code review scales across more repositories.
