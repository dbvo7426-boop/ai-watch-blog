---
title: "OpenAI Details the Six-Month Engineering Overhaul Behind GPT-Live's Full-Duplex Voice"
description: "OpenAI published a technical deep-dive on how it rebuilt ChatGPT's voice stack for GPT-Live, introducing the open WARP transport protocol and Instant Connect to cut session startup to a single UDP packet."
pubDate: 2026-08-03
category: chatgpt
type: news
tags: [ChatGPT, Voice, GPT-Live, Engineering, WARP]
source: https://openai.com/index/continuous-voice-interaction-with-gpt-live/
draft: false
importance: medium
---

OpenAI published an engineering deep-dive explaining how it rebuilt ChatGPT's voice infrastructure over six months to create GPT-Live, the full-duplex voice system introduced earlier this year. The post details the architectural rework behind natural, interruptible conversation, including a new open transport protocol called WARP and a fast-connect feature called Instant Connect.

## Details

- **Removing the turn detector bottleneck**: Earlier voice AI architectures relied on a separate "turn detector" component to decide when a user finished speaking. GPT-Live's full-duplex design lets the model listen and speak simultaneously instead, removing that bottleneck entirely
- **WARP (WebRTC Abridged Roundtrip Protocol)**: A new open specification OpenAI developed to speed up connection setup by taking the SDP exchange off the critical path and collapsing the transport handshake
- **Instant Connect**: Paired with WARP, this lets a client start a live voice session with a single UDP packet, dramatically cutting the time from user intent to live media flow
- **Asynchronous delegation**: GPT-Live can consult frontier models like GPT-5.5 for complex reasoning or tool use in the background without interrupting the flow of conversation
- **Stateful inference**: Long-running conversations are supported through seamless handoffs between model instances and context compaction, so sessions can continue smoothly over extended periods
- **Context**: This is a technical follow-up to GPT-Live's original launch, focused on the underlying engineering rather than new user-facing features

## What happened next

- The improvements described are already powering ChatGPT's voice mode across platforms
- OpenAI reiterated that an API version of GPT-Live is planned, which would let developers build on the same low-latency, full-duplex transport
