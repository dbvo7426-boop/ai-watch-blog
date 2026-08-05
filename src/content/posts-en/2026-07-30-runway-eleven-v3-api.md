---
title: "Runway API Adds ElevenLabs' Eleven v3 for Expressive Text-to-Speech"
description: "Runway's developer platform now offers ElevenLabs' Eleven v3 model through its text-to-speech endpoint, letting developers generate expressive speech with inline audio tags like [laughs] and [whispers], alongside the same sunset of Gen-3 Alpha Turbo and Gen-4 Aleph."
pubDate: 2026-07-30
category: runway
type: news
tags: [Runway, Runway Dev, ElevenLabs, text-to-speech, API]
source: https://docs.dev.runwayml.com/api-details/api_changelog/
draft: false
importance: medium
---

Runway has added ElevenLabs' Eleven v3 model to its developer API, giving Runway Dev users access to expressive text-to-speech generation directly through Runway's own text-to-speech endpoint, rather than needing a separate ElevenLabs integration.

## Details

- **What's new**: Eleven v3 is now available via the Runway API's text-to-speech endpoint, bringing ElevenLabs' most expressive voice model into Runway's unified media generation stack
- **Expressive delivery**: The model supports inline audio tags such as `[laughs]` and `[whispers]` written directly into the input script, letting developers direct tone and delivery without separate parameters
- **Voice presets**: Eleven v3 uses the same preset voice library that was already available for the prior Multilingual v2 model, so existing voice selections carry over
- **Pricing**: Runway bills the new model at 1 credit per 50 characters of input text, with a 1-credit minimum per request
- **Same-day model sunset**: In the same July 30, 2026 update, Runway discontinued Gen-3 Alpha Turbo (`gen3a_turbo`) and Gen-4 Aleph (`gen4_aleph`) from the API, directing developers to Gen-4.5 or Gen-4 Turbo for video generation and Aleph 2.0 for video editing
- **Context**: This follows Runway's July 23, 2026 launch of Runway Media Router, which already listed ElevenLabs as one of the third-party model providers it can route audio requests to — this update gives Eleven v3 specifically a first-class, directly callable endpoint rather than only being reachable through the router

## What happened next

- Developers can call Eleven v3 immediately through the existing text-to-speech endpoint on Runway Dev (dev.runwayml.com) using their current API credentials
- Full technical details, including request parameters and audio tag syntax, are published in Runway's API changelog and developer documentation
- No separate ElevenLabs account or API key is required to use the model through Runway's endpoint
