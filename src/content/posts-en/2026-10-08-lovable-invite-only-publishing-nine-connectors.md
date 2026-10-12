---
title: "Lovable Adds Invite-Only Publishing, Nine New Data Connectors, and a Loom Chat Connector"
description: "Lovable shipped invite-only app publishing for Free and Pro plans, nine new connectors including Zendesk, Neon, MotherDuck, and Oracle Autonomous AI Database, a Loom chat connector that reads video transcripts and comments, and removed the upfront design-direction picker for open-ended prompts."
pubDate: 2026-10-08
category: lovable
type: news
tags: [Lovable, Connectors, Publishing, DeveloperTools]
source: https://docs.lovable.dev/changelog
draft: false
importance: medium
---

Lovable shipped a cluster of changelog updates on October 8, spanning publishing controls, nine new app/chat connectors, and a change to how new projects start.

## Details

- **Invite-only publishing**: Free and Pro users can now publish an app to an invite-only audience, choosing "Invite only" in the publish dialog and adding workspace members by name or outside collaborators by email; only invited people, the project owner, workspace owners, and anyone the project is shared with directly can access it — publishing to an entire workspace or to groups still requires a Business or Enterprise plan
- **Nine new connectors**: Zendesk (read/create/update support tickets, look up users and organizations, read help center articles), Neon (read/write a Postgres database via SQL), MotherDuck (run DuckDB SQL on MotherDuck databases and shares), Oracle Autonomous AI Database (run SQL including Oracle Fusion ERP/HCM data), IBM Db2 (run SQL on Db2 on Cloud), Qlik Cloud (browse apps, export chart/table data, ask Insight Advisor questions, start reloads), Omni (query topics/measures and draw charts), and Metabase (run saved questions and custom queries)
- **Loom chat connector**: Lovable can now read a Loom video's transcript, AI summary, and comments while building, so users can paste a Loom link into project chat to show a bug or idea instead of describing it
- **Removed design-direction picker**: Lovable no longer shows three design directions before building a visually open-ended prompt; it now builds the look directly from the description and still asks about color, typography, and layout when a prompt leaves them open — older chats keep whichever direction was already picked, just without the preview

## What happened next

The nine-connector batch continues Lovable's rapid expansion of its data and app integration surface (following Klaviyo, Excalidraw+, and Databricks OAuth earlier in October), while invite-only publishing extends access control to lower-tier plans that previously only had fully public or fully workspace-gated options.
