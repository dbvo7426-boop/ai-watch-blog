---
title: "GitHub Issues Adds Approval, Confidence, and Rationale Controls for Agent Automations, in Public Preview"
description: "GitHub has added transparency and control features for agent automations in Issues. A new public preview lets you hold changes for approval, gate auto-apply on the AI's confidence level, and see the recorded rationale behind every change."
pubDate: 2026-07-23
category: copilot
type: news
tags: [GitHub, Copilot, Issues, Automation]
source: https://github.blog/changelog/2026-07-23-agent-automation-controls-in-github-issues-in-public-preview
draft: false
importance: medium
---

GitHub has released new controls for agent automation in GitHub Issues, now in public preview, aimed at improving visibility and control when GitHub Agentic Workflows or the Copilot cloud agent automatically label, retype, assign, or close issues. The goal is to surface why a change happened and let a human approve or reject it when needed.

## Details

- **Approvals**: Instead of applying changes immediately, automations can surface them as suggestions in a panel that a person accepts or rejects, individually or in batch
- **Confidence ratings**: Agents rate each action as high, medium, or low confidence. High-confidence changes apply automatically, while medium- and low-confidence suggestions wait for review
- **Rationale tracking**: Every supported action records the reason behind it, creating an audit trail that helps you decide on pending suggestions
- **Supported actions (at launch)**: Labels, fields, type, close operations, and assignees
- **Where it applies**: Automations from GitHub Agentic Workflows and the Copilot cloud agent, also accessible via the REST and GraphQL APIs
- **Finding suggestions**: Use `has:suggestions` in issue search to list items awaiting review
- **Configuration**: Repository admins can set confidence thresholds, tuning anywhere from fully autonomous operation to requiring review of every change

## How to try it

- If you use GitHub Agentic Workflows, upgrade your workflows and optionally set `issue-intents: true` to require rationale information
- If you use the Copilot cloud agent, no update is needed — create automations from the repository's Agents tab
- This is currently in public preview, released July 23, 2026
