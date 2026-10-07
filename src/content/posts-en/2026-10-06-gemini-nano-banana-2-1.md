---
title: "Google Launches Nano Banana 2.1, a Faster, Cheaper Update to Its Gemini Image Model"
description: "Google released gemini-nano-banana-2.1, generally available in the Gemini API, with 4K output, 14-reference-image fusion, better text rendering, and search grounding, rolling out across the Gemini app, AI Mode, Flow, Stitch, and Google Ads."
pubDate: 2026-10-06
category: gemini
type: news
tags: [Gemini, Google, NanoBanana, ImageGeneration, GeminiAPI]
source: https://ai.google.dev/gemini-api/docs/models/gemini-nano-banana-2.1
draft: false
importance: medium
---

Google released Nano Banana 2.1, an updated image generation and conversational-editing model, as `gemini-nano-banana-2.1` in the Gemini API, with the earlier `gemini-3.1-flash-image` model now marked deprecated.

## Details

- **Model**: `gemini-nano-banana-2.1`, described by Google as its "latest high-efficiency image generation and conversational editing model," positioned as the more efficient counterpart to Nano Banana Pro
- **Resolution**: outputs at 1K (default), 2K, and 4K, including wide and panoramic aspect ratios (1:4, 4:1, 1:8, 8:1) with previously reported tiling artifacts fixed
- **Reference images**: multi-image fusion supporting up to 14 reference images at once, maintaining consistency for up to 4 characters and 10 objects across a conversation
- **Other capabilities**: grounding with Google Web and Image Search, configurable "thinking" levels (minimal, medium, high), and Batch API support; input token limit of 131,072 and output token limit of 32,768, accepting text, image, video, and PDF input
- **Quality claims**: Google says the model improves visual quality and realism, text rendering, and infographic layout accuracy over the prior Nano Banana 2
- **Rollout**: generally available in the Gemini API now, and rolling out across the Gemini app, AI Mode in Search, Google AI Studio, Flow, Stitch, Google Ads, and the Gemini Enterprise Platform

## What happened next

The release continues Google's rapid iteration cadence on its image-generation line, following Nano Banana 2 earlier in the year, and arrives as competing labs push their own multimodal and agentic image tools — reinforcing image generation and editing as one of the more actively contested fronts among the major AI labs this quarter.
