---
title: "GitHub's Agentic Autofix Now Learns From Past Fixes via Copilot Memory"
description: "GitHub's agentic autofix now checks Copilot Memory for context before resolving a security alert and stores each fix pattern as a memory for future use, letting fix patterns inform code review and cloud agent behavior across a repository over time."
pubDate: 2026-09-25
category: copilot
type: news
tags: [GitHubCopilot, GitHub, Autofix, CopilotMemory, Security]
source: https://github.blog/changelog/2026-09-25-agentic-autofix-now-uses-copilot-memory
draft: false
importance: low
---

GitHub's agentic autofix, which automatically resolves security alerts, now integrates with Copilot Memory for customers who have enabled it.

## Details

- **How it works**: when resolving a security alert, agentic autofix reviews existing memories for relevant context, and when it produces a fix, it stores the fix pattern as a memory for future use
- **Compounding effect**: stored memories also inform other Copilot features, including code review and cloud agent behavior, helping establish repository-specific secure coding patterns over time
- **Requirements**: both agentic autofix and Copilot Memory must be explicitly enabled; the integration is in public preview

## What happened next

The change turns each security fix into a reusable pattern rather than a one-off correction, letting Copilot's understanding of how a given repository handles specific vulnerability classes improve as more alerts get resolved.
