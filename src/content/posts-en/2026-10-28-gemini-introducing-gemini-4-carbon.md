---
title: "Google announces Gemini 4 Carbon, a cybersecurity-focused frontier model, with limited access for cyber defenders first"
description: "Gemini 4 Carbon ranks #1 on the Artificial Analysis Intelligence Index v5.0 and posts state-of-the-art cybersecurity benchmark scores. Access starts with a subset of cyber defenders; general availability is not yet dated."
pubDate: 2026-10-28
category: gemini
type: news
tags: [Gemini 4, Gemini 4 Carbon, Google DeepMind, Cybersecurity, Frontier Model]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/
draft: false
importance: high
---

Google announced Gemini 4 Carbon on October 28, 2026, calling it its strongest model, with state-of-the-art cybersecurity and long-horizon capabilities. It arrives two weeks after Gemini 4 Argon. Carbon is not yet broadly available: access starts this week for a subset of cyber defenders.

## Details

- **Ranking:** #1 on the updated v5.0 of the Artificial Analysis Intelligence Index, with a score of 59.
- **Cyber benchmarks (evaluated without guardrails):** SEC-bench Pro 88.2% (finding vulnerabilities), ExploitGym 54.8% (exploitation), CWE-bench 71.0% (patching).
- **Secure code:** more than 2x uplift in success rate for generating secure code over Argon on internal benchmarks. Google says the Chrome team reported Carbon performed more than 10x better than another lab's large frontier model at generating high-quality patches.
- **Long-horizon work:** internally, Carbon has run for days on multi-step engineering tasks such as root-causing and patching subtle bugs across large codebases and low-level systems.
- **WebDev Arena:** up 89 Elo points to #4 (1768).
- **Alignment:** successful cheating on Terminal-Bench 4.0 reduced to 0.0% (attempts 0.4%); high-severity misalignment alerts in internal live coding down almost 80%; unsupported claims cut about 2x versus Argon; overreach down 26% and under-service down 29%.
- **Prompt injection:** 0.0% attack success rate on Gray Swan's Indirect Prompt Injection benchmark (Argon: 0.7%).
- **Rollout:** available this week to a subset of cyber defenders, then phased to more trusted partners through the Fairwind Program. Google says it is taking part in the U.S. government's voluntary pre-release model testing process.
- **Pricing:** same introductory price as Argon: $2 per million input tokens and $10 per million output tokens, with cached input tokens 95% cheaper. General availability date for developers, businesses and consumers: undisclosed ("as soon as possible").

## What happened next

The staged release, security partners first, mirrors a pattern in which frontier labs gate cyber-capable models behind trusted-access programs. The practical question for developers is when Carbon reaches the API and the Gemini app; Google gave no date. The headline numbers are Google-reported (some on internal benchmarks), so independent replication will matter, especially for the cyber results.
