---
title: Claude Code Can Now Control Your Browser — "Claude in Chrome" Reaches General Availability, Subagents Run in the Background by Default
description: Claude Code's browser extension "Claude in Chrome" has moved out of preview into general availability. Browser control now flows seamlessly with terminal work, and subagents now run in the background by default.
pubDate: 2026-07-01
category: claude
type: news
tags: [Claude Code, Anthropic, Claude in Chrome, subagents]
source: https://code.claude.com/docs/en/whats-new/2026-w27
draft: false
importance: medium
---

In its July 1, 2026 Claude Code update (v2.1.198), Anthropic moved the browser extension "Claude in Chrome" to general availability (GA). Claude Code can now directly control Chrome — opening tabs, clicking, filling in forms, and even checking console logs — and the update also changes subagents to run in the background by default.

## Details

- **Claude in Chrome reaches GA**: All users on an Anthropic direct plan can now use it without a preview requirement. Claude Code operates the browser through the extension, able to open tabs, click through pages, fill in forms, and read console logs
- **The rationale**: Much of engineers' work — reviewing PRs on GitHub, consulting internal docs, investigating Datadog traces, checking Jira tickets, digging into Sentry errors — happens in the browser. This lets Claude Code's context, previously confined to the terminal, carry over into browser work as well
- **Shared login state**: It runs with the user's login state shared, so there's no need to switch context when testing an app you've built
- **Subagents now run in the background by default**: Previously, the conversation would pause and wait for a subagent to finish; now Claude keeps working while receiving subagent results later. If a result is required to proceed, it still runs in the foreground, and permission checks are always shown in the main session even while running in the background. Behavior can be pinned via the `background` field in frontmatter
- **Claude Sonnet 5 becomes the default model**: In the same update window, Sonnet 5 became the default model for Pro, Team Standard, and Enterprise, with access to a native 1 million-token context window
- **Other changes**: Claude Desktop now supports Linux (Ubuntu 22.04+, Debian 12+) as a beta

## How to try it

- **Claude in Chrome**: Anthropic direct-plan subscribers can use it simply by adding the extension from the Chrome Web Store
- **Background subagents**: No configuration needed — enabled automatically after the update. To keep a specific subagent always running in the foreground, specify it in frontmatter
- See the Claude Code documentation's [Chrome integration page](https://code.claude.com/docs/en/chrome) and [subagent foreground/background execution page](https://code.claude.com/docs/en/sub-agents#run-subagents-in-foreground-or-background) for details
