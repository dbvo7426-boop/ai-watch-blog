---
title: "GitHub Copilot Usage Metrics Now Break Down Pull Request Review Timing"
description: "GitHub's Copilot usage metrics API added a pull_request_review_times array showing median and 90th-percentile durations for three review phases, letting organizations see whether PRs stall waiting for initial review, during discussion, or after approval."
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, UsageMetrics, PullRequests, AdminControls]
source: https://github.blog/changelog/2026-09-25-usage-metrics-api-adds-pull-request-review-stages
draft: false
importance: low
---

GitHub's enterprise and organization repository-level Copilot usage metrics reports now break down how long pull requests spend in each stage of the review process.

## Details

- **New field**: a `pull_request_review_times` array reporting median and 90th-percentile durations for three phases — ready for review to first review, first review to final review, and final review to merge
- **What it reveals**: whether pull requests are bottlenecked waiting for initial reviewer attention, caught in back-and-forth discussion cycles, or stalled after approval before merging
- **Who can access it**: enterprise owners, billing managers, organization owners, and users with a custom role granting "View Copilot Metrics" permission, provided the usage metrics policy is enabled

## What happened next

The breakdown gives organizations a way to diagnose exactly where in the review pipeline delays are happening, rather than only seeing an aggregate time-to-merge figure.
