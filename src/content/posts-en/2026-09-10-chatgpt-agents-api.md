---
title: "OpenAI Opens the Agents API, the Infrastructure Behind Codex and ChatGPT"
description: "OpenAI launched the Agents API in public beta, letting developers create production-ready autonomous agents in a single API call, with automatic context compaction, parallel subagent delegation, and a choice of OpenAI-managed, self-hosted, or partner sandboxes."
pubDate: 2026-09-10
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, AgentsAPI, Codex, DeveloperTools]
source: https://openai.com/index/introducing-the-agents-api
draft: false
importance: high
---

OpenAI introduced the Agents API, a public-beta platform that exposes the same infrastructure and management layer powering Codex and ChatGPT's own long-running agents to outside developers.

## Details

- **One-call setup**: developers create a production-ready agent by specifying the task, model, tools, and environment in a single API call
- **Environment choice**: agents can run in OpenAI-managed sandboxes, self-hosted infrastructure, or partner-provided environments including E2B, Vercel, and DigitalOcean
- **Context management**: the system automatically compacts earlier conversation history as a session approaches its token limit, letting workflows span multiple context windows without manual handling
- **Tool efficiency**: intelligent tool search loads only relevant tool definitions to cut token costs, while supporting parallel tool execution and chaining
- **Multi-agent orchestration**: the API can break a complex task into independent pieces and delegate them to subagents running in parallel, each keeping its own context while a primary agent coordinates the results
- **Built on Codex harness**: the API is powered by the open-source Codex harness, whose codebase is publicly available on GitHub
- **Pricing**: public beta with no extra platform fee — usage is billed at standard OpenAI rates for the tokens and tools an agent actually consumes

## What happened next

By exposing Codex's own agent orchestration layer as a general-purpose API, OpenAI is positioning long-running, multi-agent workflows as a standard building block for third-party developers rather than something unique to its first-party products — arriving the same week as GPT-Live-1 and ChatGPT for Financial Services as part of a broader developer-platform push.
