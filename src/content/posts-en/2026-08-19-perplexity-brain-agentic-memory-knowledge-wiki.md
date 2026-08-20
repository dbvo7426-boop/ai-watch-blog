---
title: "Perplexity Details Brain's Architecture: Filesystem Memory, Dream Agents, and Production Results"
description: "Perplexity published a technical deep-dive on Brain, the memory system for its Computer agent, detailing its Markdown-filesystem architecture, offline 'Dream' agents that refine memory overnight, and 30-day production results showing a 9.3-point correctness gain."
pubDate: 2026-08-19
category: perplexity
type: news
tags: [Perplexity, Computer, Agents, Memory, Brain]
source: https://www.perplexity.ai/hub/blog/brain-agentic-memory-as-a-knowledge-wiki
draft: false
importance: medium
---

Perplexity has published a detailed technical breakdown of Brain, the self-improving memory system for its Computer agent platform it first previewed on June 18, 2026 — this time laying out the underlying architecture and sharing 30-day production results.

## Details

- **Filesystem-based memory**: Brain materializes memory as files in a `memory/` directory with three layers — `knowledge/` (linked Markdown pages synthesizing entities and learnings, the "Brain" itself), `notes/` (topical snippets), and `sessions/` (raw transcripts, summaries, indexes)
- **Wiki-style linking**: Pages use "wikilinks" (`[[page]]`) to connect related entities and "citation links" (`[cite:N]`) that trace claims back to the source session, so agents can verify where a piece of knowledge came from
- **Agents browse it like a filesystem**: Agents use ordinary operations — `cat`, `grep`, link-following, and Git-revision comparison — to explore Brain rather than querying a database
- **Hybrid materialization**: Instead of copying the entire memory tree (expensive) or reading it over a remote filesystem (Perplexity says 400-500x slower), relevant files preload at sandbox boot and a dedicated Memory Agent subagent pulls in more files on demand via semantic search
- **Offline "Dream" agents**: Background processes continuously refine Brain in a four-phase loop — orient to current state, summarize new sessions, attach notable observations to the right wiki pages, and update links/citations. Proposed changes go through deterministic format checks and semantic evidence verification before being committed via Git
- **Offline eval results**: Across 640 synthetic personas, answer correctness rose 6.1 points (60.0% → 66.1%) and evidence recall rose 5.2 points (57.3% → 62.5%), with the largest gains on preference questions (+10.2pp), temporal reasoning (+8.6pp), and activity-detail questions (+6.9pp)
- **30-day production results**: Answer correctness +9.3 points, currentness +8.0 points, evidence recall +8.9 points, alongside roughly 15% fewer tokens used, 10% lower cost, and 10% faster generation

## What happened next

This follow-up moves Brain from a research-preview announcement to a documented system with real production numbers, and the architecture — plain Markdown files, Git-backed edits, wiki-style linking — reads as a deliberately low-tech, auditable approach to agent memory rather than a black-box vector store. Perplexity says memory keeps improving with every session for users who have Brain enabled.
