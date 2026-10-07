---
title: "Lovable Adds Lyria 3 Music Generation, beehiiv/Ramp Connectors, and Git Restore"
description: "Lovable's October 5 changelog brings Google's Lyria 3 music-generation models to app AI features, adds beehiiv and Ramp as connectors, and introduces automatic backups that let owners restore work after a Git repository push overwrites it."
pubDate: 2026-10-05
category: lovable
type: news
tags: [Lovable, Lyria, Git, beehiiv, Ramp, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's October 5, 2026 changelog adds Google's Lyria 3 music-generation models for in-app AI features, two new connectors in beehiiv and Ramp, and a safety net that restores project work after a Git repository push overwrites it.

## Details

- **Lyria 3 music models**: two new Google models are now available for an app's AI features — Lyria 3 Clip Preview, which generates roughly 30-second clips, and Lyria 3 Pro Preview, which generates tracks up to about 184 seconds; both accept text or image prompts and support vocal or instrumental output, with credits charged per completed track
- **beehiiv connector**: lets apps manage newsletter subscribers, publish posts, and save drafts for newsletter workflows, available via Connectors
- **Ramp connector**: provides access to business transactions, card management, spending limits, and spend data, aimed at building spend-tracking dashboards
- **Git push restore**: Lovable now creates a backup whenever a push to a connected Git repository overwrites project work; owners can go to Project settings → Git to either restore the saved Lovable work or keep the repository's version, with restored work syncing back to the repository or to a `lovable-sync` branch

## What happened next

The Git restore feature addresses a real failure mode for teams syncing Lovable projects with external repositories, where a careless force-push could previously wipe out in-progress work with no recovery path. Paired with the Lyria 3 rollout, which extends Lovable's AI-feature model catalog from text and image into music generation, the update reflects Lovable's continuing push to widen both the creative and the safety surface of its platform.
