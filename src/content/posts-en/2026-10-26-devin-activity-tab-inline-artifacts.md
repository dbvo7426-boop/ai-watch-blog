---
title: "Devin Merges Progress and Shell Into an Activity Tab and Adds Inline Artifacts"
description: "Devin's October 26, 2026 release notes combine the Progress and Shell tabs into one searchable Activity view and let HTML artifacts render inline in messages. The release also adds Devin Review PR cards and new Terraform on-call resources."
pubDate: 2026-10-26
category: devin
type: news
tags: [Devin, Activity, Artifacts, Devin Review, Terraform]
source: https://docs.devin.ai/release-notes
draft: false
importance: medium
---

Devin's October 26, 2026 release notes describe a redesigned session view. The Progress and Shell tabs are merged into a single Activity view, and Devin's HTML artifacts can now be embedded directly in a message.

## Details

- **Activity tab:** Progress and Shell are combined, with search, type filters and a pinnable details drawer. Rows fold under the user message they respond to.
- **Inline artifacts:** HTML artifacts such as reports, dashboards, tables and charts use a new component kit that matches the app's design system and can be embedded in a message.
- **Transcript and composer:** Blocked prompts show a card explaining why. Long shell commands are clipped to a preview that expands on click. Users can star a default mode in the capability picker, copy a Devin's link from its rail menu, and keep Devin awake while a session wakes.
- **Recordings:** The session recording viewer opens on the video by default.
- **Slack:** Edited Slack messages show an "(edited)" footer, and the "Channel for repository updates" dropdown is searchable.
- **Devin Review:** Hovering a PR link shows a PR card, even when no session you can view owns it. The session header's PR chip lists referenced PRs, and PR pills are colored by state.
- **Terraform:** The provider adds a `devin_oncall_responder` resource and a `devin_oncall_schemas` data source.
- **Availability and pricing:** undisclosed in the release notes.

## What happened next

The release is mostly interface consolidation: one place to follow what an agent did, and richer output rendered in the conversation. The Terraform additions follow the October 19 general availability of Devin Oncall by making responders manageable as infrastructure code. The source does not give usage data or rollout timing.
