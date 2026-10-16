---
title: "GitHub's Agentic Autofix for Code Scanning Alerts Reaches General Availability"
description: "GitHub's agentic autofix now explores a codebase, drafts a fix, reruns CodeQL to confirm the alert is resolved, and opens a pull request for review, with support for batching up to 25 alerts into one PR, for GitHub Advanced Security customers on Enterprise Cloud."
pubDate: 2026-10-15
category: copilot
type: news
tags: [GitHubCopilot, CodeScanning, SecurityAutofix, CodeQL]
source: https://github.blog/changelog/2026-10-15-agentic-autofix-for-code-scanning-alerts-general-availability
draft: false
importance: medium
---

GitHub's agentic autofix for code scanning alerts reached general availability, letting Copilot resolve security alerts by working through a codebase much as a developer would.

## Details

- **How it works**: assigning an alert to Copilot has it explore relevant files, draft a change, and rerun CodeQL to confirm the alert is closed before opening a pull request for review; it iterates if the fix doesn't resolve the issue, and the resulting PR describes the fix, why it resolves the alert, and the validation steps taken
- **Usage**: once enabled, the free "Generate Fix" option is replaced by an "Assign to Copilot" button; users can assign a single alert, batch up to 25 alerts into one PR, or assign alerts via the REST API — only alerts on a repository's default branch are eligible
- **Follow-up**: further changes can be requested by commenting on the PR or through the repository's Agents tab
- **Availability**: available to GitHub Code Security and GitHub Advanced Security customers on GitHub Enterprise Cloud, including the data residency offering; requires an enterprise administrator to enable the "Agentic autofix" policy and an organization or repository admin to turn it on in Code Security settings, plus a Copilot billing method — usage consumes AI Credits from the Code Security budget and GitHub Actions minutes

## What happened next

This GA release extends GitHub's security-automation push from detection into full remediation, closing out a cluster of agentic security features (alongside the purpose-built secret-detection model and local sandboxing) that aim to have Copilot not just flag vulnerabilities but fix and verify them autonomously.
