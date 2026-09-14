---
title: "Devin's New 'Fusion' Harness Pairs a Frontier Model with a Cheaper Sidekick to Cut Coding Costs Up to 39%"
description: "Cognition introduced Fusion, a dual-agent harness for Devin Desktop and CLI that runs a frontier lead model like Fable 5.1 alongside a cheaper sidekick like SWE-2, sharing only briefs and results instead of full context to cut costs up to 39% versus Claude Code or Codex alone."
pubDate: 2026-09-11
category: devin
type: news
tags: [Devin, Cognition, Fusion, SWE-2, AgentArchitecture]
source: https://cognition.com/blog/local-fusion
draft: false
importance: medium
---

Cognition launched Fusion on September 11, 2026, a new multi-agent harness for Devin Desktop and CLI that it calls the most efficient frontier harness for Fable and Astra, claiming up to 39% better efficiency than other model harnesses across major coding benchmarks.

## Details

- **Two-agent structure**: a "lead" agent runs a frontier model (Cognition recommends Fable 5.1) that handles planning, task interpretation, and review, while a "sidekick" agent runs a cheaper model (recommended: SWE-2) that handles implementation, code exploration, testing, and execution
- **How context is shared**: instead of passing full conversation histories back and forth, the two agents exchange only briefs, results, and feedback, letting each maintain its own persistent context and keep prompt caching effective
- **Lead stays in control**: the frontier model reviews the sidekick's work and can step back in directly when needed, rather than fully delegating
- **Cost results**: Fable 5.1 paired with SWE-2 runs 36% cheaper than Claude Code alone, and Astra paired with SWE-2 runs 39% cheaper than Codex alone
- **Benchmark-level numbers**: DeepSWE 1.1 scores 63.1 at $7.88 (46% savings); Terminal-Bench 4 scores 56.1 at $13.37 (23% savings); SWE-Atlas QnA scores 65.9 at $5.00 (34% savings); Vals Code Migration scores 57.3 at $42.00 (41% savings)
- **Key finding Cognition highlights**: pairing a stronger sidekick model often lowers overall cost through better efficiency, not just because the sidekick's per-token price is lower
- **Availability**: live now in Devin Desktop and CLI, installable via `curl -fsSL https://cli.devin.ai/install.sh | bash`

## What happened next

Fusion arrived one day after Cognition shipped SWE-2, the cost-efficient model it recommends as Fusion's default sidekick — the two releases were clearly built to launch together. By keeping the two agents' contexts separate rather than switching models mid-task and breaking prompt caches, Cognition is betting that routing work to the right-sized model architecture, not just a cheaper model alone, is what actually lowers the cost of agentic coding. Full benchmark tables and setup instructions are on Cognition's blog at cognition.com/blog/local-fusion.
