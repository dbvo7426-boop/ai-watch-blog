---
title: "Devin's Voice Calls Move to a Live Speech Model, Cutting Straight to Call Controls"
description: "Cognition's September 16 Devin release notes upgrade voice calls to run on a live speech model, dropping users straight into call controls with a ringtone while connecting, alongside session-wake-on-typing, always-on security review scans, and other interface refinements."
pubDate: 2026-09-16
category: devin
type: news
tags: [Devin, Cognition, VoiceMode, ProductUpdate]
source: https://docs.devin.ai/release-notes/overview
draft: false
importance: medium
---

Cognition's September 16, 2026 release notes for Devin upgrade voice calls to run on a live speech model, replacing the earlier, more turn-based voice mode with something closer to a real phone call.

## Details

- **Live speech model for calls**: voice calls with Devin now run on a live speech model instead of the prior voice pipeline, aiming for more natural, lower-latency back-and-forth conversation
- **Faster call start**: starting a call now drops users straight into the call controls, with a ringtone playing while the connection is established, instead of a loading state
- **Sessions wake as you type**: sessions begin activating as soon as a user starts typing in the composer, so Devin is typically already spinning up by the time a message is sent
- **Formatting-safe copy**: copying messages now preserves formatting when pasted into email or documents, while still pasting as Markdown into code editors
- **Configurable send shortcut**: users can choose whether Enter or Cmd/Ctrl+Enter sends a message, under Settings → Personal → Send shortcut
- **Security scans now mandatory**: Devin Review always checks for security bugs on every review; the previous optional "Security scan" toggle has been removed
- **Other interface refinements**: skipped questions now display what was actually asked instead of a generic "no answer" label, sessions with VM issues show a direct "Reboot VM" action in the sidebar, and session dialogs were restyled to match the rest of the app

## What happened next

The live-speech upgrade builds on the voice mode Cognition had already shipped for hands-free interaction with Devin, moving it toward something closer to a natural phone call rather than a request-and-wait exchange. Paired with sessions that start warming up the moment a user begins typing, the changes point at Cognition continuing to shave latency out of every step between a developer's intent and Devin actually starting work. Full details are in Devin's release notes at docs.devin.ai/release-notes/overview.
