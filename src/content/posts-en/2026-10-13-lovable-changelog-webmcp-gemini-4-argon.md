---
title: "Lovable Adds WebMCP Browser-Agent Tools, Gemini 4 Argon Support, and Postgres Extension Limits"
description: "Lovable's October 13 changelog lets in-browser AI agents act on published apps via WebMCP, adds Google's Gemini 4 Argon model for AI features, lets teams approve all tools from a chat connector at once, documents supported PostgreSQL extensions, and adds settings search."
pubDate: 2026-10-13
category: lovable
type: news
tags: [WebMCP, Gemini4Argon, PostgreSQL, Connectors, ProductUpdate]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable's October 13, 2026 changelog opens published apps to in-browser AI agents, adds Google's newly released Gemini 4 Argon model for app AI features, and ships several workspace and database management refinements.

## Details

- **WebMCP for browser agents**: with agent integrations enabled, Lovable adds WebMCP tools so an in-browser AI agent can act on the page a person has open, using their own signed-in session; destructive or payment actions are added only on request
- **Gemini 4 Argon model support**: Google's `google/gemini-4-argon` is now available for an app's AI features, accepting text, image, audio, and video input at a premium price
- **Bulk tool approval for chat connectors**: teams can choose to always allow every tool from a chat connector, including tools added later, configurable from Connectors
- **Supported PostgreSQL extensions documented**: Lovable Cloud supports a fixed set of extensions such as `pg_cron`, `pg_net`, `vector`, and `postgis`; other `CREATE EXTENSION` requests are refused and Lovable falls back to plain SQL
- **Settings search**: the workspace settings sidebar search now finds individual settings and opens them directly

## What happened next

Adding WebMCP support is the more consequential item here: it extends Lovable-built apps beyond conversational AI inside Lovable's own editor, letting external in-browser agents operate the published app itself through a user's existing session. Paired with same-day support for Gemini 4 Argon — a newly released multimodal model — the update keeps Lovable's AI feature stack current while nudging published apps toward an agent-operable web, consistent with the broader industry push toward agent-accessible interfaces.
