---
title: "OpenAI Launches GPT-Live-1, a Full-Duplex Voice Model That Cuts Interruptions by 80%"
description: "OpenAI's new GPT-Live-1 API model listens and speaks simultaneously rather than turning speech into text and back, reducing interruptions by nearly 80% versus turn-based systems and ranking #1 on Tau3 when paired with GPT-6 Astra, priced at $0.05 per minute."
pubDate: 2026-09-10
category: chatgpt
type: news
tags: [OpenAI, ChatGPT, GPTLive1, VoiceAI, API]
source: https://openai.com/index/introducing-gpt-live-1-in-the-api
draft: false
importance: high
---

OpenAI launched GPT-Live-1, a voice model built for natural, full-duplex conversation — listening and speaking at the same time in a single unified architecture rather than chaining separate speech-to-text, language model, and text-to-speech components.

## Details

- **Interruption handling**: cuts interruptions by nearly 80% compared to turn-based voice systems by reasoning over audio simultaneously rather than waiting for a full turn to end
- **Conversational naturalness**: manages background noise, silence, and side conversations without breaking the flow of dialogue
- **Tool delegation**: routes complex reasoning tasks to backend models like GPT-6 Astra while keeping the live conversation continuous
- **Customization**: developers can shape tone, pace, and conversational style through the system prompt, and eligible customers can request custom voices
- **Benchmarks**: improves Full Duplex Bench performance by 30 percentage points over GPT-Realtime-2.1, and ranks #1 on Tau3 when paired with GPT-6 Astra for frontier voice-agent intelligence
- **Telephony-ready**: supports full-duplex voice agents for phone-based applications, with demonstrated use cases including restaurant reservations, customer support, language tutoring, and banking with knowledge retrieval and account tools
- **Pricing and availability**: $0.05 per minute for the front-end voice layer, available immediately in the API

## What happened next

GPT-Live-1 gives developers a voice front-end explicitly designed to pair with reasoning models like GPT-6 Astra rather than working as a standalone voice bot, positioning OpenAI's voice stack around a division of labor between fast conversational handling and deeper backend reasoning.
