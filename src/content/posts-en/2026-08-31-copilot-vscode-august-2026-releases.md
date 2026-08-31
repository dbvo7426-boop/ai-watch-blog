---
title: "GitHub Copilot in VS Code: August 2026 Roundup Adds Rubber-Duck Reviews and Multi-Language Dictation"
description: "GitHub's August 2026 VS Code release notes (v1.132–v1.135) bundle side-by-side chats, cross-provider agent sessions, an experimental /rubber-duck command, and an on-device multi-language dictation engine."
pubDate: 2026-08-31
category: copilot
type: news
tags: [GitHub Copilot, VS Code, Agent Mode, Dictation, Developer Tools]
source: https://github.blog/changelog/2026-08-31-github-copilot-in-vs-code-august-2026-releases/
draft: false
importance: medium
---

GitHub published its August 2026 roundup of GitHub Copilot changes in VS Code on August 31, 2026, covering everything shipped across versions 1.132 through 1.135. The post groups the month's updates into four themes: agent sessions and workflows, chat and review, the integrated browser, and dictation.

## Details

- **Agent Sessions and Workflows**: chats can now be arranged side by side in horizontal or vertical groups; typing `/btw` opens a side-conversation that shares the primary chat's context; a new prompt timeline control in the transcript gutter lets users navigate long conversations; portable agent customizations can be installed from plugins following the new Agent Plugins 1.0 standard
- **Cross-provider flexibility**: an experimental setting opens the Agents window without GitHub sign-in when Claude is configured via API key, and users can switch between Anthropic-subscription and Copilot-subscription models within Claude sessions; recent Copilot or Claude agent sessions started in other applications can be viewed and continued directly in VS Code, and the Agent Host can connect the same session across multiple VS Code windows
- **Experimental "second opinion" command**: a new `/rubber-duck` command in the Copilot Agent Host session lets developers get a complementary model's take on their current work
- **Chat and Review improvements**: full-transcript text search, chat sticky scroll to keep the relevant prompt visible, combined Markdown diff-and-edit views, breadcrumb-bar switching between regular and diff editors, resizable terminal output in chat, and per-model token usage (input, cached input, output) shown on hover over the response footer
- **Integrated Browser**: users can select and annotate multiple HTML elements to leave targeted UI feedback, local HTML files now auto-reload as they're edited by the developer or the agent, and VS Code can be set to open HTML files in the browser by default
- **Dictation**: an on-device model now supports dictating in multiple languages, cleanup instructions can be customized at the user or workspace level to match project terminology, and shell-aware cleanup preserves command syntax instead of inserting spoken punctuation into terminal commands

## What happened next

The changes are already live for users running VS Code 1.132 through 1.135, since the post is a retrospective roundup rather than a forward-looking announcement. The emphasis on cross-provider agent sessions — letting Claude and Copilot sessions share the same window and even the same Agent Host connection — continues a pattern from earlier August updates (global model policy GA, the Copilot app Customize tab) of GitHub loosening the boundaries between its own agent stack and third-party model subscriptions.
