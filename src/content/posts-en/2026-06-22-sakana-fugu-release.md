---
title: "Sakana AI Debuts Fugu, a Multi-Agent Orchestration System Sold as a Single Foundation Model"
description: "Sakana AI launched Sakana Fugu and Fugu Ultra, an orchestration system that dynamically coordinates a pool of underlying models behind one API, which the company positions as matching frontier-model performance without export-control restrictions."
pubDate: 2026-06-22
category: sakana
type: news
tags: [Sakana AI, Fugu, multi-agent, orchestration, foundation model]
source: https://sakana.ai/fugu-release/
draft: false
importance: high
---

Sakana AI, the Tokyo-based research lab founded by David Ha and Llion Jones, released Sakana Fugu on June 22, 2026 — a multi-agent orchestration system packaged and sold through a single API as if it were one foundation model. It is the company's most ambitious commercial release to date, turning years of evolutionary and orchestration research into a product aimed squarely at frontier-model territory.

## Details

- **Two variants**: "Fugu," tuned for speed on everyday tasks, and "Fugu Ultra," tuned for maximum accuracy on hard problems
- **How it actually works**: rather than being a single trained transformer, Fugu is a model trained specifically to delegate — it selects which underlying models in a dynamic pool should handle a given subtask, dispatches the work, verifies the results, and synthesizes a final answer, all behind one unified endpoint
- **Research lineage**: builds directly on two Sakana ICLR 2026 papers, "Trinity: An Evolved LLM Coordinator" and "Learning to Orchestrate Agents in Natural Language" (the Conductor), following an earlier "Fugu beta" the company had previewed in April 2026
- **Performance claim**: Sakana says Fugu Ultra stands "shoulder-to-shoulder" with leading frontier models — the post names Anthropic's Fable 5 and Mythos Preview — on engineering, scientific, and reasoning benchmarks, while being built and hosted outside the reach of US export controls
- **Early user quotes cited by Sakana**: a software engineer said "For code review, Fugu Ultra is significantly better... It's become the model I run all my reviews through," and a security professional said Fugu "drove a full security assessment end-to-end... staying inside scope and avoiding destructive actions"
- **Strategic angle**: this is the first Sakana product to package its orchestration/evolutionary-research lineage into a sellable, frontier-class API, positioning Japan-built AI as a credible alternative to US and Chinese frontier labs

## What happened next

- Sakana iterated fast on the Fugu line: a cybersecurity-specialized variant, Fugu-Cyber, shipped on July 21, 2026, followed by Fugu-Ultra v1.1 with a Claude Code-compatible interface on July 24, 2026
- Fugu is available now through Sakana's API at sakana.ai/fugu
- Full announcement: sakana.ai/fugu-release
