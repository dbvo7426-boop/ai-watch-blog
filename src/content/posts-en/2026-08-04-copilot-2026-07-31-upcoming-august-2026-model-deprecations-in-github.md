---
title: "Upcoming August 2026 Model Deprecations in GitHub Copilot"
description: "GitHub will deprecate six models across all Copilot experiences on September 1, 2026, including Gemini 3.1 Pro, Claude Opus 4.5/4.6, Claude Sonnet 4.5/4.6, and Raptor Mini."
pubDate: 2026-07-31
category: copilot
type: news
tags: [Copilot, GitHub, Model Deprecation, Gemini, Claude]
source: https://github.blog/changelog/2026-07-31-upcoming-august-2026-model-deprecations-in-github-copilot
draft: false
importance: medium
---

GitHub has announced that six AI models will be deprecated across all GitHub Copilot experiences on September 1, 2026, including Copilot Chat, inline edits, ask mode, agent modes, and code completions. Users and administrators need to move their workflows to the recommended replacement models before that date.

## Details

- **Deprecation date**: All six models below are deprecated simultaneously on September 1, 2026
- **Deprecated models and replacements**:
  - Gemini 3.1 Pro → Gemini 3.6 Flash
  - Claude Opus 4.5 → Claude Opus 4.7, 4.8, or 5
  - Claude Opus 4.6 → Claude Opus 4.7, 4.8, or 5
  - Claude Sonnet 4.5 → Claude Sonnet 5
  - Claude Sonnet 4.6 → Claude Sonnet 5 (see exception below)
  - Raptor Mini → MAI-Code-1-Flash
- **Exception**: Claude Sonnet 4.6 remains available for individual GitHub Copilot subscribers on annual plans, even after the deprecation date
- **Scope**: The change applies across "all GitHub Copilot experiences," specifically Copilot Chat, inline edits, ask mode, agent modes, and code completions
- **Required action**: Users and integrators must update workflows and integrations to use a supported model before the deadline. Enterprise administrators need to enable the replacement models through Copilot model policies in advance

## How to try it

- Check which of the six models above your team currently relies on in Copilot Chat, inline edits, or agent workflows
- Switch each deprecated model to its recommended replacement before September 1, 2026
- If you're on an individual annual Copilot plan and rely on Claude Sonnet 4.6, note that it keeps working past the deadline — but confirm this doesn't apply to team/enterprise seats
- Copilot Enterprise admins should enable the replacement models in their organization's model policy settings ahead of time to avoid disruption
