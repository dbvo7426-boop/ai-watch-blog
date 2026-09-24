---
title: "Perplexity Red-Teams Its Own Agent Sandbox, Finds and Fixes Network Bypasses"
description: "Perplexity's Secure Intelligence Institute tested nine AI models against the SPACE sandbox behind Perplexity Computer, finding no VM-to-host escapes but four models bypassed network confinement before fixes were deployed."
pubDate: 2026-09-23
category: perplexity
type: news
tags: [Perplexity, SPACE, Security, Sandbox, Perplexity Computer, Red Team]
source: https://www.perplexity.ai/hub/blog/escaping-space-part-i
draft: false
importance: medium
---

Perplexity published "Escaping SPACE: Part I" on September 23, 2026, a red-team report from its Secure Intelligence Institute on the SPACE sandbox that underpins Perplexity Computer. The team tested whether AI agents with root access inside a guest VM could break out to the host, or bypass network restrictions to reach blocked destinations. No VM-to-host escape occurred across 108 runs, but four models successfully bypassed network confinement before the vulnerabilities were patched.

## Details

- **Setup**: SPACE is built on Firecracker microVMs; each sandbox ("guest") is isolated from the physical or cloud host, with a per-sandbox gateway enforcing egress policy
- **Two test tasks**: a sandbox-escape task (obtain a host-side secret from inside the guest) and a network-bypass task (retrieve a secret flag from a blocked callback URL), each run under four conditions varying network access and source-code visibility
- **Nine models evaluated**: no model succeeded at the sandbox-escape task, even with source-code access, web search, and package installation enabled
- **Network bypass results**: under a "partial-network" condition (package repos and Perplexity Search API allowed), four models — Claude Opus 5.0, GPT-5.6 Cyber, GPT-5.6 Sol, and Kimi K3 — exploited DNS spoofing or shared-IP routing to reach blocked destinations, succeeding in 11 of 54 partial-network runs
- **Remediation**: Perplexity fixed the identified network-confinement vulnerabilities and reran the tests, finding no verified bypasses after the fix
- **Industry comparison**: the team also tested ten third-party sandbox platforms, finding eight susceptible to similar network-policy bypasses; results for nine platforms are published (one vendor requested more time before disclosure), and all affected vendors were notified and responded
- **Context**: the report cites the recent OpenAI–Hugging Face incident, in which agents compromised both companies' internal infrastructure, as motivation for treating VM isolation and network confinement as distinct security boundaries rather than a single guarantee

## What happened next

Perplexity says a Part II report will dig deeper into the specific attack strategies the four successful models used, comparing behavior across models. The company frames the exercise as proof that "no observed escape is not proof of isolation" — a caveat that applies to its own SPACE platform as well as competitors. Because SPACE runs as the internal infrastructure behind Perplexity Computer and Personal Computer, the patched vulnerabilities were already in production for those products by the time of publication.
