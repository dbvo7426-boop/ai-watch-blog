---
title: "Shared Agentic Work With GitHub Copilot in Microsoft Teams"
description: "GitHub Copilot's cloud agent can now be mentioned directly in Microsoft Teams channels and chats, turning a discussion into a collaborative, observable agent session that keeps working asynchronously in a secure cloud sandbox."
pubDate: 2026-08-21
category: copilot
type: news
tags: [GitHub Copilot, Microsoft Teams, cloud agent, agentic coding, GitHub]
source: https://github.blog/changelog/2026-08-21-shared-agentic-work-with-github-copilot-in-microsoft-teams
draft: false
importance: medium
---

GitHub has brought GitHub Copilot's cloud agent into Microsoft Teams, letting a team mention `@GitHub` inside a channel, thread, or direct message to turn a live discussion into a shared, asynchronous coding session everyone in the conversation can watch and help direct.

## Details

- **How it works**: mentioning `@GitHub` in Teams starts a cloud agent session that runs asynchronously in a secure cloud sandbox, so the work continues even after the triggering conversation ends. Anyone in the thread can "ask questions, add context, and help plan or steer the work," while only people with write access to the target repository can actually trigger code changes.
- **Example use case**: GitHub's own example is asking Copilot to "investigate a problem while you discuss it in your team's standup," with the whole team watching progress unfold in real time inside Teams.
- **Setup**: an administrator must first enable the GitHub Copilot cloud agent and cloud sandboxes for the organization, then install the GitHub app for Microsoft Teams. After connecting a GitHub account via `@GitHub`, teams can configure a default repository for public channels and start tasks with `@GitHub <task>`, or use `@GitHub help` to see available commands.
- **Oversight controls**: repository administrators can require an extra round of pull request approval specifically for PRs authored by Copilot before they can be merged, keeping a human in the loop on agent-generated changes.
- **Availability**: the feature is in public preview, requires a paid GitHub Copilot plan, and consumes AI credits; cloud sandbox usage is billed separately and organizations can set spending budgets for it.

## What happened next

The Teams launch arrived alongside a matching integration for Slack (see companion article), rolled out by GitHub on the same day. Together they extend GitHub Copilot's cloud agent beyond the IDE and GitHub.com into the chat tools where engineering teams already coordinate work, continuing GitHub's push to make agentic coding sessions something a whole team can observe and steer rather than a single-developer tool.
