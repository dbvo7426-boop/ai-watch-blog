---
title: "GitHub Copilot Adds Enterprise Team Specialization for Managed Settings"
description: "GitHub now lets enterprise administrators mark certain managed-settings keys as overridable per team, letting teams customize configuration like default AI model while enterprise policy stays in control."
pubDate: 2026-08-03
category: copilot
type: news
tags: [Copilot, GitHub, Enterprise, Managed Settings]
source: https://github.blog/changelog/2026-08-03-enterprise-team-specialization-for-managed-settings
draft: false
importance: low
---

GitHub has added enterprise team specialization for managed settings, letting administrators target specific enterprise teams with itemized configuration rather than a single organization-wide policy.

## Details

- **What's new**: Administrators can mark certain keys in `managed-settings.json` as "overridable," allowing individual teams to customize their own configuration — such as default AI model or bypass permissions — while non-overridable keys remain locked down enterprise-wide
- **Goal**: Lets organizations "scale governance without bottlenecking every configuration change through central administrators"
- **Additive plugin extensibility**: Enterprise baselines remain guaranteed while teams can layer on additional marketplace access
- **Centralized mapping**: A new `team-mappings.json` file applies specific settings files to multiple teams at once
- **Compliance protection**: Non-overridable keys continue to act as a hard ceiling that teams cannot bypass
- **Availability**: Supported across VS Code, Copilot CLI, Copilot App, and cloud agent, for Copilot Business or Enterprise licenses

## How to try it

- Enterprise admins can mark specific `managed-settings.json` keys as overridable
- Use `team-mappings.json` to apply configuration files to specific teams
- Verify non-overridable keys still enforce your compliance baseline before rolling this out broadly
