---
title: "Antigravity 2.27.0 adds Markdown previews and overview sections in new side panel tabs"
description: "Antigravity App 2.27.0 shows a conversation's overview sections in new side panel tabs and renders Markdown code blocks as previews by default. It also fixes 14 issues, including Auto mode approval prompts for subagents."
pubDate: 2026-10-26
category: antigravity
type: news
tags: [Antigravity, Release, Markdown, Side Panel]
source: https://antigravity.google/changelog
draft: false
importance: low
---

Antigravity App v2.27.0 was released on October 26, 2026. The headline change is a set of new side panel tabs that surface a conversation's overview sections and render Markdown code blocks as previews.

## Details

- **Side panel tabs:** New tabs show the conversation's overview sections, with documents and artifacts listed first.
- **Markdown previews:** Markdown code blocks render as previews by default, with a toggle to view the raw source.
- **Other improvements:** Better performance in long conversations; disabled plugins show an Enable button on their details page; search boxes in Customizations have a clear button.
- **Auto mode:** Subagents and custom agents no longer ask for approval on every command outside the sandbox, only on risky ones.
- **Rendering fixes:** Images and videos with relative file paths display correctly; copied Mermaid diagrams and some SVGs are higher resolution; Copy Image works on SVG artifacts; Mermaid diagrams appear in PDF exports; nested Markdown code blocks no longer break the rest of a response; text between shell variables such as $HOME is no longer rendered as math.
- **Session and settings fixes:** Startup no longer flashes the chat or sign-in screen; an invalid saved session no longer blocks sign-in; telemetry and marketing email settings no longer revert after a slow server response.
- **Plugins and UI fixes:** Plugin install or update right after a Marketplace update no longer fails; plugins listing skills as a single folder path load correctly; inline HTML previews refresh when the agent changes the file; the model selector usage list no longer jumps during quota refresh; long words in question prompt headers no longer overflow.

## What happened next

The release is mostly polish, following the 2.26 notification and prompt changes. The Auto mode fix is the most practical item for people running subagents, since fewer prompts should interrupt long runs. Whether further side panel tabs are planned is undisclosed.
