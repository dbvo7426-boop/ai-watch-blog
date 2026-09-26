---
title: "GitHub Copilot Adds a Global Default Policy for New Features"
description: "GitHub introduced a unified default policy letting enterprise admins choose whether new, unconfigured Copilot features are enabled, disabled, or delegated to individual organizations by default, taking effect October 22 after a 28-day configuration window."
pubDate: 2026-09-24
category: copilot
type: news
tags: [GitHubCopilot, GitHub, AdminControls, Governance]
source: https://github.blog/changelog/2026-09-24-default-enablement-of-copilot-features-for-copilot-business-and-enterprise
draft: false
importance: medium
---

GitHub introduced a unified global default policy for how new, unconfigured Copilot features behave across Business and Enterprise accounts.

## Details

- **Scope**: applies to generally available Copilot features managed on the enterprise's "Features & clients" page, including the Copilot Code Review policy on the Agents page and MCP servers in Copilot policy
- **Three admin options**: Enabled (current and future eligible features are available to users by default), Disabled (future features require explicit approval, current ones stay unavailable), or Let organizations decide (individual organizations set their own preference)
- **What doesn't change**: unconfigured features automatically follow whichever default is selected, but previously explicit enable/disable choices are preserved; preview features remain opt-in, and if a preview feature later reaches general availability, its prior selection carries over
- **Timeline**: a 28-day configuration window lets admins adjust settings before the policy takes effect on October 22, 2026

## What happened next

The policy gives large organizations a single lever to control whether they default to fast adoption of new Copilot capabilities or a more conservative, approval-gated rollout, rather than needing to configure each new feature individually as it ships.
