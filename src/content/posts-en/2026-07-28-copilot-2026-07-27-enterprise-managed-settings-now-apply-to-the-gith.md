---
title: "GitHub Copilot App and Cloud Agent Now Covered by Enterprise Managed Settings"
description: "GitHub extends enterprise managed settings — previously limited to Copilot CLI and VS Code — to the Copilot app and cloud agent, letting admins centrally govern plugin access, approval bypass, and default model selection."
pubDate: 2026-07-27
category: copilot
type: news
tags: [Copilot, Enterprise, Governance, Security]
source: https://github.blog/changelog/2026-07-27-enterprise-managed-settings-now-apply-to-the-github-copilot-app
draft: false
importance: medium
---

On July 27, 2026, GitHub announced that enterprise administrators can now apply the same centrally managed policies — via the existing `managed-settings.json` file — to the GitHub Copilot app and the Copilot cloud agent. Previously, enterprise managed settings only covered Copilot CLI and VS Code, so this closes a gap in governance coverage as organizations adopt more Copilot surfaces.

## Details

- **Expanded scope**: Enterprise managed settings, previously limited to Copilot CLI and VS Code, now also apply to the Copilot app and the Copilot cloud agent
- **What administrators can govern**: (1) which plugins are available, (2) which plugin marketplaces are accessible, (3) whether developers can bypass approval prompts before Copilot executes commands, accesses files, or fetches URLs, and (4) whether auto model selection is the default for new conversations
- **When changes take effect**: The Copilot app automatically picks up existing configuration the next time a developer signs in or restarts the app; the cloud agent applies changes on the next task assignment
- **Impact on existing deployments**: Organizations already using `managed-settings.json` need no additional setup — the new clients are covered automatically
- **First-time setup**: Requires creating a `.github-private` repository within the enterprise and adding or updating a `copilot/managed-settings.json` file with policy keys and values, committed to the default branch
- **Propagation time**: Settings changes propagate within roughly an hour, or immediately upon client restart or sign-in

## How to try it

- Organizations already using enterprise managed settings get the expanded coverage automatically, with no extra configuration
- First-time adopters need enterprise owner permissions to set up `copilot/managed-settings.json` inside a `.github-private` repository
- Full configuration options and JSON keys are documented on the GitHub Docs managed settings page
