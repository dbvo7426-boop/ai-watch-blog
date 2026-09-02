---
title: "Runway Unveils Solaris, a Real-Time \"Interface World Model\" That Generates Apps Frame by Frame"
description: "Runway's first Interface World Model renders interactive software interfaces live, with no underlying code, DOM, or JavaScript — built on top of the Gen-4.5 video model."
pubDate: 2026-08-31
category: runway
type: news
tags: [Runway, Solaris, InterfaceWorldModel, Gen-4.5, RealTimeGeneration]
source: https://runway.com/news/research/introducing-solaris
draft: false
importance: high
---

Runway announced Solaris on August 31, 2026, describing it as the first entry in a new category it calls "Interface World Models": AI systems that generate interactive operating-system-style interfaces frame by frame in real time, with no code running underneath the visuals a user sees.

## Details

- **No code, no DOM**: the generated image itself is the entire application — there is no hidden HTML, CSS, or JavaScript layer; the model renders and handles interaction jointly
- **Three defining traits** Runway highlights: it is entirely visual, "living and responsive" (interfaces continue to evolve rather than sitting static between interactions, e.g. "reflections shift with the lighting, and objects respond naturally as they're manipulated"), and open-ended (it isn't locked to predefined workflows)
- **Built on Gen-4.5**: Solaris is built on top of Runway's Gen-4.5 video generation model, adding three technical pieces — interaction learning (conditioning frame generation on clicks/drags/edits), real-time generation (converting standard diffusion into autoregressive, low-step frame generation trained on its own outputs), and hybrid reasoning (a language model plans scene evolution while the world model handles rendering)
- **User study results**: in a study comparing Solaris to Claude Opus 5-coded interfaces across 30 examples and 250 participants, Solaris was preferred 61% to 24% for following instructions, and 71% to 21% for natural in-scene behavior
- **Acknowledged limitations**: legible text rendering is still unreliable, the system currently needs anchoring via provided starting frames for trustworthiness, long open-ended sessions strain coherence, and accessibility-API integration remains unresolved
- **Availability**: no public launch yet — Runway says it is "working with key partners to launch Solaris publicly" and is taking early-access applications through a form on its site

## What happened next

Runway framed Solaris as a preview of a possible shift where software stops being a fixed, coded artifact and instead becomes a generated, per-user visual experience — citing hypothetical examples like storefronts that adapt per visitor or tutorials that adjust to a user's progress in real time. For now the technology remains in a partner/early-access phase rather than a general release, and Runway has not given a timeline for wider availability.
