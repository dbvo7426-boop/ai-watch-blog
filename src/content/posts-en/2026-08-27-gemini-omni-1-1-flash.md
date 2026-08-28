---
title: "Gemini Omni 1.1 Flash Adds Scene Extension, Frame Control, and 4K Upscaling"
description: "Google released Gemini Omni 1.1 Flash, giving developers finer control over AI video generation with 40-second scene extension, first/last frame targeting, fast 360p drafts, and 4K upscaling."
pubDate: 2026-08-27
category: gemini
type: news
tags: [Gemini, Google, GeminiOmni, VideoGeneration, GoogleAIStudio]
source: https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-omni-1-1-flash/
draft: false
importance: medium
---

Google released Gemini Omni 1.1 Flash on August 27, 2026, an updated version of its multimodal video generation model that gives developers and creators substantially more control over the output than earlier Omni versions, including longer scene extension, frame-level targeting, and a cheaper draft mode for iteration.

## Details

- **Scene extension to 40 seconds**: the model can now extend a video in 10-second increments, analyzing up to 10 seconds of prior footage as context instead of just the final second, for better narrative consistency
- **First/last frame control**: creators can specify starting and ending keyframes and let the model generate a smooth transition between them, useful for camera moves, zooms, and seamless loops
- **360p draft mode**: generates lightweight previews up to 60% faster and at roughly a third of the cost of 720p, aimed at fast iteration during storyboarding
- **4K upscaling**: final outputs can be upscaled to 1080p or 4K for production use
- **Video references**: supports referencing up to three seconds of existing video as multimodal input to maintain visual and character consistency
- **Availability**: live now in Google AI Studio and the Gemini Enterprise Agent Platform via API; scene extension is rolling out to Google Flow and the Gemini app for Plus, Pro, and Ultra subscribers globally
- **Partner feedback**: Figma Weave, GMI Cloud, and Runway all provided early praise, with Runway's Jamie Umpherson calling it "another way for our users to move quickly between ideas"

## What happened next

The update pushes Gemini's video tools closer to parity with dedicated editing workflows, giving professional creators the kind of directional control (start/end frames, targeted extension) that previously required more manual editing after generation. With 4K output and a cheap draft tier, Google is positioning Omni 1.1 Flash for both rapid prototyping and finished production work within the same model.
