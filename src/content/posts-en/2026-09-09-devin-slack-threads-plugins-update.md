---
title: "Devin's September 9 Update Speeds Up View Switching, Mirrors Answers to Slack, and Bundles Plugins"
description: "Cognition shipped a September 9 Devin release covering roughly 2x faster tab switching, Slack-thread mirroring for webapp answers, shorter Devin Review summaries, installable plugins bundling skills and MCP servers, and Windows Git Bash as the new default shell."
pubDate: 2026-09-09
category: devin
type: news
tags: [Devin, Cognition, ProductUpdate, Automation, Slack]
source: https://docs.devin.ai/release-notes
draft: false
importance: medium
---

Cognition pushed another batch of updates to Devin on September 9, 2026, covering session management, Slack integration, code review, and a new plugin system for packaging skills and automations.

## Details

- **Faster view switching**: tab switching between the Progress, Diff, and PR views is roughly twice as fast as before
- **Slack-linked threads**: when Devin asks a question, answers given in the webapp now mirror to any linked Slack thread, with new sidebar controls for managing session linking and sync
- **Shorter Devin Review summaries**: PR review summaries are trimmed to one or two sentences plus up to five bullet points, with an optional "Learn more" section giving fuller explanations and suggested fixes for individual findings
- **Plugins**: Devin can now bundle skills, rules, hooks, and MCP servers into a single installable plugin package
- **Session and PR handling**: archiving a session now also closes the pull requests of any child sessions archived with it, and sessions with multiple PRs in the same state get a dropdown to manage them from the sidebar
- **Clickable diffs and touch support**: file paths in the Changes and PR tabs now open diffs directly in the embedded editor when Devin's machine is online, and the Desktop tab supports iPad-style touch gestures (tap, drag, long-press)
- **Automation improvements**: automation text fields support case-sensitive regex (Google RE2 syntax), update approvals now show exact diffs, and the automations page defaults to a "Mine" tab
- **Windows default shell change**: Devin now uses Git Bash by default for Windows commands, with PowerShell available on request
- **Enterprise admin view**: admins get a new view on the Environment page surfacing organizations that need attention

## What happened next

The update continues Devin's pattern of frequent, incremental releases rather than large version bumps, following the cleanup-scan and sidebar-grouping update from September 2. The Slack-thread mirroring and plugin packaging both point toward Cognition's broader automation push — the same theme behind the Devin Automations product announced alongside its Series E funding round the week before — of making Devin easier to run unattended and to hand off pieces of its configuration as reusable packages. Full details are tracked in Cognition's release notes at docs.devin.ai/release-notes.
