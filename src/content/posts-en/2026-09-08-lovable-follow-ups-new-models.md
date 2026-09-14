---
title: "Lovable Lets You Message It Mid-Task and Adds GPT-6 Astra and Gemini 3.8 Flash as Model Options"
description: "Lovable's September 8 changelog adds mid-task follow-up messages that replace the old message queue, lets Lovable sign in to test pages behind a login, and adds GPT-6 Astra, Gemini 3.8 Flash, and Gemini 3.5 Transcribe as selectable models."
pubDate: 2026-09-08
category: lovable
type: news
tags: [Lovable, ProductUpdate, GPT-6Astra, Gemini]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable shipped several changelog updates on September 8, 2026, covering how users interact with Lovable mid-task, testing of login-protected pages, and new model options.

## Details

- **Follow-ups while Lovable works**: users can now send Lovable a message while it's still working on a previous request, and it will take the new input into account; this replaces the old message-queue behavior, which simply held messages until the current task finished
- **Sign-in for protected test pages**: when checking its own work, Lovable can now sign in and test pages that sit behind an app's login screen, rather than being limited to publicly accessible pages
- **New model options**: GPT-6 Astra, Gemini 3.8 Flash, and Gemini 3.5 Transcribe are now available as selectable models for app features
- **Remix behavior change**: project files no longer copy over automatically when a project is remixed — remixed projects now receive code only by default

## What happened next

The mid-task follow-up change is the most user-facing of the batch, removing a common friction point where builders had to wait for a task to finish before redirecting it. Paired with the new model additions, the update keeps Lovable's model lineup current with the latest releases from OpenAI and Google just as those models became broadly available elsewhere. Full entries are listed in Lovable's official changelog at docs.lovable.dev/changelog.
