---
title: "Google DeepMind Ships Gemini Omni 1.1 Flash: Scene Extension to 40 Seconds, Frame Interpolation, and 4K"
description: "Google DeepMind made Gemini Omni 1.1 Flash generally available on August 27, 2026, adding scene extension up to 40 seconds, first/last-frame interpolation, cheap 360p drafts, and 4K upscaling — the newest step in Google's video generation lineup alongside Veo 3.1."
pubDate: 2026-08-27
category: veo
type: news
tags: [Google, GoogleDeepMind, GeminiOmni, Veo, GeminiAPI, Flow, VideoGeneration]
source: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
draft: false
importance: high
---

On August 27, 2026, Google DeepMind released Gemini Omni 1.1 Flash, the production-ready (GA) version of the video generation and editing model it introduced at Google I/O 2026. While Veo 3.1 remains the model Google lists as its "leading video generation model" on the Veo page, Omni has become the line where Google's newest video features are landing, and 1.1 Flash focuses on giving developers and creators more control over longer clips.

## Details

- **Model ID**: `gemini-omni-1.1-flash`, available via the Gemini API (Interactions API) in Google AI Studio and, for enterprises, the Gemini Enterprise Agent Platform
- **Scene extension**: the model reads up to 10 seconds of prior context (previous models used only the final second) and extends videos in 10-second increments up to a cumulative 40 seconds
- **First/last-frame interpolation**: generates continuous video between two keyframes via the `image_to_video` task — Google suggests camera orbits, zoom transitions, and seamless loops
- **360p drafts**: low-resolution previews generate up to 60% faster than 720p and cost about one third as much, aimed at storyboarding and rapid iteration
- **Resolution control**: a new `resolution` parameter supports 360p, 720p (default), 1080p, and 4K; 1080p and 4K are produced by upscaling
- **Video references**: up to three seconds of video can be included as multimodal input to keep visual context and characters consistent
- **Consumer availability**: rolled out the same day in Google Flow to Google AI Plus, Pro, and Ultra subscribers globally; scene extension also came to the Gemini app for the same tiers
- **Preview sunset**: the earlier `gemini-omni-flash-preview` endpoint was scheduled for deprecation on September 30, 2026
- **Partners**: Adobe has integrated Gemini Omni Flash into Adobe Firefly; Figma Weave, GMI Cloud, and Runway are cited as users
- **Veo relationship**: the announcement does not mention Veo at all; Google has not announced a Veo 4, and the Veo 3.1 family (including Veo 3.1 Lite) remains available in the Gemini API

## What happened next

Gemini Omni 1.1 Flash makes clear where Google's video generation momentum sits in 2026: rather than a Veo 4, the new capabilities — conversational editing, multi-step extensions, and keyframe interpolation — are arriving under the Gemini Omni name, while Veo 3.1 continues as the established text/image-to-video model. With Sora discontinued, Google now competes with Kuaishou's Kling 4.0 (30-second single pass) and ByteDance's Seedance on clip length and control. Omni's 40-second extension ceiling and cheap 360p drafts are Google's answer, and Adobe's Firefly integration shows the model reaching creative tools outside Google's own apps. Whether Google eventually rebrands or retires the Veo line in favor of Omni is the open question to watch.
