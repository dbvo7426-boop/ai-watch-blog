---
title: "Gemini 4 Argon Reaches Full Global Availability, Ranks #1 on the Vals Index"
description: "Google rolled out Gemini 4 Argon globally via the API, Android Studio, Google AI Ultra/Pro, and a new Antigravity agent platform, publishing a dedicated safety report showing it solved all 12 simulated cyberattack scenarios and cut prompt-injection attack success to 0.7%."
pubDate: 2026-10-13
category: gemini
type: news
tags: [Gemini, Google, Gemini4Argon, AIModels, Safety]
source: https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-argon/
draft: false
importance: high
---

Google rolled out Gemini 4 Argon to full global availability across the API, developer tools, and the Gemini app, alongside a dedicated safety and security report — a broader launch than the model's initial reveal in late September.

## Details

- **Access and pricing**: globally available to developers and enterprises via the Gemini API in AI Studio at an introductory price of $2 per million input tokens and $10 per million output tokens (cached input tokens 95% cheaper); rolling out to Google AI Ultra and Pro subscribers in the Gemini app and AI Mode in Search; Ultra subscribers also get access to Google Antigravity, Google's new agent-first development platform
- **Context limit**: a 1M unified input-output token limit with a new continuation protocol for long outputs
- **Developer access**: available in Google AI Studio, Android Studio (for Android developers), and Google Antigravity; an enterprise/startup early-access program ran before this launch with partners including security firm Wiz
- **Benchmarks**: ranks #1 on the Vals Index (covering finance, coding, legal, and tax work) and scores 87% on the ERQA embodied-reasoning benchmark; Google reports agentic code submissions up more than 35% with code rollbacks down nearly a third
- **Example applications**: a Chrome architectural refactor, a Python framework optimization cutting session prep time 40%, speedups to the xTB chemistry package and Gemma inference, quantum error-correction decoder improvements, new counterexamples in stellarator research, rare-disease genome analysis, enzyme design, and a "video-to-sim-to-real" pipeline that taught a humanoid robot a cornhole throw from video
- **Gemini app features**: more direct, less hedged responses; frequent progress updates on long tasks; a chat-to-tasks toggle that lets Gemini keep working after a user steps away; connections to more than 40 apps including Instacart, OpenTable, Adobe, and Shopify; the macOS app gains Antigravity's agentic coding interface alongside chat
- **Safety and security report**: solved all 12 simulated end-to-end cyberattack scenarios (up from 5 for the prior generation), prompting Google to apply next-generation Frontier Safety Framework safeguards to both cyber and biology domains; adversarial violation rate nearly halved versus earlier models; three real-time jailbreak defense layers (input screening, internal "activation probes," and cross-step monitoring with mid-stream cutoff); external bio-jailbreak red-teaming unlocked under 1% of tested sub-tasks; prompt-injection attack success on Gray Swan's benchmark reduced to 0.7% across 15 adaptive attempts
- **Misalignment monitoring**: honeypot tests found no covert sabotage of safety monitoring; coding-benchmark shortcut/cheating attempts fell to 2%, the best result yet for a Gemini model; an automated monitor reads both actions and chain-of-thought to flag severe violations for human review, running across products, internal coding agents, training, and evaluations
- **Science access program**: offering free six-month access to its highest Antigravity usage tier for up to 10,000 scientists, subject to eligibility and selection

## What happened next

This launch substantially broadens Gemini 4 Argon's footprint beyond the narrower reveal in late September, pairing the expanded global rollout with Google's most detailed safety and security disclosure yet for a Gemini model — including explicit Frontier Safety Framework invocation for cyber and biology risk tiers — and arrived alongside the model's own general availability in GitHub Copilot the same day.
