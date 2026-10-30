---
title: "ElevenLabs adds a fast LLM tier for agents, clone strength for v4 voices, and expiring API keys"
description: "The October 26 ElevenLabs changelog adds a fast service tier for ElevenAgents LLMs, a clone_strength control for v4 Professional Voice Clones, knowledge base crawl exclusions, and service account API keys that expire."
pubDate: 2026-10-26
category: elevenlabs
type: news
tags: [ElevenLabs, ElevenAgents, Text to Speech, API, Voice Cloning]
source: https://elevenlabs.io/docs/changelog/2026/10/26
draft: false
importance: medium
---

ElevenLabs shipped several developer-facing changes on October 26: a faster, pricier LLM service tier for ElevenAgents, a new control over how closely v4 Professional Voice Clones follow their training samples, website crawl exclusions for agent knowledge bases, and expiring service account API keys.

## Details

- **Fast LLM service tier:** ElevenAgents can run supported LLMs on a `fast` tier that trades a per-token price premium for higher throughput and lower latency. Set `service_tier` to `fast` in the agent prompt configuration via Update agent. `available_service_tiers` from List LLMs shows which tiers a model supports. The default remains `standard`, and the LLM usage calculator accepts `service_tier` to estimate the cost difference. The premium amount is not stated in the changelog.
- **Clone strength for v4 voices:** Text to Speech and Text to Dialogue accept `clone_strength` (0 to 1) for a Professional Voice Clone fine-tuned for a v4 model, set in `voice_settings` or `settings`. The recommended value for most use cases is 0. On Text to Dialogue, it now decides whether a v4 PVC runs as a PVC or an IVC, and `use_pvc_as_ivc` is deprecated.
- **Expiring service account API keys:** Pass `expires_at_unix` when creating or updating a key, or choose Expire after in the dashboard. Expiry must be between 15 minutes and 90 days ahead; omit it for a key that never expires.
- **Knowledge base crawl exclusions:** Up to 50 `exclude_patterns` can be passed to Create crawl job; matching URLs are skipped even if they match the crawl pattern.
- **Other changes:** Slack, Telegram, Custom Channel and Intercom integrations leave alpha; Slack agents can keep replying in a thread; `claude-sonnet-5-5` is selectable as an analysis LLM; Voice Changer moves to `/v1/voice-changer/{voice_id}` with the old speech-to-speech paths deprecated; Realtime Speech to Text accepts silence thresholds down to about 0.19 seconds; legacy `/v1/dubbing` endpoints are deprecated; Business plans on current pricing pay about 17% fewer credits per image and per video second.

## What happened next

The fast tier follows a pattern seen across LLM providers: latency is sold as a priced option, which matters for voice agents where response delay is felt directly. Expiring keys and the cleaner PVC/IVC control are practical hardening and quality tools for production deployments. Several deprecations (Voice Changer paths, legacy dubbing endpoints, `use_pvc_as_ivc`) mean API users should check their integrations; removal dates are undisclosed.
