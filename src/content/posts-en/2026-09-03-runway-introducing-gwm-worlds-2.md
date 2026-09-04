---
title: "Runway Previews GWM Worlds 2, an Interactive World Model With Live Audio and Unlimited Duration"
description: "Runway's research preview turns video and audio generation into a steerable, real-time simulation — 720p/24fps video with 48kHz audio, first- and third-person navigation, and no fixed length limit."
pubDate: 2026-09-03
category: runway
type: news
tags: [Runway, GWMWorlds2, WorldModel, RealTimeGeneration, ResearchPreview]
source: https://runway.com/research/introducing-gwm-worlds-2
draft: false
importance: high
---

Runway unveiled GWM Worlds 2 on September 3, 2026, a research preview that turns its video and audio generation technology into an interactive, real-time simulation: define a world's environment, subjects, visual style, physical rules, and ambience, then steer it live with text commands and camera movement.

## Details

- **Technical specs**: generates 720p video at 24 frames per second with synchronized 48,000 Hz audio, running on an autoregressive diffusion architecture with causal decoders and a sliding KV-cache for real-time output
- **WorldPrompt control system**: a two-layer input combining persistent world context (scene description, subject attributes, behavioral rules) with a timestamped event stream for actions, speech, and camera moves
- **Navigation and interaction**: supports first-person and third-person movement (walking, driving, riding), independent control of camera and subject, character speech with lip-sync and tone control, and scene/object interactions
- **Multiplayer and agent control**: multiple users can take role-based control of a single world, and the system also accepts agent-driven control, aimed at robotics and embodied-agent simulation use cases
- **No fixed duration**: unlike the original bidirectional GWM Worlds, this version isn't capped to a preset length and can keep generating indefinitely
- **Continuing from existing footage**: the model can prefill generation from a real video clip and continue it as a live, interactive world while preserving visual and audio consistency
- **Availability**: research preview only — access requires submitting a request form on Runway's site, with no public launch date given

## What happened next

GWM Worlds 2 extends the GWM Worlds line Runway first showed in December, adding generated audio and considerably richer subject and scene control on top of the earlier bidirectional model. Runway has not announced a broader release; for now the technology remains gated behind an early-access request form aimed at partners and researchers, continuing the pattern set by Solaris just days earlier of previewing ambitious real-time generation research well ahead of any general availability.
