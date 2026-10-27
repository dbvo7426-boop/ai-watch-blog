---
title: "Gemini API turns on request storage by default for new paid-tier Generate Content projects"
description: "New paid-tier projects using the Gemini Generate Content API now store requests by default, matching the Interactions API. Existing projects keep their current setting."
pubDate: 2026-10-26
category: gemini
type: news
tags: [Gemini API, Logging, Developers]
source: https://ai.google.dev/gemini-api/docs/changelog
draft: false
importance: low
---

The Gemini API changelog for October 26, 2026 says request storage is now on by default for new paid-tier projects that use the Generate Content API.

## Details

- **Scope:** new paid-tier projects calling `generateContent`, `streamGenerateContent` and `batchGenerateContent`.
- **New default:** requests are stored with `store=true`, matching the existing behavior of the Interactions API.
- **Existing projects:** keep their current setting.
- **Opt out per request:** set `store=false` on individual requests.
- **Opt out per project:** turn off Generate Content API logging in the Settings panel of the Logs and Datasets dashboard in AI Studio.
- **Retention period:** not stated in the changelog entry; it points to the Logs and datasets documentation.

## What happened next

The change aligns the two main Gemini API surfaces on the same logging default, which makes stored requests available in the Logs and Datasets dashboard without extra setup. Teams with data-handling requirements on new projects should check the setting and use `store=false` where needed. No follow-up announcements had been published at the time of writing.
