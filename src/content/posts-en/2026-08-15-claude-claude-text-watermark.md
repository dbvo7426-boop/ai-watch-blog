---
title: "How Claude's Text Watermarking Works"
description: "Anthropic will start watermarking text from future Claude models using SynthID-Text, a technique that biases word-choice randomness in a detectable but statistically invisible way, driven primarily by the EU AI Act's transparency requirements for AI-generated content."
pubDate: 2026-08-14
category: claude
type: news
tags: [Claude, Anthropic, Watermarking, SynthID, EU AI Act, Safety]
source: https://www.anthropic.com/news/claude-text-watermark
draft: false
importance: medium
---

Anthropic has announced that future Claude models will generate text carrying an invisible watermark, using SynthID-Text — a technique originally published by Google DeepMind in a 2024 *Nature* paper — to help determine the likelihood that a given piece of text came from Claude.

## Details

- **How the watermark is embedded**: When Claude generates text, there are frequently multiple, roughly equally good word choices at a given point. Anthropic's blog post explains that "watermarking uses low-stakes choices like these — which occur many times over a piece of generated text — to leave a pattern in Claude's responses." Instead of selecting among those options with ordinary randomness, the system uses a cryptographic key plus the preceding words to determine the choice, so the text still reads as normal, statistically unremarkable writing to a human, but the pattern becomes detectable to anyone holding the key
- **Why now — the EU AI Act**: The rollout is driven largely by regulatory compliance. Anthropic was among roughly 190 signatories of the EU's Code of Practice on Transparency of AI-Generated Content, signed in July 2026. Because the watermarking system can't yet be scoped to specific regions, it will apply globally at launch rather than only for EU users
- **Which models get it**: The feature applies to "future Claude models." Models that launched before August 2, 2026 will have watermarking added gradually "over the coming months" rather than immediately
- **Detection**: Anthropic plans to offer a watermark detection API, though implementation details haven't been finalized. Critically, a positive detection only indicates Claude was probably involved — it cannot confirm that a human wrote no part of the text, and it can't detect content from other AI systems using different watermarking schemes
- **Where the signal is weak**: Watermark strength depends on text length and how much genuine word-choice freedom existed. It's sparse in factual text that requires specific terminology, minimal in heavily human-edited content, and generally weak in code, since most programming contexts require exact, unambiguous output rather than free word choice
- **No cost to users**: Anthropic says watermarking has a negligible impact on model speed, produces no extra output tokens, embeds no traceable personal or organizational data, and showed no measurable impact on content quality, creativity, or readability in internal testing

## What happened next

Watermarking gives Anthropic a technical answer to a regulatory requirement rather than a silver bullet against misuse — the company is explicit that the signal degrades on short, factual, or heavily edited text and says nothing about non-Claude-generated content. The planned detection API is the next piece to watch, since today's announcement covers only how the watermark is embedded, not yet how outside parties will be able to check for it.
