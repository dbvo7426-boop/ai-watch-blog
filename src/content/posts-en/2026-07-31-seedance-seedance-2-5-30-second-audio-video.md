---
title: "ByteDance Seed Launches Seedance 2.5 With 30-Second Audio-Video Generation"
description: "ByteDance Seed announced Seedance 2.5, an audio-video joint generation model that produces 30-second clips in one pass, with up to 50 reference inputs and timestamp-level editing."
pubDate: 2026-07-31
category: seedance
type: news
tags: [Seedance, ByteDance, Video Generation]
source: https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5
draft: false
importance: high
---

On July 31, 2026, ByteDance Seed announced Seedance 2.5, its next-generation audio-video joint generation model. The headline change is length: a single generation now yields a 30-second clip, double the 15 seconds of the previous baseline named in the announcement, with repeated extension for longer videos.

## Details

- **Clip length:** 30-second audio-video clips in one pass. The model page adds that a clip can be extended twice; the blog says multiple rounds of extension can build videos lasting several minutes while keeping characters, environments and pacing consistent.
- **Multimodal references:** Up to 30 images, 10 video clips and 10 audio clips in one generation (50 reference assets in total). It can preserve the look and voice of multiple characters.
- **Reference modes:** A clay-render mode uses textureless 3D models to control spatial layout, poses, motion paths and camera angles. Motion and creative references give finer control over subjects, actions and camera work.
- **Editing:** Timestamp-level control during generation; post-generation edits to characters, actions or plot within specific clips; green-screen editing that adjusts the subject to the new background; camera-perspective editing; reference-based editing.
- **Quality claims:** Better textures, skin and eyes, lighting and color, plus fewer unintended subtitles and background music. These are ByteDance's own claims.
- **Availability at launch:** Rolling out on Jimeng AI and Doubao Pro (select Seedance 2.5 under Video Generation), with API access via BytePlus ModelArk listed as coming soon.
- **Stated limitations:** ByteDance says physical plausibility of complex motion and scene stability when several subjects interact still need improvement.
- **Not stated:** The announcement does not give resolution, frame rate or pricing. Any figures for those in launch-day coverage are not from this post.

## What happened next

The promised API arrived within days: BytePlus published its own availability post on August 6, 2026 (covered in a separate article), and the ModelArk pricing page now lists a Seedance 2.5 model ID. The significance of 2.5 is less raw fidelity than controllability: longer single takes, a large reference budget and timestamp editing target ad, e-commerce and previsualization workflows where a clip must be revised rather than regenerated. The limits ByteDance itself flags, multi-subject interaction and complex physics, are the areas to test before relying on it for production work.
