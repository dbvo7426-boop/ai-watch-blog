---
title: "The New GitHub Copilot Experience in Slack"
description: "GitHub's Slack integration now exposes GitHub Copilot's agentic capabilities directly in Slack, letting teams mention @GitHub to triage issues, investigate failures, open pull requests, and collaborate in dedicated Slack Code channels."
pubDate: 2026-08-21
category: copilot
type: news
tags: [GitHub Copilot, Slack, cloud agent, agentic coding, GitHub]
source: https://github.blog/changelog/2026-08-21-the-new-github-copilot-experience-in-slack
draft: false
importance: medium
---

GitHub has upgraded its Slack integration to bring the same agentic capabilities as the GitHub Copilot CLI and GitHub Copilot app into Slack itself, letting teams mention `@GitHub` to get code help and kick off agent work without leaving a channel.

## Details

- **What it can do**: mentioning `@GitHub` in a Slack DM, channel, or thread lets Copilot answer questions about code and GitHub activity, triage bug reports, manage issues, and — for larger tasks — "investigate failures, implement changes, and validate its work in a secure cloud sandbox" before opening a pull request with a link back to the originating Slack conversation. Work continues asynchronously even while the requester is offline.
- **Slack Code channels**: the agent can spin up dedicated code channels via Slack Code, where teammates can "follow the plan, inspect the diffs, review output previews like HTML artifacts, and iterate with Copilot" together.
- **Setup**: an administrator enables the Copilot cloud agent policy for the organization, installs or upgrades the GitHub app for Slack, and links a GitHub account before mentioning `@GitHub` to start.
- **Oversight controls**: as with the Teams integration, repository administrators can require an additional approval step before Copilot-authored pull requests are allowed to merge.
- **Availability**: the feature is in public preview and limited to GitHub Copilot Business and Enterprise plans. Usage counts against existing Copilot entitlements and can be capped with cloud agent budgets. It shipped August 21, 2026.

## What happened next

This Slack rollout landed the same day as GitHub's equivalent integration for Microsoft Teams, giving organizations on either chat platform a way to trigger and monitor GitHub Copilot's cloud agent from wherever their teams already talk — part of a broader shift toward agent sessions that a whole team can watch and steer collaboratively, rather than a single engineer running Copilot alone in an IDE.
