---
title: "ElevenLabs adds TTS audio effects, voice collections API and ticket merging"
description: "ElevenLabs' Oct 18-21 changelog adds an audio_effects option for Text to Speech and Text to Dialogue, a voice collections API, realtime turn prediction for Speech to Text and ticket merging for agents."
pubDate: 2026-10-21
category: elevenlabs
type: news
tags: [ElevenLabs, TTS, API, Agents]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabs' changelog for October 18-21, 2026 lists updates across Text to Speech, Speech to Text, Voices and its ElevenAgents platform, led by a new audio effects option for generated speech.

## Details

- **Audio effects:** Text to Speech and Text to Dialogue accept an `audio_effects` object covering filter presets, distance, reverb, background noise and panning. A new catalog endpoint lists the valid IDs. Effects do not change request cost.
- **Realtime Speech to Text:** the WebSocket adds a `turn_prediction` commit strategy, which commits a segment when the model predicts the speaker has finished.
- **Voice collections:** collections can be created, listed, updated and deleted via the API, and voices can be added or removed (six new endpoints).
- **ElevenAgents:** up to 50 open tickets from the same agent can be merged into one; workflow end nodes accept an `outcome` of success or failure; new agents have call queueing on by default; `tool_ids_strict` makes an overridden tool list the complete set.
- **SDKs:** JavaScript and Python SDKs v2.72.0 and CLI v1.5.0 add the new options.

## What happened next

Built-in effects mean developers can shape the sound of generated speech without a separate audio-processing step, and turn prediction targets lower-latency voice agents. The changelog does not give further detail on how the effects sound or how accurate turn prediction is.
