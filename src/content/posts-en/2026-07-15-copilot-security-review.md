---
title: "GitHub Copilot Adds '/security-review' Command for Instant Vulnerability Checks on Code in Progress"
description: The "/security-review" slash command is now in public preview in the GitHub Copilot app. It scans your in-progress code changes for vulnerabilities on the spot and suggests fixes.
pubDate: 2026-07-14
category: copilot
type: howto
tags: [Copilot, Security, GitHub]
source: https://github.blog/changelog/2026-07-14-security-reviews-now-available-in-the-github-copilot-app
draft: false
importance: medium
---

GitHub has added the "/security-review" slash command to the Copilot app as a public preview. It scans your in-progress code changes on the spot, flagging vulnerabilities with severity and confidence scores and suggesting fixes.

## Details

- **What it detects**: Prioritizes detection of high-impact, common vulnerabilities such as injection, cross-site scripting, unsafe data handling, path traversal, and weak cryptographic practices
- **What it shows**: High-confidence findings scored by severity and confidence, along with fix suggestions you can apply without leaving Copilot
- **How to use it**: Open your project in the Copilot app, make your code changes, then run `/security-review` to see results in chat
- **Relationship to existing features**: Positioned as a lightweight, on-demand check for local changes that complements code scanning, Dependabot, and secret scanning

## How to try it

- Available in public preview starting July 14, 2026
- Available across all plans: Copilot Free, Pro, Business, and Enterprise
- Simply type `/security-review` in the Copilot app after making code changes to run it
