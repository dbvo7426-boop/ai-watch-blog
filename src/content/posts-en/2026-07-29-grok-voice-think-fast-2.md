---
title: xAI Releases "Grok Voice Think Fast 2.0" With Major Gains in Accuracy and Speed
description: xAI unveiled its voice model "Grok Voice Think Fast 2.0," with big improvements in transcription accuracy, noise resilience, and response speed. Existing users auto-upgrade on August 5.
pubDate: 2026-07-29
category: grok
type: news
tags: [Grok, xAI, voice AI, GrokVoice]
source: https://x.ai/news/grok-voice-think-fast-2
draft: false
importance: medium
---

xAI announced a new version of its voice model, "Grok Voice Think Fast 2.0." Coming less than three months after the original "Think Fast 1.0" debuted in April 2026, it's designed to listen, reason, and speak simultaneously, aiming for fluid conversation with no awkward pauses or waiting.

## Details

- **Response speed**: Time to first audio response is 0.70 seconds. Production tool calls often begin executing before the agent even finishes its first sentence
- **Benchmarks**: Scored 82.9% overall on Artificial Analysis's Speech-to-Speech Quality Index (up from 75.7% for v1.0) — ahead of GPT-Realtime-2.1 (79.1%) and Gemini 3.1 Flash (69.5%)
- **Transcription accuracy**: Claims a 1.5-2.0x improvement over Deepgram Nova 3 and ElevenLabs Scribe v2, and roughly 10x better accuracy than dedicated transcription models in noisy environments
- **Language support**: Supports more than 25 languages, with strengthened handling of noisy environments and varied accents
- **Efficiency**: Reasoning-token usage per response fell to 0.4x the previous version (roughly a 40% reduction)
- **Pricing**: $0.08 per minute of audio

## How to try it

- Starting August 5, 2026, `grok-voice-latest` will automatically move from `grok-voice-think-fast-1.0` to `grok-voice-think-fast-2.0` — no action needed for existing implementations
- Users who want to stay on the previous version can explicitly pin `grok-voice-think-fast-1.0` before the switchover
