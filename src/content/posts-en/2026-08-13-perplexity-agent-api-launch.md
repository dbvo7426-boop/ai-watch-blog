---
title: "Perplexity Launches Agent API, Will Retire Sonar Endpoints in September"
description: "Perplexity introduced the Agent API, a single programmable endpoint combining web search, URL fetching, code execution, MCP connections, and finance/people search behind six configurable presets — with Sonar API endpoints set to retire September 27, 2026."
pubDate: 2026-08-13
category: perplexity
type: news
tags: [Perplexity, Agent API, Sonar, developer tools, API]
source: https://www.perplexity.ai/hub/blog/agent-api-one-place-to-build-with-llms-the-web-and-agents
draft: false
importance: high
---

Perplexity launched the Agent API on August 13, 2026, describing it as "a single programmable endpoint for web search, URL fetching, code execution, MCP connections, and finance and people search." The API consolidates capabilities previously spread across Perplexity's Sonar tiers into one interface, and the company confirmed Sonar endpoints will be retired on September 27, 2026.

## Details

- **Unified endpoint**: combines web search, URL fetching, a code execution sandbox, MCP server connections, and finance/people search tools behind one API
- **"Search as Code"**: an architecture that lets models compose retrieval pipelines on demand rather than calling fixed, separate tools
- **Six configurable presets**: fast, low, medium, high, xhigh, and wide-research, each pairing a model with a system prompt, tool configuration, reasoning effort, and token budget; existing Sonar tiers map directly onto these presets
- **Performance claims**: the "low" preset delivers roughly a 7x improvement on BrowseComp compared to Sonar Pro, at approximately $0.05 per query, with higher presets matching Deep Research quality at lower cost
- **Migration path**: Perplexity says the change requires updating integrations to point at the Agent API, with field-by-field mapping guides provided for existing Sonar users

## What happened next

- **September 27, 2026**: Sonar API endpoints retire, giving existing integrations a roughly 45-day window to migrate to the Agent API
- Developers currently on Sonar Pro or other Sonar tiers should plan migration before the retirement date to avoid disruption
