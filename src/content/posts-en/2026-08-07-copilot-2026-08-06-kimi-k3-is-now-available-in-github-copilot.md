---
title: "Kimi K3 Returns to GitHub Copilot After Rollout Was Paused for a GitHub Actions Incident"
description: "GitHub has resumed rolling out Kimi K3 in GitHub Copilot after briefly pausing it to mitigate a GitHub Actions incident. The model bills at $3/1M input tokens, $15/1M output tokens, and $0.30/1M cached input tokens, and is off by default for Business and Enterprise."
pubDate: 2026-08-06
category: copilot
type: news
tags: [GitHub Copilot, Kimi K3, Moonshot AI, Model Availability, Pricing]
source: https://github.blog/changelog/2026-08-06-kimi-k3-is-now-available-in-github-copilot
draft: false
importance: medium
---

GitHub has resumed rolling out Kimi K3 in GitHub Copilot, days after temporarily pausing the rollout to deal with an unrelated GitHub Actions incident. The changelog entry carries an editor's note explaining the back-and-forth explicitly.

## Details

- **It was paused, then resumed**: GitHub's own editor's note reads, "We have temporarily paused the roll-out of Kimi K3 while we mitigate an incident with GitHub Actions." As of August 6, 2026, the note was updated: "We have resumed rolling out Kimi K3 in GitHub Copilot." The pause was tied to an infrastructure incident, not a problem with the model itself
- **Pricing**: Kimi K3 is billed on a usage basis at $3 per 1 million input tokens, $15 per 1 million output tokens, and $0.30 per 1 million cached input tokens
- **Plan availability**: Available to Copilot Pro, Pro+, Max, Business, and Enterprise plans
- **Where it works**: Supported in Visual Studio Code, Visual Studio, GitHub Copilot CLI, the GitHub Copilot cloud agent, the GitHub Copilot app, github.com, GitHub Mobile (iOS and Android), JetBrains IDEs, Xcode, and Eclipse
- **Off by default for organizations**: For Copilot Business and Enterprise customers, Kimi K3 is off by default — administrators need to explicitly enable it in Copilot settings before members of the organization can use it

## What happened next

Because the pause was caused by a GitHub Actions incident rather than an issue with Kimi K3's behavior or safety, the resumed rollout doesn't come with any changes to the model's capabilities or pricing. Organizations that want to use it still need to opt in explicitly through Copilot's admin settings, consistent with how GitHub has rolled out other third-party models to Business and Enterprise customers.
