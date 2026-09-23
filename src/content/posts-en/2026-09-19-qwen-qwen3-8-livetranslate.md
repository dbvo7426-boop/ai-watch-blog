---
title: "Qwen3.8-LiveTranslate Cuts Real-Time Interpretation Lag to 2.3 Seconds"
description: "Alibaba's Qwen team released Qwen3.8-LiveTranslate, a simultaneous-interpretation model using a new Interleave architecture that lowers average lag from 2.8 to 2.3 seconds across 60 languages."
pubDate: 2026-09-19
category: qwen
type: news
tags: [Qwen, Alibaba, Translation, Speech AI, Qwen3.8]
source: https://qwen.ai/blog?id=qwen3.8-livetranslate
draft: false
importance: medium
---

Alibaba's Qwen team released Qwen3.8-LiveTranslate on September 19, 2026, a model that listens to live speech — with optional video frames — and returns translated text and speech while the speaker is still talking, aimed at closing the gap with human simultaneous interpreters.

## Details

- **New Interleave architecture**: restructures how the model balances latency against context, interleaving translation output with incoming source speech instead of waiting for longer chunks before translating
- **Faster response**: average lagging (LAAL) drops from 2.8 seconds to 2.3 seconds versus the prior approach, an improvement Qwen says comes without sacrificing faithfulness or fluency
- **Wide but tiered language support**: understands 60 languages; produces spoken output in 29 of them (including Chinese, English, Arabic, German, French, Spanish, Japanese, Korean, and Hindi), with the remaining languages limited to text output
- **New capabilities**: real-time speaker diarization that preserves each speaker's voice, a synchronized bilingual display showing source and translated text together, and long-context disambiguation that uses conversation history to keep terminology consistent
- **Availability**: accessible only through API, as `qwen3.8-livetranslate-flash-realtime`, via Alibaba Cloud Model Studio and QwenCloud over WebSocket

## What happened next

Qwen3.8-LiveTranslate arrived one day after Qwen3.8-Omni-Flash, underscoring how Alibaba's Qwen team is splitting its omnimodal push into specialized models — one for general audio-visual agentic tasks, another purpose-built for live interpretation. The narrower focus on lag reduction targets a use case, such as live conferences and calls, where even small delays are highly noticeable to human listeners.
