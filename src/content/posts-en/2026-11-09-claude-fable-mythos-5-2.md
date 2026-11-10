---
title: "Anthropic releases Claude Fable 5.2 and Mythos 5.2 at lower prices than 5.1"
description: "Fable 5.2 is open to all users and Mythos 5.2 is limited to verified organizations. Both have a 1M-token context window, output up to 30% faster than 5.1, and cost $8 per million input tokens and $40 per million output tokens."
pubDate: 2026-11-09
category: claude
type: news
tags: [Claude, Anthropic, Fable 5.2, Mythos 5.2, Frontier Model]
source: https://www.anthropic.com/claude-fable-and-mythos-5-2
draft: false
importance: high
---

Anthropic launched Claude Fable 5.2 and Claude Mythos 5.2, calling them its most capable models for daunting technical work. Anthropic says they are the same underlying model: Fable has strong cybersecurity and biology safeguards and is available to all users, while Mythos is offered to organizations verified through the Cyber and Life Sciences Verification Programs.

## Details

- **Price and speed:** $8 per million input tokens and $40 per million output tokens, down from $10 and $50 for Fable 5.1 and Mythos 5.1. Output is up to 30% faster than 5.1. An optional fast mode generates tokens up to 2.5 times faster at $16 per million input and $80 per million output.
- **Specs (API):** model IDs `claude-fable-5-2` and `claude-mythos-5-2`, 1M-token context window, 128k max output tokens, adaptive thinking always on. Available on the Claude API, Claude Platform on AWS, Amazon Bedrock, Google Cloud (both Anthropic-managed and Google-managed) and Microsoft Foundry.
- **Benchmarks (Anthropic-reported, safeguards on):** FrontierCode 2.0 49.1% at Xhigh effort (Fable 5.1: 32.4%, Opus 5.5: 45.5%); FrontierSWE v2 69.9%; Terminal-Bench-Science 0.1 74.6% (Mythos 5.2: 75.3%); OSWorld 2.1 89.3%; Remote Labor Index 41.3% (Fable 5.1: 17.9%); Humanity's Last Exam with tools 74.2%. Anthropic's table also lists GPT-6 Astra and Gemini 4 Carbon as comparisons.
- **Efficiency:** at Medium effort, the default in Claude apps and Claude Code, Fable 5.2 uses fewer tokens than 5.1. On FrontierCode 2.0, Fable 5.2 at High effort scored about level with Opus 5.5 at Max effort for roughly half the cost per task.
- **Cybersecurity:** Mythos 5.2 found 10.2% more vulnerabilities than Opus 5.5 and 14.4% more than Mythos 5.1 on Anthropic's CVE Rediscovery evaluation. Fable 5.2's safeguards block most cybersecurity tasks. Claude Enterprise customers can use Claude Security, which now runs on Mythos 5.2.
- **Anthropic's examples:** a Python-to-Rust migration of a production service that now starts about 26 times faster; a prototype operating system built by over 1,000 subagents over eight days; two open black-hole physics problems; a whole-capsid structure prediction method (28 of 34 capsids modeled accurately); and a formalization of the proof of Fermat's Last Theorem in 30 hours.
- **Safety:** Anthropic says Fable 5.2's cyber and biology safeguards are as robust as Fable 5.1's with fewer unnecessary blocks, and it has its strongest-ever protections against distillation attacks. A system card is published.
- **When to use it:** Anthropic recommends starting with Claude Opus 5.5 for most work and moving up to Fable or Mythos for the hardest tasks. Fable 5.2 can also act as an advisor or an orchestrator for smaller models.

## Notes for API users

- Both models require 30-day data retention and are not available under zero data retention unless Anthropic expressly authorizes it.
- The thinking-block prefix check applies to every account, so a request that edits the system prompt, tools or an earlier message and then sends back a thinking block returns a 400 error.
- Fable 5.2 thinking blocks are read only by Fable 5.2 and Mythos 5.2.
- The earlier `computer_20251124` tool returns an error on every platform except Amazon Bedrock; use `computer_toolset_20260801`.
- With the advisor tool (beta), a Fable 5.2 or Mythos 5.2 executor needs a Fable 5.2 or Mythos 5.2 advisor.
