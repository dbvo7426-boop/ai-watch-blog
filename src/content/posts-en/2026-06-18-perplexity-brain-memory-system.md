---
title: Perplexity Adds Self-Improving Memory 'Brain' to Computer, Boosting Task Correctness by 25%
description: Perplexity has announced Brain, a self-improving memory system for its Computer agent platform. It builds a context graph from sessions, connectors, and past decisions, refreshing itself overnight and lifting correctness on previously-seen tasks by 25%.
pubDate: 2026-06-18
category: perplexity
type: news
tags: [Perplexity, Agents, Memory]
source: https://www.perplexity.ai/hub/blog/self-improving-memory-for-agents
draft: false
importance: medium
---

On June 18, 2026, Perplexity announced Brain, a new memory system for its Computer agent platform. Unlike typical "memory" features that recall user preferences, Brain learns from the agent's own work — tracking what succeeded, what failed, and what corrections were made — and improves autonomously over time.

## Details

- **Context graph**: Combines session history, connector results, document changes, and user corrections into a continuously updated context graph, functioning like an "LLM wiki" of the user's projects, ideas, people, and information sources
- **Overnight self-improvement cycle**: At set intervals, such as overnight, Brain reviews the graph, analyzes what worked and what didn't, and refines how it approaches future tasks
- **What it learns from**: Learns from user corrections and dead-end sources alike, reducing unnecessary model calls and token usage
- **Measured results**: 25% increase in answer correctness on previously-seen tasks, a 16% improvement in recall, and a 13% cost reduction for tasks requiring historical context
- **Availability**: Rolling out as a Research Preview for Perplexity Max and Enterprise Max subscribers

## How to try it

- Currently available as a Research Preview for Perplexity Max and Enterprise Max subscribers
- Requires use of Computer or Personal Computer — no additional setup is needed to benefit from it
- Designed to keep improving with continued use, so long-term users are likely to see the biggest gains
