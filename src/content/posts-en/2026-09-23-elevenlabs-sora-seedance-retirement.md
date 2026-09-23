---
title: "ElevenLabs Loses Sora 2 as OpenAI Retires the API, Flags Seedance 1.5 Pro Deprecation"
description: "ElevenLabs removed Sora 2 and Sora 2 Pro from its Image & Video model picker as OpenAI discontinues the Sora API, and set a November 11 shutdown date for ByteDance's Seedance 1.5 Pro."
pubDate: 2026-09-23
category: elevenlabs
type: news
tags: [ElevenLabs, Sora2, OpenAI, Seedance, ByteDance, VideoGeneration]
source: https://elevenlabs.io/docs/changelog
draft: false
importance: medium
---

ElevenLabs' official changelog confirmed on September 23, 2026, that OpenAI is discontinuing the Sora API on September 24, forcing ElevenLabs to pull Sora 2 and Sora 2 Pro from its Image & Video tool. The same update set a retirement date for ByteDance's Seedance 1.5 Pro.

## Details

- **Sora 2 and Sora 2 Pro retired**: both models are removed from ElevenLabs' Image & Video model picker and stop generating once OpenAI shuts down the Sora API on September 24, 2026
- **Existing work preserved**: generations already made with Sora nodes remain available in a user's history, but Flows and templates that reference a Sora node must be switched to another video model — ElevenLabs points users to Gemini Omni 1.1 Flash — before they can run again
- **Seedance 1.5 Pro deprecated**: ByteDance is retiring this model on November 11, 2026; it is no longer offered for new generations and will stop working entirely on that date
- **Migration path**: ElevenLabs is directing Seedance 1.5 Pro users toward Seedance 2.0 models ahead of the shutdown

## What happened next

Both changes originate from decisions made by the underlying model providers — OpenAI and ByteDance — rather than ElevenLabs itself, underscoring that ElevenLabs' Image & Video tool is a routing layer over more than 50 third-party and partner models rather than a single proprietary pipeline. Anyone with Flows or templates built on Sora nodes needs to migrate immediately, since those workflows stop functioning the day after this changelog entry; Seedance 1.5 Pro users have until mid-November before the same fate applies to their pipelines.
