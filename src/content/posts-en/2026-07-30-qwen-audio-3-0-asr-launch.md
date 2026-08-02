---
title: "Alibaba's Tongyi Lab Launches \"Qwen-Audio-3.0-ASR\" Speech Recognition Models — Covers 7 Chinese Dialect Groups and 30 Languages"
description: Alibaba's Tongyi Lab has released a new automatic speech recognition (ASR) lineup, "Qwen-Audio-3.0-ASR," as a hosted API. It ships streaming and file-transcription variants covering China's seven major dialect groups, 20+ regional accents, and 30 languages overall.
pubDate: 2026-07-30
category: qwen
type: news
tags: [Qwen, Alibaba, ASR, Speech Recognition]
source: https://docs.qwencloud.com/changelog/models
draft: false
importance: medium
---

On July 30, 2026, Alibaba's Tongyi Lab released a new automatic speech recognition (ASR) lineup called "Qwen-Audio-3.0-ASR." It follows the "Qwen-Audio-3.0-TTS" text-to-speech model launched earlier the same month (July 20), rounding out the Qwen-Audio 3.0 generation with a recognition counterpart. The lineup ships three variants — a real-time streaming model, a file-transcription model, and a standard model — covering China's seven major dialect groups plus 20+ regional accents, and 30 languages overall.

## Details

- **Three variants**: `qwen-audio-3.0-asr-flash-streaming` for real-time streaming recognition, `qwen-audio-3.0-asr-flash-filetrans` for asynchronous transcription of long audio files, and a general-purpose `qwen-audio-3.0-asr-flash`
- **Chinese dialect coverage**: Recognizes seven major dialect groups — Mandarin, Wu, Xiang, Gan, Hakka, Min, and Yue (Cantonese) — plus 20+ regional accents
- **Language coverage**: Supports 30 languages including Chinese, English, Japanese, and Korean
- **Specialized recognition features**: Optimized accuracy for classical Chinese poetry, plus enhanced inverse text normalization (ITN) for numbers and dates
- **Free quota**: Some reports indicate a 10-hour free usage allowance
- **Availability**: Offered as a hosted API via Alibaba Cloud Model Studio (DashScope) and the Qianwen AI platform

## How to try it

- Accessible via the DashScope SDK through Alibaba Cloud Model Studio
- No open-weight release has been announced; usage currently requires going through the hosted API
