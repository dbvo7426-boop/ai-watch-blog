---
title: "Mistral Launches Voxtral 3 Speech Models and a Real-Time Voice Agent SDK"
description: "Mistral AI released Voxtral 3, a family of speech-to-text and text-to-speech models plus a voice agent SDK that runs listening, reasoning, tool calling and speaking as one streaming pipeline."
pubDate: 2026-10-20
category: mistral
type: news
tags: [Mistral, Voxtral, speech-to-text, text-to-speech, voice agents]
source: https://mistral.ai/news/voxtral-3
draft: false
importance: high
---

On October 20, 2026, Mistral AI introduced Voxtral 3, a new family of speech-to-text and text-to-speech models together with a voice agent SDK. The goal is to let developers build agents that listen, reason, speak and take multi-step actions in real time, with an option for sovereign deployment in the EU or on a customer's own infrastructure.

## Details

- **Voxtral Small Transcribe 3**: speech-to-text across 50+ languages (including the 24 official EU languages), with diarization, context biasing and end-of-turn detection. Mistral says it outperforms Whisper, Scribe v2 and Gemini 3.5 Transcribe on its benchmarks.
- **Voxtral Mini Transcribe 3**: a 4B-parameter variant priced at $0.0035 per minute.
- **Voxtral Realtime Transcribe 3**: streaming transcription with sub-500ms latency in 35+ languages, including diarization and context biasing.
- **Voxtral Mini TTS 3**: text-to-speech in 35+ languages and 50+ dialects, with emotion, pacing and emphasis controls; priced at $13 per 1M characters. Voice cloning works from 30+ minutes of audio, and a Pro Voice adaptation is offered for professional use.
- **Voice agent SDK**: built on LiveKit, it chains transcription, a general LLM (for example Mistral Small) and TTS in one streaming pipeline, with each turn completing in under one second according to Mistral. It supports function calling, web search, retrieval, SIP telephony and WebRTC.
- **Availability**: available today through the Mistral API on European, US and global endpoints, and for self-deployment. Playgrounds are available in Studio.

## What happened next

Voxtral 3 moves Mistral from standalone audio models toward a full voice-agent stack, aimed at contact centers, service desks and assistants. The emphasis on EU hosting and self-deployment, plus swappable components (LLM, voice, language), positions it as a sovereign alternative to US voice-AI vendors. Benchmark claims are Mistral's own and have not been independently verified; open-weight availability was not stated in the announcement.
