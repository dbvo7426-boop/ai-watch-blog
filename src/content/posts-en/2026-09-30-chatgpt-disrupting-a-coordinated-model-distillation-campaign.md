---
title: "OpenAI Discloses Disruption of Coordinated Model-Distillation Campaign Linked to Moonshot AI"
description: "OpenAI disrupted an adversarial distillation campaign that attempted to extract protected model reasoning through novel techniques, attributing a core cluster to individuals associated with Moonshot AI and identifying over 15,000 users with related extraction patterns before shutting it down."
pubDate: 2026-09-30
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, Security, ModelDistillation, MoonshotAI]
source: https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign
draft: false
importance: medium
---

OpenAI disclosed that it disrupted a coordinated campaign of "adversarial distillation" — the unauthorized use of one model's outputs or protected reasoning to train, reproduce, or improve another model — without any breach of encryption or databases.

## Details

- **Attribution**: OpenAI attributed a core cluster of the activity to "individuals associated with Moonshot AI, the developer of Kimi," while noting uncertainty over whether all observed operators were part of a single actor
- **Methods**: attackers used novel extraction techniques, including copying encrypted reasoning from one conversation and prompting a different model to decrypt and transcribe the hidden content, manipulating interactions to expose protected reasoning in ways that violated OpenAI's terms of service
- **Scale and timeline**: low-volume activity began July 1; a high-volume spike of 16,000 requests occurred July 24–25 involving over 4,000 users on the specific extraction pattern, within a broader cluster of more than 15,000 users showing related prompt patterns; OpenAI says the campaign was fully disrupted by July 28
- **Response**: account bans and signup/infrastructure restrictions, expanded monitoring for related networks, strengthened protections for hidden reasoning across users and organizations, closed pathways for replaying encrypted reasoning, new detection for streamed outputs that expose reasoning, coordination with third-party services, and information-sharing through the Frontier Model Forum and government channels

## What happened next

The disclosure extends OpenAI's growing public pattern of incident transparency — following the Hugging Face postmortem, the misalignment reporting framework, and the "safety cases" training framework — this time applied to external adversarial activity rather than internal training risk, and adds a concrete, named episode to the ongoing competitive friction between OpenAI and Chinese model developers over reasoning-model IP.
