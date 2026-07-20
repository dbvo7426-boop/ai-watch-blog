---
title: "\"Agentic Autofix,\" Which Automatically Fixes Code Scanning Alerts, Enters Public Preview"
description: GitHub has launched a public preview of "Agentic Autofix," which uses an AI agent to automatically fix code scanning alerts. It verifies the fix with CodeQL and submits it as a draft PR.
pubDate: 2026-07-10
category: copilot
type: news
tags: [Copilot, security, code scanning]
source: https://github.blog/changelog/2026-07-10-agentic-autofix-for-code-scanning-alerts-in-public-preview
draft: false
importance: medium
---

GitHub has launched a public preview of "Agentic Autofix," which uses an AI agent to automatically fix code scanning alerts. It replaces the previous free "Generate Fix" feature, delivered instead as part of the more powerful "Assign to Copilot" feature.

## Details

- **Autonomous fix workflow**: The agent explores relevant files within the codebase and generates a proposed fix. It reruns CodeQL to verify the fix works, iterating as needed, before creating a draft pull request
- **Time required**: Generating a fix typically takes 2 to 4 minutes. The pull request includes a detailed explanation of the fix approach
- **How to trigger it**: Can be run in several ways — assigning it to an individual alert, bulk-selecting from the security alerts list, within a security campaign, or via the REST API

## How to try it

- Requirements: a GitHub Code Security or Advanced Security license, plus a Copilot license with cloud agents enabled
- Currently in public preview; running it consumes AI credits and GitHub Actions minutes (during the preview period, this is not counted separately from other Copilot usage)
- Administrators can also disable it via repository-level or organization-level settings
