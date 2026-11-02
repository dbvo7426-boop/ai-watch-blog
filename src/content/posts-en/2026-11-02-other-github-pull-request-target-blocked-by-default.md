---
title: "GitHub will block pull_request_target by default in public repositories on December 2"
description: "GitHub Actions will block the pull_request_target trigger by default in public repos from December 2, 2026, with enforcement brownouts on November 9 and 16."
pubDate: 2026-11-02
category: other
type: news
tags: [GitHub, GitHub Actions, Security]
source: https://github.blog/changelog/2026-11-02-pull_request_target-blocked-by-default-december-2
draft: false
importance: medium
---

GitHub will block `pull_request_target` workflow events by default in public repositories starting December 2, 2026, unless an Actions event policy explicitly allows them. Enforcement had previously been scheduled for November 2, 2026. Private and internal repositories are not affected.

## Details

- **Why:** `pull_request_target` runs in the context of the base repository and can access its secrets, so running fork code through it could compromise a pipeline or expose secrets.
- **Rollout:** The default rule starts in evaluate mode, which shows which runs it would block. Two brownouts fully enforce the block on November 9 and November 16, 2026, from 16:00 to 18:00 UTC; blocked runs fail with an error annotation and do not execute. Between brownouts the rule returns to evaluate mode and workflows run with warnings.
- **What to do before November 9:** Use Insights to identify the runs the rule would block, then either keep the default block or allow `pull_request_target` for specific workflows through an Actions event policy using workflow file targeting.
- **Scope:** Public repositories on GitHub Free, Team, and Enterprise Cloud. GitHub Enterprise Server is not affected.

## What happened next

Maintainers who rely on `pull_request_target` for labeling or commenting on fork pull requests should review their workflows during the brownout windows. The announcement does not describe which workflows are expected to be affected most.
