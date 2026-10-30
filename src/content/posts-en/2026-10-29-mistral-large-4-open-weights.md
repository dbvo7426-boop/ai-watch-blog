---
title: "Mistral releases open weights for Mistral Large 4 (Le Chonk)"
description: "Mistral published the open weights of its 1-trillion-parameter multimodal flagship Mistral Large 4, after a public preview earlier in October, with improved coding and agent benchmarks."
pubDate: 2026-10-29
category: mistral
type: news
tags: [Mistral, Open weights, Coding, Mistral Large 4]
source: https://mistral.ai/news/mistral-large-4-oss/
draft: false
importance: high
---

Mistral released the open weights of Mistral Large 4, nicknamed Le Chonk, on October 29, 2026, following a public preview earlier in the month. It is a 1-trillion-parameter, natively multimodal model trained from scratch on European infrastructure, which Mistral calls the best open-weight model for coding.

## Details

- **Coding:** 19.7% on Cognition's private FrontierCode 2.0; 48% on the Artificial Analysis Coding Agent Index (roughly tied with GLM-5.3, with 47% fewer tokens per task); 41% on Terminal-Bench 4.0, up 13 points from the preview. In Surge Code blind evaluations it ranked behind only Claude Opus 5.5.
- **Reasoning modes:** Low, Medium and High (the default).
- **Agents and work:** 73.3% on FinWorkBench, second to Kimi K3 among open models; 84.5% on BrowseComp; resists 97.1% of attacks on the B3 Agent Security Benchmark.
- **Cybersecurity:** 51% on the Artificial Analysis Cyber Index and an average 96.6% refusal rate for malicious cyber requests. Mistral says it is modifying guardrails after seeing potential uplift for real attacks, and a penetration-testing variant is in vetted preview with partners such as Orange Cyberdefense.
- **License:** Mistral Ecosystem Open-Weight license, a modified MIT license. Model-as-a-Service operators need a separate commercial license.
- **Availability:** Mistral Studio, the Mistral API, OpenRouter, Hugging Face (Mistral-Large-4-1T-A52B, for vLLM or SGLang), NVIDIA endpoints and NIM, Microsoft Foundry and Vibe Code.
- **Pricing:** $0.70 per million input tokens, $0.07 cached input, $2.10 output.
- **Technical report:** Described as coming soon.

## What happened next

The weights release turns the October preview into something teams can self-host and fine-tune, with three more weeks of RL behind the gains. Mistral says Large 4 will be the base for more specialized models. The scores are vendor-reported; the technical report has not yet been published.
