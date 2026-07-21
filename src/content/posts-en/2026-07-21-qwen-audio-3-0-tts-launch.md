---
title: "Alibaba's Tongyi Lab Unveils \"Qwen-Audio-3.0-TTS\" — Claims Leaderboard Top Spot at a Third of ElevenLabs' Price"
description: Alibaba's Tongyi Lab has launched a new text-to-speech model, "Qwen-Audio-3.0-TTS," as a hosted API in Flash and Plus tiers. It supports 16 languages, claims the top spot on Artificial Analysis's TTS leaderboard, and is priced at roughly a third of rivals like ElevenLabs.
pubDate: 2026-07-20
category: qwen
type: news
tags: [Qwen, Alibaba, TTS, Text-to-Speech]
source: https://www.marktechpost.com/2026/07/20/alibabas-tongyi-lab-releases-qwen-audio-3-0-tts-a-hosted-text-to-speech-model-in-flash-and-plus-tiers-across-16-languages/
draft: false
importance: medium
---

On July 20, 2026, Alibaba's Tongyi Lab unveiled a new text-to-speech (TTS) model called "Qwen-Audio-3.0-TTS." Rather than shipping as open weights, it's offered as a hosted API through Alibaba Cloud Model Studio in two tiers — "Flash" and "Plus" — covering 16 languages. The Plus tier reportedly took the top spot on Artificial Analysis's text-to-speech leaderboard, and pricing is set at roughly a third of what competitors like ElevenLabs charge.

## Details

- **Two tiers**: "Flash" (model ID `qwen-audio-3.0-tts-flash`) is tuned for real-time conversation with first-packet latency in the 300ms range, while "Plus" (`qwen-audio-3.0-tts-plus`) prioritizes naturalness and timbre fidelity over raw speed
- **Pricing**: $27.59 per 1 million characters — roughly a third of what rivals such as ElevenLabs and MiniMax charge
- **Language support**: 16 languages including Arabic, Chinese, English, French, German, Indonesian, Italian, Japanese, Korean, Malay, Portuguese, Russian, Spanish, Tagalog, Thai, and Vietnamese, plus 20 Chinese dialect regions
- **Benchmark results**: Plus ranks #1 on the Artificial Analysis Text-to-Speech leaderboard with an Elo rating of roughly 1,236, and posts the best word/character error rate (WER/CER) in 10 of the 16 languages. Average WER/CER is 3.87 for Flash and 3.96 for Plus
- **Speaker similarity**: Plus averages 82.75 and Flash 80.44 across all languages, a claim of strong voice fidelity
- **Throughput trade-off**: Plus generates only around 16 characters per second, notably slower than competitors like Simba 3.2 (30.2 chars/sec), Gemini 3.1 Flash TTS (27 chars/sec), and Sonic 3.5 (120 chars/sec)
- **Delivery model**: API-only, not open-weight. Available via bidirectional WebSocket streaming from Singapore and Beijing regions

## How to try it

- Accessible via the DashScope SDK through Alibaba Cloud Model Studio, with sample code provided in Python, Java, Go, C#, PHP, and Node.js
- No open-weight release has been announced; usage currently requires going through the hosted API
