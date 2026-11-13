---
title: "ElevenLabs releases Scribe v3 and Scribe v3 Live speech-to-text models"
description: "Scribe v3 is for recorded audio and Scribe v3 Live for real-time transcription. ElevenLabs reports 27% fewer word errors than Scribe v2 on FLEURS for Scribe v3. The same update adds a Unity SDK for ElevenAgents."
pubDate: 2026-11-09
category: elevenlabs
type: news
tags: [ElevenLabs, Scribe v3, Speech to Text, ElevenAgents]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabs added two models to its Speech to Text API in its November 9, 2026 changelog.

## Scribe v3 and Scribe v3 Live

- **Scribe v3:** For recorded audio. It is described as having 27% fewer word errors than Scribe v2 on the FLEURS benchmark, and it adds the `numbers_format` and `secondary_language_codes` options.
- **Scribe v3 Live:** For real-time transcription. It adds turn prediction, a multilingual mode and a keyterm library of up to 10,000 terms.
- **Scribe v2:** Both models succeed Scribe v2 models, which remain available.

## ElevenAgents updates

- **Unity SDK:** The `io.elevenlabs.agents` package starts at v0.1.0. Desktop, WebGL and the Unity Editor are supported, while iOS, Android and XR are in beta. It requires Unity 6.3 LTS or later.
- **Workflows as code:** A `Workflow` builder in the Python and JavaScript SDKs (v2.77.0) lets you build ElevenAgents workflows in code.
- **Hosted MCP:** 24 new tools let MCP clients inspect agents, covering analytics, configuration, insights, alerts and conversation counts. Clients can also find and replace or append text in an agent's system prompt or first message, staged in a branch draft.

Smaller changes include an `auth.enable_auth` option for Speech Engine, Studio aspect ratios of 3:4 and 4:3, and per-plan concurrency limits for sound effects.
