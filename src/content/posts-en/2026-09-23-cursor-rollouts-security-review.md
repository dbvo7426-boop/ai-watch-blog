---
title: "Cursor Launches Rollouts and Security Review Bots for the Last Mile of Shipping"
description: "Cursor introduced two new automation bots for Teams and Enterprise plans: Rollouts, which monitors deploy health per environment, and Security Review, which flags exploitable bugs on every pull request."
pubDate: 2026-09-23
category: cursor
type: news
tags: [Cursor, Rollouts, Security Review, DevOps, Bugbot]
source: https://cursor.com/changelog/rollouts-and-security-reviewer
draft: false
importance: medium
---

Cursor announced two new bots on September 23, 2026, aimed at what it calls "the last mile of shipping code." Rollouts watches every change as it deploys and reports its health per environment, while Security Review reads every pull request for exploitable bugs. Both are available today on Teams and Enterprise plans.

## Details

- **Rollouts**: attaches a monitor to each pull request, reads the diff and the systems it touches, and posts a monitoring plan as a PR comment listing identified risks, the change's intended effect, signals to check, and any instrumentation gaps — authors can edit the plan directly in the PR
- **Deploy tracking**: Rollouts wakes on deploy events and runs its plan against logs, metrics, and traces, tracking staging and production separately so a change can look healthy in one environment and flagged in another
- **Regression handling**: when Rollouts detects a regression it notifies the author and, depending on configuration, can open a revert PR or hand the finding to a cloud agent for a fix; it does not merge or roll back on its own
- **Rollouts is essentially a rebuild of Firetiger Change Monitors** using Cursor's Bot Development Kit, and connects to GitHub/Origin, CI/CD systems, and telemetry providers like Datadog (feature-flag integration is coming soon)
- **Security Review**: posts a single review comment per pull request covering exploitable bugs — injection across SQL, command, and template surfaces, authentication/authorization bypasses, exposed secrets, SSRF, unsafe deserialization, and vulnerable dependency changes — while style and quality checks remain Bugbot's job
- **Findings and rules**: each Security Review finding includes severity, attack path, and a proposed fix; findings can be dismissed with a reason, and teams can add custom rules (e.g., which client external calls must route through) that get enforced on every PR
- **Availability**: enable either bot from the automations tab; for the first 10 days, Teams and Enterprise customers get trial usage credits for roughly 50 and 500 changes respectively

## What happened next

Both bots ship as part of Cursor's push to extend its agent lineup beyond code generation into deployment monitoring and security auditing — areas traditionally covered by separate point solutions. Because Rollouts is built on the same Bot Development Kit as other Cursor bots, it can escalate detected regressions directly to cloud agents for remediation, tightening the loop between detection and fix. Cursor gave no end date for the trial credits beyond the initial 10-day window, after which usage presumably shifts to standard billing.
