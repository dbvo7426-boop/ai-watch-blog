---
title: xAI Launches "Grok Build" — a Terminal-Born Coding Agent, Now in Early Beta for SuperGrok
description: xAI released an early beta of its coding agent "Grok Build," featuring a plan mode and parallel subagents. The launch follows Claude Code and Codex into the coding-agent market.
pubDate: 2026-05-25
category: grok
type: news
tags: [Grok Build, xAI, coding, CLI, AI History]
source: https://x.ai/news/grok-build-cli
draft: false
importance: medium
---

xAI released an early beta of "Grok Build," a coding agent designed to be used directly from the terminal. It's available to all SuperGrok and X Premium Plus subscribers, positioned to automate complex professional software development tasks. The launch comes more than a year after Anthropic's "Claude Code" and OpenAI's "Codex" entered the same space.

## Details

- **How it's delivered**: A CLI tool launched with a single command inside a project folder. Users describe tasks in natural language, and it analyzes the codebase and gets to work
- **Plan mode**: For complex tasks, it presents a plan before execution, which users can approve, comment on step by step, or have rewritten entirely
- **Parallel subagents**: Large tasks are split across specialized subagents that run in parallel, with support for integrating work across multiple worktrees
- **Compatibility with existing tools**: Supports AGENTS.md, plugins, hooks, skills, and MCP servers
- **Headless execution**: The `-p` flag allows it to be embedded into scripts and automation pipelines
- **ACP support**: Also provides a foundation for building custom bot orchestration apps

### An earlier limited beta

- According to some reports, xAI had already offered an earlier, more limited beta around May 14, available only to subscribers of the top-tier $300/month "SuperGrok Heavy" plan
- The May 25 announcement marks the point at which access was expanded to all SuperGrok and X Premium Plus subscribers
- During the beta period, users are encouraged to submit feedback via the `/feedback` command within the CLI

## What happened next

- On May 29, "grok-build-0.1," the foundation model powering the CLI, became publicly available in beta via the xAI API
- On June 11, a plugin marketplace was added, enabling integrations with major services such as MongoDB and Vercel
- On June 15, an "Agent Dashboard" was added for managing multiple sessions at once
- On July 15, in response to a recently uncovered issue involving unauthorized repository uploads, the entire source code was released under the Apache 2.0 license
