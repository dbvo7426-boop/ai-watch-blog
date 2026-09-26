---
title: "Anthropic Opens a Directory Submission Portal for Claude Plugins"
description: "Anthropic launched a self-serve portal for developers to submit MCP connectors and plugin bundles to the Claude directory, complete with auto-validation, review tracking, and post-launch install analytics."
pubDate: 2026-09-25
category: claude
type: news
tags: [Claude, Plugins, MCP, Developer Platform, Anthropic]
source: https://claude.com/blog/build-plugins-for-claude
draft: false
importance: medium
---

Anthropic opened a new directory submission portal on September 25, 2026, giving developers a self-serve way to publish plugins into the Claude directory. Plugins package MCP connectors, Agent Skills, or both, and Anthropic now describes them as the main way to build third-party extensions for Claude.

## Details

- **Two submission paths**: developers can submit a single MCP connector pointing at a remote MCP server, or a plugin bundle that combines MCP servers and Agent Skills together, hosted on GitHub
- **Portal location**: submissions go through claude.ai/directory/manage/new, and access requires a paid Claude plan
- **Automated checks**: every submission goes through auto-validation and safety scanning before it reaches human review
- **Review tracking**: developers get real-time review status with feedback, and manual control over when an approved plugin actually goes live
- **Post-launch analytics**: once published, developers can see installation metrics broken down by product surface and version, plus discovery data such as listing views and search referrals
- **Underlying tech**: the directory supports the MCP 2.0 specification, the MCP Apps extension for interactive UI inside chat, and Enterprise Managed Auth for zero-touch OAuth on managed accounts

## What happened next

The portal launch follows Anthropic's Claude Marketplace announcement two days earlier, which positioned a single place to discover plugins, agents, and partner services. Anthropic says unified discovery across both Claude and Claude Code is rolling out in the coming weeks, which would let plugins submitted through the new portal surface in both surfaces from one submission rather than requiring separate listings.
