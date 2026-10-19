---
title: "Google Shuts Down Veo 2 and Veo 3.0 in the Gemini API as Gemini Omni Flash Enters Preview"
description: "On June 30, 2026, Google retired the veo-2.0 and veo-3.0 model IDs in the Gemini API, pointing developers to Veo 3.1, and on the same day opened a public preview of Gemini Omni Flash for video generation and conversational editing."
pubDate: 2026-06-30
category: veo
type: news
tags: [Google, Veo, Veo3.1, GeminiOmni, GeminiAPI, Deprecation, VideoGeneration]
source: https://ai.google.dev/gemini-api/docs/changelog
draft: false
importance: medium
---

June 30, 2026 marked a turnover in Google's developer-facing video models. The Gemini API shut down its Veo 2 and Veo 3.0 endpoints — consolidating the Veo line around Veo 3.1 — and on the same day launched a public preview of Gemini Omni Flash, the video generation and editing model Google had unveiled at I/O 2026.

## Details

- **Shutdown announced June 15**: the Gemini API changelog listed `veo-2.0-generate-001`, `veo-3.0-generate-001`, and `veo-3.0-fast-generate-001` for shutdown on June 30, 2026
- **Migration path**: developers were told to move to the Veo 3.1 preview IDs (`veo-3.1-generate-preview`, `veo-3.1-fast-generate-preview`) or to the Veo 3.1 GA models on the Gemini Enterprise Agent Platform
- **Remaining Veo lineup**: after the cutoff, Veo in the Gemini API means the Veo 3.1 family — Veo 3.1, Veo 3.1 Fast, and Veo 3.1 Lite (the "most cost-efficient" Veo, in preview since March 31, 2026). Veo gained 4K output and expanded portrait support in January 2026
- **Gemini Omni Flash preview**: `gemini-omni-flash-preview` launched the same day as a model for high-speed video generation and conversational video editing
- **Omni preview capabilities**: through the Interactions API, it generates 3–10 second 720p videos from text or animates still images, then lets developers refine the output conversationally
- **No Veo 4**: the changelog contains no Veo 4 model, and no entry describes Omni as a replacement for Veo; the two are listed as separate models

## What happened next

Retiring Veo 2 and 3.0 cleaned up Google's video API at the same moment a new model family arrived next to it. Two months later, on August 27, Gemini Omni reached GA as `gemini-omni-1.1-flash` with scene extension up to 40 seconds, frame interpolation, and 4K upscaling, and the preview endpoint was scheduled to be retired on September 30. Veo 3.1 remains Google's listed flagship video model, but with new capabilities flowing into Omni and no Veo 4 announced, developers building on Veo should watch whether the 3.1 family follows its predecessors into deprecation.
