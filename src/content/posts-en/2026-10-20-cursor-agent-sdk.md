---
title: "Cursor Agent SDK: define an agent as a code folder, test with evals, deploy"
description: "Cursor's Agent SDK lets teams define agents as a folder of instructions, tools and skills, test them with evals, and deploy to Cursor infrastructure or their own."
pubDate: 2026-10-20
category: cursor
type: news
tags: [Cursor, Agent SDK, Agents, Evals]
source: https://cursor.com/changelog/agent-sdk
draft: false
importance: medium
---

Cursor released the Agent SDK, which it says is available today. An agent is defined as a code folder, tested with evals, and deployed to Cursor or your own infrastructure.

## Details

- **Getting started:** `npx @cursor/agent-sdk init ./my-bot` scaffolds a project and `agent-sdk dev` runs it locally with a playground. Templates cover a security reviewer, an owners-policy approver, a PR autofixer and a Linear or Jira triager.
- **Project layout:** `instructions.md` (prompt), `tools/` (typed actions), `skills/` (procedures loaded on demand), `mcp-connections/` (MCP tools) and `channels/` (where the bot receives and sends messages). `agent-sdk validate` and `agent-sdk info` inspect the project.
- **Deploy:** `agent-sdk deploy` builds the agent, assigns a URL and runs it on Cursor infrastructure; secrets and integrations are managed in the dashboard.
- **Channels:** Triggers include PR, comment and CI events from GitHub, GitLab and Bitbucket, Slack mentions and DMs, webhooks, and cron schedules. GitHub events arrive through the Cursor account, so no public webhook URL is needed. Each conversation keeps its own session and a full record of messages and tool calls.
- **Evals:** Send a fixed message and check which tools ran, their inputs and the reply shape, locally or in CI via `agent-sdk eval`. `agent-sdk github replay <pr-url>` turns a real PR into signed webhook payloads, and `--dry-run --fixtures-dir fixtures/` saves them as eval fixtures.

Pricing and plan availability are not stated on the page.
