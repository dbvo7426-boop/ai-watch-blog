---
title: "GitHub Copilot Code Review Can Now Formally Approve Pull Requests"
description: "GitHub Copilot's code review can now submit formal PR approvals that count toward merge requirements when admins enable it, with the approval automatically dismissed if new commits are pushed afterward, matching human reviewer behavior."
pubDate: 2026-09-01
category: copilot
type: news
tags: [GitHubCopilot, GitHub, CodeReview, PullRequests, AdminControls]
source: https://github.blog/changelog/2026-09-01-copilot-code-review-can-now-approve-pull-requests
draft: false
importance: medium
---

GitHub Copilot's code review feature can now submit formal pull request approvals, rather than just leaving review comments, when administrators explicitly turn the capability on.

## Details

- **How it works**: Copilot's review overview now includes an approval assessment indicating whether it thinks a PR is ready; when enabled, it can submit that as a formal approval, and the approval is automatically dismissed if new commits are pushed afterward — the same behavior expected of a human reviewer
- **Three-level admin control**: enterprises can allow or deny approvals organization-wide; organizations can enable it broadly, delegate the decision to individual repos, or disable it entirely; and repositories can toggle the capability and restrict which file paths Copilot is allowed to approve
- **Disabled by default with a safety valve**: approvals are off by default, and even when Copilot's approval assessment is visible, it doesn't count toward merge requirements unless that's explicitly enabled — letting teams see Copilot's judgment without it automatically affecting whether a PR can merge

## What happened next

The feature extends Copilot's code review from an advisory role into one that can directly satisfy branch protection rules, while keeping human teams in control of whether and where that authority is actually turned on.
