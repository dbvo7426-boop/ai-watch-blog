---
title: "OpenAI Details Its EU Text-Provenance Approach, Rolling Out Invisible 'textGrain' Watermarking"
description: "OpenAI outlined how it will comply with EU AI Act text-provenance rules, launching an invisible watermarking technology called textGrain for ChatGPT and Codex in the EU, with global API opt-in, while disclosing detection limits such as a drop to 17% after heavy editing."
pubDate: 2026-10-05
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, EUAIAct, Watermarking, ContentProvenance]
source: https://openai.com/index/eu-text-provenance
draft: false
importance: medium
---

OpenAI detailed its approach to complying with EU AI Act text-provenance requirements, centered on a new invisible text watermarking technology called "textGrain."

## Details

- **Phased rollout**: API customers worldwide can opt into watermarking for select models starting now; over the coming weeks, ChatGPT and Codex will add watermarks to eligible text for users in the EU specifically, not globally
- **Detector access**: approved researchers and expert organizations can apply for limited access to a watermark-detection tool
- **Disclosed limitations**: detection accuracy drops sharply on short text (about 80% for 200-token passages vs. 95% for 400-token passages); heavy editing significantly weakens the watermark, with replacing 25% of words cutting detection to roughly 17%; mathematical content is harder to watermark reliably than flexible prose
- **Explicit caveats**: OpenAI states watermarks cannot measure human contribution, establish ownership, identify individual users, or verify factual accuracy — "the absence of a detected watermark does not prove human authorship"
- **Framing**: positioned as one layer within a broader content-provenance strategy rather than a complete solution

## What happened next

The release extends OpenAI's pattern of pairing new compliance-driven technical capabilities with candid disclosure of their limitations, similar in tone to its safety cases framework and incident postmortems — and gives EU regulators and researchers a concrete, if imperfect, tool for text provenance ahead of stricter AI Act enforcement deadlines.
