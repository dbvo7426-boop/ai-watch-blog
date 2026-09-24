---
title: "Midjourney Sharpens Targeted Edits, Seamless Tiling, and Live Style Previews"
description: "Midjourney's September 24 update makes inpainting/outpainting change only the selected pixels, fixes visible seams in --tile output for V8.1/V8.2, and lets users preview a prompt across styles before generating."
pubDate: 2026-09-24
category: midjourney
type: news
tags: [Midjourney, Editing, Inpainting, Tiling, Styles]
source: https://updates.midjourney.com/edit-updates-thumbnail-previews-and-more/
draft: false
importance: medium
---

Midjourney shipped a cluster of editing and interface improvements on September 24, 2026, focused on making targeted image edits more precise, fixing a long-standing tiling artifact, and letting users preview a prompt across styles before committing to a generation.

## Details

- **Targeted inpainting/outpainting**: the edit model now changes only the pixels a user has actually selected, so repeated, localized edits no longer degrade the rest of the image the way earlier edit passes could
- **Seamless `--tile` for V8.1/V8.2**: the tile parameter previously left visible seams where one tile met the next; Midjourney says tiled output for model versions V8.1 and V8.2 now blends invisibly across tile boundaries
- **Live style previews**: the Styles sidebar can now show thumbnail previews of what the current prompt would look like rendered in liked and featured styles, with a "Live previews" toggle; clicking a thumbnail generates using that style
- **Fast-model experiments**: Midjourney is testing faster underlying models for these preview and interface features on alpha.midjourney.com

## What happened next

The update lands alongside a separate alpha-site changelog posted the same week covering default parameter presets, a redesigned Create feed, and expanded Korean-language support, suggesting Midjourney is running two parallel release tracks — one for the core editing/generation pipeline and one for alpha-site interface experiments. For users, the practical payoff is fewer wasted regenerations: targeted edits should hold up better across multiple passes, tiled patterns should no longer need manual touch-up at the seams, and style choices can be checked before spending a generation on them.
